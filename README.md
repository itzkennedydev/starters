# Starters

Production-ready Next.js starter templates. Each template is a self-contained project with opinionated defaults, TypeScript strict mode, and Tailwind CSS. Clone a template, update the env vars, and start building.

## Templates

### E-commerce (`templates/ecommerce`)

Full-featured storefront with product catalog, shopping cart, admin panel, and Stripe checkout.

**Stack:** Next.js 15 / React 18 / TypeScript / Tailwind CSS / Drizzle ORM / PostgreSQL / Stripe / Firebase Auth / TanStack Query

**Includes:**
- Product listing with category filtering
- Cart with add/remove/quantity management
- Admin dashboard with product and order management
- CRUD API routes for products and orders
- Stripe payment integration
- Firebase authentication with auth context
- Toast notification system
- Fully responsive layout

### Dashboard (`templates/dashboard`)

Admin dashboard with sidebar navigation, charts, user management, and settings.

**Stack:** Next.js 15 / React 18 / TypeScript / Tailwind CSS / Drizzle ORM / PostgreSQL / Recharts / Firebase Auth

**Includes:**
- Stats cards with trend indicators
- Area and bar charts for data visualization
- User management table with search
- Settings page with toggle controls
- Sidebar navigation with active state
- Stats API endpoint
- Responsive layout with fixed sidebar

### Landing Page (`templates/landing`)

Clean, conversion-focused landing page with hero, features, pricing, FAQ, and contact form.

**Stack:** Next.js 15 / React 18 / TypeScript / Tailwind CSS

**Includes:**
- Hero section with CTA buttons
- Feature grid
- Pricing table with three tiers
- FAQ section
- Contact form with validation
- About page
- Responsive header with mobile menu
- Footer with link columns

## Quick Start

### Using the scaffold script

```bash
# Clone this repo
git clone https://github.com/itzkennedydev/starters.git
cd starters

# Create a new project from a template
chmod +x scripts/create-project.sh
./scripts/create-project.sh ecommerce my-store

# The script will:
# 1. Copy the template into a new directory
# 2. Replace placeholder values with your project name
# 3. Create .env from .env.example
# 4. Init a git repo
# 5. Install dependencies

cd my-store
# Update .env with your actual values
npm run dev
```

### Manual setup

```bash
# Copy the template you want
cp -r templates/landing my-site
cd my-site

# Set up env
cp .env.example .env
# Edit .env with your values

# Install and run
npm install
npm run dev
```

## Customization

All templates are designed to be re-branded through environment variables. No code changes required for basic branding.

### Brand Colors

Every template uses CSS custom properties for theming. Set these in your `.env`:

```env
NEXT_PUBLIC_COLOR_PRIMARY=#2563eb
NEXT_PUBLIC_COLOR_PRIMARY_DARK=#1d4ed8
NEXT_PUBLIC_COLOR_SECONDARY=#7c3aed
NEXT_PUBLIC_COLOR_ACCENT=#f59e0b
```

The colors are applied as CSS variables in `globals.css` and referenced throughout the Tailwind config.

### App Identity

```env
NEXT_PUBLIC_APP_NAME="Your Brand"
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_LOGO_URL=/logo.svg
```

Change these three values and the entire site updates — page titles, header, footer, meta tags, and all references to the app name.

## Database Setup (E-commerce & Dashboard)

Templates that use a database run on PostgreSQL with Drizzle ORM.

```bash
# Set your database URL in .env
DATABASE_URL=postgresql://user:password@localhost:5432/mydb

# Push the schema to your database
npm run db:push

# Or generate and run migrations
npm run db:generate
npm run db:migrate

# Browse your data
npm run db:studio
```

## Project Structure

Each template follows the Next.js App Router convention:

```
template/
├── src/
│   ├── app/          # Pages and API routes
│   ├── components/   # Shared UI components
│   └── lib/          # Database, auth, utilities
├── .env.example      # Required environment variables
├── tailwind.config.ts
├── drizzle.config.ts # (e-commerce & dashboard only)
├── tsconfig.json
└── package.json
```

## License

MIT
