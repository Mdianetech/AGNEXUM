# Guide de Déploiement - AGNexum

## Vue d'ensemble

Ce guide détaille le processus de déploiement de la plateforme AGNexum, de l'environnement de développement à la production.

## Architecture de Déploiement

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (Netlify)     │◄──►│   (Supabase)    │◄──►│   (PostgreSQL)  │
│   React/Vite    │    │   Edge Functions│    │   Supabase      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   CDN           │    │   File Storage  │    │   Monitoring    │
│   (Cloudflare)  │    │   (Supabase)    │    │   (Supabase)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Prérequis

### Outils Requis
- **Node.js** 18+ et npm
- **Git** pour le contrôle de version
- **Compte Supabase** (gratuit pour commencer)
- **Compte Netlify** (gratuit pour commencer)

### Comptes et Services
1. **Supabase** : https://supabase.com
2. **Netlify** : https://netlify.com
3. **Domaine** : Registrar de votre choix
4. **Email** : SendGrid ou service similaire
5. **Monitoring** : Optionnel (Sentry, LogRocket)

## Configuration de l'Environnement

### 1. Configuration Supabase

#### Création du Projet
```bash
# 1. Créer un nouveau projet sur https://supabase.com
# 2. Noter l'URL et les clés API
# 3. Configurer la base de données
```

#### Variables d'Environnement Supabase
```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

#### Configuration de la Base de Données

1. **Exécuter les migrations** :
```sql
-- Copier le contenu de docs/technical-architecture.md
-- Section "Schéma Principal" dans l'éditeur SQL Supabase
```

2. **Configurer RLS** :
```sql
-- Copier les politiques RLS depuis technical-architecture.md
```

3. **Créer les index** :
```sql
-- Copier les index depuis technical-architecture.md
```

#### Configuration de l'Authentification

Dans le dashboard Supabase > Authentication > Settings :

```json
{
  "site_url": "https://agnexum.com",
  "redirect_urls": [
    "https://agnexum.com/auth/callback",
    "http://localhost:3000/auth/callback"
  ],
  "jwt_expiry": 3600,
  "enable_signup": true,
  "enable_email_confirmations": false,
  "enable_phone_confirmations": false
}
```

#### Configuration du Storage

1. **Créer les buckets** :
```sql
-- Bucket pour les images d'équipements
INSERT INTO storage.buckets (id, name, public) 
VALUES ('equipment-images', 'equipment-images', true);

-- Bucket pour les avatars
INSERT INTO storage.buckets (id, name, public) 
VALUES ('avatars', 'avatars', true);

-- Bucket pour les documents
INSERT INTO storage.buckets (id, name, public) 
VALUES ('documents', 'documents', false);
```

2. **Configurer les politiques de storage** :
```sql
-- Politique pour les images d'équipements
CREATE POLICY "Anyone can view equipment images" ON storage.objects
FOR SELECT USING (bucket_id = 'equipment-images');

CREATE POLICY "Authenticated users can upload equipment images" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'equipment-images' AND auth.role() = 'authenticated');

-- Politique pour les avatars
CREATE POLICY "Anyone can view avatars" ON storage.objects
FOR SELECT USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload their own avatar" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
```

### 2. Configuration du Frontend

#### Variables d'Environnement
Créer `.env.local` :
```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# App Configuration
VITE_APP_NAME=AGNexum
VITE_APP_URL=https://agnexum.com
VITE_APP_VERSION=1.0.0

# External Services
VITE_GOOGLE_MAPS_API_KEY=your-google-maps-key
VITE_SENTRY_DSN=your-sentry-dsn

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHAT=true
```

#### Configuration Netlify
Créer `netlify.toml` :
```toml
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--production=false"

# Redirections pour SPA
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Headers de sécurité
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://your-project.supabase.co wss://your-project.supabase.co"

# Cache pour les assets
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## Processus de Déploiement

### 1. Déploiement de Développement

#### Setup Initial
```bash
# Cloner le repository
git clone https://github.com/your-org/agnexum.git
cd agnexum

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos valeurs

# Démarrer en développement
npm run dev
```

#### Tests Avant Déploiement
```bash
# Tests unitaires
npm run test

# Tests d'intégration
npm run test:integration

# Vérification TypeScript
npm run type-check

# Linting
npm run lint

# Build de test
npm run build
npm run preview
```

### 2. Déploiement de Staging

#### Configuration Netlify Staging
```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login Netlify
netlify login

# Créer le site de staging
netlify sites:create --name agnexum-staging

# Configurer les variables d'environnement
netlify env:set VITE_SUPABASE_URL "https://your-staging-project.supabase.co"
netlify env:set VITE_SUPABASE_ANON_KEY "your-staging-anon-key"
```

#### Déploiement Automatique
```bash
# Deploy vers staging
git push origin develop

# Ou déploiement manuel
netlify deploy --build --dir=dist
```

### 3. Déploiement de Production

#### Configuration Production
```bash
# Créer le site de production
netlify sites:create --name agnexum-prod

# Configurer le domaine personnalisé
netlify domains:add agnexum.com

# Configurer les variables d'environnement de production
netlify env:set VITE_SUPABASE_URL "https://your-prod-project.supabase.co"
netlify env:set VITE_SUPABASE_ANON_KEY "your-prod-anon-key"
netlify env:set VITE_APP_URL "https://agnexum.com"
netlify env:set VITE_ENABLE_ANALYTICS "true"
```

#### Déploiement Production
```bash
# Deploy vers production
git push origin main

# Ou déploiement manuel avec preview
netlify deploy --build --dir=dist
# Vérifier le preview, puis
netlify deploy --prod --build --dir=dist
```

## Configuration DNS et Domaine

### 1. Configuration DNS
```dns
# Enregistrements DNS pour agnexum.com
A     @     104.198.14.52
CNAME www   agnexum.netlify.app
CNAME api   your-project.supabase.co
```

### 2. Configuration SSL
```bash
# SSL automatique via Netlify
# Aucune configuration manuelle requise
# Certificat Let's Encrypt automatique
```

## Monitoring et Observabilité

### 1. Configuration Sentry (Optionnel)
```typescript
// src/utils/sentry.ts
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
  environment: import.meta.env.MODE,
  tracesSampleRate: 1.0,
});
```

### 2. Analytics Google (Optionnel)
```typescript
// src/utils/analytics.ts
import { gtag } from 'ga-gtag';

gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: document.title,
  page_location: window.location.href,
});
```

### 3. Monitoring Supabase
```sql
-- Créer une vue pour le monitoring
CREATE VIEW monitoring_stats AS
SELECT 
  'users' as table_name,
  COUNT(*) as total_count,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '24 hours') as daily_count
FROM users
UNION ALL
SELECT 
  'equipment' as table_name,
  COUNT(*) as total_count,
  COUNT(*) FILTER (WHERE created_at > NOW() - INTERVAL '24 hours') as daily_count
FROM equipment;
```

## Sauvegarde et Récupération

### 1. Sauvegarde Base de Données
```bash
# Sauvegarde automatique Supabase (incluse)
# Sauvegarde manuelle via CLI
supabase db dump --file backup.sql

# Restauration
supabase db reset --file backup.sql
```

### 2. Sauvegarde Code
```bash
# Repository Git (GitHub/GitLab)
# Branches protégées
# Tags pour les releases
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## Scripts de Déploiement

### 1. Script de Build Optimisé
```json
{
  "scripts": {
    "build:prod": "NODE_ENV=production vite build --mode production",
    "build:staging": "NODE_ENV=staging vite build --mode staging",
    "deploy:staging": "npm run build:staging && netlify deploy --dir=dist",
    "deploy:prod": "npm run build:prod && netlify deploy --prod --dir=dist",
    "health-check": "curl -f https://agnexum.com/health || exit 1"
  }
}
```

### 2. Script de Post-Déploiement
```bash
#!/bin/bash
# scripts/post-deploy.sh

echo "🚀 Post-deployment checks..."

# Health check
curl -f https://agnexum.com/health || exit 1

# Cache warming
curl -s https://agnexum.com/equipment > /dev/null

# Notification Slack (optionnel)
curl -X POST -H 'Content-type: application/json' \
  --data '{"text":"✅ AGNexum deployed successfully!"}' \
  $SLACK_WEBHOOK_URL

echo "✅ Deployment completed successfully!"
```

## Rollback et Récupération

### 1. Rollback Netlify
```bash
# Lister les déploiements
netlify sites:list

# Rollback vers un déploiement précédent
netlify rollback --site-id your-site-id
```

### 2. Rollback Base de Données
```bash
# Utiliser les sauvegardes automatiques Supabase
# Ou restaurer depuis un dump
supabase db reset --file backup-previous.sql
```

## Checklist de Déploiement

### Pré-Déploiement
- [ ] Tests passent (unit, integration, e2e)
- [ ] Build réussit sans erreurs
- [ ] Variables d'environnement configurées
- [ ] Migrations de DB appliquées
- [ ] Sauvegarde de la DB effectuée
- [ ] Documentation mise à jour

### Déploiement
- [ ] Deploy vers staging réussi
- [ ] Tests de smoke sur staging
- [ ] Validation métier sur staging
- [ ] Deploy vers production
- [ ] Health checks passent
- [ ] DNS et SSL fonctionnels

### Post-Déploiement
- [ ] Monitoring actif
- [ ] Logs vérifiés
- [ ] Performance acceptable
- [ ] Fonctionnalités critiques testées
- [ ] Équipe notifiée
- [ ] Documentation de release

## Troubleshooting

### Problèmes Courants

#### 1. Erreur de Build
```bash
# Vérifier les dépendances
npm ci

# Nettoyer le cache
npm run clean
rm -rf node_modules package-lock.json
npm install

# Vérifier les variables d'environnement
echo $VITE_SUPABASE_URL
```

#### 2. Erreur de Connexion DB
```bash
# Vérifier la connectivité
curl -I https://your-project.supabase.co

# Vérifier les clés API
# Dashboard Supabase > Settings > API
```

#### 3. Erreur SSL/DNS
```bash
# Vérifier la propagation DNS
dig agnexum.com
nslookup agnexum.com

# Vérifier le certificat SSL
openssl s_client -connect agnexum.com:443
```

### Logs et Debugging

#### 1. Logs Netlify
```bash
# Voir les logs de build
netlify logs --site-id your-site-id

# Logs en temps réel
netlify logs --live
```

#### 2. Logs Supabase
```sql
-- Logs d'authentification
SELECT * FROM auth.audit_log_entries 
ORDER BY created_at DESC 
LIMIT 100;

-- Logs d'API
-- Disponibles dans le dashboard Supabase
```

Ce guide couvre tous les aspects du déploiement de AGNexum. Pour des questions spécifiques ou des problèmes non couverts, consultez la documentation des services utilisés ou contactez l'équipe de développement.