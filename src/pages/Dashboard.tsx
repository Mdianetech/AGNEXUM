import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Tractor,
  Calendar,
  MessageCircle,
  Star,
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Plus,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { mockBookings, mockEquipment } from '../data/mockData';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  const isFarmer = user.roles.includes('farmer');
  const isOwner = user.roles.includes('owner');
  const isManufacturer = user.roles.includes('manufacturer');
  const isFunder = user.roles.includes('funder');

  // Mock data for dashboard stats
  const farmerStats = {
    activeBookings: 2,
    totalSpent: 1250000,
    equipmentUsed: 8,
    savings: 5000000
  };

  const ownerStats = {
    totalEquipment: 3,
    activeRentals: 1,
    monthlyRevenue: 850000,
    totalRentals: 24
  };

  const recentBookings = mockBookings.slice(0, 3);
  const ownedEquipment = mockEquipment.slice(0, 2);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-GN', {
      style: 'currency',
      currency: 'GNF',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Bonjour, {user.name} 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Voici un aperçu de votre activité sur AGNexum
        </p>
      </div>

      {/* Farmer Dashboard */}
      {isFarmer && (
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardBody className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Réservations actives</p>
                    <p className="text-3xl font-bold text-gray-900">{farmerStats.activeBookings}</p>
                  </div>
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Calendar className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Dépenses ce mois</p>
                    <p className="text-3xl font-bold text-gray-900">{formatCurrency(farmerStats.totalSpent)}</p>
                  </div>
                  <div className="bg-secondary-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-secondary-600" />
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Équipements utilisés</p>
                    <p className="text-3xl font-bold text-gray-900">{farmerStats.equipmentUsed}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Tractor className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Économies réalisées</p>
                    <p className="text-3xl font-bold text-gray-900">{formatCurrency(farmerStats.savings)}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Recent Bookings */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Mes réservations récentes</h2>
                <Link to="/bookings">
                  <Button variant="outline" size="sm" icon={ArrowRight} iconPosition="right">
                    Voir tout
                  </Button>
                </Link>
              </div>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img
                        src={booking.equipment.images[0]}
                        alt={booking.equipment.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{booking.equipment.title}</h3>
                        <p className="text-sm text-gray-600">
                          {new Date(booking.startDate).toLocaleDateString('fr-FR')} - {new Date(booking.endDate).toLocaleDateString('fr-FR')}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={booking.status === 'confirmed' ? 'success' : booking.status === 'pending' ? 'warning' : 'primary'}>
                        {booking.status === 'confirmed' ? 'Confirmé' : booking.status === 'pending' ? 'En attente' : booking.status}
                      </Badge>
                      <span className="font-semibold text-gray-900">{formatCurrency(booking.totalCost)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      )}

      {/* Owner Dashboard */}
      {isOwner && (
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardBody className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Équipements</p>
                    <p className="text-3xl font-bold text-gray-900">{ownerStats.totalEquipment}</p>
                  </div>
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Tractor className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Locations actives</p>
                    <p className="text-3xl font-bold text-gray-900">{ownerStats.activeRentals}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Activity className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Revenus ce mois</p>
                    <p className="text-3xl font-bold text-gray-900">{formatCurrency(ownerStats.monthlyRevenue)}</p>
                  </div>
                  <div className="bg-secondary-100 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-secondary-600" />
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total locations</p>
                    <p className="text-3xl font-bold text-gray-900">{ownerStats.totalRentals}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Equipment Management */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Mes équipements</h2>
                <Button icon={Plus}>
                  Ajouter un équipement
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                {ownedEquipment.map((equipment) => (
                  <div key={equipment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <img
                        src={equipment.images[0]}
                        alt={equipment.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">{equipment.title}</h3>
                        <p className="text-sm text-gray-600">
                          {formatCurrency(equipment.dailyRate)}/jour • {equipment.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{equipment.rating}</span>
                      </div>
                      <Badge variant={equipment.available ? 'success' : 'warning'}>
                        {equipment.available ? 'Disponible' : 'Loué'}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Gérer
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      )}

      {/* Quick Actions */}
      <Card className="mt-8">
        <CardHeader>
          <h2 className="text-xl font-semibold text-gray-900">Actions rapides</h2>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/equipment">
              <Button className="w-full justify-start" variant="outline" icon={Tractor}>
                Rechercher un équipement
              </Button>
            </Link>
            <Link to="/messages">
              <Button className="w-full justify-start" variant="outline" icon={MessageCircle}>
                Voir mes messages
              </Button>
            </Link>
            <Link to="/profile">
              <Button className="w-full justify-start" variant="outline" icon={Star}>
                Mettre à jour mon profil
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};