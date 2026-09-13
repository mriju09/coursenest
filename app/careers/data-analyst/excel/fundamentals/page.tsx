const resources = [
  {
    language: "ENGLISH",
    title: "How To Use Excel for Beginners In 10 Minutes",
    creator: "Kevin Startvert",
    duration: "10:28",
    level: "Beginner",
    link: "https://www.youtube.com/watch?v=Ai0MV7twEBE",
    covers:
      "Excel interface, cells, rows and columns, data entry, formatting, tables, charts, basic formulas, sorting and filtering.",
  },
  {
    language: "HINGLISH",
    title:
      "MS Excel Full Course in Hindi | Microsoft Excel Complete Course | MS Excel Course for Beginners",
    creator: "Rishabh Mishra",
    duration: "23:38",
    level: "Beginner",
    link: "https://www.youtube.com/watch?v=OX-iyb-21tk&t=101s",
    covers:
      "Excel interface, data entry, formatting, formulas, saving files, sorting, filtering and conditional formatting.",
  },
];

const checklist = [
  "Understand the Excel interface",
  "Work confidently with cells, rows and columns",
  "Enter and organize data",
  "Apply basic formatting",
  "Create simple tables and charts",
  "Understand basic formulas",
  "Sort and filter data",
];

export default function ExcelFundamentalsPage() {
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
            DATA ANALYST → EXCEL → STAGE 01
          </div>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Excel Fundamentals
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Start with the foundation.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Learn the fundamentals of Excel that you need before moving into
            advanced formulas, data cleaning, analysis, dashboards and
            real-world projects.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Interface",
              "Cells & Ranges",
              "Formatting",
              "Data Entry",
              "Basic Formulas",
              "Sorting",
              "Filtering",
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

      {/* Learning Objective */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              YOUR OBJECTIVE
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              By the end of this stage, you should be able to work comfortably
              inside Excel.
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              Don't rush into advanced functions. First build the ability to
              navigate Excel, organize information and perform basic
              spreadsheet operations confidently.
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
              Start with these resources.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Choose the language that works best for you. Both resources cover
              the fundamentals required for this stage.
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
                    What it covers
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

      {/* Checklist */}
      <section className="border-y border-white/10 bg-white/[0.015] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              STEP 02 — UNDERSTAND
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Your fundamentals checklist
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Don't move forward just because you finished the video. Make
              sure you can actually perform these tasks yourself.
            </p>
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              STEP 03 — PRACTICE
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Don't just watch. Open Excel.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Recreate what you learned yourself. Enter sample data, format
              it, create a simple table, apply formulas, sort the data and
              filter it.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-6">
              <p className="text-sm font-bold text-white">
                Minimum practice challenge
              </p>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                <li>✓ Create a small dataset with at least 10 rows.</li>
                <li>✓ Format the headers and data.</li>
                <li>✓ Convert the dataset into a table.</li>
                <li>✓ Add at least one basic formula.</li>
                <li>✓ Sort the dataset.</li>
                <li>✓ Apply a filter.</li>
                <li>✓ Create one simple chart.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Completion */}
      <section className="border-t border-white/10 px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            STAGE 01
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Fundamentals first. Then level up.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Once you can confidently perform the fundamentals, continue to
            Advanced Excel and start building analyst-level spreadsheet
            skills.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/careers/data-analyst/excel"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              ← Excel Roadmap
            </a>

            <a
              href="/careers/data-analyst"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Data Analyst Roadmap →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}