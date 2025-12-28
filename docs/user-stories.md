# User Stories - AGNexum

## Table des Matières

1. [Agriculteurs (Farmers)](#agriculteurs-farmers)
2. [Propriétaires d'Équipements (Owners)](#propriétaires-déquipements-owners)
3. [Fabricants (Manufacturers)](#fabricants-manufacturers)
4. [Acheteurs (Buyers)](#acheteurs-buyers)
5. [Financeurs (Funders)](#financeurs-funders)
6. [Administrateurs (Admins)](#administrateurs-admins)

---

## Agriculteurs (Farmers)

### Authentification et Profil

**US-F001** : En tant qu'agriculteur, je veux créer un compte pour accéder à la plateforme
- **Critères d'acceptation** :
  - Je peux m'inscrire avec email, nom, téléphone et localisation
  - Je reçois un email de confirmation
  - Mon profil est créé avec le rôle "agriculteur"
  - Je peux me connecter après validation

**US-F002** : En tant qu'agriculteur, je veux compléter mon profil pour inspirer confiance
- **Critères d'acceptation** :
  - Je peux ajouter une photo de profil
  - Je peux décrire mon exploitation agricole
  - Je peux indiquer mes cultures principales
  - Je peux ajouter des documents de vérification

### Recherche et Découverte

**US-F003** : En tant qu'agriculteur, je veux rechercher des équipements par catégorie
- **Critères d'acceptation** :
  - Je vois les catégories principales (tracteurs, moissonneuses, etc.)
  - Je peux filtrer par catégorie
  - Les résultats sont pertinents et bien organisés
  - Je peux sauvegarder mes recherches favorites

**US-F004** : En tant qu'agriculteur, je veux filtrer les équipements par localisation
- **Critères d'acceptation** :
  - Je peux rechercher par ville ou région
  - Je peux définir un rayon de recherche
  - La distance est affichée pour chaque équipement
  - Je peux trier par proximité

**US-F005** : En tant qu'agriculteur, je veux filtrer par prix et disponibilité
- **Critères d'acceptation** :
  - Je peux définir une fourchette de prix
  - Je peux sélectionner des dates de disponibilité
  - Seuls les équipements disponibles sont affichés
  - Les prix sont clairs (jour/semaine/mois)

**US-F006** : En tant qu'agriculteur, je veux voir les détails d'un équipement
- **Critères d'acceptation** :
  - Je vois toutes les photos de l'équipement
  - Les spécifications techniques sont détaillées
  - L'état de l'équipement est clairement indiqué
  - Je vois les avis d'autres utilisateurs

### Réservation et Location

**US-F007** : En tant qu'agriculteur, je veux réserver un équipement
- **Critères d'acceptation** :
  - Je peux sélectionner les dates de location
  - Le prix total est calculé automatiquement
  - Je peux ajouter un message au propriétaire
  - Ma demande est envoyée au propriétaire

**US-F008** : En tant qu'agriculteur, je veux négocier les conditions de location
- **Critères d'acceptation** :
  - Je peux échanger avec le propriétaire via la messagerie
  - Je peux proposer un prix différent
  - Je peux demander des modifications aux dates
  - L'historique des négociations est conservé

**US-F009** : En tant qu'agriculteur, je veux payer ma location en ligne
- **Critères d'acceptation** :
  - Je peux payer par mobile money (Orange, MTN)
  - Je peux payer par carte bancaire
  - Le paiement est sécurisé
  - Je reçois une confirmation de paiement

**US-F010** : En tant qu'agriculteur, je veux organiser la livraison/récupération
- **Critères d'acceptation** :
  - Je peux choisir entre livraison et récupération
  - Les frais de livraison sont transparents
  - Je peux coordonner l'horaire avec le propriétaire
  - Je reçois les informations de contact

### Gestion des Locations

**US-F011** : En tant qu'agriculteur, je veux suivre mes réservations
- **Critères d'acceptation** :
  - Je vois toutes mes réservations (passées, actuelles, futures)
  - Le statut de chaque réservation est clair
  - Je peux voir les détails de chaque location
  - Je reçois des notifications pour les échéances

**US-F012** : En tant qu'agriculteur, je veux prolonger une location
- **Critères d'acceptation** :
  - Je peux demander une prolongation depuis mon dashboard
  - Le propriétaire reçoit ma demande
  - Le prix supplémentaire est calculé
  - La prolongation est confirmée après accord

**US-F013** : En tant qu'agriculteur, je veux signaler un problème
- **Critères d'acceptation** :
  - Je peux signaler un problème technique
  - Je peux joindre des photos
  - Le propriétaire et le support sont notifiés
  - Un suivi du problème est assuré

### Communication et Avis

**US-F014** : En tant qu'agriculteur, je veux communiquer avec les propriétaires
- **Critères d'acceptation** :
  - Je peux envoyer des messages directs
  - Je reçois des notifications de nouveaux messages
  - L'historique des conversations est conservé
  - Je peux joindre des photos ou documents

**US-F015** : En tant qu'agriculteur, je veux laisser des avis sur les équipements
- **Critères d'acceptation** :
  - Je peux noter l'équipement sur 5 étoiles
  - Je peux laisser un commentaire détaillé
  - Je peux évaluer différents critères (état, performance, etc.)
  - Mon avis est publié après modération

**US-F016** : En tant qu'agriculteur, je veux évaluer les propriétaires
- **Critères d'acceptation** :
  - Je peux noter la qualité du service
  - Je peux évaluer la communication
  - Je peux recommander ou non le propriétaire
  - Mon évaluation influence la réputation

### Dashboard et Statistiques

**US-F017** : En tant qu'agriculteur, je veux voir un tableau de bord personnalisé
- **Critères d'acceptation** :
  - Je vois mes statistiques d'utilisation
  - Je vois mes dépenses et économies réalisées
  - Je vois mes réservations à venir
  - Je peux accéder rapidement aux actions principales

**US-F018** : En tant qu'agriculteur, je veux suivre mes dépenses
- **Critères d'acceptation** :
  - Je vois l'historique de mes paiements
  - Je peux télécharger des factures
  - Je vois une analyse de mes dépenses par période
  - Je peux comparer avec les coûts d'achat

---

## Propriétaires d'Équipements (Owners)

### Gestion des Équipements

**US-O001** : En tant que propriétaire, je veux ajouter mes équipements
- **Critères d'acceptation** :
  - Je peux créer une fiche détaillée pour chaque équipement
  - Je peux uploader plusieurs photos de qualité
  - Je peux définir les tarifs (jour/semaine/mois)
  - Je peux indiquer la localisation précise

**US-O002** : En tant que propriétaire, je veux gérer la disponibilité
- **Critères d'acceptation** :
  - Je peux bloquer des périodes d'indisponibilité
  - Je peux mettre à jour le calendrier en temps réel
  - Les agriculteurs voient la disponibilité actuelle
  - Je reçois des notifications pour les demandes

**US-O003** : En tant que propriétaire, je veux modifier mes équipements
- **Critères d'acceptation** :
  - Je peux mettre à jour les informations
  - Je peux changer les photos
  - Je peux ajuster les tarifs
  - Je peux marquer un équipement en maintenance

**US-O004** : En tant que propriétaire, je veux définir mes conditions de location
- **Critères d'acceptation** :
  - Je peux définir une durée minimale de location
  - Je peux exiger une caution
  - Je peux spécifier les conditions d'utilisation
  - Je peux définir les frais de livraison

### Gestion des Demandes

**US-O005** : En tant que propriétaire, je veux recevoir les demandes de location
- **Critères d'acceptation** :
  - Je reçois une notification pour chaque demande
  - Je vois le profil de l'agriculteur demandeur
  - Je peux voir l'historique et les avis de l'agriculteur
  - Je peux accepter ou refuser la demande

**US-O006** : En tant que propriétaire, je veux négocier avec les agriculteurs
- **Critères d'acceptation** :
  - Je peux proposer des modifications aux conditions
  - Je peux ajuster le prix selon la durée
  - Je peux proposer des dates alternatives
  - L'accord final est documenté

**US-O007** : En tant que propriétaire, je veux valider les locations
- **Critères d'acceptation** :
  - Je confirme la remise de l'équipement
  - Je peux faire un état des lieux avec photos
  - Je confirme la récupération de l'équipement
  - Je signale d'éventuels dommages

### Revenus et Paiements

**US-O008** : En tant que propriétaire, je veux suivre mes revenus
- **Critères d'acceptation** :
  - Je vois mes revenus par équipement
  - Je vois l'évolution mensuelle de mes gains
  - Je peux télécharger des rapports financiers
  - Je vois les commissions prélevées par la plateforme

**US-O009** : En tant que propriétaire, je veux recevoir mes paiements
- **Critères d'acceptation** :
  - Je reçois les paiements après chaque location
  - Les virements sont automatiques
  - Je peux choisir mon mode de paiement préféré
  - Je reçois des notifications de paiement

**US-O010** : En tant que propriétaire, je veux optimiser ma rentabilité
- **Critères d'acceptation** :
  - Je vois le taux d'occupation de mes équipements
  - Je reçois des suggestions de prix
  - Je vois les équipements les plus demandés
  - Je peux analyser la saisonnalité

### Communication et Support

**US-O011** : En tant que propriétaire, je veux communiquer avec les agriculteurs
- **Critères d'acceptation** :
  - Je peux répondre aux questions avant location
  - Je peux donner des conseils d'utilisation
  - Je peux coordonner la logistique
  - Je maintiens un historique des échanges

**US-O012** : En tant que propriétaire, je veux gérer les problèmes
- **Critères d'acceptation** :
  - Je reçois les signalements de problèmes
  - Je peux proposer des solutions
  - Je peux faire intervenir un technicien
  - Je peux offrir une compensation si nécessaire

---

## Fabricants (Manufacturers)

### Catalogue Produits

**US-M001** : En tant que fabricant, je veux créer mon catalogue de produits
- **Critères d'acceptation** :
  - Je peux ajouter des produits avec spécifications détaillées
  - Je peux organiser mes produits par catégories
  - Je peux uploader des brochures et vidéos
  - Je peux indiquer les prix et disponibilités

**US-M002** : En tant que fabricant, je veux mettre en avant mes nouveautés
- **Critères d'acceptation** :
  - Je peux marquer des produits comme "nouveautés"
  - Je peux créer des promotions temporaires
  - Je peux envoyer des newsletters aux prospects
  - Je peux programmer des lancements de produits

**US-M003** : En tant que fabricant, je veux gérer mon stock et mes prix
- **Critères d'acceptation** :
  - Je peux mettre à jour les disponibilités en temps réel
  - Je peux ajuster les prix selon les marchés
  - Je peux gérer les précommandes
  - Je peux définir des prix dégressifs par quantité

### Gestion des Devis

**US-M004** : En tant que fabricant, je veux recevoir des demandes de devis
- **Critères d'acceptation** :
  - Je reçois les demandes avec les détails du besoin
  - Je vois le profil de l'acheteur potentiel
  - Je peux voir l'historique des achats du prospect
  - Je suis notifié en temps réel des nouvelles demandes

**US-M005** : En tant que fabricant, je veux créer des devis personnalisés
- **Critères d'acceptation** :
  - Je peux adapter les spécifications aux besoins
  - Je peux proposer des options et accessoires
  - Je peux définir des conditions de paiement
  - Je peux inclure les garanties et services

**US-M006** : En tant que fabricant, je veux suivre mes devis
- **Critères d'acceptation** :
  - Je vois le statut de chaque devis (en attente, accepté, refusé)
  - Je peux relancer les prospects
  - Je peux modifier un devis avant acceptation
  - Je vois mon taux de conversion

### Relation Client

**US-M007** : En tant que fabricant, je veux gérer ma relation client
- **Critères d'acceptation** :
  - Je peux segmenter mes prospects par profil
  - Je peux créer des campagnes marketing ciblées
  - Je peux suivre l'historique des interactions
  - Je peux programmer des rappels de suivi

**US-M008** : En tant que fabricant, je veux proposer du financement
- **Critères d'acceptation** :
  - Je peux orienter vers des partenaires financiers
  - Je peux proposer des facilités de paiement
  - Je peux gérer les dossiers de financement
  - Je peux suivre les approbations

### Analytics et Reporting

**US-M009** : En tant que fabricant, je veux analyser mes performances
- **Critères d'acceptation** :
  - Je vois les produits les plus consultés
  - Je vois les régions les plus actives
  - Je peux analyser les tendances saisonnières
  - Je vois l'évolution de mes ventes

**US-M010** : En tant que fabricant, je veux optimiser ma présence
- **Critères d'acceptation** :
  - Je vois le classement de mes produits dans les recherches
  - Je reçois des suggestions d'amélioration
  - Je peux voir les avis et commentaires
  - Je peux répondre aux questions publiques

---

## Acheteurs (Buyers)

### Recherche et Comparaison

**US-B001** : En tant qu'acheteur, je veux rechercher des équipements neufs
- **Critères d'acceptation** :
  - Je peux filtrer par catégorie, marque, prix
  - Je peux comparer plusieurs produits côte à côte
  - Je vois les spécifications techniques détaillées
  - Je peux sauvegarder mes recherches

**US-B002** : En tant qu'acheteur, je veux demander des devis groupés
- **Critères d'acceptation** :
  - Je peux demander des devis à plusieurs fabricants
  - Je peux spécifier mes besoins précis
  - Je peux indiquer les quantités souhaitées
  - Je reçois les réponses de manière centralisée

**US-B003** : En tant qu'acheteur, je veux évaluer les fabricants
- **Critères d'acceptation** :
  - Je vois les avis d'autres acheteurs
  - Je vois l'historique et la réputation du fabricant
  - Je peux contacter des références
  - Je vois les certifications et labels

### Gestion des Achats

**US-B004** : En tant qu'acheteur, je veux négocier les conditions
- **Critères d'acceptation** :
  - Je peux négocier les prix pour des achats groupés
  - Je peux demander des conditions de paiement spéciales
  - Je peux négocier les délais de livraison
  - Je peux demander des services additionnels

**US-B005** : En tant qu'acheteur, je veux gérer mes commandes
- **Critères d'acceptation** :
  - Je vois le statut de mes commandes en temps réel
  - Je reçois des notifications aux étapes clés
  - Je peux suivre les livraisons
  - Je peux gérer les réclamations

### Financement

**US-B006** : En tant qu'acheteur, je veux accéder au financement
- **Critères d'acceptation** :
  - Je peux faire une demande de financement intégrée
  - Je vois les offres de financement disponibles
  - Je peux simuler mes mensualités
  - Je peux suivre l'avancement de mon dossier

---

## Financeurs (Funders)

### Gestion des Offres

**US-FU001** : En tant que financeur, je veux créer mes offres de financement
- **Critères d'acceptation** :
  - Je peux définir les conditions de mes prêts
  - Je peux cibler des profils spécifiques
  - Je peux définir les montants min/max
  - Je peux spécifier les garanties requises

**US-FU002** : En tant que financeur, je veux recevoir des demandes qualifiées
- **Critères d'acceptation** :
  - Je reçois des demandes correspondant à mes critères
  - Je vois le profil complet du demandeur
  - Je peux accéder aux documents justificatifs
  - Je peux évaluer la solvabilité

### Évaluation et Décision

**US-FU003** : En tant que financeur, je veux évaluer les dossiers
- **Critères d'acceptation** :
  - Je peux utiliser mes grilles d'évaluation
  - Je peux demander des informations complémentaires
  - Je peux consulter l'historique de crédit
  - Je peux faire des contre-propositions

**US-FU004** : En tant que financeur, je veux gérer mon portefeuille
- **Critères d'acceptation** :
  - Je vois tous mes prêts en cours
  - Je peux suivre les remboursements
  - Je peux gérer les impayés
  - Je vois la performance de mon portefeuille

---

## Administrateurs (Admins)

### Gestion de la Plateforme

**US-A001** : En tant qu'administrateur, je veux modérer le contenu
- **Critères d'acceptation** :
  - Je peux valider les nouveaux équipements
  - Je peux modérer les avis et commentaires
  - Je peux suspendre des comptes problématiques
  - Je peux gérer les signalements

**US-A002** : En tant qu'administrateur, je veux analyser l'activité
- **Critères d'acceptation** :
  - Je vois les statistiques d'utilisation
  - Je peux identifier les tendances
  - Je peux détecter les anomalies
  - Je peux générer des rapports

**US-A003** : En tant qu'administrateur, je veux gérer les litiges
- **Critères d'acceptation** :
  - Je reçois les signalements de problèmes
  - Je peux médier entre les parties
  - Je peux prendre des décisions arbitrales
  - Je peux appliquer des sanctions

### Support et Maintenance

**US-A004** : En tant qu'administrateur, je veux fournir du support
- **Critères d'acceptation** :
  - Je peux répondre aux tickets de support
  - Je peux accéder aux comptes pour diagnostic
  - Je peux résoudre les problèmes techniques
  - Je peux escalader vers l'équipe technique

**US-A005** : En tant qu'administrateur, je veux maintenir la qualité
- **Critères d'acceptation** :
  - Je peux vérifier l'identité des utilisateurs
  - Je peux valider les équipements ajoutés
  - Je peux contrôler la qualité des photos
  - Je peux maintenir les standards de la plateforme

Ces user stories couvrent l'ensemble des fonctionnalités nécessaires pour chaque type d'utilisateur de la plateforme AGNexum, en se concentrant sur leurs besoins spécifiques et les valeurs qu'ils recherchent.