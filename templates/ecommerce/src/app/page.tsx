const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "My Store";

const categories = [
  { name: "New Arrivals", href: "/shop?category=new", icon: "🆕" },
  { name: "Best Sellers", href: "/shop?category=best-sellers", icon: "🔥" },
  { name: "On Sale", href: "/shop?category=sale", icon: "💰" },
  { name: "Collections", href: "/shop?category=collections", icon: "✨" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-secondary px-4 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to {appName}
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Discover our curated collection of premium products, handpicked for quality and style.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/shop"
              className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary shadow hover:bg-gray-50"
            >
              Shop Now
            </a>
            <a
              href="#categories"
              className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Browse Categories
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="flex flex-col items-center gap-3 rounded-xl border border-gray-200 p-6 transition hover:border-primary hover:shadow-md"
            >
              <span className="text-3xl">{cat.icon}</span>
              <span className="text-sm font-medium">{cat.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Products Placeholder */}
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <p className="mt-2 text-text-secondary">
            Connect your database and add products to see them here.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse rounded-xl border border-gray-200 bg-white p-4"
              >
                <div className="aspect-square rounded-lg bg-gray-200" />
                <div className="mt-4 h-4 w-3/4 rounded bg-gray-200" />
                <div className="mt-2 h-4 w-1/2 rounded bg-gray-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold">Ready to get started?</h2>
          <p className="mt-2 text-text-secondary">
            Set up your environment variables, push your products to the database, and launch your store.
          </p>
          <a
            href="/admin"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Go to Admin Panel
          </a>
        </div>
      </section>
    </div>
  );
}
