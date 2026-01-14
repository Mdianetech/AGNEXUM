import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database';

type Equipment = Database['public']['Tables']['equipment']['Row'];

export const useEquipment = () => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEquipment = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('equipment')
        .select('*')
        .eq('status', 'active')
        .eq('available', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEquipment(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch equipment');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEquipment();
  }, []);

  return { equipment, isLoading, error, refetch: fetchEquipment };
};

export const useEquipmentById = (id: string | undefined) => {
  const [equipment, setEquipment] = useState<Equipment | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setIsLoading(false);
      return;
    }

    const fetchEquipment = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('equipment')
          .select('*')
          .eq('id', id)
          .maybeSingle();

        if (error) throw error;
        setEquipment(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch equipment');
      } finally {
        setIsLoading(false);
      }
    };

    fetchEquipment();
  }, [id]);

  return { equipment, isLoading, error };
};

export const useUserEquipment = (userId: string | undefined) => {
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    const fetchUserEquipment = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('equipment')
          .select('*')
          .eq('owner_id', userId)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setEquipment(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch user equipment');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserEquipment();
  }, [userId]);

  return { equipment, isLoading, error };
};
