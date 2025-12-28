import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Star,
  Heart,
  Calendar,
  User,
  Shield,
  Zap
} from 'lucide-react';
import { Equipment } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { OptimizedImage } from '../common/OptimizedImage';
import { imageConfig } from '../../utils/imageOptimization';

interface EquipmentCardProps {
  equipment: Equipment;
  onFavorite?: (id: string) => void;
  isFavorited?: boolean;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({
  equipment,
  onFavorite,
  isFavorited = false,
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-GN', {
      style: 'currency',
      currency: 'GNF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getConditionBadge = (condition: string) => {
    const variants = {
      excellent: { variant: 'success' as const, text: 'Excellent' },
      good: { variant: 'primary' as const, text: 'Bon' },
      fair: { variant: 'warning' as const, text: 'Correct' },
    };
    return variants[condition as keyof typeof variants] || variants.good;
  };

  const conditionBadge = getConditionBadge(equipment.condition);

  return (
    <Card hover className="overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <div className="aspect-video">
          <OptimizedImage
            src={equipment.images[0]}
            alt={`${equipment.title} - ${equipment.brand}`}
            className="group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            width={800}
            height={600}
            fallbackSrc={imageConfig.fallback}
            aspectRatio="video"
          />
        </div>
        
        {/* Favorite Button */}
        <button
          onClick={() => onFavorite?.(equipment.id)}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-200 ${
            isFavorited 
              ? 'bg-red-500 text-white' 
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge variant={conditionBadge.variant} size="sm">
            {conditionBadge.text}
          </Badge>
          {equipment.available && (
            <Badge variant="success" size="sm">
              Disponible
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title & Category */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
            {equipment.title}
          </h3>
          <p className="text-sm text-gray-600">
            {equipment.brand} • {equipment.type}
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {equipment.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
          {equipment.features.length > 3 && (
            <span className="text-xs text-gray-500">
              +{equipment.features.length - 3} autres
            </span>
          )}
        </div>

        {/* Image Counter */}
        {equipment.images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span>{equipment.images.length}</span>
          </div>
        )}

        {/* Quick View Button */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            Voir détails
          </button>
        </div>
        {/* Owner Info */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-primary-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">{equipment.owner.name}</p>
              <div className="flex items-center space-x-1">
                <Star className="h-3 w-3 text-yellow-400 fill-current" />
                <span className="text-xs text-gray-600">
                  {equipment.owner.rating} ({equipment.owner.reviewCount})
                </span>
                {equipment.owner.verified && (
                  <Shield className="h-3 w-3 text-green-500" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          {equipment.location}
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-2xl font-bold text-primary-600">
                {formatPrice(equipment.dailyRate)}
              </span>
              <span className="text-sm text-gray-600 ml-1">/jour</span>
            </div>
            <div className="text-right text-xs text-gray-500">
              <div>{formatPrice(equipment.weeklyRate)}/semaine</div>
              <div>{formatPrice(equipment.monthlyRate)}/mois</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Link to={`/equipment/${equipment.id}`} className="flex-1">
            <Button className="w-full">
              Voir détails
            </Button>
          </Link>
          <Button
            variant="outline"
            icon={Calendar}
            className="shrink-0"
            onClick={() => {
              // Quick booking action
              console.log('Quick booking for:', equipment.id);
            }}
          >
            Réserver
          </Button>
        </div>
      </div>
    </Card>
  );
};