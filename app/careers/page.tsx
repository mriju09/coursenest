const careers = [
  {
    title: "Data Analyst",
    slug: "data-analyst",
    description:
      "Turn raw data into useful insights, reports, dashboards, and business decisions.",
    skills: ["Excel", "SQL", "Power BI", "Statistics"],
    level: "Beginner → Job Ready",
  },
  {
    title: "Financial Analyst",
    slug: "financial-analyst",
    description:
      "Build financial analysis skills, understand business performance, and create decision-ready models.",
    skills: ["Excel", "Accounting", "Financial Modeling", "Analysis"],
    level: "Beginner → Job Ready",
  },
  {
    title: "Web Developer",
    slug: "web-developer",
    description:
      "Learn how modern websites are designed, developed, deployed, and maintained.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    level: "Beginner → Job Ready",
  },
  {
    title: "AI Automation Specialist",
    slug: "ai-automation-specialist",
    description:
      "Build practical AI-powered workflows that automate repetitive business processes.",
    skills: ["AI Tools", "Automation", "APIs", "Workflows"],
    level: "Beginner → Freelance Ready",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Header */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <a
            href="/"
            className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            ← Back to CourseNest
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
            Explore your possibilities
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Choose a career.
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Follow the path.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">
            Explore careers and discover exactly what you need to learn,
            practice, build, and prove before you're ready for real
            opportunities.
          </p>
        </div>
      </section>

      {/* Career cards */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Career paths
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Start with where you want to go.
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              Each career connects to a complete CourseNest execution path.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {careers.map((career) => (
              <article
                key={career.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-cyan-300">{career.level}</p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {career.title}
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl">
                    →
                  </div>
                </div>

                <p className="mt-5 leading-7 text-slate-400">
                  {career.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {career.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={`/careers/${career.slug}`}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  View roadmap
                  <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            CourseNest
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Don't just choose a career.
            <span className="block text-slate-400">
              Know what to do next.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            CourseNest connects career choice with learning, practice,
            projects, proof, and real opportunities.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Build My Career Path →
          </a>
        </div>
      </section>
    </main>
  );
}