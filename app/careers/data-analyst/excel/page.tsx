const excelStages = [
  {
    number: "01",
    slug: "fundamentals",
    title: "Excel Fundamentals",
    type: "FOUNDATION",
    description:
      "Build a strong foundation in Excel before moving into professional data analysis.",
    topics: ["Interface", "Cells & Ranges", "Formatting", "Basic Formulas"],
  },
  {
    number: "02",
    slug: "formulas",
    title: "Formulas & Functions",
    type: "CORE SKILL",
    description:
      "Learn the formulas and functions used to calculate, transform, and analyze data.",
    topics: ["SUM", "IF", "COUNTIF", "SUMIF"],
  },
  {
    number: "03",
    slug: "data-cleaning",
    title: "Data Cleaning",
    type: "CORE SKILL",
    description:
      "Turn messy spreadsheets into clean, reliable datasets ready for analysis.",
    topics: ["Text Functions", "Duplicates", "Data Validation", "Cleaning"],
  },
  {
    number: "04",
    slug: "lookup-reference",
    title: "Lookup & Reference",
    type: "CORE SKILL",
    description:
      "Learn how to connect information across tables and retrieve the right data.",
    topics: ["XLOOKUP", "VLOOKUP", "INDEX", "MATCH"],
  },
  {
    number: "05",
    slug: "data-analysis",
    title: "Data Analysis",
    type: "ANALYSIS",
    description:
      "Use Excel's analytical tools to discover patterns, compare results, and answer business questions.",
    topics: ["Pivot Tables", "Filters", "Sorting", "Conditional Formatting"],
  },
  {
    number: "06",
    slug: "charts-dashboards",
    title: "Charts & Dashboards",
    type: "BUILD",
    description:
      "Turn analyzed data into clear visual reports and decision-ready dashboards.",
    topics: ["Charts", "KPIs", "Dashboards", "Data Visualization"],
  },
  {
    number: "07",
    slug: "excel-project",
    title: "Excel Project",
    type: "PROOF",
    description:
      "Apply everything you've learned to a realistic data-analysis project.",
    topics: ["Real Dataset", "Analysis", "Dashboard", "Final Report"],
  },
];

export default function ExcelPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Header */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <a
            href="/careers/data-analyst"
            className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            ← Back to Data Analyst Roadmap
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
            DATA ANALYST → STAGE 01
          </div>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Master Excel.
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Build real skills.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Follow a structured Excel path from fundamentals to professional
            data analysis. Learn the concept, practice it, build with it, and
            prove that you can use it.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Fundamentals",
              "Formulas",
              "Cleaning",
              "Lookups",
              "Analysis",
              "Dashboards",
              "Project",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Execution path */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Excel execution path
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Don't just watch Excel tutorials.
              <span className="block text-slate-400">
                Become capable of using Excel.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Every stage is designed to move you from learning to practical
              ability.
            </p>
          </div>

          <div className="space-y-6">
            {excelStages.map((stage) => (
              <article
                key={stage.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl font-bold text-cyan-300">
                    {stage.number}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col justify-between gap-3 md:flex-row">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                          {stage.type}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold">
                          {stage.title}
                        </h3>
                      </div>

                      <span className="text-sm text-slate-500">
                        Stage {stage.number} of 7
                      </span>
                    </div>

                    <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                      {stage.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {stage.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <a
                      href={`/careers/data-analyst/excel/${stage.slug}`}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/20"
                    >
                      Explore stage
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What comes next */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            After Excel
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Excel is only the beginning.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Once you can work confidently with Excel, you'll move into SQL,
            statistics, Power BI, projects, and job-readiness.
          </p>

          <a
            href="/careers/data-analyst"
            className="mt-8 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Back to Data Analyst Roadmap →
          </a>
        </div>
      </section>
    </main>
  );
}