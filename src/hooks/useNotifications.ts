import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/database';

type Notification = Database['public']['Tables']['notifications']['Row'];

export const useNotifications = (userId: string | undefined) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchNotifications = async () => {
    if (!userId) {
      setIsLoading(false);
      return;
    }

    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;

      const notifications = (data || []) as Notification[];
      setNotifications(notifications);
      setUnreadCount(notifications.filter((n) => !n.read).length || 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch notifications');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();

    if (!userId) return;

    const channel = supabase
      .channel('notifications')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notifications',
          filter: `user_id=eq.${userId}`,
        },
        () => {
          fetchNotifications();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);

  const markAsRead = async (notificationId: string) => {
    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true, read_at: new Date().toISOString() } as never)
        .eq('id', notificationId);

      if (error) throw error;
      await fetchNotifications();
      return { error: null };
    } catch (err) {
      return {
        error: err instanceof Error ? err.message : 'Failed to mark notification as read',
      };
    }
  };

  const markAllAsRead = async () => {
    if (!userId) return { error: 'User not authenticated' };

    try {
      const { error } = await supabase
        .from('notifications')
        .update({ read: true, read_at: new Date().toISOString() } as never)
        .eq('user_id', userId)
        .eq('read', false);

      if (error) throw error;
      await fetchNotifications();
      return { error: null };
    } catch (err) {
      return {
        error: err instanceof Error ? err.message : 'Failed to mark all as read',
      };
    }
  };

  return {
    notifications,
    unreadCount,
    isLoading,
    error,
    markAsRead,
    markAllAsRead,
    refetch: fetchNotifications,
  };
};
