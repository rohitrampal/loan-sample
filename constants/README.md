# Constants Directory

This directory contains all static content/data for the website, organized by feature/page for easy maintenance and updates.

## Structure

Each file contains constants for a specific page or feature:

- **`about-us.ts`** - About Us page content (mission, offerings, commitment)
- **`how-it-works.ts`** - How It Works page steps and content
- **`faqs.ts`** - Frequently Asked Questions
- **`hero.ts`** - Homepage hero section content
- **`features.ts`** - Homepage features section
- **`testimonials.ts`** - Customer testimonials
- **`news.ts`** - News and updates items
- **`service-area.ts`** - Cities and service areas
- **`digital-lending-partners.ts`** - Lending partner information
- **`affiliate-program.ts`** - Affiliate program content
- **`repay-loan.ts`** - Loan repayment methods and information
- **`rate-and-terms.ts`** - Interest rates and terms information
- **`cta.ts`** - Call-to-action section content
- **`home-how-it-works.ts`** - Homepage how it works section title

## Usage

Import constants from the main index file:

```typescript
import { aboutUsContent, faqsContent, heroContent } from '@/constants'
```

Or import from specific files:

```typescript
import { aboutUsContent } from '@/constants/about-us'
```

## Benefits

- **Single Source of Truth**: All content is managed from one location
- **Easy Updates**: Change content without touching component code
- **Type Safety**: TypeScript interfaces ensure data consistency
- **Maintainability**: Clear organization makes it easy to find and update content
- **Reusability**: Content can be shared across multiple components

## Adding New Content

1. Create a new constant file in this directory (e.g., `new-page.ts`)
2. Define your content structure with TypeScript interfaces
3. Export the constants
4. Add export to `index.ts`
5. Import and use in your components

## Example

```typescript
// constants/new-page.ts
export interface NewContent {
  title: string
  description: string
}

export const newPageContent: NewContent = {
  title: 'New Page Title',
  description: 'New page description',
}
```

```typescript
// components/NewComponent.tsx
import { newPageContent } from '@/constants'

export function NewComponent() {
  return <h1>{newPageContent.title}</h1>
}
```

