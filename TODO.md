# FitGenX Implementation Plan

## Phase 1: Setup & Constants
- [ ] 1.1 Create src/constants/index.ts with USER_PROGRAMS data
- [ ] 1.2 Create src/types/index.ts for type definitions

## Phase 2: Temp Storage
- [ ] 2.1 Create src/context/StorageContext.tsx for temp data management
- [ ] 2.2 Add localStorage persistence

## Phase 3: UI Components
- [ ] 3.1 Install and configure shadcn/ui components
- [ ] 3.2 Create Button, Card, Tabs, Accordion components

## Phase 4: Pages
- [ ] 4.1 Build src/app/generate-program/page.tsx with form
- [ ] 4.2 Update src/app/profile/page.tsx to use temp storage
- [ ] 4.3 Update src/app/page.tsx with UserPrograms
- [ ] 4.4 Update src/app/layout.tsx with Navbar/Footer

## Phase 5: Integration
- [ ] 5.1 Connect generate-program to save plans
- [ ] 5.2 Connect profile to load plans
- [ ] 5.3 Test the flow

## Future Enhancements
- [ ] Database integration
- [ ] Ollama API integration

