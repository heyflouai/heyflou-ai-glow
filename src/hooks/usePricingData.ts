import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface PricingSettings {
  id: string;
  currency: string;
  app_addon_price: number;
  custom_base_price: number;
}

export interface OfferPackage {
  id: string;
  vertical: string;
  name: string;
  price: number;
  description: string;
  sort_order: number;
}

export interface AppCatalogItem {
  id: string;
  name: string;
  category: string;
  description: string;
  sort_order: number;
}

export interface GroupedApps {
  name: string;
  apps: { id: string; name: string; description: string }[];
}

export const usePricingSettings = () => {
  return useQuery({
    queryKey: ['pricing-settings'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pricing_settings')
        .select('*')
        .eq('id', 'default')
        .maybeSingle();
      
      if (error) throw error;
      return data as PricingSettings | null;
    },
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });
};

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

export const useAppsCatalog = () => {
  return useQuery({
    queryKey: ['apps-catalog'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('apps_catalog')
        .select('*')
        .order('category', { ascending: true })
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      
      // Group apps by category
      const grouped = (data as AppCatalogItem[]).reduce((acc, app) => {
        const existing = acc.find(g => g.name === app.category);
        if (existing) {
          existing.apps.push({ id: app.id, name: app.name, description: app.description });
        } else {
          acc.push({
            name: app.category,
            apps: [{ id: app.id, name: app.name, description: app.description }],
          });
        }
        return acc;
      }, [] as GroupedApps[]);
      
      return grouped;
    },
    staleTime: 1000 * 60 * 5,
  });
};
