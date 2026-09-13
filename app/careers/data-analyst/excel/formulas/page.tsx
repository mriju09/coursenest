const resources = [
  {
    language: "ENGLISH",
    title: "Excel Formulas And Functions - Tutorial For Beginners",
    creator: "Kevin Startvert",
    duration: "11:00",
    level: "Beginner",
    link: "https://www.youtube.com/watch?v=ZwiQ0W5lTEg",
    covers:
      "Learn the essential Excel formulas and functions used to perform basic calculations and work with spreadsheet data.",
  },
  {
    language: "HINGLISH",
    title:
      "Formula of Sum Average Count Min Max in Excel – How to use formula in Excel in Hindi",
    creator: "ISHAN GURU",
    duration: "12:09",
    level: "Beginner",
    link: "https://www.youtube.com/watch?v=MIzahIBY6KM",
    covers:
      "Learn SUM, AVERAGE, MAX, MIN, COUNT and COUNTA with practical Excel examples.",
  },
];

const formulas = [
  {
    name: "SUM",
    example: "=SUM(B2:B10)",
    purpose: "Adds numbers together.",
  },
  {
    name: "AVERAGE",
    example: "=AVERAGE(B2:B10)",
    purpose: "Calculates the average of a range.",
  },
  {
    name: "MAX",
    example: "=MAX(B2:B10)",
    purpose: "Finds the largest value.",
  },
  {
    name: "MIN",
    example: "=MIN(B2:B10)",
    purpose: "Finds the smallest value.",
  },
  {
    name: "COUNT",
    example: "=COUNT(B2:B10)",
    purpose: "Counts cells containing numbers.",
  },
  {
    name: "COUNTA",
    example: "=COUNTA(B2:B10)",
    purpose: "Counts non-empty cells.",
  },
];

const checklist = [
  "Understand what an Excel formula is",
  "Use SUM to calculate totals",
  "Use AVERAGE to calculate averages",
  "Use MAX and MIN to find extreme values",
  "Use COUNT to count numeric values",
  "Use COUNTA to count non-empty cells",
  "Write formulas using cell ranges",
];

const practiceTasks = [
  "Create a dataset containing at least 10 numbers.",
  "Calculate the total using SUM.",
  "Calculate the average using AVERAGE.",
  "Find the highest value using MAX.",
  "Find the lowest value using MIN.",
  "Count the numeric values using COUNT.",
  "Use COUNTA to count non-empty cells.",
];

export default function ExcelFormulasPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      {/* Header */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <a
            href="/careers/data-analyst/excel"
            className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
          >
            ← Back to Excel Roadmap
          </a>
        </div>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            DATA ANALYST → EXCEL → STAGE 02
          </div>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Excel Formulas
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Make Excel calculate for you.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Learn the core Excel formulas and functions you need to calculate,
            summarize and understand spreadsheet data.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["SUM", "AVERAGE", "MAX", "MIN", "COUNT", "COUNTA"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Objective */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              YOUR OBJECTIVE
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Stop calculating everything manually.
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              Your goal in this stage is to understand the most important basic
              Excel functions and know when to use each one.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              STEP 01 — LEARN
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Learn the formulas.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Pick either the English or Hinglish resource and follow along in
              Excel while learning.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <article
                key={resource.language}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-bold text-cyan-300">
                    {resource.language}
                  </span>

                  <span className="text-sm text-slate-500">
                    {resource.duration}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold leading-8">
                  {resource.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500">
                  By {resource.creator}
                </p>

                <div className="mt-6 rounded-2xl border border-white/5 bg-black/20 p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    What you'll learn
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {resource.covers}
                  </p>
                </div>

                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-cyan-400 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Watch Resource →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Formula Reference */}
      <section className="border-y border-white/10 bg-white/[0.015] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              STEP 02 — UNDERSTAND
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Your formula reference
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Understand what each function does before trying to memorize
              formulas.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {formulas.map((formula) => (
              <div
                key={formula.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-black text-cyan-300">
                    {formula.name}
                  </h3>

                  <span className="rounded-lg bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-400">
                    Function
                  </span>
                </div>

                <div className="mt-5 rounded-xl border border-white/5 bg-black/30 p-4">
                  <code className="text-sm text-slate-300">
                    {formula.example}
                  </code>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {formula.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              STEP 03 — CHECK YOUR UNDERSTANDING
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Can you do these without help?
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {checklist.map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-300">
                  {index + 1}
                </div>

                <p className="font-medium text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              STEP 04 — PRACTICE
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Build your own formula practice sheet.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Open Excel and complete every task yourself. Don't copy the
              formula blindly — understand why it produces the result.
            </p>

            <div className="mt-7 space-y-3">
              {practiceTasks.map((task, index) => (
                <div
                  key={task}
                  className="flex items-start gap-4 rounded-xl border border-white/10 bg-black/20 p-4"
                >
                  <span className="font-bold text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-sm leading-6 text-slate-300">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Completion */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            EX02 COMPLETE
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Next: Cell References & Formula Logic
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Once basic formulas feel comfortable, you'll learn how Excel
            references cells and how formulas behave when copied across a
            dataset.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/careers/data-analyst/excel"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              ← Excel Roadmap
            </a>

            <a
              href="/careers/data-analyst/excel"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Continue Learning →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}