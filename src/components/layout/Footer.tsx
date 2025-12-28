import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronUp, ChevronDown } from 'lucide-react';
import { FAQ } from '../common/FAQ';

export const Footer: React.FC = () => {
  const [showFAQ, setShowFAQ] = useState(false);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/F44_1sBCpvLpPZZTatsqp.jpg"
                alt="AGNexum Logo"
                className="h-10 w-auto object-contain filter brightness-0 invert"
                loading="lazy"
              />
              <span className="text-xl font-bold">AGNexum</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              La plateforme de référence pour la location de matériel agricole en Afrique de l'Ouest. 
              Connectez-vous avec des agriculteurs, propriétaires et fabricants pour moderniser l'agriculture.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-gray-300">contact@agnexum.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-gray-300">+224 621 000 000</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-gray-300">Conakry, Guinée</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/equipment" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Équipements
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Aide
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/for-farmers" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Pour les agriculteurs
                </Link>
              </li>
              <li>
                <Link to="/for-owners" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Pour les propriétaires
                </Link>
              </li>
              <li>
                <Link to="/for-manufacturers" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Pour les fabricants
                </Link>
              </li>
              <li>
                <Link to="/financing" className="text-gray-300 hover:text-primary-400 transition-colors">
                  Financement
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* FAQ Section - Discrète */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <button
            onClick={() => setShowFAQ(!showFAQ)}
            className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors mb-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg p-2 -m-2"
            aria-expanded={showFAQ}
          >
            <span className="text-sm font-medium">Questions fréquentes</span>
            {showFAQ ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
          
          {showFAQ && (
            <div className="animate-fade-in">
              <div className="bg-gray-800 rounded-xl p-6 mb-8">
                <FAQ />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 AGNexum. Tous droits réservés.
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          
          {/* Legal Links */}
          <div className="flex space-x-4 text-sm text-gray-400 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary-400 transition-colors">
              Confidentialité
            </Link>
            <Link to="/terms" className="hover:text-primary-400 transition-colors">
              Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};