import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database';

type Booking = Database['public']['Tables']['bookings']['Row'];

export const useUserBookings = (userId: string | undefined) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    const fetchBookings = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('bookings')
          .select('*')
          .eq('farmer_id', userId)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setBookings(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch bookings');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookings();
  }, [userId]);

  return { bookings, isLoading, error };
};

export const createBooking = async (bookingData: Database['public']['Tables']['bookings']['Insert']) => {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .insert(bookingData as never)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : 'Failed to create booking',
    };
  }
};

export const updateBookingStatus = async (
  bookingId: string,
  status: Booking['status']
) => {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .update({ status, updated_at: new Date().toISOString() } as never)
      .eq('id', bookingId)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (err) {
    return {
      data: null,
      error: err instanceof Error ? err.message : 'Failed to update booking',
    };
  }
};
