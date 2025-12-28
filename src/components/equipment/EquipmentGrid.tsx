import React from 'react';
import { Equipment } from '../../types';
import { EquipmentCard } from './EquipmentCard';

interface EquipmentGridProps {
  equipment: Equipment[];
  onFavorite?: (id: string) => void;
  favoriteIds?: string[];
  loading?: boolean;
}

export const EquipmentGrid: React.FC<EquipmentGridProps> = ({
  equipment,
  onFavorite,
  favoriteIds = [],
  loading = false
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-200 rounded-xl h-64 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (equipment.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Aucun équipement trouvé
        </h3>
        <p className="text-gray-600">
          Essayez de modifier vos critères de recherche ou explorez d'autres catégories.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {equipment.map((item) => (
        <EquipmentCard
          key={item.id}
          equipment={item}
          onFavorite={onFavorite}
          isFavorited={favoriteIds.includes(item.id)}
        />
      ))}
    </div>
  );
};