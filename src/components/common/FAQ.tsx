import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Card, CardBody } from '../ui/Card';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Comment fonctionne la location d'équipement sur AGNexum ?",
    answer: "Recherchez l'équipement dont vous avez besoin, contactez le propriétaire, négociez les conditions et finalisez la réservation. Nous facilitons la mise en relation et sécurisons les transactions."
  },
  {
    question: "Les équipements sont-ils assurés ?",
    answer: "Oui, la plupart de nos équipements sont couverts par une assurance. Les détails de couverture sont indiqués sur chaque fiche d'équipement."
  },
  {
    question: "Comment puis-je devenir propriétaire sur la plateforme ?",
    answer: "Créez un compte, ajoutez le rôle 'Propriétaire d'équipement' et soumettez vos équipements avec photos et descriptions détaillées. Notre équipe vérifiera vos informations."
  },
  {
    question: "Quels sont les modes de paiement acceptés ?",
    answer: "Nous acceptons les paiements par mobile money, virement bancaire et espèces selon les arrangements avec le propriétaire."
  },
  {
    question: "Que faire en cas de problème avec un équipement loué ?",
    answer: "Contactez immédiatement notre support client via la messagerie intégrée. Nous médierons entre vous et le propriétaire pour résoudre rapidement tout problème."
  },
  {
    question: "Y a-t-il des frais de service ?",
    answer: "AGNexum prélève une petite commission sur chaque transaction réussie pour maintenir et améliorer la plateforme. Les tarifs sont transparents et affichés avant confirmation."
  }
];

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full">
      <div className="flex items-center space-x-2 mb-6">
        <HelpCircle className="h-5 w-5 text-primary-600" />
        <h3 className="text-lg font-semibold text-gray-900">Questions fréquentes</h3>
      </div>
      
      <div className="space-y-3">
        {faqData.map((item, index) => (
          <Card key={index} className="border border-gray-100 hover:border-gray-200 transition-colors">
            <CardBody className="p-0">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-expanded={openItems.includes(index)}
              >
                <span className="text-sm font-medium text-gray-900 pr-4">
                  {item.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-4 pb-4 animate-fade-in">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </CardBody>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          Vous ne trouvez pas votre réponse ?{' '}
          <a 
            href="mailto:support@agnexum.com" 
            className="text-primary-600 hover:text-primary-700 transition-colors"
          >
            Contactez notre support
          </a>
        </p>
      </div>
    </div>
  );
};