import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export type VerticalType = 'custom' | 'travel' | 'health';

export interface VerticalSettings {
  id: string;
  currency: string;
  base_price: number;
  default_app_price: number;
}

export interface OfferPackage {
  id: string;
  vertical: string;
  name: string;
  price: number;
  description: string;
  sort_order: number;
}

export interface AppMasterItem {
  id: string;
  name: string;
  category: string;
  description: string;
  sort_order: number;
}

export interface AppPriceOverride {
  id: string;
  vertical: string;
  app_id: string;
  override_price: number;
}

export interface GroupedApps {
  name: string;
  apps: { id: string; name: string; description: string }[];
}

// Fetch vertical settings for a specific vertical
export const useVerticalSettings = (vertical: VerticalType) => {
  return useQuery({
    queryKey: ['vertical-settings', vertical],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('vertical_settings')
        .select('id, currency, base_price, default_app_price')
        .eq('id', vertical)
        .maybeSingle();
      
      if (error) throw error;
      return data as VerticalSettings | null;
    },
    staleTime: 1000 * 60 * 5,
  });
};

// Fetch offer packages for travel/health verticals
export const useOfferPackages = (vertical: 'travel' | 'health') => {
  return useQuery({
    queryKey: ['offer-packages', vertical],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('offer_packages')
        .select('*')
        .eq('vertical', vertical)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data as OfferPackage[];
    },
    staleTime: 1000 * 60 * 5,
  });
};

// Fetch apps master catalog (no pricing info)
export const useAppsMaster = () => {
  return useQuery({
    queryKey: ['apps-master'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('apps_master')
        .select('id, name, category, description, sort_order')
        .order('category', { ascending: true })
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      
      // Group apps by category
      const grouped = (data as AppMasterItem[]).reduce((acc, app) => {
        const existing = acc.find(g => g.name === app.category);
        if (existing) {
          existing.apps.push({ 
            id: app.id, 
            name: app.name, 
            description: app.description,
          });
        } else {
          acc.push({
            name: app.category,
            apps: [{ 
              id: app.id, 
              name: app.name, 
              description: app.description,
            }],
          });
        }
        return acc;
      }, [] as GroupedApps[]);
      
      return grouped;
    },
    staleTime: 1000 * 60 * 5,
  });
};

// Fetch app price overrides for a specific vertical
export const useAppPriceOverrides = (vertical: VerticalType) => {
  return useQuery({
    queryKey: ['app-price-overrides', vertical],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('app_price_overrides')
        .select('id, vertical, app_id, override_price')
        .eq('vertical', vertical);
      
      if (error) throw error;
      
      // Create a map of app_id -> override_price for quick lookup
      const overrideMap = new Map<string, number>();
      (data || []).forEach(override => {
        overrideMap.set(override.app_id, override.override_price);
      });
      return overrideMap;
    },
    staleTime: 1000 * 60 * 5,
  });
};

// Compute the effective price for an app given vertical settings and overrides
export const computeAppPrice = (
  appId: string,
  defaultAppPrice: number,
  overrideMap: Map<string, number>
): number => {
  return overrideMap.has(appId) ? overrideMap.get(appId)! : defaultAppPrice;
};
