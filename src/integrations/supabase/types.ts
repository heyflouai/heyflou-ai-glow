export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      apps_catalog: {
        Row: {
          app_price: number
          category: string
          created_at: string
          description: string
          id: string
          name: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          app_price?: number
          category: string
          created_at?: string
          description: string
          id: string
          name: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          app_price?: number
          category?: string
          created_at?: string
          description?: string
          id?: string
          name?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          company: string
          consent: boolean
          created_at: string
          email: string
          first_name: string
          id: string
          industry: string
          last_name: string
          message: string | null
          referrer: string | null
          source_page: string
          team_size: string
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
          website: string | null
        }
        Insert: {
          company: string
          consent?: boolean
          created_at?: string
          email: string
          first_name: string
          id?: string
          industry: string
          last_name: string
          message?: string | null
          referrer?: string | null
          source_page: string
          team_size: string
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          website?: string | null
        }
        Update: {
          company?: string
          consent?: boolean
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          industry?: string
          last_name?: string
          message?: string | null
          referrer?: string | null
          source_page?: string
          team_size?: string
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          website?: string | null
        }
        Relationships: []
      }
      intakes: {
        Row: {
          areas_of_interest: string[] | null
          biggest_pain: string | null
          budget_range: string | null
          company: string
          consent: boolean
          country: string | null
          created_at: string
          current_ai_usage: string | null
          email: string
          first_name: string
          goals: string[] | null
          id: string
          industry: string
          last_name: string
          message: string | null
          phone: string | null
          preferred_contact: string | null
          referrer: string | null
          role: string | null
          source_page: string
          team_size: string
          timeline: string | null
          tools_in_use: string[] | null
          utm_campaign: string | null
          utm_medium: string | null
          utm_source: string | null
          website: string | null
        }
        Insert: {
          areas_of_interest?: string[] | null
          biggest_pain?: string | null
          budget_range?: string | null
          company: string
          consent?: boolean
          country?: string | null
          created_at?: string
          current_ai_usage?: string | null
          email: string
          first_name: string
          goals?: string[] | null
          id?: string
          industry: string
          last_name: string
          message?: string | null
          phone?: string | null
          preferred_contact?: string | null
          referrer?: string | null
          role?: string | null
          source_page: string
          team_size: string
          timeline?: string | null
          tools_in_use?: string[] | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          website?: string | null
        }
        Update: {
          areas_of_interest?: string[] | null
          biggest_pain?: string | null
          budget_range?: string | null
          company?: string
          consent?: boolean
          country?: string | null
          created_at?: string
          current_ai_usage?: string | null
          email?: string
          first_name?: string
          goals?: string[] | null
          id?: string
          industry?: string
          last_name?: string
          message?: string | null
          phone?: string | null
          preferred_contact?: string | null
          referrer?: string | null
          role?: string | null
          source_page?: string
          team_size?: string
          timeline?: string | null
          tools_in_use?: string[] | null
          utm_campaign?: string | null
          utm_medium?: string | null
          utm_source?: string | null
          website?: string | null
        }
        Relationships: []
      }
      offer_packages: {
        Row: {
          created_at: string
          description: string
          id: string
          name: string
          price: number
          sort_order: number
          updated_at: string
          vertical: string
        }
        Insert: {
          created_at?: string
          description: string
          id: string
          name: string
          price: number
          sort_order?: number
          updated_at?: string
          vertical: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          name?: string
          price?: number
          sort_order?: number
          updated_at?: string
          vertical?: string
        }
        Relationships: []
      }
      pricing_settings: {
        Row: {
          app_addon_price: number
          created_at: string
          currency: string
          custom_base_price: number
          id: string
          updated_at: string
        }
        Insert: {
          app_addon_price?: number
          created_at?: string
          currency?: string
          custom_base_price?: number
          id?: string
          updated_at?: string
        }
        Update: {
          app_addon_price?: number
          created_at?: string
          currency?: string
          custom_base_price?: number
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
