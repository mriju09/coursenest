const roadmap = [
  {
    step: "01",
    title: "Excel Foundations",
    description:
      "Build a strong foundation in spreadsheets, formulas, functions, data cleaning, and analysis.",
    skills: ["Excel Basics", "Formulas", "Functions", "Data Cleaning"],
    status: "Foundation",
    href: "/careers/data-analyst/excel",
  },
  {
    step: "02",
    title: "Advanced Excel",
    description:
      "Move from basic spreadsheet work to professional analysis, reporting, dashboards, and automation.",
    skills: ["XLOOKUP", "INDEX/MATCH", "Pivot Tables", "Charts"],
    status: "Core Skill",
    href: "#",
  },
  {
    step: "03",
    title: "SQL",
    description:
      "Learn how to retrieve, filter, join, aggregate, and analyze data stored in databases.",
    skills: ["SELECT", "WHERE", "JOIN", "GROUP BY"],
    status: "Core Skill",
    href: "#",
  },
  {
    step: "04",
    title: "Statistics",
    description:
      "Understand the statistical concepts required to interpret data and make reliable conclusions.",
    skills: ["Mean", "Median", "Probability", "Distributions"],
    status: "Core Skill",
    href: "#",
  },
  {
    step: "05",
    title: "Power BI",
    description:
      "Turn cleaned data into interactive dashboards and decision-ready business reports.",
    skills: ["Power Query", "DAX", "Data Models", "Dashboards"],
    status: "Core Skill",
    href: "#",
  },
  {
    step: "06",
    title: "Data Analysis Projects",
    description:
      "Apply your skills to realistic business problems and build evidence of your ability.",
    skills: ["Business Problems", "Analysis", "Dashboards", "Insights"],
    status: "Build Proof",
    href: "#",
  },
  {
    step: "07",
    title: "Assessment & Job Readiness",
    description:
      "Test your skills, identify gaps, improve weak areas, and determine whether you are ready for real opportunities.",
    skills: ["Skill Test", "Case Study", "Portfolio", "Readiness"],
    status: "Prove Yourself",
    href: "#",
  },
];

export default function DataAnalystPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a
            href="/careers"
            className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            ← Back to Careers
          </a>

          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300">
            CourseNest Roadmap
          </span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Beginner → Job Ready
          </p>

          <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
            Data Analyst
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Roadmap
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Follow a structured path from the fundamentals to job-ready data
            analysis skills. Learn the skill, practice it, build projects,
            prove your ability, and move toward real opportunities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["Excel", "SQL", "Statistics", "Power BI", "Projects"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Your execution path
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Don't just learn. Progress.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Every stage has a purpose. Complete the skill, practice it,
              build something with it, and prove that you can use it.
            </p>
          </div>

          <div className="space-y-6">
            {roadmap.map((item, index) => (
              <article
                key={item.step}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-lg font-bold text-cyan-300">
                    {item.step}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                          {item.status}
                        </p>

                        <h3 className="mt-1 text-2xl font-bold">
                          {item.title}
                        </h3>
                      </div>

                      <span className="text-sm text-slate-500">
                        Stage {index + 1} of {roadmap.length}
                      </span>
                    </div>

                    <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {item.href !== "#" ? (
                      <a
                        href={item.href}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
                      >
                        Explore stage
                        <span>→</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-500"
                      >
                        Coming next
                        <span>→</span>
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CourseNest Philosophy */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            The CourseNest difference
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Information isn't the finish line.
            <span className="block text-slate-400">
              Job readiness is.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            CourseNest will connect learning resources, practice, projects,
            assessments, proof, resumes, and opportunities into one continuous
            career execution system.
          </p>

          <a
            href="/careers"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Explore Other Careers →
          </a>
        </div>
      </section>
    </main>
  );
}