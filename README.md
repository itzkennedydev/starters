# Starters

Next.js starter templates I reuse for client projects. Each one is self-contained with TypeScript strict mode and Tailwind. Clone it, set the env vars, start building.

## Templates

- **E-commerce** (`templates/ecommerce`): storefront with catalog, cart, Stripe checkout, and an admin panel. Postgres via Drizzle, Firebase auth.
- **Dashboard** (`templates/dashboard`): admin dashboard with Recharts, user management, and settings. Postgres via Drizzle, Firebase auth.
- **Landing** (`templates/landing`): marketing page with hero, features, pricing, FAQ, and a contact form. No database.

## Creating a project

```bash
git clone https://github.com/itzkennedydev/starters.git
cd starters
./scripts/create-project.sh ecommerce my-store
cd my-store
npm run dev
```

The script copies the template, swaps in your project name, creates `.env` from `.env.example`, inits git, and installs dependencies. Or copy a `templates/` folder by hand and do the same steps yourself.

## Branding through env vars

Templates re-brand without code changes:

```env
NEXT_PUBLIC_APP_NAME="Your Brand"
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_LOGO_URL=/logo.svg
NEXT_PUBLIC_COLOR_PRIMARY=#2563eb
NEXT_PUBLIC_COLOR_PRIMARY_DARK=#1d4ed8
NEXT_PUBLIC_COLOR_SECONDARY=#7c3aed
NEXT_PUBLIC_COLOR_ACCENT=#f59e0b
```

Colors flow through CSS custom properties in `globals.css`; the name, URL, and logo update titles, meta tags, header, and footer.

## Database (e-commerce and dashboard)

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
npm run db:push      # push schema
npm run db:studio    # browse data
```

`db:generate` and `db:migrate` are there when you want real migrations instead of a push.
