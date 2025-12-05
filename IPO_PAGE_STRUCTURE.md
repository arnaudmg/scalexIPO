# Page IPO - Structure et Animations

## Vue d'ensemble

La page IPO a été restructurée en sections plein écran avec animations Motion et navigation fluide. Chaque section prend 100vh et utilise le scroll-snap pour une navigation fluide entre les sections.

## Structure des sections

1. **Hero Section** - Introduction avec statistiques clés
2. **Sample Section** - Critères de sélection et secteurs
3. **Geography Section** - Carte géographique de la couverture IPO
4. **Stock Exchanges** - Distribution par bourses
5. **Post-IPO Performance** - Performance post-IPO moyenne vs médiane
6. **Sector Performance** - Performance par secteur
7. **Market Performance** - Tableau de performance par marché
8. **Valuation Multiples** - Multiples de valorisation
9. **Conclusion** - Conclusions clés

## Composants créés

### Composants principaux

- `HeroSection.tsx` - Section hero avec animations d'apparition
- `SectionWrapper.tsx` - Wrapper réutilisable pour les sections avec animations
- `TableOfContents.tsx` - Sommaire de navigation (desktop + mobile)

### Composants compacts

Versions optimisées des sections existantes pour le format plein écran :

- `SampleSectionCompact.tsx`
- `IpoMapCompact.tsx`
- `StockExchangeChartsCompact.tsx`
- `PostIpoPerformanceSectionCompact.tsx`
- `SectorPerformanceChartCompact.tsx`
- `MarketPerformanceTableCompact.tsx`
- `ValuationMultiplesTableCompact.tsx`
- `ConclusionSectionCompact.tsx`

## Fonctionnalités

### Scroll-snap

- Navigation fluide entre sections avec `scroll-snap-type: y mandatory`
- Chaque section s'aligne automatiquement au défilement
- Smooth scrolling activé

### Animations Motion

- Animations d'apparition (fade-in + slide) pour chaque section
- Détection de la section visible avec `IntersectionObserver`
- Animations staggerées pour les éléments internes
- Transitions fluides entre les états

### Table des matières

- **Desktop** : Points cliquables fixes à droite
  - Affichage du nom de la section au hover
  - Indication visuelle de la section active
  - Animation de pulsation sur la section active
- **Mobile** : Menu flottant
  - Bouton floating action button en bas à droite
  - Menu déroulant avec liste des sections
  - Fermeture automatique lors de la navigation

### Responsive Design

- Layout adaptatif pour toutes les tailles d'écran
- Grilles flexibles (grid responsive)
- Hauteurs fixes sur desktop, auto sur mobile
- Textes et espacements adaptatifs
- Sections scrollables à l'intérieur si nécessaire

## Styles CSS

Ajouts dans `globals.css` :

- Classes scroll-snap (`.snap-y`, `.snap-start`, `.snap-always`)
- Styles de scrollbar personnalisés
- Smooth scrolling global
- Support prefers-reduced-motion

## Navigation

L'utilisateur peut naviguer de plusieurs façons :

1. Scroll naturel (snap automatique)
2. Clic sur les points du sommaire (desktop)
3. Menu mobile (mobile)
4. Flèche "scroll to explore" sur la hero section

## Performance

- Animations optimisées avec Motion
- IntersectionObserver pour détecter les sections visibles
- Animations conditionnelles (seulement quand en vue)
- Support du mode "prefers-reduced-motion"

## Technologies utilisées

- **Motion** (anciennement Framer Motion) - Animations
- **React** - Composants
- **Next.js** - Framework
- **Tailwind CSS** - Styling
- **Recharts** - Graphiques
- **Lucide React** - Icônes








