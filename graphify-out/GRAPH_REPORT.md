# Graph Report - e:\Fiverr\Gig\Gig 9\Orders\Project 0013\website\circlularflow  (2026-07-28)

## Corpus Check
- 34 files · ~95,265 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 110 nodes · 118 edges · 11 communities (8 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- UI Components & Sections
- TS Compiler Options
- Dev Dependencies
- Layout & Navigation
- Dependencies
- TS Config Includes
- Package Scripts
- Featured Experiences Section
- ESLint Config
- Next.js Config
- PostCSS Config

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `include` - 7 edges
3. `Button()` - 6 edges
4. `scripts` - 5 edges
5. `lib` - 4 edges
6. `EcosystemSection()` - 3 edges
7. `Navbar()` - 2 edges
8. `ProjectItem` - 2 edges
9. `NODES` - 2 edges
10. `polarToCartesian()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (11 total, 3 thin omitted)

### Community 0 - "UI Components & Sections"
Cohesion: 0.15
Nodes (12): Button(), ButtonProps, ButtonSize, ButtonVariant, EcosystemSection(), NodeItem, NODES, polarToCartesian() (+4 more)

### Community 1 - "TS Compiler Options"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 2 - "Dev Dependencies"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+9 more)

### Community 3 - "Layout & Navigation"
Cohesion: 0.20
Nodes (6): Navbar(), navItems, dmSans, inter, lugrasimo, metadata

### Community 4 - "Dependencies"
Cohesion: 0.18
Nodes (11): framer-motion, next, dependencies, framer-motion, next, @phosphor-icons/react, react, react-dom (+3 more)

### Community 5 - "TS Config Includes"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 6 - "Package Scripts"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 7 - "Featured Experiences Section"
Cohesion: 0.33
Nodes (3): PROJECTS, FeatureExCardProps, ProjectItem

## Knowledge Gaps
- **60 isolated node(s):** `ButtonVariant`, `ButtonSize`, `ButtonProps`, `navItems`, `FeatureExCardProps` (+55 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Dependencies` to `Package Scripts`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `TS Compiler Options` to `TS Config Includes`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Dependencies` to `Package Scripts`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **What connects `ButtonVariant`, `ButtonSize`, `ButtonProps` to the rest of the system?**
  _60 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `UI Components & Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.14736842105263157 - nodes in this community are weakly interconnected._
- **Should `TS Compiler Options` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Dev Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._