const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "My App";

const features = [
  {
    title: "Lightning Fast",
    description: "Built on Next.js 15 with server components for optimal performance out of the box.",
    icon: "⚡",
  },
  {
    title: "Fully Responsive",
    description: "Looks great on every device, from phones to ultrawide monitors. No compromises.",
    icon: "📱",
  },
  {
    title: "Type Safe",
    description: "TypeScript from top to bottom with strict mode enabled. Catch bugs before they ship.",
    icon: "🛡️",
  },
  {
    title: "Easy to Customize",
    description: "Change colors, fonts, and branding through environment variables. No code changes needed.",
    icon: "🎨",
  },
  {
    title: "SEO Optimized",
    description: "Built-in metadata, Open Graph tags, and semantic HTML for maximum discoverability.",
    icon: "🔍",
  },
  {
    title: "Production Ready",
    description: "Tested patterns and best practices so you can ship with confidence from day one.",
    icon: "🚀",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for side projects and experimentation",
    features: ["1 project", "Community support", "Basic analytics", "1GB storage"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For growing businesses that need more",
    features: ["Unlimited projects", "Priority support", "Advanced analytics", "50GB storage", "Custom domain", "API access"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams with specific requirements",
    features: ["Everything in Pro", "Dedicated support", "SLA guarantee", "Unlimited storage", "SSO", "Custom integrations"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "How do I get started?",
    answer: "Clone this template, update the environment variables with your branding, and run npm install followed by npm run dev. You will have a working site in under two minutes.",
  },
  {
    question: "Can I use this for commercial projects?",
    answer: "Yes. This template is free to use for both personal and commercial projects. No attribution required.",
  },
  {
    question: "How do I customize the colors?",
    answer: "All brand colors are defined as CSS custom properties and can be overridden through environment variables in your .env file. The changes apply globally across the entire site.",
  },
  {
    question: "Is this template maintained?",
    answer: "Yes. Dependencies are kept up to date and new features are added based on community feedback. Check the GitHub repo for the latest changes.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Now in v1.0
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Build your next project
            <br />
            <span className="text-primary">faster than ever</span>
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            {appName} gives you a production-ready foundation so you can focus on building your product,
            not configuring boilerplate. Ship in days, not weeks.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#pricing"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Everything you need to ship</h2>
            <p className="mt-3 text-text-secondary">
              A carefully selected set of tools and patterns that work together seamlessly.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
              >
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
            <p className="mt-3 text-text-secondary">
              Pick the plan that works for you. Upgrade or downgrade anytime.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border p-8 ${
                  plan.highlighted
                    ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                    : "border-gray-200 bg-white"
                }`}
              >
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="ml-1 text-text-secondary">{plan.period}</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-text-secondary">{plan.description}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold ${
                    plan.highlighted
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
            <p className="mt-3 text-text-secondary">
              Got questions? We have answers.
            </p>
          </div>
          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm text-text-secondary">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold">Ready to build something great?</h2>
          <p className="mt-3 text-text-secondary">
            Start with a solid foundation and ship your project faster than you thought possible.
          </p>
          <a
            href="#pricing"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </div>
  );
}
