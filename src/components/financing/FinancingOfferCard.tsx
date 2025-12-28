import React from 'react';
import { 
  Building2, 
  Percent, 
  Calendar, 
  DollarSign,
  CheckCircle,
  Users,
  FileText
} from 'lucide-react';
import { FinancingOffer } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface FinancingOfferCardProps {
  offer: FinancingOffer;
  onApply?: (offerId: string) => void;
}

export const FinancingOfferCard: React.FC<FinancingOfferCardProps> = ({
  offer,
  onApply
}) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-GN', {
      style: 'currency',
      currency: 'GNF',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getTypeBadge = (type: string) => {
    const variants = {
      loan: { variant: 'primary' as const, text: 'Prêt' },
      leasing: { variant: 'secondary' as const, text: 'Leasing' },
      microfinance: { variant: 'success' as const, text: 'Microfinance' },
      grant: { variant: 'info' as const, text: 'Subvention' },
    };
    return variants[type as keyof typeof variants] || variants.loan;
  };

  const typeBadge = getTypeBadge(offer.type);

  return (
    <Card hover className="overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <Building2 className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{offer.title}</h3>
              <p className="text-sm text-gray-600">{offer.funder.companyName}</p>
            </div>
          </div>
          <Badge variant={typeBadge.variant}>
            {typeBadge.text}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 line-clamp-2">
          {offer.description}
        </p>

        {/* Key Terms */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <div>
              <div className="text-xs text-gray-500">Montant</div>
              <div className="text-sm font-medium">
                {formatCurrency(offer.minAmount)} - {formatCurrency(offer.maxAmount)}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Percent className="h-4 w-4 text-gray-500" />
            <div>
              <div className="text-xs text-gray-500">Taux</div>
              <div className="text-sm font-medium">{offer.interestRate}% / an</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <div>
              <div className="text-xs text-gray-500">Durée max</div>
              <div className="text-sm font-medium">{offer.maxTerm} mois</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-gray-500" />
            <div>
              <div className="text-xs text-gray-500">Public cible</div>
              <div className="text-sm font-medium">{offer.targetAudience.length} profils</div>
            </div>
          </div>
        </div>

        {/* Requirements Preview */}
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Exigences principales</h4>
          <div className="space-y-1">
            {offer.requirements.slice(0, 3).map((requirement, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                <span>{requirement}</span>
              </div>
            ))}
            {offer.requirements.length > 3 && (
              <div className="text-xs text-gray-500">
                +{offer.requirements.length - 3} autres exigences
              </div>
            )}
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Public cible</h4>
          <div className="flex flex-wrap gap-1">
            {offer.targetAudience.map((audience, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            className="flex-1"
            icon={FileText}
          >
            Voir détails
          </Button>
          <Button
            className="flex-1"
            onClick={() => onApply?.(offer.id)}
            disabled={!offer.active}
          >
            Postuler
          </Button>
        </div>
      </div>
    </Card>
  );
};