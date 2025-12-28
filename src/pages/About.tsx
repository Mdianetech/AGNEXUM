import React from 'react';
import {
  Users,
  Target,
  Award,
  Globe,
  Heart,
  Lightbulb,
  TrendingUp,
  Shield,
  Handshake,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Card, CardBody } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { OptimizedImage } from '../components/common/OptimizedImage';

export const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion pour l\'agriculture',
      description: 'Nous croyons en l\'importance vitale de l\'agriculture pour le développement de l\'Afrique de l\'Ouest.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Handshake,
      title: 'Confiance et transparence',
      description: 'Nous construisons des relations durables basées sur la confiance mutuelle et la transparence totale.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation continue',
      description: 'Nous innovons constamment pour offrir des solutions technologiques adaptées aux réalités locales.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Users,
      title: 'Communauté d\'abord',
      description: 'Nous plaçons notre communauté d\'agriculteurs et de partenaires au cœur de toutes nos décisions.',
      color: 'bg-green-100 text-green-600'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Conception et développement',
      description: 'Diane Mamoudou conçoit AGNexum après avoir identifié les défis d\'accès aux équipements agricoles en Guinée.'
    },
    {
      year: '2024',
      title: 'Lancement de la plateforme',
      description: 'Lancement officiel d\'AGNexum avec les premiers partenaires et utilisateurs en Guinée.'
    },
    {
      year: '2024',
      title: 'Expansion régionale',
      description: 'Extension des services vers les pays voisins d\'Afrique de l\'Ouest.'
    },
    {
      year: '2025',
      title: 'Vision future',
      description: 'Objectif de devenir la référence en matière de location d\'équipements agricoles en Afrique de l\'Ouest.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Équipements disponibles' },
    { number: '1000+', label: 'Agriculteurs connectés' },
    { number: '50+', label: 'Villes couvertes' },
    { number: '98%', label: 'Satisfaction client' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-bounce-subtle"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full animate-bounce-subtle" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="relative container-responsive py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              À propos d'AGNexum
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Révolutionner l'agriculture africaine en démocratisant l'accès aux équipements modernes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" variant="secondary" className="shadow-lg">
                Notre mission
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600 shadow-lg">
                Rencontrer l'équipe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AGNexum a été créé avec une vision claire : démocratiser l'accès aux équipements agricoles modernes 
                pour transformer l'agriculture en Afrique de l'Ouest. Nous croyons que chaque agriculteur, 
                quelle que soit la taille de son exploitation, mérite d'avoir accès aux outils qui lui permettront 
                d'augmenter sa productivité et d'améliorer ses conditions de vie.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Notre plateforme connecte les agriculteurs avec des propriétaires d'équipements vérifiés, 
                créant un écosystème de confiance qui bénéficie à toute la communauté agricole.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Vision 2030</h3>
                  <p className="text-gray-600">Être la référence en matière de location d'équipements agricoles en Afrique</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Agriculture moderne en Afrique"
                className="w-full h-96 object-cover rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rencontrez notre fondateur
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'histoire d'AGNexum commence avec une vision audacieuse et la détermination d'un entrepreneur passionné.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card hover className="overflow-hidden">
              <CardBody className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* Photo - Nouvelle image */}
                  <div className="lg:col-span-2 relative">
                    <div className="aspect-[3/4] lg:aspect-auto lg:h-full relative overflow-hidden bg-gray-200 rounded-t-lg lg:rounded-t-none lg:rounded-l-lg">
                      <OptimizedImage
                        src="/21c4b0f8-71ab-435d-b880-2b5d92163215.jpeg"
                        alt="Diane Mamoudou - Fondateur d'AGNexum"
                        width={600}
                        height={800}
                        loading="eager"
                        aspectRatio="3:4"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      
                      {/* Badge flottant */}
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-gray-900">Fondateur & CEO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Diane Mamoudou
                      </h3>
                      <p className="text-xl text-primary-600 font-semibold mb-6">
                        Fondateur & CEO d'AGNexum
                      </p>
                      
                      {/* Expertise tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {['Agriculture durable', 'Innovation technologique', 'Développement rural', 'Leadership'].map((skill, index) => (
                          <span key={index} className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium border border-primary-200">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-8">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Diane Mamoudou est un entrepreneur visionnaire passionné par la transformation de l'agriculture africaine. 
                        Fort de son expérience dans le secteur agricole et technologique, il a fondé AGNexum avec la conviction 
                        que la technologie peut révolutionner l'accès aux équipements agricoles en Afrique de l'Ouest.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Sa vision est de créer un écosystème où chaque agriculteur, indépendamment de sa taille ou de ses moyens, 
                        peut accéder aux outils modernes nécessaires pour améliorer sa productivité et sa qualité de vie.
                      </p>
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="border-l-4 border-primary-500 pl-6 mb-8 italic text-gray-600 text-lg">
                      "L'agriculture est l'épine dorsale de l'Afrique. En démocratisant l'accès aux équipements modernes, 
                      nous donnons aux agriculteurs les moyens de nourrir le continent et de prospérer."
                    </blockquote>
                    
                    {/* Contact & Social */}
                    <div className="flex flex-wrap gap-3">
                      <a 
                        href="mailto:mdianecompt@gmail.com"
                        className="inline-flex"
                      >
                        <Button variant="primary" size="sm" icon={Mail}>
                          Contacter Diane
                        </Button>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/mamoudou-diane-623288228/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex"
                      >
                        <Button variant="outline" size="sm" icon={Linkedin}>
                          LinkedIn
                        </Button>
                      </a>
                      <Button variant="outline" size="sm" icon={Twitter}>
                        Twitter
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ces valeurs fondamentales guident chacune de nos actions et décisions chez AGNexum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} hover className="text-center group animate-fade-in">
                <CardBody className="p-8">
                  <div className={`w-16 h-16 ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre parcours
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les étapes clés qui ont marqué l'évolution d'AGNexum depuis sa création.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start mb-12 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-16 h-16 bg-primary-600 rounded-full items-center justify-center text-white font-bold text-lg shadow-medium mr-8 flex-shrink-0">
                    {milestone.year}
                  </div>
                  
                  {/* Content */}
                  <Card hover className="flex-1">
                    <CardBody className="p-6">
                      <div className="md:hidden mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-primary-600 text-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AGNexum en chiffres
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Des résultats concrets qui témoignent de notre impact sur l'agriculture africaine.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-responsive text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Rejoignez la révolution agricole
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Que vous soyez agriculteur, propriétaire d'équipement, fabricant ou investisseur, 
              AGNexum vous offre les outils pour transformer l'agriculture africaine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-lg">
                Rejoindre AGNexum
              </Button>
              <Button size="lg" variant="outline" className="shadow-sm">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};