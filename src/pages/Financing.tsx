import React, { useState, useEffect } from 'react';
import { Search, Plus, TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';
import { FinancingOffer, FinancingRequest } from '../types';
import { mockFinancingOffers, mockFinancingRequests } from '../data/mockData';
import { FinancingOfferCard } from '../components/financing/FinancingOfferCard';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card, CardBody, CardHeader } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const Financing: React.FC = () => {
  const [offers, setOffers] = useState<FinancingOffer[]>([]);
  const [requests, setRequests] = useState<FinancingRequest[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'offers' | 'requests'>('offers');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setOffers(mockFinancingOffers);
      setRequests(mockFinancingRequests);
      setLoading(false);
    }, 1000);
  }, []);

  const handleApplyForFinancing = (offerId: string) => {
    console.log('Apply for financing offer:', offerId);
    // Navigate to application form
  };

  const stats = [
    {
      icon: DollarSign,
      label: 'Montant total financé',
      value: '2.5 Milliards GNF',
      change: '+15%',
      color: 'text-green-600'
    },
    {
      icon: Users,
      label: 'Projets financés',
      value: '156',
      change: '+23%',
      color: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      label: 'Taux de réussite',
      value: '87%',
      change: '+5%',
      color: 'text-purple-600'
    },
    {
      icon: Calendar,
      label: 'Délai moyen',
      value: '14 jours',
      change: '-3 jours',
      color: 'text-orange-600'
    }
  ];

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-gray-200 rounded-xl h-64"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Solutions de financement
        </h1>
        <p className="text-gray-600">
          Trouvez le financement adapté à vos projets agricoles ou proposez vos services de financement.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardBody className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.color}`}>{stat.change} ce mois</p>
                </div>
                <div className="bg-gray-100 p-3 rounded-full">
                  <stat.icon className="h-6 w-6 text-gray-600" />
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('offers')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'offers'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Offres de financement ({offers.length})
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'requests'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Demandes de financement ({requests.length})
            </button>
          </nav>
        </div>
      </div>

      {/* Search and Actions */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <Input
            placeholder={
              activeTab === 'offers' 
                ? "Rechercher une offre de financement..." 
                : "Rechercher une demande de financement..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            icon={Search}
          />
        </div>
        <Button icon={Plus}>
          {activeTab === 'offers' ? 'Créer une offre' : 'Faire une demande'}
        </Button>
      </div>

      {/* Content */}
      {activeTab === 'offers' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <FinancingOfferCard
              key={offer.id}
              offer={offer}
              onApply={handleApplyForFinancing}
            />
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {requests.map((request) => (
            <Card key={request.id}>
              <CardBody className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {request.purpose}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Par {request.requester.name} • {new Date(request.createdAt).toLocaleDateString('fr-FR')}
                    </p>
                  </div>
                  <Badge variant={
                    request.status === 'approved' ? 'success' :
                    request.status === 'rejected' ? 'error' :
                    request.status === 'under_review' ? 'warning' : 'primary'
                  }>
                    {request.status === 'pending' ? 'En attente' :
                     request.status === 'under_review' ? 'En cours d\'examen' :
                     request.status === 'approved' ? 'Approuvé' :
                     request.status === 'rejected' ? 'Rejeté' : 'Financé'}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-gray-500">Montant demandé</div>
                    <div className="font-semibold">
                      {new Intl.NumberFormat('fr-GN', {
                        style: 'currency',
                        currency: 'GNF',
                        minimumFractionDigits: 0,
                      }).format(request.amount)}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Type</div>
                    <div className="font-semibold">
                      {request.type === 'equipment_purchase' ? 'Achat équipement' :
                       request.type === 'equipment_rental' ? 'Location équipement' : 'Prêt commercial'}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Localisation</div>
                    <div className="font-semibold">{request.requester.location}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Propositions</div>
                    <div className="font-semibold">{request.proposals.length}</div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    Voir détails
                  </Button>
                  <Button size="sm">
                    Faire une proposition
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};