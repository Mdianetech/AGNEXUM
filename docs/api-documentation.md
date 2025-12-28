# Documentation API - AGNexum

## Vue d'ensemble

L'API AGNexum est une API REST qui permet d'interagir avec tous les services de la plateforme. Elle est construite avec Supabase et utilise PostgreSQL comme base de données.

**Base URL** : `https://your-project.supabase.co/rest/v1/`
**Authentication** : Bearer Token (JWT)

## Authentification

### Inscription

```http
POST /auth/v1/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword",
  "data": {
    "name": "John Doe",
    "phone": "+224621123456",
    "location": "Conakry, Guinée",
    "roles": ["farmer"]
  }
}
```

**Réponse** :
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "bearer",
  "expires_in": 3600,
  "refresh_token": "...",
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "user_metadata": {
      "name": "John Doe",
      "phone": "+224621123456",
      "location": "Conakry, Guinée",
      "roles": ["farmer"]
    }
  }
}
```

### Connexion

```http
POST /auth/v1/token?grant_type=password
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "securepassword"
}
```

### Rafraîchissement du Token

```http
POST /auth/v1/token?grant_type=refresh_token
Content-Type: application/json

{
  "refresh_token": "your_refresh_token"
}
```

## Utilisateurs

### Obtenir le profil utilisateur

```http
GET /users?id=eq.{user_id}
Authorization: Bearer {access_token}
```

**Réponse** :
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "name": "John Doe",
  "phone": "+224621123456",
  "location": "Conakry, Guinée",
  "avatar": "https://...",
  "roles": ["farmer"],
  "rating": 4.5,
  "review_count": 12,
  "verified": true,
  "join_date": "2024-01-15T10:00:00Z",
  "created_at": "2024-01-15T10:00:00Z",
  "updated_at": "2024-01-15T10:00:00Z"
}
```

### Mettre à jour le profil

```http
PATCH /users?id=eq.{user_id}
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "name": "John Doe Updated",
  "location": "Kindia, Guinée",
  "description": "Agriculteur expérimenté..."
}
```

## Équipements

### Lister les équipements

```http
GET /equipment?select=*,owner:users(name,rating,verified)&available=eq.true&status=eq.active
Authorization: Bearer {access_token}
```

**Paramètres de requête** :
- `category` : Filtrer par catégorie
- `location` : Filtrer par localisation (ilike)
- `daily_rate` : Filtrer par prix (gte, lte)
- `brand` : Filtrer par marque
- `available` : Filtrer par disponibilité
- `limit` : Nombre de résultats (défaut: 20)
- `offset` : Décalage pour la pagination

**Réponse** :
```json
[
  {
    "id": "uuid",
    "title": "Tracteur John Deere 5055E",
    "description": "Tracteur polyvalent...",
    "category": "tractors",
    "type": "Tracteur",
    "brand": "John Deere",
    "model": "5055E",
    "year": 2020,
    "condition": "excellent",
    "images": ["https://..."],
    "daily_rate": 50000,
    "weekly_rate": 300000,
    "monthly_rate": 1000000,
    "location": "Kindia, Guinée",
    "available": true,
    "features": ["4WD", "Cabine climatisée"],
    "rating": 4.8,
    "review_count": 12,
    "specifications": {
      "puissance": "55 CV",
      "transmission": "Hydrostatic"
    },
    "status": "active",
    "insurance_covered": true,
    "delivery_options": [
      {
        "type": "both",
        "cost": 25000,
        "radius": 50
      }
    ],
    "owner": {
      "name": "Fatima Sylla",
      "rating": 4.9,
      "verified": true
    },
    "created_at": "2024-01-20T10:00:00Z",
    "updated_at": "2024-01-20T10:00:00Z"
  }
]
```

### Obtenir un équipement spécifique

```http
GET /equipment?id=eq.{equipment_id}&select=*,owner:users(name,rating,verified,phone),reviews(rating,comment,reviewer:users(name))
Authorization: Bearer {access_token}
```

### Ajouter un équipement (Propriétaires uniquement)

```http
POST /equipment
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "title": "Tracteur John Deere 5055E",
  "description": "Tracteur polyvalent de 55 CV...",
  "category": "tractors",
  "type": "Tracteur",
  "brand": "John Deere",
  "model": "5055E",
  "year": 2020,
  "condition": "excellent",
  "images": ["https://..."],
  "daily_rate": 50000,
  "weekly_rate": 300000,
  "monthly_rate": 1000000,
  "location": "Kindia, Guinée",
  "features": ["4WD", "Cabine climatisée"],
  "specifications": {
    "puissance": "55 CV",
    "transmission": "Hydrostatic"
  },
  "insurance_covered": true,
  "delivery_options": [
    {
      "type": "both",
      "cost": 25000,
      "radius": 50
    }
  ]
}
```

### Mettre à jour un équipement

```http
PATCH /equipment?id=eq.{equipment_id}&owner_id=eq.{user_id}
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "daily_rate": 55000,
  "available": false
}
```

### Supprimer un équipement

```http
DELETE /equipment?id=eq.{equipment_id}&owner_id=eq.{user_id}
Authorization: Bearer {access_token}
```

## Réservations

### Lister les réservations de l'utilisateur

```http
GET /bookings?select=*,equipment(*,owner:users(name,phone)),farmer:users(name,phone)&or=(farmer_id.eq.{user_id},equipment.owner_id.eq.{user_id})
Authorization: Bearer {access_token}
```

**Réponse** :
```json
[
  {
    "id": "uuid",
    "start_date": "2024-12-25",
    "end_date": "2024-12-31",
    "total_cost": 300000,
    "commission": 24000,
    "status": "confirmed",
    "message": "J'ai besoin du tracteur pour préparer mes champs",
    "payment_status": "paid",
    "delivery_method": "delivery",
    "delivery_address": "Ferme Diallo, Route de Dubréka",
    "equipment": {
      "id": "uuid",
      "title": "Tracteur John Deere 5055E",
      "images": ["https://..."],
      "owner": {
        "name": "Fatima Sylla",
        "phone": "+224664789012"
      }
    },
    "farmer": {
      "name": "Mamadou Diallo",
      "phone": "+224621123456"
    },
    "created_at": "2024-12-20T10:00:00Z"
  }
]
```

### Créer une réservation

```http
POST /bookings
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "equipment_id": "uuid",
  "start_date": "2024-12-25",
  "end_date": "2024-12-31",
  "total_cost": 300000,
  "commission": 24000,
  "message": "J'ai besoin du tracteur pour préparer mes champs",
  "delivery_method": "delivery",
  "delivery_address": "Ferme Diallo, Route de Dubréka"
}
```

### Mettre à jour le statut d'une réservation

```http
PATCH /bookings?id=eq.{booking_id}
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "status": "confirmed"
}
```

## Avis et Évaluations

### Lister les avis d'un équipement

```http
GET /reviews?target_id=eq.{equipment_id}&target_type=eq.equipment&select=*,reviewer:users(name,avatar)
Authorization: Bearer {access_token}
```

**Réponse** :
```json
[
  {
    "id": "uuid",
    "rating": 5,
    "comment": "Excellent tracteur, très bien entretenu.",
    "helpful": 8,
    "reported": false,
    "reviewer": {
      "name": "Mamadou Diallo",
      "avatar": "https://..."
    },
    "created_at": "2024-11-15T10:00:00Z"
  }
]
```

### Ajouter un avis

```http
POST /reviews
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "booking_id": "uuid",
  "target_id": "uuid",
  "target_type": "equipment",
  "rating": 5,
  "comment": "Excellent tracteur, très bien entretenu."
}
```

## Messages et Conversations

### Lister les conversations

```http
GET /conversations?participants=cs.{user_id}&select=*,participants:users(name,avatar),last_message:messages(content,created_at)
Authorization: Bearer {access_token}
```

### Obtenir les messages d'une conversation

```http
GET /messages?conversation_id=eq.{conversation_id}&select=*,sender:users(name,avatar)&order=created_at.desc
Authorization: Bearer {access_token}
```

### Envoyer un message

```http
POST /messages
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "conversation_id": "uuid",
  "content": "Bonjour, est-ce que le tracteur est toujours disponible ?",
  "attachments": []
}
```

### Créer une conversation

```http
POST /conversations
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "participants": ["uuid1", "uuid2"],
  "type": "rental",
  "related_id": "equipment_uuid"
}
```

## Produits (Fabricants)

### Lister les produits

```http
GET /products?select=*,manufacturer:users(name,company_name)&availability=eq.in_stock
Authorization: Bearer {access_token}
```

### Ajouter un produit

```http
POST /products
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "name": "Tracteur New Holland T4.75",
  "description": "Tracteur compact et polyvalent...",
  "category": "tractors",
  "images": ["https://..."],
  "specifications": {
    "puissance": "75 CV",
    "transmission": "Mécanique 12x12"
  },
  "price": 25000000,
  "currency": "GNF",
  "availability": "in_stock",
  "features": ["4WD", "Cabine ROPS"],
  "warranty": "2 ans pièces et main d'œuvre"
}
```

## Devis

### Lister les devis

```http
GET /quotes?select=*,product(*,manufacturer:users(name,company_name)),buyer:users(name,location)&or=(buyer_id.eq.{user_id},manufacturer_id.eq.{user_id})
Authorization: Bearer {access_token}
```

### Créer une demande de devis

```http
POST /quotes
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "product_id": "uuid",
  "manufacturer_id": "uuid",
  "quantity": 3,
  "customizations": "Cabine climatisée, pneus larges",
  "financing_requested": true
}
```

### Répondre à un devis

```http
PATCH /quotes?id=eq.{quote_id}&manufacturer_id=eq.{user_id}
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "status": "responded",
  "quoted_price": 72000000,
  "valid_until": "2025-01-31",
  "notes": "Prix spécial pour commande groupée."
}
```

## Financement

### Lister les offres de financement

```http
GET /financing_offers?active=eq.true&select=*,funder:users(name,company_name)
Authorization: Bearer {access_token}
```

### Créer une demande de financement

```http
POST /financing_requests
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "type": "equipment_purchase",
  "amount": 72000000,
  "currency": "GNF",
  "purpose": "Acquisition de 3 tracteurs pour moderniser la coopérative",
  "business_plan": "Plan de développement sur 5 ans",
  "related_id": "quote_uuid"
}
```

### Faire une proposition de financement

```http
POST /financing_proposals
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "financing_request_id": "uuid",
  "amount": 72000000,
  "interest_rate": 12.5,
  "term": 60,
  "conditions": "Garantie personnelle requise"
}
```

## Upload de Fichiers

### Upload d'image

```http
POST /storage/v1/object/equipment-images/{filename}
Authorization: Bearer {access_token}
Content-Type: image/jpeg

[binary data]
```

**Réponse** :
```json
{
  "Key": "equipment-images/filename.jpg",
  "Id": "uuid"
}
```

### Obtenir l'URL publique

```http
GET /storage/v1/object/public/equipment-images/{filename}
```

## Notifications

### Lister les notifications

```http
GET /notifications?user_id=eq.{user_id}&order=created_at.desc
Authorization: Bearer {access_token}
```

### Marquer comme lu

```http
PATCH /notifications?id=eq.{notification_id}&user_id=eq.{user_id}
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "read": true
}
```

## Recherche Avancée

### Recherche textuelle

```http
GET /equipment?or=(title.ilike.*{query}*,description.ilike.*{query}*,brand.ilike.*{query}*)&available=eq.true
Authorization: Bearer {access_token}
```

### Recherche géographique

```http
GET /equipment?location.ilike.*{location}*&available=eq.true
Authorization: Bearer {access_token}
```

### Recherche avec filtres multiples

```http
GET /equipment?category=eq.tractors&daily_rate=gte.30000&daily_rate=lte.80000&available=eq.true&select=*,owner:users(name,rating)
Authorization: Bearer {access_token}
```

## Codes d'Erreur

### Erreurs d'Authentification
- `401 Unauthorized` : Token manquant ou invalide
- `403 Forbidden` : Permissions insuffisantes

### Erreurs de Validation
- `400 Bad Request` : Données invalides
- `422 Unprocessable Entity` : Erreur de validation

### Erreurs de Ressource
- `404 Not Found` : Ressource non trouvée
- `409 Conflict` : Conflit de données

### Erreurs Serveur
- `500 Internal Server Error` : Erreur serveur
- `503 Service Unavailable` : Service temporairement indisponible

## Limites et Quotas

- **Rate Limiting** : 100 requêtes par minute par utilisateur
- **Taille des uploads** : 10MB maximum par fichier
- **Pagination** : 100 éléments maximum par page
- **Recherche** : 1000 caractères maximum par requête

## Webhooks

### Configuration des Webhooks

Les webhooks peuvent être configurés pour recevoir des notifications en temps réel :

```http
POST /webhooks
Authorization: Bearer {access_token}
Content-Type: application/json

{
  "url": "https://your-app.com/webhooks/agnexum",
  "events": ["booking.created", "booking.confirmed", "payment.completed"],
  "secret": "your_webhook_secret"
}
```

### Événements Disponibles

- `booking.created` : Nouvelle réservation créée
- `booking.confirmed` : Réservation confirmée
- `booking.cancelled` : Réservation annulée
- `payment.completed` : Paiement effectué
- `review.created` : Nouvel avis ajouté
- `message.received` : Nouveau message reçu

### Format des Webhooks

```json
{
  "event": "booking.created",
  "data": {
    "id": "uuid",
    "equipment_id": "uuid",
    "farmer_id": "uuid",
    "start_date": "2024-12-25",
    "end_date": "2024-12-31",
    "total_cost": 300000,
    "status": "pending"
  },
  "timestamp": "2024-12-20T10:00:00Z"
}
```

Cette documentation couvre les principales fonctionnalités de l'API AGNexum. Pour des cas d'usage spécifiques ou des questions techniques, consultez la documentation Supabase ou contactez l'équipe de développement.