export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          phone: string | null
          name: string
          avatar_url: string | null
          location: Json | null
          roles: string[]
          verified: boolean
          kyc_status: 'pending' | 'verified' | 'rejected'
          rating: number
          review_count: number
          language: 'fr' | 'en' | 'so' | 'ff' | 'bm' | 'wo'
          metadata: Json | null
          created_at: string
          updated_at: string
          last_login: string | null
        }
        Insert: {
          id?: string
          email: string
          phone?: string | null
          name: string
          avatar_url?: string | null
          location?: Json | null
          roles?: string[]
          verified?: boolean
          kyc_status?: 'pending' | 'verified' | 'rejected'
          rating?: number
          review_count?: number
          language?: 'fr' | 'en' | 'so' | 'ff' | 'bm' | 'wo'
          metadata?: Json | null
          created_at?: string
          updated_at?: string
          last_login?: string | null
        }
        Update: {
          id?: string
          email?: string
          phone?: string | null
          name?: string
          avatar_url?: string | null
          location?: Json | null
          roles?: string[]
          verified?: boolean
          kyc_status?: 'pending' | 'verified' | 'rejected'
          rating?: number
          review_count?: number
          language?: 'fr' | 'en' | 'so' | 'ff' | 'bm' | 'wo'
          metadata?: Json | null
          created_at?: string
          updated_at?: string
          last_login?: string | null
        }
      }
      equipment: {
        Row: {
          id: string
          owner_id: string
          title: string
          description: string | null
          category: string
          brand: string
          model: string | null
          year: number | null
          condition: 'excellent' | 'good' | 'fair'
          images: string[]
          daily_rate: number
          weekly_rate: number | null
          monthly_rate: number | null
          location: Json
          coordinates: string | null
          available: boolean
          features: string[] | null
          specifications: Json | null
          view_count: number
          favorite_count: number
          booking_count: number
          rating: number
          review_count: number
          status: 'active' | 'inactive' | 'maintenance' | 'sold'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          owner_id: string
          title: string
          description?: string | null
          category: string
          brand: string
          model?: string | null
          year?: number | null
          condition: 'excellent' | 'good' | 'fair'
          images: string[]
          daily_rate: number
          weekly_rate?: number | null
          monthly_rate?: number | null
          location: Json
          coordinates?: string | null
          available?: boolean
          features?: string[] | null
          specifications?: Json | null
          view_count?: number
          favorite_count?: number
          booking_count?: number
          rating?: number
          review_count?: number
          status?: 'active' | 'inactive' | 'maintenance' | 'sold'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          owner_id?: string
          title?: string
          description?: string | null
          category?: string
          brand?: string
          model?: string | null
          year?: number | null
          condition?: 'excellent' | 'good' | 'fair'
          images?: string[]
          daily_rate?: number
          weekly_rate?: number | null
          monthly_rate?: number | null
          location?: Json
          coordinates?: string | null
          available?: boolean
          features?: string[] | null
          specifications?: Json | null
          view_count?: number
          favorite_count?: number
          booking_count?: number
          rating?: number
          review_count?: number
          status?: 'active' | 'inactive' | 'maintenance' | 'sold'
          created_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          equipment_id: string
          farmer_id: string
          start_date: string
          end_date: string
          duration_days: number
          base_cost: number
          deposit_amount: number
          insurance_cost: number
          service_fee: number
          total_cost: number
          status: 'pending' | 'accepted' | 'rejected' | 'active' | 'completed' | 'cancelled'
          payment_status: 'pending' | 'partial' | 'paid' | 'refunded'
          payment_method: string | null
          delivery_method: 'pickup' | 'delivery' | null
          delivery_address: Json | null
          notes: string | null
          cancellation_reason: string | null
          created_at: string
          updated_at: string
          accepted_at: string | null
          completed_at: string | null
        }
        Insert: {
          id?: string
          equipment_id: string
          farmer_id: string
          start_date: string
          end_date: string
          base_cost: number
          deposit_amount?: number
          insurance_cost?: number
          service_fee?: number
          total_cost: number
          status?: 'pending' | 'accepted' | 'rejected' | 'active' | 'completed' | 'cancelled'
          payment_status?: 'pending' | 'partial' | 'paid' | 'refunded'
          payment_method?: string | null
          delivery_method?: 'pickup' | 'delivery' | null
          delivery_address?: Json | null
          notes?: string | null
          cancellation_reason?: string | null
          created_at?: string
          updated_at?: string
          accepted_at?: string | null
          completed_at?: string | null
        }
        Update: {
          id?: string
          equipment_id?: string
          farmer_id?: string
          start_date?: string
          end_date?: string
          base_cost?: number
          deposit_amount?: number
          insurance_cost?: number
          service_fee?: number
          total_cost?: number
          status?: 'pending' | 'accepted' | 'rejected' | 'active' | 'completed' | 'cancelled'
          payment_status?: 'pending' | 'partial' | 'paid' | 'refunded'
          payment_method?: string | null
          delivery_method?: 'pickup' | 'delivery' | null
          delivery_address?: Json | null
          notes?: string | null
          cancellation_reason?: string | null
          created_at?: string
          updated_at?: string
          accepted_at?: string | null
          completed_at?: string | null
        }
      }
      reviews: {
        Row: {
          id: string
          booking_id: string | null
          reviewer_id: string
          target_id: string
          target_type: 'farmer' | 'owner' | 'equipment'
          rating: number
          comment: string | null
          criteria: Json | null
          images: string[] | null
          helpful_count: number
          response: string | null
          response_date: string | null
          status: 'published' | 'hidden' | 'flagged'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          booking_id?: string | null
          reviewer_id: string
          target_id: string
          target_type: 'farmer' | 'owner' | 'equipment'
          rating: number
          comment?: string | null
          criteria?: Json | null
          images?: string[] | null
          helpful_count?: number
          response?: string | null
          response_date?: string | null
          status?: 'published' | 'hidden' | 'flagged'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          booking_id?: string | null
          reviewer_id?: string
          target_id?: string
          target_type?: 'farmer' | 'owner' | 'equipment'
          rating?: number
          comment?: string | null
          criteria?: Json | null
          images?: string[] | null
          helpful_count?: number
          response?: string | null
          response_date?: string | null
          status?: 'published' | 'hidden' | 'flagged'
          created_at?: string
          updated_at?: string
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          equipment_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          equipment_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          equipment_id?: string
          created_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string
          type: 'booking' | 'message' | 'payment' | 'review' | 'financing' | 'equipment' | 'system' | 'promotion'
          title: string
          message: string
          data: Json | null
          read: boolean
          read_at: string | null
          action_url: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: 'booking' | 'message' | 'payment' | 'review' | 'financing' | 'equipment' | 'system' | 'promotion'
          title: string
          message: string
          data?: Json | null
          read?: boolean
          read_at?: string | null
          action_url?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: 'booking' | 'message' | 'payment' | 'review' | 'financing' | 'equipment' | 'system' | 'promotion'
          title?: string
          message?: string
          data?: Json | null
          read?: boolean
          read_at?: string | null
          action_url?: string | null
          created_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          booking_id: string
          payer_id: string
          receiver_id: string
          amount: number
          payment_type: 'deposit' | 'balance' | 'refund'
          payment_method: 'mobile_money' | 'card' | 'bank_transfer' | 'cash'
          provider: string | null
          provider_reference: string | null
          status: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded'
          metadata: Json | null
          completed_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          booking_id: string
          payer_id: string
          receiver_id: string
          amount: number
          payment_type: 'deposit' | 'balance' | 'refund'
          payment_method: 'mobile_money' | 'card' | 'bank_transfer' | 'cash'
          provider?: string | null
          provider_reference?: string | null
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded'
          metadata?: Json | null
          completed_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          booking_id?: string
          payer_id?: string
          receiver_id?: string
          amount?: number
          payment_type?: 'deposit' | 'balance' | 'refund'
          payment_method?: 'mobile_money' | 'card' | 'bank_transfer' | 'cash'
          provider?: string | null
          provider_reference?: string | null
          status?: 'pending' | 'processing' | 'completed' | 'failed' | 'refunded'
          metadata?: Json | null
          completed_at?: string | null
          created_at?: string
        }
      }
      financing_requests: {
        Row: {
          id: string
          applicant_id: string
          equipment_type: string
          amount_requested: number
          purpose: string
          loan_term_months: number
          business_plan: string | null
          documents: Json | null
          credit_score: number | null
          risk_level: 'low' | 'medium' | 'high' | null
          status: 'pending' | 'under_review' | 'approved' | 'rejected'
          reviewed_by: string | null
          review_notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          applicant_id: string
          equipment_type: string
          amount_requested: number
          purpose: string
          loan_term_months: number
          business_plan?: string | null
          documents?: Json | null
          credit_score?: number | null
          risk_level?: 'low' | 'medium' | 'high' | null
          status?: 'pending' | 'under_review' | 'approved' | 'rejected'
          reviewed_by?: string | null
          review_notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          applicant_id?: string
          equipment_type?: string
          amount_requested?: number
          purpose?: string
          loan_term_months?: number
          business_plan?: string | null
          documents?: Json | null
          credit_score?: number | null
          risk_level?: 'low' | 'medium' | 'high' | null
          status?: 'pending' | 'under_review' | 'approved' | 'rejected'
          reviewed_by?: string | null
          review_notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      financing_offers: {
        Row: {
          id: string
          request_id: string
          funder_id: string
          amount_offered: number
          interest_rate: number
          loan_term_months: number
          monthly_payment: number
          conditions: string | null
          status: 'pending' | 'accepted' | 'rejected' | 'expired'
          valid_until: string | null
          created_at: string
        }
        Insert: {
          id?: string
          request_id: string
          funder_id: string
          amount_offered: number
          interest_rate: number
          loan_term_months: number
          monthly_payment: number
          conditions?: string | null
          status?: 'pending' | 'accepted' | 'rejected' | 'expired'
          valid_until?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          request_id?: string
          funder_id?: string
          amount_offered?: number
          interest_rate?: number
          loan_term_months?: number
          monthly_payment?: number
          conditions?: string | null
          status?: 'pending' | 'accepted' | 'rejected' | 'expired'
          valid_until?: string | null
          created_at?: string
        }
      }
      conversations: {
        Row: {
          id: string
          participant_1: string
          participant_2: string
          booking_id: string | null
          last_message_at: string
          created_at: string
        }
        Insert: {
          id?: string
          participant_1: string
          participant_2: string
          booking_id?: string | null
          last_message_at?: string
          created_at?: string
        }
        Update: {
          id?: string
          participant_1?: string
          participant_2?: string
          booking_id?: string | null
          last_message_at?: string
          created_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          conversation_id: string
          sender_id: string
          content: string
          attachments: Json | null
          read: boolean
          read_at: string | null
          created_at: string
        }
        Insert: {
          id?: string
          conversation_id: string
          sender_id: string
          content: string
          attachments?: Json | null
          read?: boolean
          read_at?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          conversation_id?: string
          sender_id?: string
          content?: string
          attachments?: Json | null
          read?: boolean
          read_at?: string | null
          created_at?: string
        }
      }
      analytics_events: {
        Row: {
          id: string
          user_id: string | null
          session_id: string | null
          event_type: string
          event_data: Json | null
          device_info: Json | null
          ip_address: string | null
          user_agent: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          session_id?: string | null
          event_type: string
          event_data?: Json | null
          device_info?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          session_id?: string | null
          event_type?: string
          event_data?: Json | null
          device_info?: Json | null
          ip_address?: string | null
          user_agent?: string | null
          created_at?: string
        }
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
  }
}
