const appName = process.env.NEXT_PUBLIC_APP_NAME ?? "My App";

const values = [
  {
    title: "Quality First",
    description: "We believe in doing things right the first time. Every line of code, every pixel, every interaction is intentional.",
  },
  {
    title: "Move Fast",
    description: "Speed matters. We ship quickly, iterate based on feedback, and never let perfect be the enemy of good.",
  },
  {
    title: "Stay Curious",
    description: "Technology moves fast and so do we. We are always learning, experimenting, and pushing boundaries.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold">About {appName}</h1>
          <p className="mt-4 text-lg text-text-secondary">
            We are building tools that help developers and businesses move faster.
            Our mission is to remove the friction between having an idea and shipping it.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-surface px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <div className="mt-4 space-y-4 text-text-secondary">
            <p>
              {appName} started from a simple frustration: every new project required the same boilerplate
              setup, the same configuration dance, the same decisions about folder structure and tooling.
            </p>
            <p>
              We built this because we wanted to spend our time building features, not wrestling with
              webpack configs and authentication flows for the hundredth time.
            </p>
            <p>
              What started as internal tooling has grown into a set of production-ready templates
              that anyone can use to ship faster. We use these templates ourselves for every new
              project, and we keep them updated as the ecosystem evolves.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold">What We Value</h2>
          <div className="mt-8 space-y-6">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold">Want to work with us?</h2>
          <p className="mt-2 text-text-secondary">
            We are always looking for great people and interesting projects.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-dark"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
