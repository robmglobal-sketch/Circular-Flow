# Graph Report - .  (2026-07-26)

## Corpus Check
- Corpus is ~13,194 words - fits in a single context window. You may not need a graph.

## Summary
- 98 nodes · 93 edges · 13 communities (10 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Dev Dependencies & Tooling
- UI Components & Pages
- TypeScript Compiler Config
- Runtime Dependencies
- TypeScript References
- Package Metadata & Scripts
- Project Documentation
- TypeScript Lib References
- Agent Configuration Rules
- Circular Flow Brand Identity
- ESLint Config
- Next.js Config
- PostCSS Config

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `include` - 7 edges
3. `scripts` - 5 edges
4. `lib` - 4 edges
5. `Button()` - 3 edges
6. `Next.js Project Setup` - 3 edges
7. `Navbar()` - 2 edges
8. `@phosphor-icons/react` - 2 edges
9. `framer-motion` - 2 edges
10. `next` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Claude AGENTS.md Reference` --references--> `Next.js Agent Rules`  [EXTRACTED]
  CLAUDE.md → AGENTS.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Circular Flow Brand Identity** — public_logo_circular_flow_brand, public_logo_freedom_expression_tagline, public_logo_artistic_figures [INFERRED 0.85]

## Communities (13 total, 3 thin omitted)

### Community 0 - "Dev Dependencies & Tooling"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+9 more)

### Community 1 - "UI Components & Pages"
Cohesion: 0.16
Nodes (9): Button(), ButtonProps, ButtonVariant, Navbar(), navItems, dmSans, inter, lugrasimo (+1 more)

### Community 2 - "TypeScript Compiler Config"
Cohesion: 0.13
Nodes (15): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, module, moduleResolution (+7 more)

### Community 3 - "Runtime Dependencies"
Cohesion: 0.18
Nodes (11): framer-motion, next, dependencies, framer-motion, next, @phosphor-icons/react, react, react-dom (+3 more)

### Community 4 - "TypeScript References"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 5 - "Package Metadata & Scripts"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 6 - "Project Documentation"
Cohesion: 0.40
Nodes (5): create-next-app, Geist Font Family, next/font Optimization, Next.js Project Setup, Vercel Deployment

### Community 7 - "TypeScript Lib References"
Cohesion: 0.50
Nodes (4): dom, dom.iterable, esnext, lib

### Community 8 - "Agent Configuration Rules"
Cohesion: 0.67
Nodes (3): Breaking Changes Warning, Next.js Agent Rules, Claude AGENTS.md Reference

### Community 9 - "Circular Flow Brand Identity"
Cohesion: 1.00
Nodes (3): Artistic Human Figures, Circular Flow Brand Logo, The Freedom to Change Through Expression

## Knowledge Gaps
- **58 isolated node(s):** `ButtonVariant`, `ButtonProps`, `navItems`, `dmSans`, `inter` (+53 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Dev Dependencies & Tooling` to `Package Metadata & Scripts`?**
  _High betweenness centrality (0.093) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `TypeScript Compiler Config` to `TypeScript References`, `TypeScript Lib References`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `Package Metadata & Scripts`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **What connects `ButtonVariant`, `ButtonProps`, `navItems` to the rest of the system?**
  _58 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dev Dependencies & Tooling` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `TypeScript Compiler Config` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._