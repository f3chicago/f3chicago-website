# F3 Chicago Website - Architecture Overview

## Project Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    F3 Chicago Website (Next.js)                 │
└─────────────────────────────────────────────────────────────────┘

                              src/
                               │
                ┌──────────────┼──────────────┐
                │              │              │
             app/           components/    config/
             │              │              │
    ┌────────┼────────┐   ├─ layout/    ├─ navigation.ts
    │        │        │   │  ├─ Header.tsx
  Routes  Styles   Layouts  │  └─ Footer.tsx
    │        │        │   ├─ common/
    ├─ page.tsx       │   │  ├─ Button.tsx
    ├─ layout.tsx     │   │  ├─ Hero.tsx
    ├─ globals.css    │   │  └─ YoutubeEmbed.tsx
    ├─ (info)/        │   └─ features/
    ├─ ContactUsForm/ │      ├─ CorePrinciples/
    ├─ convergence/   │      │  ├─ CorePrinciple.tsx
    ├─ daily-dora/    │      │  └─ DetailsBar.tsx
    ├─ fng/           │      └─ Workouts/
    ├─ mindbody/      │         └─ WorkoutCard.tsx
    ├─ success/       │
    └─ workouts/      │
                      │
                   ├─ data/          ├─ types/       ├─ locales/
                   │ ├─ colors.json  │ └─ workout.ts │ └─ en.json
                   │ ├─ workouts.json
                   │ └─ workouts.schema.json
```

---

## Data Flow Architecture

```
                         ┌─────────────────┐
                         │   User Pages    │
                         │    (app/*)      │
                         └────────┬────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
           ┌────────▼──────┐  ┌──▼─────┐  ┌───▼────────┐
           │   Layouts     │  │ Common  │  │  Features  │
           │  (Header/     │  │Components│  │Components  │
           │   Footer)     │  │(Button, │  │(WorkoutCard│
           │              │  │ Hero)   │  │eltails Bar)│
           └────────┬──────┘  └────┬──┘  └───┬────────┘
                    │             │          │
                    └─────────────┼──────────┘
                                  │
                         ┌────────▼─────────┐
                         │  Configuration   │
                         │  & Type Defs     │
                         └────────┬─────────┘
                                  │
                    ┌─────────────┼──────────────┐
                    │             │              │
              ┌─────▼──┐    ┌─────▼──┐  ┌──────▼───┐
              │  Config │    │  Types │  │   Data   │
              │navigate │    │workout │  │ workouts │
              │─────────│    │─────────│  │ colors   │
              │- pages  │    │- Enum  │  │ schemas  │
              │- links  │    │- Props │  │          │
              └─────────┘    └────────┘  └──────────┘
```

---

## Component Hierarchy

```
┌─ Layout Components (Used everywhere)
│  ├─ Header
│  │  └─ Navigation (from config/navigation.ts)
│  └─ Footer
│     └─ Social Links (from locales/en.json)
│
├─ Common Components (Reusable)
│  ├─ Button
│  │  └─ Props: href, text, target
│  ├─ Hero
│  │  └─ Props: title, subtitle, imgUrl, leadIn
│  └─ YoutubeEmbed
│     └─ Props: embedId
│
└─ Feature Components (Domain-specific)
   ├─ CorePrinciples
   │  ├─ CorePrinciple
   │  │  └─ Props: principle, description
   │  └─ DetailsBar
   │     └─ Styled component (DetailsBarWrapper, etc.)
   │
   └─ Workouts
      └─ WorkoutCard
         ├─ Props: ao, q, avgAttendance, style, location, day, time
         └─ Helper Functions:
            ├─ sortWorkouts()
            ├─ workoutsTomorrow()
            └─ workoutsAnotherDay()
```

---

## Type System Architecture

```
src/types/workout.ts
│
├─ WorkoutCardProps (Interface)
│  ├─ ao: string
│  ├─ q?: string
│  ├─ avgAttendance?: number
│  ├─ style: string
│  ├─ location: { href, text }
│  ├─ day: string
│  └─ time: string
│
├─ WorkoutDays (Enum)
│  ├─ Monday
│  ├─ Tuesday
│  ├─ Wednesday
│  ├─ Thursday
│  ├─ Friday
│  ├─ Every Third Friday
│  ├─ Saturday
│  ├─ All Saturdays Except Last
│  └─ Sunday
│
├─ WorkoutTimes (Enum)
│  ├─ 5:15 AM - 6:15 AM
│  ├─ 5:20 AM - 6:15 AM
│  ├─ ... (5 time slots)
│  └─ 6:00 PM - 6:45 PM
│
└─ WorkoutStyles (Enum)
   ├─ Murph
   ├─ Beatdown
   ├─ Run
   ├─ Trail Run
   ├─ Rucking
   ├─ Rucks & Sandbags
   ├─ Weight Lifting
   └─ 3rd F (Faith)
```

---

## Data Management Architecture

```
src/data/
│
├─ colors.json
│  └─ { drp, iron, gloom, cmu, dirt, sand }
│
├─ workouts.json
│  └─ { workouts: WorkoutCardProps[] }
│
└─ workouts.schema.json
   └─ JSON Schema for workouts.json validation
```

---

## Configuration Architecture

```
src/config/
│
└─ navigation.ts
   └─ navigationConfig
      └─ pages: [
         { href, text },
         ...
      ]
```

---

## Import Resolution

```
All imports use @/ path alias (configured in tsconfig.json)

Example Resolution:
─────────────────────

import Header from '@/components/layout/Header'
                 │                │           │
                 └─ Alias         └─ Resolves to src/components/layout/Header.tsx

import workouts from '@/data/workouts.json'
                    │           │
                    └─ Alias    └─ Resolves to src/data/workouts.json

import en from '@/locales/en.json'
              │        │
              └─ Alias └─ Resolves to src/locales/en.json
```

---

## Next.js Integration

```
Next.js App Router (src/app/)
        │
        ├─ Page Routes
        │  ├─ / (root page)
        │  ├─ /ContactUsForm
        │  ├─ /convergence
        │  ├─ /daily-dora
        │  ├─ /fng
        │  ├─ /mindbody
        │  └─ /workouts
        │
        ├─ Layout Structure
        │  └─ RootLayout (layout.tsx)
        │     └─ Children Pages
        │
        └─ Static Assets
           └─ public/
              ├─ Images
              ├─ Logos
              └─ Manifests

       ↓
    Renders using imported Components
       ↓
    Components + Data + Config → HTML/CSS/JS
```

---

## Build Pipeline

```
Source Code (TypeScript/React)
    ↓
[REFACTORED STRUCTURE]
    ├─ components/ → Import paths resolved
    ├─ types/ → Type checking
    ├─ config/ → Config management
    └─ data/ → Data bundling
    ↓
TypeScript Compiler
    ↓
Next.js Build System
    ├─ Code Splitting
    ├─ Static Generation
    └─ Optimization
    ↓
Production Build (.next/)
    ├─ Static HTML (11 pages)
    ├─ JavaScript Bundles
    ├─ CSS Bundles
    └─ Image Optimization
    ↓
✓ Ready for Deployment
```

---

## File Location Quick Reference

| Component         | Location                                                   | Type      |
| ----------------- | ---------------------------------------------------------- | --------- |
| Header            | `src/components/layout/Header.tsx`                         | Layout    |
| Footer            | `src/components/layout/Footer.tsx`                         | Layout    |
| Button            | `src/components/common/Button.tsx`                         | Common    |
| Hero              | `src/components/common/Hero.tsx`                           | Common    |
| YoutubeEmbed      | `src/components/common/YoutubeEmbed.tsx`                   | Common    |
| CorePrinciple     | `src/components/features/CorePrinciples/CorePrinciple.tsx` | Feature   |
| DetailsBar        | `src/components/features/CorePrinciples/DetailsBar.tsx`    | Feature   |
| WorkoutCard       | `src/components/features/Workouts/WorkoutCard.tsx`         | Feature   |
| Navigation Config | `src/config/navigation.ts`                                 | Config    |
| Workout Types     | `src/types/workout.ts`                                     | Type Defs |
| Colors Data       | `src/data/colors.json`                                     | Data      |
| Workouts Data     | `src/data/workouts.json`                                   | Data      |

---

## Performance Characteristics

```
Page Load Optimization:
┌─ Component Tree
├─ Layout Components (cached)
├─ Common Components (reusable, optimized)
├─ Feature Components (lazy-loadable)
└─ Data Fetching (static/prerendered)

Code Splitting:
├─ Layout JS shared across all pages
├─ Common components bundled efficiently
└─ Route-specific chunks optimized

Caching:
├─ Static pages (prerendered at build time)
├─ Image optimization (Next.js)
└─ CSS modules scoped to components
```

---

## Scalability Path

```
Current State: ✓
├─ 8 Components
├─ 7 Pages
└─ Clean Structure

To Add New Feature:
├─ Create src/components/features/NewFeature/
├─ Add new type to src/types/ if needed
├─ Update src/config/navigation.ts if needed
├─ Create page route in src/app/
└─ Done! ✓
```

---

**Architecture designed for scale, maintainability, and developer experience.**
