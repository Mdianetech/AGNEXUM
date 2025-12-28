import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  Download, 
  Play,
  Star,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';
import { Product } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ProductCardProps {
  product: Product;
  onRequestQuote?: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onRequestQuote
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-GN', {
      style: 'currency',
      currency: 'GNF',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getAvailabilityBadge = (availability: string) => {
    const variants = {
      in_stock: { variant: 'success' as const, text: 'En stock', icon: CheckCircle },
      pre_order: { variant: 'warning' as const, text: 'Pré-commande', icon: Clock },
      out_of_stock: { variant: 'error' as const, text: 'Rupture', icon: AlertCircle },
    };
    return variants[availability as keyof typeof variants] || variants.in_stock;
  };

  const availabilityBadge = getAvailabilityBadge(product.availability);

  return (
    <Card hover className="overflow-hidden group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 bg-gray-100"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.pexels.com/photos/158829/tractor-agriculture-farming-158829.jpeg?w=400&h=300&fit=crop&auto=compress&cs=tinysrgb';
          }}
        />
        
        {/* Availability Badge */}
        <div className="absolute top-3 left-3">
          <Badge variant={availabilityBadge.variant} size="sm">
            <availabilityBadge.icon className="h-3 w-3 mr-1" />
            {availabilityBadge.text}
          </Badge>
        </div>

        {/* Media Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.videoUrl && (
            <button className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors">
              <Play className="h-4 w-4" />
            </button>
          )}
          {product.brochureUrl && (
            <button className="p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors">
              <Download className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title & Brand */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600">
            {product.manufacturer.companyName}
          </p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
          {product.features.length > 3 && (
            <span className="text-xs text-gray-500">
              +{product.features.length - 3} autres
            </span>
          )}
        </div>

        {/* Key Specifications */}
        <div className="mb-4">
          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
            {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
              <div key={key}>
                <span className="font-medium">{key}:</span> {value}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-2xl font-bold text-primary-600">
                {formatPrice(product.price)}
              </span>
            </div>
            <div className="text-right text-xs text-gray-500">
              <div>Garantie: {product.warranty}</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Link to={`/products/${product.id}`} className="flex-1">
            <Button variant="outline" className="w-full" icon={Eye}>
              Voir détails
            </Button>
          </Link>
          <Button
            className="shrink-0"
            onClick={() => onRequestQuote?.(product.id)}
            disabled={product.availability === 'out_of_stock'}
          >
            Demander devis
          </Button>
        </div>
      </div>
    </Card>
  );
};