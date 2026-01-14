# Cahier des Charges Design - AGNexum

## Table des Matières

1. [Vue d'ensemble](#1-vue-densemble)
2. [Identité Visuelle](#2-identité-visuelle)
3. [Système de Couleurs](#3-système-de-couleurs)
4. [Typographie](#4-typographie)
5. [Espacements et Grilles](#5-espacements-et-grilles)
6. [Composants UI](#6-composants-ui)
7. [Icônes et Pictogrammes](#7-icônes-et-pictogrammes)
8. [Images et Médias](#8-images-et-médias)
9. [Animations et Transitions](#9-animations-et-transitions)
10. [Responsive Design](#10-responsive-design)
11. [Accessibilité](#11-accessibilité)
12. [États et Feedback](#12-états-et-feedback)
13. [Design Patterns](#13-design-patterns)
14. [Guidelines d'Utilisation](#14-guidelines-dutilisation)

---

## 1. Vue d'ensemble

### 1.1 Vision Design

AGNexum incarne la modernité de l'agriculture africaine à travers un design :
- **Naturel et accueillant** : Inspire la confiance et la croissance
- **Moderne et efficace** : Reflète l'innovation technologique
- **Accessible et inclusif** : Adapté à tous les niveaux d'alphabétisation numérique
- **Culturellement pertinent** : Respecte les valeurs locales africaines

### 1.2 Principes de Design

#### 1.2.1 Clarté
- Interface épurée et sans distraction
- Hiérarchie visuelle évidente
- Actions principales toujours visibles

#### 1.2.2 Efficacité
- Chemins utilisateur optimisés
- Interactions minimales pour actions principales
- Feedback immédiat sur chaque action

#### 1.2.3 Confiance
- Design professionnel et soigné
- Transparence des informations
- Cohérence à travers toute l'expérience

#### 1.2.4 Inclusivité
- Support multi-appareils
- Accessibilité WCAG 2.1 AA
- Adaptation culturelle et linguistique

### 1.3 Public Cible

#### Profils Utilisateurs
1. **Agriculteurs ruraux** (35-55 ans)
   - Familiarité limitée avec le digital
   - Utilisation principalement mobile
   - Besoin de simplicité maximale

2. **Jeunes agriculteurs** (25-35 ans)
   - À l'aise avec la technologie
   - Attentes d'interface moderne
   - Utilisent mobile et desktop

3. **Propriétaires d'équipements** (30-50 ans)
   - Besoin d'outils de gestion performants
   - Utilisation régulière de la plateforme
   - Mix mobile/desktop

4. **Fabricants et Financeurs** (35-60 ans)
   - Professionnels exigeants
   - Besoin de données et analytics
   - Utilisation principalement desktop

---

## 2. Identité Visuelle

### 2.1 Logo et Symbole

#### Spécifications Logo
- **Format principal** : SVG vectoriel
- **Versions** :
  - Couleur (principal)
  - Monochrome blanc (sur fonds foncés)
  - Monochrome noir (documents)
- **Zone de protection** : 2x hauteur du logo minimum
- **Taille minimale** : 32px de hauteur (digital), 15mm (print)

#### Utilisation
- **Header** : Logo complet sur desktop, icône seule sur mobile
- **Footer** : Logo complet en version réduite
- **Favicon** : Icône simplifiée 32x32px
- **App icons** : Versions adaptées iOS/Android

### 2.2 Personnalité de Marque

#### Attributs
- **Fiable** : Inspire la confiance et la sécurité
- **Innovant** : Moderne et tourné vers l'avenir
- **Accessible** : Simple et compréhensible
- **Africain** : Ancré dans les valeurs locales
- **Dynamique** : Orienté vers la croissance

#### Ton de Communication Visuelle
- Optimiste et positif
- Professionnel mais chaleureux
- Direct et transparent
- Encourageant et inspirant

---

## 3. Système de Couleurs

### 3.1 Palette Principale

#### Vert Primaire (Croissance et Agriculture)
```
primary-50:  #e8f5e8  - Backgrounds légers
primary-100: #c8e6c8  - Hovers légers
primary-200: #a5d6a5  - Borders
primary-300: #81c784  - Disabled states
primary-400: #66bb6a  - Hovers
primary-500: #4caf50  - Principal (identité forte)
primary-600: #2e7d32  - Textes, boutons (PRINCIPAL)
primary-700: #1b5e20  - Hovers foncés
primary-800: #2e7d32  - États actifs
primary-900: #1b5e20  - Accents forts
```

**Utilisation** :
- Boutons d'action principale
- Liens et éléments interactifs
- Badges de statut positif
- Indicateurs de succès
- Focus states

#### Orange Secondaire (Énergie et Opportunité)
```
secondary-50:  #fff3e0  - Backgrounds
secondary-100: #ffe0b2  - Highlights
secondary-200: #ffcc80  - Borders
secondary-300: #ffb74d  - Disabled
secondary-400: #ffa726  - Hovers
secondary-500: #ff9800  - Principal
secondary-600: #f57c00  - Boutons secondaires (PRINCIPAL)
secondary-700: #ef6c00  - Hovers
secondary-800: #e65100  - États actifs
secondary-900: #bf360c  - Accents urgents
```

**Utilisation** :
- Call-to-actions secondaires
- Notifications importantes
- Éléments promotionnels
- Badges premium
- Highlights

#### Gris (Neutralité et Structure)
```
gray-50:  #fafafa  - Backgrounds app
gray-100: #f5f5f5  - Backgrounds cards
gray-200: #eeeeee  - Dividers
gray-300: #e0e0e0  - Borders
gray-400: #bdbdbd  - Placeholders
gray-500: #9e9e9e  - Textes secondaires
gray-600: #757575  - Textes standard
gray-700: #616161  - Textes emphasis
gray-800: #424242  - Titres
gray-900: #212121  - Textes principaux
```

**Utilisation** :
- Textes et contenus
- Backgrounds et surfaces
- Borders et séparateurs
- États disabled

### 3.2 Couleurs Sémantiques

#### Succès (Vert clair)
```
success-50:  #e8f5e9
success-100: #c8e6c9
success-500: #4caf50  - Messages de succès
success-700: #388e3c  - Textes de succès
```

#### Avertissement (Jaune)
```
warning-50:  #fff8e1
warning-100: #ffecb3
warning-500: #ffc107  - Avertissements
warning-700: #f57f17  - Textes d'alerte
```

#### Erreur (Rouge)
```
error-50:  #ffebee
error-100: #ffcdd2
error-500: #f44336  - Messages d'erreur
error-700: #d32f2f  - Textes d'erreur
```

#### Information (Bleu)
```
info-50:  #e3f2fd
info-100: #bbdefb
info-500: #2196f3  - Informations
info-700: #1976d2  - Textes d'info
```

### 3.3 Règles d'Utilisation des Couleurs

#### Hiérarchie Chromatique
1. **Primaire (60%)** : Vert pour actions principales
2. **Secondaire (30%)** : Orange pour accents
3. **Neutres (10%)** : Gris pour structure

#### Contrastes Requis
- **Texte normal** : Ratio minimum 4.5:1
- **Texte large (18px+)** : Ratio minimum 3:1
- **Éléments UI** : Ratio minimum 3:1
- **Focus indicators** : Bien visibles sur tous fonds

#### Pièges à Éviter
- Ne jamais utiliser rouge et vert ensemble (daltonisme)
- Éviter texte sur fond de couleur similaire
- Ne pas se fier uniquement à la couleur pour communiquer
- Toujours tester avec simulateur de daltonisme

---

## 4. Typographie

### 4.1 Famille de Polices

#### Police Principale : Roboto
```css
font-family: 'Roboto', system-ui, -apple-system, sans-serif;
```

**Pourquoi Roboto ?**
- Excellente lisibilité sur écrans
- Support complet des caractères latins et accents africains
- Variantes de poids disponibles (300-700)
- Optimisée pour le web
- Gratuite et open-source

#### Fallbacks
```
system-ui → -apple-system → BlinkMacSystemFont → 'Segoe UI' → sans-serif
```

### 4.2 Échelle Typographique

#### Titres (Headings)

**H1 - Hero Titles**
```
Mobile   : 28px / 36px line-height / 700 weight
Tablet   : 36px / 40px line-height / 700 weight
Desktop  : 48px / 1.2 line-height / 700 weight
```
Usage : Page titles, hero sections

**H2 - Section Titles**
```
Mobile   : 24px / 32px line-height / 600 weight
Tablet   : 30px / 36px line-height / 600 weight
Desktop  : 36px / 40px line-height / 600 weight
```
Usage : Section headings, major divisions

**H3 - Subsection Titles**
```
All devices : 20px / 28px line-height / 500 weight
```
Usage : Card titles, subsections

**H4 - Minor Headings**
```
All devices : 18px / 24px line-height / 500 weight
```
Usage : List headers, minor divisions

#### Corps de Texte (Body)

**Body Large**
```
All devices : 18px / 28px line-height / 400 weight
```
Usage : Lead paragraphs, emphasis

**Body Regular**
```
Mobile   : 14px / 20px line-height / 400 weight
Tablet   : 16px / 24px line-height / 400 weight
Desktop  : 18px / 28px line-height / 400 weight
```
Usage : Paragraphes standards, contenu principal

**Body Small**
```
All devices : 14px / 20px line-height / 400 weight
```
Usage : Captions, metadata, helpers

**Body XSmall**
```
All devices : 12px / 16px line-height / 400 weight
```
Usage : Footnotes, legal text

#### Labels et UI

**Button Text**
```
Large  : 18px / 400 weight
Medium : 16px / 500 weight
Small  : 14px / 500 weight
```

**Input Labels**
```
16px / 24px line-height / 500 weight
```

**Badges**
```
14px / 16px line-height / 500 weight
```

### 4.3 Règles Typographiques

#### Hiérarchie
- Maximum 3 niveaux de titres par page
- Progression logique (H1 → H2 → H3)
- Jamais sauter un niveau

#### Lisibilité
- Longueur ligne optimale : 50-75 caractères
- Line-height corps : 150% minimum
- Line-height titres : 120% minimum
- Letter-spacing : Normal (ajuster si besoin)

#### Emphasis
- **Bold** : Informations importantes
- *Italic* : Citations, termes étrangers
- UPPERCASE : Éviter (difficulté lecture)
- Color : Utiliser avec parcimonie

#### Langues
- Support accents français : é è ê ë à â ç ô
- Support caractères spéciaux locaux
- Fallback gracieux si caractère manquant

---

## 5. Espacements et Grilles

### 5.1 Système d'Espacement (8px Base)

```
2px   : Borders ultra-fins
4px   : Spacing très serré
8px   : Spacing serré (base)
12px  : Spacing compact
16px  : Spacing standard (2x base)
24px  : Spacing confortable (3x base)
32px  : Spacing large (4x base)
48px  : Spacing très large (6x base)
64px  : Spacing XL (8x base)
96px  : Spacing XXL (12x base)
128px : Spacing sections (16x base)
```

### 5.2 Application des Espacements

#### Composants Internes
- **Padding buttons** : 12px (vertical) × 16px (horizontal)
- **Padding cards** : 16px mobile, 24px desktop
- **Padding inputs** : 12px (vertical) × 16px (horizontal)
- **Margins entre éléments** : 8px à 16px

#### Sections et Layout
- **Gap entre cards** : 16px mobile, 24px desktop
- **Margins sections** : 32px mobile, 64px desktop
- **Padding containers** : 16px mobile, 24px tablet, 32px desktop

### 5.3 Grille Responsive

#### Breakpoints
```css
sm:  481px   // Petits mobiles → Phablets
md:  768px   // Tablettes portrait
lg:  1025px  // Tablettes landscape → Desktop
xl:  1280px  // Large desktop
```

#### Colonnes
```
Mobile (< 481px)     : 4 colonnes, gap 16px
Tablet (481-1024px)  : 8 colonnes, gap 24px
Desktop (> 1025px)   : 12 colonnes, gap 32px
```

#### Containers
```
Mobile     : 100% - 32px padding (16px each side)
Tablet     : 768px max-width - 48px padding
Desktop    : 1200px max-width - 64px padding
```

### 5.4 Layout Patterns

#### Two-Column Layout
```
Mobile     : Stack vertical (100% each)
Tablet     : 60/40 ou 50/50
Desktop    : 66/33 ou 70/30 (contenu/sidebar)
```

#### Three-Column Grid
```
Mobile     : Stack vertical
Tablet     : 2 colonnes puis 1
Desktop    : 3 colonnes égales
```

#### Cards Grid
```
Mobile     : 1 colonne
Tablet     : 2 colonnes
Desktop    : 3-4 colonnes selon contexte
```

---

## 6. Composants UI

### 6.1 Boutons (Buttons)

#### Variants

**Primary Button**
```
Background  : primary-600 (#2e7d32)
Text        : white
Hover       : primary-700
Active      : primary-800
Disabled    : gray-300 + opacity 50%
Shadow      : soft (0 2px 4px rgba(0,0,0,0.1))
Hover shadow: medium (0 4px 8px rgba(0,0,0,0.15))
```

**Secondary Button**
```
Background  : secondary-600 (#f57c00)
Text        : white
Hover       : secondary-700
Active      : secondary-800
Disabled    : gray-300 + opacity 50%
```

**Outline Button**
```
Background  : transparent
Border      : 2px solid gray-300
Text        : gray-700
Hover       : bg-primary-50 + border-primary-500 + text-primary-600
```

**Ghost Button**
```
Background  : transparent
Text        : gray-600
Hover       : bg-primary-50 + text-primary-600
```

#### Tailles
```
Small   : 36px height, 12px padding, 14px text
Medium  : 44px height, 16px padding, 16px text (DEFAULT)
Large   : 52px height, 24px padding, 18px text
```

#### États
- **Default** : État de repos
- **Hover** : Curseur au-dessus
- **Focus** : Ring 2px primary-500, offset 2px
- **Active** : Pendant le clic
- **Disabled** : Non interactif, opacity 50%
- **Loading** : Spinner centré

#### Règles d'Usage
- Maximum 1 bouton primary par section
- Toujours indiquer action clairement (verbe)
- Minimum 44px de hauteur (touch target)
- Éviter plus de 3 boutons côte à côte

### 6.2 Inputs et Formulaires

#### Text Input
```
Height      : 44px minimum
Padding     : 12px vertical, 16px horizontal
Border      : 1px solid gray-300
Border-radius: 8px
Font-size   : 16px (évite zoom iOS)
Placeholder : gray-400

States:
- Default   : border-gray-300
- Focus     : border-primary-500 + ring-2 primary-500
- Error     : border-error-500 + ring-2 error-500
- Disabled  : bg-gray-100 + text-gray-500
- Success   : border-success-500 + icon checkmark
```

#### Textarea
```
Min-height  : 120px
Resize      : vertical only
Auto-expand : optionnel
```

#### Select / Dropdown
```
Height      : 44px
Icon        : ChevronDown à droite
Padding     : Comme text input
```

#### Checkbox / Radio
```
Size        : 20px × 20px
Border      : 2px solid gray-400
Checked     : bg-primary-600 + white checkmark
Focus       : ring-2 primary-500
Label       : 16px, à droite, clickable
```

#### Labels
```
Font-size   : 14px
Font-weight : 500
Color       : gray-700
Margin      : 8px bottom
Required    : Astérisque rouge
```

#### Helper Text
```
Font-size   : 14px
Color       : gray-500 (normal) / error-600 (erreur)
Margin      : 4px top
```

### 6.3 Cards

#### Standard Card
```
Background  : white
Border      : 1px solid gray-100
Border-radius: 12px
Shadow      : soft
Padding     : 16px mobile, 24px desktop
Overflow    : hidden (pour images)
```

#### Hover Card
```
Transition  : all 200ms ease
Hover       :
  - Shadow medium
  - Border gray-200
  - Transform translateY(-4px)
```

#### Clickable Card
```
Cursor      : pointer
Focus       : ring-2 primary-500
Active      : slight scale down (0.98)
```

### 6.4 Badges

#### Variants
```
Primary     : bg-primary-100 + text-primary-800
Secondary   : bg-secondary-100 + text-secondary-800
Success     : bg-success-100 + text-success-800
Warning     : bg-warning-100 + text-warning-800
Error       : bg-error-100 + text-error-800
Info        : bg-info-100 + text-info-800
Neutral     : bg-gray-100 + text-gray-800
```

#### Styles
```
Padding     : 4px 12px
Font-size   : 14px
Font-weight : 500
Border-radius: 9999px (pill shape)
Display     : inline-flex
Align-items : center
```

### 6.5 Modals et Overlays

#### Modal
```
Overlay     : bg-black opacity-50
Container   : white, border-radius-16px
Max-width   : 600px
Padding     : 24px
Shadow      : strong
Animation   : scale-in + fade-in

Header:
- Title H2
- Close button (X) top-right

Body:
- Content area avec scroll si nécessaire

Footer:
- Buttons alignés à droite
- Cancel (outline) + Confirm (primary)
```

#### Drawer (Side Panel)
```
Width       : 320px mobile, 400px desktop
Direction   : Right to left (standard)
Background  : white
Shadow      : strong
Animation   : slide-in

Usage:
- Filtres
- Paramètres
- Navigation secondaire
```

#### Tooltips
```
Background  : gray-900
Text        : white
Padding     : 8px 12px
Font-size   : 14px
Border-radius: 6px
Arrow       : 6px (pointe vers élément)
Max-width   : 250px
Delay       : 300ms
```

### 6.6 Navigation

#### Top Navigation Bar
```
Height      : 64px desktop, 56px mobile
Background  : white
Border-bottom: 1px solid gray-200
Padding     : 16px horizontal
Shadow      : none (border suffit)

Content:
- Logo gauche
- Nav links centre (desktop only)
- Actions droite (search, profile, notifications)
```

#### Mobile Navigation
```
Type        : Bottom tab bar OU hamburger menu
Height      : 64px + safe-area-inset-bottom
Background  : white
Shadow      : top shadow
Items       : Maximum 5 items
Icons       : 24px avec labels 12px
Active      : primary-600 color
```

#### Breadcrumbs
```
Font-size   : 14px
Color       : gray-600
Separator   : ChevronRight icon
Current     : gray-900, no link
Hover       : primary-600
```

#### Pagination
```
Height      : 44px
Items       : Numbers + Previous/Next
Active      : primary-600 background
Hover       : primary-50 background
Border-radius: 6px
Gap         : 4px
```

### 6.7 Feedback et États

#### Loading Spinner
```
Size        : 24px (standard), 16px (small), 32px (large)
Color       : primary-600
Animation   : rotate 1s linear infinite
Stroke-width: 3px
```

#### Skeleton Loader
```
Background  : gradient shimmer
Colors      : gray-200 → gray-100 → gray-200
Animation   : 1.5s infinite
Border-radius: Match l'élément chargé
```

#### Progress Bar
```
Height      : 8px
Background  : gray-200
Fill        : primary-600
Border-radius: 9999px
Animation   : smooth transition
```

#### Alert / Banner
```
Padding     : 16px
Border-radius: 8px
Border-left : 4px solid (couleur variant)
Icon        : À gauche
Close       : X button à droite

Variants:
- Success : bg-success-50, border-success-500
- Warning : bg-warning-50, border-warning-500
- Error   : bg-error-50, border-error-500
- Info    : bg-info-50, border-info-500
```

#### Toast / Notification
```
Width       : 320px
Position    : Top-right (ou bottom-right)
Background  : gray-900 (ou variant color)
Text        : white
Padding     : 16px
Border-radius: 8px
Shadow      : strong
Duration    : 4s (auto-dismiss)
Animation   : slide-in + fade-out

Content:
- Icon left
- Title + message
- Close button
- Optional action button
```

---

## 7. Icônes et Pictogrammes

### 7.1 Bibliothèque d'Icônes

**Source** : Lucide React
- Consistante et moderne
- Optimisée pour le web
- 1000+ icônes disponibles
- Open-source

### 7.2 Tailles Standard
```
16px : Très petites (inline text)
20px : Petites (buttons, badges)
24px : Standard (navigation, actions)
32px : Moyennes (features)
48px : Grandes (empty states)
64px : Très grandes (illustrations)
```

### 7.3 Styles
- **Stroke-based** : Épais 2px par défaut
- **Stroke-width** : Ajustable (1.5px à 2.5px)
- **Rounded corners** : Pour cohérence avec UI
- **Colors** : Suivre palette (currentColor par défaut)

### 7.4 Icônes Courantes

#### Navigation
```
Home, Search, Menu, X, ChevronLeft, ChevronRight,
ChevronDown, ChevronUp, ArrowLeft, ArrowRight
```

#### Actions
```
Plus, Minus, Edit, Trash, Save, Download, Upload,
Share, Copy, Check, X, Settings, Filter
```

#### Communication
```
MessageCircle, Mail, Phone, Bell, Send
```

#### Statut
```
CheckCircle, AlertCircle, Info, AlertTriangle,
HelpCircle, Star, Heart, Bookmark
```

#### Équipements
```
Tractor (custom), Tool, Package, Truck, MapPin,
Calendar, Clock, DollarSign, TrendingUp
```

### 7.5 Règles d'Usage
- Toujours accompagner d'un label (ou aria-label)
- Utiliser `currentColor` pour héritage de couleur
- Aligner verticalement avec texte
- Taille minimum 20px pour éléments cliquables
- Cohérence : même icône = même action

---

## 8. Images et Médias

### 8.1 Images de Contenu

#### Formats
```
WebP     : Format principal (meilleure compression)
AVIF     : Si support navigateur
JPEG     : Fallback pour photos
PNG      : Transparence nécessaire
SVG      : Logos, icônes, illustrations
```

#### Qualité et Optimisation
```
Photos équipements : 1200px max-width, quality 85%
Thumbnails         : 400px max-width, quality 80%
Profile pictures   : 200px, quality 80%
Compression        : Toujours optimiser avant upload
```

#### Responsive Images
```html
<img
  src="equipment-1200.webp"
  srcset="
    equipment-400.webp 400w,
    equipment-800.webp 800w,
    equipment-1200.webp 1200w
  "
  sizes="
    (max-width: 480px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
  loading="lazy"
  alt="Description précise"
/>
```

### 8.2 Galeries Photos

#### Layout
```
Grid        : 2 colonnes mobile, 3-4 desktop
Gap         : 8px mobile, 16px desktop
Aspect-ratio: 4:3 ou 16:9 (cohérent)
Lightbox    : Zoom + navigation
```

#### Placeholder
```
Background  : gray-200 avec shimmer
Icon        : Image icon centré
Aspect-ratio: Préserver pour éviter layout shift
```

### 8.3 Avatars

#### Tailles
```
XS  : 24px (mentions, tags)
SM  : 32px (comments, lists)
MD  : 40px (messages, small profiles)
LG  : 64px (profile headers)
XL  : 96px (profile pages)
XXL : 128px (settings, upload)
```

#### Style
```
Shape       : Cercle (border-radius 50%)
Border      : Optionnel 2px white (sur fonds colorés)
Fallback    : Initiales sur couleur générée
Quality     : High (profile = identité)
```

### 8.4 Illustrations

#### Style
- **Tone** : Optimiste, moderne, simple
- **Colors** : Utiliser palette brand
- **Complexity** : Simple, pas trop détaillé
- **Cultural** : Représentations africaines authentiques

#### Usage
```
Empty states     : 200-300px illustrations
Error pages      : 300-400px illustrations
Onboarding       : Full-width illustrations
Feature highlights: Icônes illustrées 64-96px
```

### 8.5 Vidéos

#### Spécifications
```
Format      : MP4 (H.264)
Résolution  : 1080p max, 720p recommandé
Ratio       : 16:9 ou 1:1 (selon contexte)
Durée       : < 2 min (tutoriels), < 30s (promos)
Sous-titres : Toujours fournir
```

#### Player
```
Controls    : Play/Pause, Timeline, Volume, Fullscreen
Poster      : Thumbnail représentatif
Loading     : Lazy load (pas autoplay)
Autoplay    : Jamais avec son (WCAG)
```

---

## 9. Animations et Transitions

### 9.1 Principes d'Animation

#### Durées Standard
```
Ultra-fast  : 100ms  (hovers immédiats)
Fast        : 200ms  (transitions UI standards)
Medium      : 300ms  (modals, drawers)
Slow        : 500ms  (page transitions)
Very slow   : 1000ms (complex animations)
```

#### Easing Functions
```
ease-in-out : cubic-bezier(0.4, 0, 0.2, 1) - DEFAULT
ease-out    : cubic-bezier(0, 0, 0.2, 1)   - Entrées
ease-in     : cubic-bezier(0.4, 0, 1, 1)   - Sorties
linear      : linear                        - Loading
```

### 9.2 Animations UI

#### Hover States
```css
.button {
  transition: all 200ms ease-in-out;
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

#### Focus States
```css
.input:focus {
  outline: 2px solid primary-500;
  outline-offset: 2px;
  transition: outline 100ms ease;
}
```

#### Modal Entry
```css
@keyframes modalEnter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.modal {
  animation: modalEnter 200ms ease-out;
}
```

#### Drawer Slide
```css
@keyframes drawerSlide {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
.drawer {
  animation: drawerSlide 300ms ease-out;
}
```

#### Fade In
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.fade-in {
  animation: fadeIn 300ms ease-in-out;
}
```

#### Skeleton Shimmer
```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 1000px 100%;
  animation: shimmer 1.5s infinite;
}
```

### 9.3 Micro-interactions

#### Button Click
```
1. Scale down (0.95) - 100ms
2. Scale up (1) - 100ms
+ Ripple effect optionnel
```

#### Checkbox Toggle
```
1. Scale pulse (1.1) - 150ms
2. Checkmark draw - 200ms
```

#### Toast Notification
```
1. Slide in from right - 300ms
2. Stay visible - 4000ms
3. Fade out - 300ms
```

#### Like/Favorite
```
1. Heart scale (1.3) - 200ms
2. Color change - 200ms
3. Scale back (1) - 200ms
+ Particle burst optionnel
```

### 9.4 Page Transitions

#### Route Change
```
1. Fade out current (200ms)
2. Fade in new (200ms)
+ Optional: slide direction
```

#### Loading States
```
1. Skeleton appear immediately
2. Content fade in when ready (300ms)
3. Skeleton fade out (200ms)
```

### 9.5 Règles Performance

#### Do's
- Utiliser `transform` et `opacity` (GPU)
- Éviter animer `width`, `height`, `top`, `left`
- Ajouter `will-change` pour animations complexes
- Tester sur appareils bas de gamme

#### Don'ts
- Pas d'animations sur scroll (sauf lazy load)
- Pas d'autoplay avec mouvement complexe
- Pas d'animations infinies distrayantes
- Jamais bloquer l'interaction

#### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Responsive Design

### 10.1 Approche Mobile-First

#### Stratégie
```
1. Designer pour mobile d'abord
2. Progressivement améliorer pour écrans plus grands
3. Tester sur vrais appareils
4. Prioriser performance mobile
```

### 10.2 Breakpoints

```css
/* Mobile Small */
@media (max-width: 480px) {
  /* Téléphones petits écrans */
}

/* Mobile / Phablet */
@media (min-width: 481px) {
  /* Grands téléphones, petites tablettes */
}

/* Tablet */
@media (min-width: 768px) {
  /* Tablettes portrait */
}

/* Desktop Small */
@media (min-width: 1025px) {
  /* Tablettes landscape, petits desktops */
}

/* Desktop Large */
@media (min-width: 1280px) {
  /* Desktops standards et larges */
}
```

### 10.3 Adaptations par Device

#### Mobile (< 481px)
```
Layout:
- Single column
- Stack vertical
- Full-width components
- Bottom navigation (thumb zone)

Typography:
- H1: 28px
- Body: 14px
- Line-height: 1.5

Spacing:
- Padding: 16px
- Gaps: 8-16px

Touch:
- Min target: 44x44px
- Generous spacing between clickables
- Swipe gestures supported
```

#### Tablet (481-1024px)
```
Layout:
- 2 columns possible
- Sidebar optionnel
- Grid 2x2, 3x2
- Mix de navigation (top + bottom)

Typography:
- H1: 36px
- Body: 16px
- Line-height: 1.5

Spacing:
- Padding: 24px
- Gaps: 16-24px
```

#### Desktop (> 1025px)
```
Layout:
- Multi-column (2-3)
- Sidebar permanent
- Grid 3x3, 4x4
- Top navigation

Typography:
- H1: 48px
- Body: 18px
- Line-height: 1.6

Spacing:
- Padding: 32px
- Gaps: 24-32px

Mouse:
- Hover states
- Tooltips on hover
- Keyboard shortcuts
```

### 10.4 Images Responsives

#### Stratégie
```html
<!-- Mobile : Petite image -->
<source media="(max-width: 480px)"
        srcset="image-small.webp">

<!-- Tablet : Moyenne image -->
<source media="(max-width: 1024px)"
        srcset="image-medium.webp">

<!-- Desktop : Grande image -->
<source media="(min-width: 1025px)"
        srcset="image-large.webp">
```

### 10.5 Navigation Responsive

#### Mobile Navigation Pattern
```
Options:
1. Bottom Tab Bar (recommandé)
   - 4-5 items max
   - Icônes + labels
   - Always visible

2. Hamburger Menu
   - Top-left icon
   - Slide-in drawer
   - Full-height menu

3. Hybrid
   - Bottom bar pour principales
   - Hamburger pour secondaires
```

#### Desktop Navigation
```
- Top horizontal bar
- Dropdown menus si nécessaire
- Persistent sur scroll (sticky)
- Search bar intégrée
```

### 10.6 Tableaux Responsifs

#### Stratégies

**1. Horizontal Scroll**
```
- Container avec overflow-x: auto
- Min-width sur tableau
- Scroll indicator (shadow)
```

**2. Card Transform**
```
Mobile:
- Chaque ligne → card
- Labels avant valeurs
- Stack vertical

Desktop:
- Tableau standard
```

**3. Collapse Columns**
```
Mobile:
- Montrer colonnes essentielles
- Expand row pour détails

Desktop:
- Toutes colonnes visibles
```

### 10.7 Formulaires Responsifs

#### Mobile
```
- Champs full-width
- Labels au-dessus
- Keyboard adapté (type="email", "tel", etc.)
- Une colonne stricte
```

#### Desktop
```
- Multi-colonnes possible
- Labels à gauche optionnel
- Grouping logique
- Largeur optimale (600px max)
```

### 10.8 Testing Responsive

#### Devices à Tester
```
Mobile:
- iPhone SE (375px)
- iPhone 12/13 (390px)
- Samsung Galaxy (360px, 412px)

Tablet:
- iPad Mini (768px)
- iPad Pro (1024px)

Desktop:
- 1280px
- 1440px
- 1920px
```

#### Outils
- Chrome DevTools Device Mode
- Real devices (critical)
- BrowserStack pour cross-browser
- Lighthouse pour performance

---

## 11. Accessibilité

### 11.1 Standards WCAG 2.1 Level AA

#### Principes POUR
- **Perceptible** : Contenu visible et audible
- **Utilisable** : Navigation et interaction possibles
- **Compréhensible** : Contenu et UI clairs
- **Robuste** : Compatible technologies d'assistance

### 11.2 Contraste et Couleurs

#### Ratios Requis
```
Texte normal (< 18px)      : 4.5:1 minimum
Texte large (≥ 18px)       : 3:1 minimum
Texte gras large (≥ 14px)  : 3:1 minimum
Composants UI              : 3:1 minimum
```

#### Tests
```
primary-600 (#2e7d32) sur white : 4.54:1 ✓
gray-700 (#616161) sur white    : 5.74:1 ✓
gray-500 (#9e9e9e) sur white    : 2.85:1 ✗ (utiliser gray-600+)
```

#### Bonnes Pratiques
- Ne pas se fier uniquement à la couleur
- Patterns ou icônes en complément
- Tester avec simulateur daltonisme
- Contraste suffisant sur tous états

### 11.3 Navigation Clavier

#### Tab Order
```
- Ordre logique de lecture
- Skip links en début de page
- Focus visible sur tous éléments
- Pas de keyboard traps
```

#### Raccourcis Clavier
```
Tab       : Élément suivant
Shift+Tab : Élément précédent
Enter     : Activer bouton/lien
Space     : Activer checkbox, toggle
Esc       : Fermer modal/drawer
Arrows    : Navigation dans composants
```

#### Focus Management
```css
:focus-visible {
  outline: 2px solid primary-500;
  outline-offset: 2px;
  border-radius: 4px;
}

/* Pas de outline au clic souris */
:focus:not(:focus-visible) {
  outline: none;
}
```

### 11.4 ARIA et Sémantique

#### Landmarks
```html
<header role="banner">
<nav role="navigation" aria-label="Main">
<main role="main">
<aside role="complementary">
<footer role="contentinfo">
```

#### ARIA Labels
```html
<!-- Bouton avec icône seule -->
<button aria-label="Fermer le modal">
  <X />
</button>

<!-- Élément décoratif -->
<img aria-hidden="true" />

<!-- État dynamique -->
<button aria-pressed="true">
  Favoris
</button>

<!-- Alert dynamique -->
<div role="alert" aria-live="polite">
  Équipement ajouté
</div>
```

#### Form Accessibility
```html
<label for="email">
  Email
  <span aria-label="requis">*</span>
</label>
<input
  id="email"
  type="email"
  aria-required="true"
  aria-describedby="email-error"
  aria-invalid="false"
/>
<span id="email-error" role="alert">
  <!-- Message d'erreur -->
</span>
```

### 11.5 Contenu et Lisibilité

#### Texte
```
- Police minimum 16px (mobile)
- Line-height minimum 1.5
- Pas de justification (difficile à lire)
- Largeur ligne optimale 50-75 caractères
- Pas de murs de texte
```

#### Headings
```
- Hiérarchie logique (H1 → H2 → H3)
- Pas sauter de niveaux
- Un seul H1 par page
- Descriptifs et informatifs
```

#### Links
```
- Texte descriptif (pas "cliquez ici")
- Soulignés ou bien différenciés
- Visited state distinct
- Focus visible
```

### 11.6 Médias

#### Images
```html
<!-- Image informative -->
<img src="tractor.jpg" alt="Tracteur John Deere 5055E rouge dans un champ" />

<!-- Image décorative -->
<img src="pattern.svg" alt="" />

<!-- Image complexe -->
<figure>
  <img src="chart.png" alt="Graphique des ventes" />
  <figcaption>Description détaillée...</figcaption>
</figure>
```

#### Vidéos
```
- Sous-titres obligatoires
- Transcription textuelle
- Contrôles accessibles au clavier
- Pas d'autoplay avec son
- Possibilité de pause
```

### 11.7 États et Feedback

#### Loading
```html
<div role="status" aria-live="polite" aria-label="Chargement en cours">
  <Spinner />
  <span class="sr-only">Chargement des équipements...</span>
</div>
```

#### Erreurs
```html
<div role="alert" aria-live="assertive">
  <Icon aria-hidden="true" />
  <span>Erreur : Email invalide</span>
</div>
```

#### Success
```html
<div role="status" aria-live="polite">
  <CheckCircle aria-hidden="true" />
  <span>Réservation confirmée</span>
</div>
```

### 11.8 Testing Accessibilité

#### Outils Automatisés
```
- axe DevTools (extension Chrome)
- Lighthouse Accessibility
- WAVE (WebAIM)
- Pa11y (CLI)
```

#### Tests Manuels
```
✓ Navigation complète au clavier
✓ Screen reader (NVDA, JAWS, VoiceOver)
✓ Zoom 200% sans perte de fonctionnalité
✓ Contraste couleurs vérifié
✓ Video avec sous-titres
✓ Forms complétables sans souris
```

#### Checklist
```
□ Tous éléments interactifs au clavier
□ Focus visible sur tous éléments
□ Alt text sur toutes images
□ Headings structure logique
□ Contraste suffisant partout
□ Formulaires avec labels
□ Erreurs clairement indiquées
□ ARIA utilisé correctement
□ Pas de keyboard traps
□ Tested avec screen reader
```

---

## 12. États et Feedback

### 12.1 États des Composants

#### Boutons
```
Default   : État de repos
Hover     : Curseur dessus (desktop)
Focus     : Sélection clavier
Active    : Pendant le clic
Disabled  : Non interactif
Loading   : Action en cours
```

#### Inputs
```
Empty     : Aucune valeur
Filled    : Contient valeur
Focus     : En cours d'édition
Valid     : Validation passée
Invalid   : Erreur de validation
Disabled  : Non éditable
```

#### Cards
```
Default   : État normal
Hover     : Curseur dessus
Active    : Sélectionnée
Loading   : Contenu en chargement
Empty     : Pas de données
Error     : Erreur de chargement
```

### 12.2 Feedback Visuel

#### Actions Immédiates
```
- Changement couleur (hover)
- Transformation (translateY, scale)
- Transition douce (200ms)
- Curseur adapté (pointer, grab)
```

#### Actions Asynchrones
```
- Loading spinner ou skeleton
- Désactivation temporaire
- Message de progression
- Completion feedback
```

#### Succès
```
Visual:
- Checkmark icon
- Couleur success (vert)
- Toast notification
- Animation confirmation

Message:
"Équipement ajouté avec succès"
"Réservation confirmée"
"Paiement effectué"
```

#### Erreurs
```
Visual:
- AlertCircle icon
- Couleur error (rouge)
- Inline error message
- Toast ou banner

Message:
"Erreur : Email invalide"
"Échec de connexion"
"Paiement refusé"

Guidelines:
- Être spécifique
- Proposer solution
- Ton empathique
```

#### Avertissements
```
Visual:
- AlertTriangle icon
- Couleur warning (jaune/orange)
- Banner ou modal

Message:
"Attention : Action irréversible"
"Êtes-vous sûr de supprimer ?"
"Connexion instable"
```

### 12.3 Loading States

#### Skeleton Screens
```
Usage:
- Listes de cards
- Profils utilisateur
- Grilles de produits

Avantages:
- Perception de rapidité
- Pas de spinner qui tourne
- Structure page conservée
```

#### Spinners
```
Usage:
- Actions bouton
- Loading inline
- Petites sections

Tailles:
- Small (16px)
- Medium (24px)
- Large (32px)
```

#### Progress Bars
```
Usage:
- Upload fichiers
- Multi-step forms
- Long processus

Types:
- Determinate (0-100%)
- Indeterminate (animation infinie)
```

### 12.4 Empty States

#### Structure
```
1. Illustration (icon 64px ou image)
2. Titre explicatif
3. Message descriptif
4. Action principale (CTA)
```

#### Exemples
```
No Equipment:
- Icon: Tractor
- Title: "Aucun équipement trouvé"
- Message: "Ajustez vos filtres ou explorez d'autres catégories"
- CTA: "Réinitialiser les filtres"

No Bookings:
- Icon: Calendar
- Title: "Aucune réservation"
- Message: "Commencez à louer du matériel pour booster votre productivité"
- CTA: "Explorer les équipements"
```

### 12.5 Confirmations

#### Modals de Confirmation
```
Utiliser pour:
- Actions destructives (suppression)
- Actions irréversibles
- Actions coûteuses (paiement)

Structure:
- Titre question: "Supprimer l'équipement ?"
- Message: Expliquer conséquences
- Boutons: Cancel (outline) + Confirm (error ou primary)
```

#### Inline Confirmations
```
Pour actions moins critiques:
- Checkbox "Je confirme"
- Double-click patterns
- Undo toast (4 secondes)
```

---

## 13. Design Patterns

### 13.1 Recherche et Filtrage

#### Search Bar
```
Placement   : Header (global) ou section (local)
Width       : 300-400px desktop, full mobile
Icon        : Search left, Clear right (when filled)
Placeholder : "Rechercher un équipement..."
Autocomplete: Suggestions dropdown
Submit      : Enter key ou Search button
```

#### Filtres
```
Desktop:
- Sidebar gauche
- Always visible
- Sections collapsibles
- Apply button

Mobile:
- Modal/Drawer from bottom
- Floating filter button
- Show count of active filters
- Apply + Clear buttons
```

#### Chips (Active Filters)
```
Display     : Horizontal list
Style       : Pill avec X close
Position    : Above results
Interaction : Click X to remove
Clear all   : Button à droite
```

### 13.2 Listes et Grilles

#### List View
```
Usage       : Données tabulaires, détails importants
Layout      : Full-width rows
Hover       : Background change
Selection   : Checkbox left
Actions     : Icons right
```

#### Grid View
```
Usage       : Products, images, cards
Columns     : 1 (mobile), 2 (tablet), 3-4 (desktop)
Gap         : 16-24px
Hover       : Elevation + border
Aspect ratio: Consistent (4:3 ou 16:9)
```

#### Infinite Scroll vs Pagination
```
Infinite Scroll:
+ Engagement élevé
+ Mobile-friendly
- SEO difficile
- Footer inaccessible

Pagination:
+ SEO-friendly
+ User control
+ Footer accessible
- More clicks
```

### 13.3 Formulaires Multi-étapes

#### Structure
```
1. Progress indicator (steps)
2. Current step content
3. Navigation (Previous, Next, Submit)
4. Save draft optionnel
```

#### Progress
```
Visual:
- Numbered steps
- Line connectée
- Current highlighted
- Completed checkmarked

Position:
- Top de la page
- Sticky optionnel
```

#### Navigation
```
Previous : Outline button, left
Next     : Primary button, right
Submit   : Primary, last step only

Validation:
- Par step
- Empêcher Next si invalide
- Montrer erreurs inline
```

### 13.4 Calendrier et Dates

#### Date Picker
```
Format      : DD/MM/YYYY (format local)
Input       : Click → open calendar
Calendar    : Inline ou modal
Navigation  : Month/Year dropdowns
Today       : Highlighted
Selected    : Primary color
Range       : Start + End dates
Min/Max     : Dates disabled
```

#### Time Picker
```
Format      : 24h (18:00) ou 12h (6:00 PM)
Input       : Dropdown ou slider
Step        : 15 ou 30 minutes
Validation  : Business hours
```

### 13.5 Upload de Fichiers

#### Drag & Drop Zone
```
Visual:
- Dashed border
- Upload icon centered
- "Drag files here" text
- "or click to browse"

States:
- Default (gray)
- Hover (primary light)
- Dragover (primary border)
- Error (red border)

Accepted:
- Image types specified
- Max size indicated
```

#### Preview
```
Images:
- Thumbnail avec nom
- Remove button (X)
- Progress bar pendant upload

Documents:
- Icon + filename
- File size
- Download link après upload
```

### 13.6 Évaluations et Reviews

#### Star Rating
```
Size        : 20px (list), 32px (detail)
Interactive : Click ou drag
Half stars  : Optionnel
Color       : Warning-500 (filled), gray-300 (empty)
Read-only   : Pas de hover
Label       : Average + count "(4.5 / 128 avis)"
```

#### Review Card
```
Structure:
1. Reviewer avatar + name + date
2. Star rating
3. Review text
4. Photos optionnelles
5. Helpful votes
6. Report button
7. Owner response (if any)
```

### 13.7 Messaging

#### Conversation List
```
Item:
- Avatar
- Contact name
- Last message preview
- Timestamp
- Unread badge
- Online indicator

Sort:
- Most recent first
- Unread at top

Actions:
- Archive, Delete
```

#### Chat Interface
```
Layout:
- Header (contact info)
- Messages area (scroll)
- Input bar (bottom)

Messages:
- Sent (right, primary)
- Received (left, gray)
- Timestamp
- Read receipts
- Typing indicator

Input:
- Text field
- Attach button
- Send button
```

---

## 14. Guidelines d'Utilisation

### 14.1 Do's & Don'ts

#### Layout
```
✓ DO:
- Utiliser grille 8px
- Aligner éléments
- Espaces cohérents
- Responsive mobile-first

✗ DON'T:
- Espacements aléatoires
- Trop de colonnes mobile
- Ignorer breakpoints
- Négliger touch targets
```

#### Typographie
```
✓ DO:
- Hiérarchie claire
- Line-height suffisant
- Contraste suffisant
- Tailles responsives

✗ DON'T:
- Trop de styles
- Texte trop petit
- Ligne trop longue
- Justification texte
```

#### Couleurs
```
✓ DO:
- Utiliser palette définie
- Vérifier contrastes
- Cohérence sémantique
- Considérer daltonisme

✗ DON'T:
- Inventer couleurs
- Couleur seule pour info
- Trop de couleurs
- Ignorer accessibilité
```

#### Composants
```
✓ DO:
- Réutiliser composants
- États cohérents
- Feedback clair
- Documentation

✗ DON'T:
- Recréer à chaque fois
- États manquants
- Interactions confuses
- Variantes inconsistantes
```

### 14.2 Checklist Design

#### Avant de Designer
```
□ Comprendre le besoin utilisateur
□ Reviewer flows existants
□ Identifier patterns applicables
□ Vérifier composants disponibles
```

#### Pendant le Design
```
□ Mobile-first approach
□ Utiliser grille et spacing
□ Palette couleurs respectée
□ Typographie cohérente
□ États tous définis
□ Accessibilité considérée
```

#### Avant Livraison
```
□ Responsive testé (3 breakpoints)
□ États tous designés
□ Contrastes vérifiés
□ Navigation clavier possible
□ Specs annotées
□ Prototype interactif
```

### 14.3 Handoff Développeurs

#### Specs à Fournir
```
- Maquettes desktop + mobile
- Prototype cliquable (Figma)
- Spacing exact (px)
- Couleurs (hex codes)
- Fonts (tailles, weights)
- Animations (durée, easing)
- États tous documentés
- Edge cases considérés
```

#### Assets à Exporter
```
Images:
- @1x, @2x, @3x
- WebP + fallback
- SVG pour icônes

Icons:
- SVG optimized
- Viewbox 24x24
- Current color

Illustrations:
- SVG ou PNG HD
- Palette brand
```

### 14.4 Maintenance Design System

#### Updates
```
Versioning:
- Major : Breaking changes
- Minor : Nouveaux composants
- Patch : Bug fixes

Documentation:
- Changelog détaillé
- Migration guides
- Examples mis à jour
```

#### Gouvernance
```
Responsable:
- Design lead
- Review board

Process:
1. Proposal
2. Discussion
3. Prototype
4. Vote
5. Implementation
6. Documentation
```

---

## Annexes

### A. Ressources

#### Outils Design
- **Figma** : Design et prototypage
- **Stark** : Vérification accessibilité
- **Contrast** : Test contrastes
- **Sizzy** : Preview responsive

#### Outils Dev
- **Storybook** : Composants isolés
- **Chromatic** : Visual testing
- **axe DevTools** : A11y testing
- **Lighthouse** : Performance

#### Inspirations
- **Dribbble** : Agriculture, marketplace
- **Mobbin** : Mobile patterns
- **Land-book** : Landing pages
- **Refactoring UI** : Best practices

### B. Glossaire

```
A11y : Accessibility (accessibilité)
ARIA : Accessible Rich Internet Applications
WCAG : Web Content Accessibility Guidelines
CTA : Call-to-Action (appel à l'action)
UX : User Experience (expérience utilisateur)
UI : User Interface (interface utilisateur)
RWD : Responsive Web Design
POUR : Perceptible, Operable, Understandable, Robust
```

### C. Contacts

```
Design System Owner : [À définir]
Lead Designer : [À définir]
Frontend Lead : [À définir]
```

---

**Document Version** : 1.0
**Date** : Janvier 2026
**Statut** : Cahier des charges design complet
**Prochaine Review** : Mars 2026
