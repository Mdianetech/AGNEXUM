import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Users,
  Shield,
  Zap,
  ArrowRight,
  Star,
  MapPin,
  CheckCircle,
  TrendingUp,
  Globe,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardBody } from '../components/ui/Card';
import { EquipmentCard } from '../components/equipment/EquipmentCard';
import { RotatingBackground } from '../components/common/RotatingBackground';
import { OptimizedImage } from '../components/common/OptimizedImage';
import { mockEquipment } from '../data/mockData';
import { generateImageUrl } from '../utils/imageOptimization';

export const Home: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  
  const featuredEquipment = mockEquipment.slice(0, 3);

  const features = [
    {
      icon: Shield,
      title: 'Sécurisé et Fiable',
      description: 'Transactions sécurisées avec vérification d\'identité et assurance incluse pour votre tranquillité d\'esprit.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Users,
      title: 'Communauté Active',
      description: 'Rejoignez des milliers d\'agriculteurs et propriétaires d\'équipements à travers l\'Afrique de l\'Ouest.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Zap,
      title: 'Réservation Rapide',
      description: 'Trouvez et réservez l\'équipement dont vous avez besoin en quelques clics seulement.',
      color: 'bg-secondary-100 text-secondary-600'
    },
    {
      icon: Globe,
      title: 'Couverture Régionale',
      description: 'Équipements disponibles dans toute la Guinée et les pays voisins d\'Afrique de l\'Ouest.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Recherchez',
      description: 'Utilisez nos filtres avancés pour trouver l\'équipement parfait selon vos besoins spécifiques',
      icon: Search
    },
    {
      number: '02',
      title: 'Connectez',
      description: 'Contactez directement le propriétaire via notre messagerie sécurisée intégrée',
      icon: Users
    },
    {
      number: '03',
      title: 'Modernisez',
      description: 'Récupérez votre équipement et boostez la productivité de votre exploitation',
      icon: TrendingUp
    }
  ];

  const testimonials = [
    {
      name: 'Mamadou Diallo',
      role: 'Agriculteur',
      location: 'Conakry',
      comment: 'AGNexum a révolutionné ma façon de travailler. J\'ai accès à du matériel moderne que je n\'aurais jamais pu acheter. Ma productivité a doublé en une saison !',
      rating: 5,
      avatar: 'MD',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=400&h=400&fit=crop&auto=compress&cs=tinysrgb'
    },
    {
      name: 'Fatima Sylla',
      role: 'Propriétaire d\'équipement',
      location: 'Kindia',
      comment: 'Excellente plateforme pour rentabiliser mon matériel. Les agriculteurs sont sérieux, respectueux, et les paiements sont sécurisés.',
      rating: 5,
      avatar: 'FS',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?w=400&h=400&fit=crop&auto=compress&cs=tinysrgb'
    },
    {
      name: 'Ibrahim Koné',
      role: 'Coopérative agricole',
      location: 'Labé',
      comment: 'Nous recommandons AGNexum à tous nos 200 membres. Service client exceptionnel et équipements de qualité garantie.',
      rating: 5,
      avatar: 'IK',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=400&h=400&fit=crop&auto=compress&cs=tinysrgb'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Équipements disponibles' },
    { number: '2500+', label: 'Utilisateurs actifs' },
    { number: '75+', label: 'Villes couvertes' },
    { number: '98%', label: 'Satisfaction client' }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to equipment page with search params
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (location) params.set('location', location);
    window.location.href = `/equipment?${params.toString()}`;
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Rotating Background Logo */}
      <RotatingBackground />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden min-h-screen-ios">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/158829/tractor-agriculture-farming-158829.jpeg')`
            }}
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-primary-200 rounded-full opacity-20 animate-bounce-subtle will-change-transform"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-secondary-200 rounded-full opacity-20 animate-bounce-subtle will-change-transform" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative container-responsive py-12 sm:py-16 lg:py-20 xl:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen-safe">
            <div className="animate-fade-in space-y-responsive">
              <div className="mb-4 sm:mb-6">
                <span className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-primary-100 text-primary-800 mb-4">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  Plateforme #1 en Afrique de l'Ouest
                </span>
              </div>
              
              <h1 className="font-bold text-gray-900 leading-tight text-balance">
                Modernisez votre agriculture avec
                <span className="text-primary-600 block bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                  AGNexum
                </span>
              </h1>
              
              <p className="text-responsive text-gray-600 leading-relaxed max-w-2xl">
                La première plateforme de location de matériel agricole en Afrique de l'Ouest. 
                Connectez-vous avec des propriétaires vérifiés, trouvez l'équipement parfait et boostez votre productivité.
              </p>
              
              {/* Enhanced Search Bar */}
              <form onSubmit={handleSearch} className="bg-white rounded-2xl p-3 shadow-strong border border-gray-100 mb-6 sm:mb-8 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Rechercher un équipement (tracteur, moissonneuse...)"
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder-gray-500 rounded-xl text-base"
                    />
                  </div>
                  <div className="relative sm:w-48">
                    <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Localisation"
                      className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-0 focus:ring-0 focus:outline-none text-gray-900 placeholder-gray-500 rounded-xl text-base"
                    />
                  </div>
                  <Button type="submit" size="lg" className="px-6 sm:px-8 shadow-md">
                    Rechercher
                  </Button>
                </div>
              </form>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Link to="/equipment" className="flex-1 sm:flex-none">
                  <Button size="lg" icon={ArrowRight} iconPosition="right" className="shadow-md w-full sm:w-auto" responsive>
                    Explorer les équipements
                  </Button>
                </Link>
                <Link to="/register" className="flex-1 sm:flex-none">
                  <Button variant="outline" size="lg" className="shadow-sm w-full sm:w-auto">
                    Créer un compte gratuit
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="responsive-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-600 mb-1">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in order-first lg:order-last">
              <div className="relative">
                <picture>
                  <source 
                    media="(max-width: 480px)" 
                    srcSet="https://images.pexels.com/photos/158829/tractor-agriculture-farming-158829.jpeg?w=480&h=320&fit=crop&auto=compress&cs=tinysrgb"
                  />
                  <source 
                    media="(max-width: 1024px)" 
                    srcSet="https://images.pexels.com/photos/158829/tractor-agriculture-farming-158829.jpeg?w=768&h=512&fit=crop&auto=compress&cs=tinysrgb"
                  />
                  <img
                    src="https://images.pexels.com/photos/158829/tractor-agriculture-farming-158829.jpeg?w=1200&h=800&fit=crop&auto=compress&cs=tinysrgb"
                    alt="Tracteur moderne dans un champ africain"
                    className="w-full h-auto rounded-2xl shadow-strong transform hover:scale-105 transition-transform duration-500 object-cover bg-gray-100"
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/158829/tractor-agriculture-farming-158829.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb';
                    }}
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                
                {/* Floating Achievement Cards */}
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl shadow-medium animate-scale-in">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 sm:h-6 sm:w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">Certifié</div>
                      <div className="text-xs sm:text-sm text-gray-600">Équipement vérifié</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl shadow-medium animate-scale-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-600 fill-current" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">4.9/5</div>
                      <div className="text-xs sm:text-sm text-gray-600">Note moyenne</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="font-bold text-gray-900 mb-4 text-balance">
              Pourquoi choisir AGNexum ?
            </h2>
            <p className="text-responsive text-gray-600 max-w-3xl mx-auto">
              Nous offrons une plateforme complète et sécurisée, spécialement conçue pour répondre aux besoins uniques de l'agriculture africaine.
            </p>
          </div>

          <div className="responsive-grid">
            {features.map((feature, index) => (
              <Card key={index} hover className="text-center group animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardBody className="p-6 sm:p-8">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 will-change-transform`}>
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="font-bold text-gray-900 mb-4 text-balance">
              Comment ça marche ?
            </h2>
            <p className="text-responsive text-gray-600 max-w-3xl mx-auto">
              En seulement 3 étapes simples, accédez au matériel agricole moderne dont vous avez besoin pour transformer votre exploitation.
            </p>
          </div>

          <div className="responsive-grid">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in text-center" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6 sm:mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full text-lg sm:text-2xl font-bold shadow-medium mb-4">
                    {step.number}
                  </div>
                  <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <step.icon className="h-4 w-4 sm:h-6 sm:w-6 text-primary-600" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 sm:top-10 left-full w-full">
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-primary-300 mx-auto transform translate-x-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-responsive">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-12 animate-fade-in space-y-4 sm:space-y-0">
            <div>
              <h2 className="font-bold text-gray-900 mb-2 sm:mb-4">
                Équipements en vedette
              </h2>
              <p className="text-responsive text-gray-600">
                Découvrez notre sélection d'équipements les plus populaires et les mieux notés
              </p>
            </div>
            <Link to="/equipment">
              <Button variant="outline" icon={ArrowRight} iconPosition="right" className="shadow-sm w-full sm:w-auto">
                Voir tout le catalogue
              </Button>
            </Link>
          </div>

          <div className="responsive-grid">
            {featuredEquipment.map((equipment, index) => (
              <div key={equipment.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <EquipmentCard
                  equipment={equipment}
                  onFavorite={(id) => console.log('Favorited:', id)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-50">
        <div className="container-responsive">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="font-bold text-gray-900 mb-4 text-balance">
              Ce que disent nos utilisateurs
            </h2>
            <p className="text-responsive text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages authentiques de ceux qui font confiance à AGNexum pour transformer leur agriculture.
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="sm:hidden">
            <Card hover className="animate-fade-in">
              <CardBody className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].comment}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4 overflow-hidden bg-gray-200 flex-shrink-0">
                    <OptimizedImage
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      width={48}
                      height={48}
                      loading="eager"
                      aspectRatio="square"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</div>
                    <div className="text-sm text-gray-600">{testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}</div>
                  </div>
                </div>
              </CardBody>
            </Card>
            
            {/* Carousel Controls */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="touch-target p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Témoignage précédent"
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Aller au témoignage ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="touch-target p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                aria-label="Témoignage suivant"
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid responsive-grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover className="animate-fade-in">
                <CardBody className="p-6 sm:p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed text-sm sm:text-lg">
                    "{testimonial.comment}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4 overflow-hidden bg-gray-200 flex-shrink-0">
                      <OptimizedImage
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        loading="eager"
                        aspectRatio="square"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{testimonial.role} • {testimonial.location}</div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 sm:top-10 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white opacity-10 rounded-full animate-bounce-subtle will-change-transform"></div>
          <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 w-24 h-24 sm:w-32 sm:h-32 bg-white opacity-10 rounded-full animate-bounce-subtle will-change-transform" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative container-responsive text-center">
          <div className="animate-fade-in space-y-responsive">
            <h2 className="font-bold text-white mb-4 sm:mb-6 text-balance">
              Prêt à révolutionner votre agriculture ?
            </h2>
            <p className="text-lg sm:text-xl text-primary-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              Rejoignez des milliers d'agriculteurs qui font déjà confiance à AGNexum pour accéder 
              au matériel agricole moderne, fiable et abordable.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Link to="/register" className="flex-1 sm:flex-none">
                <Button size="lg" variant="secondary" className="shadow-lg w-full sm:w-auto">
                  Créer un compte gratuit
                </Button>
              </Link>
              <Link to="/equipment" className="flex-1 sm:flex-none">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600 shadow-lg w-full sm:w-auto">
                  Parcourir les équipements
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};