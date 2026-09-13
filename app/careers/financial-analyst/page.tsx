const roadmap = [
  {
    step: "01",
    title: "Excel Foundations",
    description:
      "Build the spreadsheet fundamentals every financial analyst needs, including formulas, functions, formatting, and structured data.",
    skills: ["Excel", "Formulas", "Data Handling"],
    href: "#",
  },
  {
    step: "02",
    title: "Advanced Excel",
    description:
      "Develop analyst-level Excel skills with lookups, logical functions, PivotTables, data cleaning, dashboards, and reporting.",
    skills: ["XLOOKUP", "PivotTables", "Dashboards"],
    href: "#",
  },
  {
    step: "03",
    title: "Financial Statements",
    description:
      "Understand the three core financial statements and learn how income statements, balance sheets, and cash flow statements connect.",
    skills: ["Income Statement", "Balance Sheet", "Cash Flow"],
    href: "#",
  },
  {
    step: "04",
    title: "Financial Analysis",
    description:
      "Learn how to evaluate company performance using profitability, liquidity, efficiency, leverage, and growth analysis.",
    skills: ["Ratio Analysis", "KPIs", "Performance"],
    href: "#",
  },
  {
    step: "05",
    title: "Financial Modeling",
    description:
      "Build structured financial models and learn forecasting, assumptions, scenarios, and model-driven decision making.",
    skills: ["Forecasting", "Modeling", "Scenarios"],
    href: "#",
  },
  {
    step: "06",
    title: "Valuation",
    description:
      "Learn the foundations of company valuation and understand major valuation approaches used by financial analysts.",
    skills: ["DCF", "Multiples", "Valuation"],
    href: "#",
  },
  {
    step: "07",
    title: "Projects & Job Readiness",
    description:
      "Build financial analysis projects, complete assessments, create proof of skills, and prepare for analyst opportunities.",
    skills: ["Projects", "Assessment", "Portfolio"],
    href: "#",
  },
];

export default function FinancialAnalystRoadmap() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.10),transparent_35%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <a
            href="/careers"
            className="mb-10 inline-flex text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            ← Back to careers
          </a>

          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              BEGINNER → JOB READY
            </p>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              Financial Analyst Roadmap
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Follow a structured path from financial fundamentals to
              job-ready analyst skills. Learn the skill, practice it, build
              projects, prove your ability, and move toward real
              opportunities.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Excel", "Accounting", "Financial Analysis", "Modeling", "Valuation"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            YOUR EXECUTION PATH
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Don&apos;t just learn. Progress.
          </h2>

          <p className="mt-4 max-w-2xl text-slate-400">
            Each stage moves you closer to becoming capable of doing real
            financial analyst work.
          </p>
        </div>

        <div className="space-y-5">
          {roadmap.map((item) => (
            <div
              key={item.step}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-8"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-black text-cyan-300">
                    {item.step}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-2xl leading-7 text-slate-400">
                      {item.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {item.href !== "#" ? (
                  <a
                    href={item.href}
                    className="shrink-0 text-sm font-bold text-cyan-400 transition hover:text-cyan-300"
                  >
                    Explore stage →
                  </a>
                ) : (
                  <span className="shrink-0 text-sm font-bold text-slate-500">
                    Coming next →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.06] p-8 text-center sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
              THE GOAL
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Turn knowledge into proof.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
              CourseNest is designed to take you beyond watching courses.
              Learn the skill, practice it, build projects, prove your ability,
              and become ready for real opportunities.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/careers"
                className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Explore careers
              </a>

              <a
                href="/"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Back to CourseNest
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}