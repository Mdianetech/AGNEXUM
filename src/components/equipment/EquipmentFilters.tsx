import React, { useState } from 'react';
import { 
  Filter, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Star,
  Shield,
  Truck,
  X
} from 'lucide-react';
import { SearchFilters, EquipmentCategory } from '../../types';
import { Card, CardBody } from '../ui/Card';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Badge } from '../ui/Badge';

interface EquipmentFiltersProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  onClearFilters: () => void;
}

export const EquipmentFilters: React.FC<EquipmentFiltersProps> = ({
  filters,
  onFiltersChange,
  onClearFilters
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categories: { value: EquipmentCategory; label: string }[] = [
    { value: 'tractors', label: 'Tracteurs' },
    { value: 'harvesters', label: 'Moissonneuses' },
    { value: 'planting', label: 'Semoirs' },
    { value: 'irrigation', label: 'Irrigation' },
    { value: 'processing', label: 'Transformation' },
    { value: 'transport', label: 'Transport' },
    { value: 'tools', label: 'Outils' },
    { value: 'livestock', label: 'Élevage' }
  ];

  const conditions = [
    { value: 'excellent', label: 'Excellent' },
    { value: 'good', label: 'Bon' },
    { value: 'fair', label: 'Correct' }
  ];

  const brands = [
    'John Deere', 'Massey Ferguson', 'New Holland', 'Case IH', 
    'Kubota', 'Fendt', 'Claas', 'Deutz-Fahr'
  ];

  const updateFilters = (key: keyof SearchFilters, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleCondition = (condition: string) => {
    const currentConditions = filters.condition || [];
    const newConditions = currentConditions.includes(condition)
      ? currentConditions.filter(c => c !== condition)
      : [...currentConditions, condition];
    updateFilters('condition', newConditions);
  };

  const activeFiltersCount = Object.values(filters).filter(value => 
    value !== undefined && value !== null && 
    (Array.isArray(value) ? value.length > 0 : true)
  ).length;

  return (
    <Card className="mb-6">
      <CardBody className="p-6">
        {/* Filter Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">Filtres</h3>
            {activeFiltersCount > 0 && (
              <Badge variant="primary" size="sm">
                {activeFiltersCount}
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-2">
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                icon={X}
              >
                Effacer
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Réduire' : 'Plus de filtres'}
            </Button>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <Input
            placeholder="Localisation"
            value={filters.location || ''}
            onChange={(e) => updateFilters('location', e.target.value)}
            icon={MapPin}
          />
          
          <div className="grid grid-cols-2 gap-2">
            <Input
              type="number"
              placeholder="Prix min"
              value={filters.priceRange?.min || ''}
              onChange={(e) => updateFilters('priceRange', {
                ...filters.priceRange,
                min: parseInt(e.target.value) || 0
              })}
            />
            <Input
              type="number"
              placeholder="Prix max"
              value={filters.priceRange?.max || ''}
              onChange={(e) => updateFilters('priceRange', {
                ...filters.priceRange,
                max: parseInt(e.target.value) || 0
              })}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Input
              type="date"
              placeholder="Date début"
              value={filters.dateRange?.start || ''}
              onChange={(e) => updateFilters('dateRange', {
                ...filters.dateRange,
                start: e.target.value
              })}
            />
            <Input
              type="date"
              placeholder="Date fin"
              value={filters.dateRange?.end || ''}
              onChange={(e) => updateFilters('dateRange', {
                ...filters.dateRange,
                end: e.target.value
              })}
            />
          </div>

          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.verified || false}
                onChange={(e) => updateFilters('verified', e.target.checked)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">Propriétaires vérifiés</span>
            </label>
          </div>
        </div>

        {/* Expanded Filters */}
        {isExpanded && (
          <div className="space-y-6 pt-4 border-t border-gray-100">
            {/* Categories */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Catégories</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {categories.map((category) => (
                  <label key={category.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      checked={filters.category === category.value}
                      onChange={() => updateFilters('category', category.value)}
                      className="text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-700">{category.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Conditions */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">État</h4>
              <div className="flex flex-wrap gap-2">
                {conditions.map((condition) => (
                  <button
                    key={condition.value}
                    onClick={() => toggleCondition(condition.value)}
                    className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                      filters.condition?.includes(condition.value)
                        ? 'bg-primary-100 border-primary-300 text-primary-800'
                        : 'bg-white border-gray-300 text-gray-700 hover:border-primary-300'
                    }`}
                  >
                    {condition.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Marques</h4>
              <select
                value={filters.brand || ''}
                onChange={(e) => updateFilters('brand', e.target.value)}
                className="w-full md:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Toutes les marques</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Additional Options */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-3">Options</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.deliveryAvailable || false}
                    onChange={(e) => updateFilters('deliveryAvailable', e.target.checked)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <Truck className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Livraison disponible</span>
                </label>

                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filters.insuranceIncluded || false}
                    onChange={(e) => updateFilters('insuranceIncluded', e.target.checked)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <Shield className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Assurance incluse</span>
                </label>

                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-700">Note minimum:</span>
                  <select
                    value={filters.rating || ''}
                    onChange={(e) => updateFilters('rating', parseFloat(e.target.value))}
                    className="px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">Toutes</option>
                    <option value="4">4+ étoiles</option>
                    <option value="4.5">4.5+ étoiles</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
};