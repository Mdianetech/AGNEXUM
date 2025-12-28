import React, { useState, useEffect } from 'react';
import { Search, Grid2x2 as Grid, List, SlidersHorizontal } from 'lucide-react';
import { Equipment as EquipmentType, SearchFilters } from '../types';
import { mockEquipment } from '../data/mockData';
import { EquipmentFilters } from '../components/equipment/EquipmentFilters';
import { EquipmentGrid } from '../components/equipment/EquipmentGrid';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export const Equipment: React.FC = () => {
  const [equipment, setEquipment] = useState<EquipmentType[]>([]);
  const [filteredEquipment, setFilteredEquipment] = useState<EquipmentType[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(true);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setEquipment(mockEquipment);
      setFilteredEquipment(mockEquipment);
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = equipment;

    // Apply search query
    if (searchQuery) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply filters
    if (filters.category) {
      filtered = filtered.filter(item => item.category === filters.category);
    }

    if (filters.location) {
      filtered = filtered.filter(item =>
        item.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    if (filters.priceRange) {
      filtered = filtered.filter(item => {
        const price = item.dailyRate;
        return (!filters.priceRange!.min || price >= filters.priceRange!.min) &&
               (!filters.priceRange!.max || price <= filters.priceRange!.max);
      });
    }

    if (filters.condition && filters.condition.length > 0) {
      filtered = filtered.filter(item => filters.condition!.includes(item.condition));
    }

    if (filters.brand) {
      filtered = filtered.filter(item => item.brand === filters.brand);
    }

    if (filters.rating) {
      filtered = filtered.filter(item => item.rating >= filters.rating!);
    }

    if (filters.verified) {
      filtered = filtered.filter(item => item.owner.verified);
    }

    if (filters.deliveryAvailable) {
      filtered = filtered.filter(item => 
        item.deliveryOptions.some(option => option.type === 'delivery' || option.type === 'both')
      );
    }

    if (filters.insuranceIncluded) {
      filtered = filtered.filter(item => item.insurance?.covered);
    }

    setFilteredEquipment(filtered);
  }, [equipment, searchQuery, filters]);

  const handleFavorite = (id: string) => {
    setFavoriteIds(prev => 
      prev.includes(id) 
        ? prev.filter(fId => fId !== id)
        : [...prev, id]
    );
  };

  const clearFilters = () => {
    setFilters({});
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Catalogue d'équipements agricoles
        </h1>
        <p className="text-gray-600">
          Trouvez l'équipement parfait pour vos besoins agricoles parmi notre large sélection.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="Rechercher un équipement, une marque, une localisation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={Search}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'outline'}
              size="sm"
              icon={Grid}
              onClick={() => setViewMode('grid')}
            >
              Grille
            </Button>
            <Button
              variant={viewMode === 'list' ? 'primary' : 'outline'}
              size="sm"
              icon={List}
              onClick={() => setViewMode('list')}
            >
              Liste
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <EquipmentFilters
        filters={filters}
        onFiltersChange={setFilters}
        onClearFilters={clearFilters}
      />

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-gray-600">
          {loading ? 'Chargement...' : `${filteredEquipment.length} équipement(s) trouvé(s)`}
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">Trier par:</span>
          <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent">
            <option>Pertinence</option>
            <option>Prix croissant</option>
            <option>Prix décroissant</option>
            <option>Note</option>
            <option>Plus récent</option>
          </select>
        </div>
      </div>

      {/* Equipment Grid */}
      <EquipmentGrid
        equipment={filteredEquipment}
        onFavorite={handleFavorite}
        favoriteIds={favoriteIds}
        loading={loading}
      />

      {/* Categories Section */}
      {!loading && filteredEquipment.length === 0 && !searchQuery && Object.keys(filters).length === 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Parcourir par catégorie</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { key: 'tractors', label: 'Tracteurs', icon: '🚜' },
              { key: 'harvesters', label: 'Moissonneuses', icon: '🌾' },
              { key: 'planting', label: 'Semoirs', icon: '🌱' },
              { key: 'tools', label: 'Outils', icon: '🔧' },
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => setFilters({ category: category.key as any })}
                className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-200 text-center"
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-medium text-gray-900">{category.label}</div>
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Load More */}
      {!loading && filteredEquipment.length > 0 && (
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Charger plus d'équipements
          </Button>
        </div>
      )}
    </div>
  );
};