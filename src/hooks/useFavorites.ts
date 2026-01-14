import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database';

type Favorite = Database['public']['Tables']['favorites']['Row'];

export const useFavorites = (userId: string | undefined) => {
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFavorites = async () => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', userId);

      if (error) throw error;
      setFavorites(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch favorites');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [userId]);

  const addFavorite = async (equipmentId: string) => {
    if (!userId) return { error: 'User not authenticated' };

    try {
      const { data, error } = await supabase
        .from('favorites')
        .insert({ user_id: userId, equipment_id: equipmentId } as never)
        .select()
        .single();

      if (error) throw error;
      await fetchFavorites();
      return { data, error: null };
    } catch (err) {
      return {
        data: null,
        error: err instanceof Error ? err.message : 'Failed to add favorite',
      };
    }
  };

  const removeFavorite = async (equipmentId: string) => {
    if (!userId) return { error: 'User not authenticated' };

    try {
      const { error } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', userId)
        .eq('equipment_id', equipmentId);

      if (error) throw error;
      await fetchFavorites();
      return { error: null };
    } catch (err) {
      return {
        error: err instanceof Error ? err.message : 'Failed to remove favorite',
      };
    }
  };

  const isFavorite = (equipmentId: string) => {
    return favorites.some((fav) => fav.equipment_id === equipmentId);
  };

  return { favorites, isLoading, error, addFavorite, removeFavorite, isFavorite };
};
