const resources = [
  {
    language: "ENGLISH",
    title:
      "LOOKUP Functions in Excel VLOOKUP, HLOOKUP, INDEX MATCH, XLOOKUP Tutorial",
    creator: "Simon Sez IT",
    duration: "27:39",
    level: "Beginner",
    link: "https://www.youtube.com/watch?v=ndvZAnvja7k",
    covers:
      "VLOOKUP, HLOOKUP, INDEX and MATCH, XLOOKUP, exact and approximate matching, and practical lookup techniques.",
  },
  {
    language: "HINGLISH",
    title:
      "MS Excel - Lookup, Vlookup, Hlookup and Xlookup Formula Explained",
    creator: "Deepak EduWorld",
    duration: "36:49",
    level: "Beginner",
    link: "https://www.youtube.com/watch?v=kaMh0WswDo0",
    covers:
      "LOOKUP, VLOOKUP, HLOOKUP and XLOOKUP with practical examples and guidance on when to use each function.",
  },
];

const lookupFunctions = [
  {
    name: "VLOOKUP",
    syntax: "=VLOOKUP(lookup_value, table_array, col_index_num, FALSE)",
    description:
      "Searches the first column of a table and returns a value from another column in the same row.",
  },
  {
    name: "HLOOKUP",
    syntax: "=HLOOKUP(lookup_value, table_array, row_index_num, FALSE)",
    description:
      "Searches across the top row of a table and returns a value from a specified row.",
  },
  {
    name: "XLOOKUP",
    syntax: "=XLOOKUP(lookup_value, lookup_array, return_array)",
    description:
      "Searches a range and returns the corresponding value from another range. It can look in either direction.",
  },
  {
    name: "INDEX + MATCH",
    syntax: "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
    description:
      "Combines MATCH to find a position with INDEX to return the corresponding value.",
  },
];

const checklist = [
  "Understand what a lookup function does",
  "Use VLOOKUP with an exact match",
  "Understand the difference between exact and approximate matching",
  "Use HLOOKUP when information is arranged horizontally",
  "Understand the basic structure of XLOOKUP",
  "Use INDEX and MATCH together",
  "Choose an appropriate lookup function for a problem",
];

const practiceTasks = [
  "Create an employee table containing ID, Name, Department and Salary.",
  "Use VLOOKUP to return an employee's department from their ID.",
  "Change the lookup value and observe how the result changes.",
  "Create a horizontal dataset and practice HLOOKUP.",
  "Use XLOOKUP to retrieve an employee's salary.",
  "Create an INDEX + MATCH formula to retrieve a value.",
  "Test what happens when the lookup value does not exist.",
];

export default function LookupReferencePage() {
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
            DATA ANALYST → EXCEL → STAGE 04
          </div>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Lookup & Reference
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Connect information intelligently.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to find information in tables, connect datasets and
            return the exact value you need using Excel's lookup functions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "LOOKUP",
              "VLOOKUP",
              "HLOOKUP",
              "INDEX",
              "MATCH",
              "XLOOKUP",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300"
              >
                {item}
              </span>
            ))}
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

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Stop searching through tables manually.
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              Your goal is to understand how lookup functions retrieve related
              information from datasets and to choose the right function for
              the problem you're solving.
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
              Learn the lookup functions.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Follow along in Excel while watching the tutorial. Pause the
              video and reproduce each example yourself.
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

      {/* Functions */}
      <section className="border-y border-white/10 bg-white/[0.015] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              STEP 02 — UNDERSTAND
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Your lookup toolkit
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Learn what each function does and understand the type of problem
              it solves.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {lookupFunctions.map((item, index) => (
              <article
                key={item.name}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                    Lookup
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black text-cyan-300">
                  {item.name}
                </h3>

                <div className="mt-4 overflow-x-auto rounded-xl border border-white/5 bg-black/30 p-4">
                  <code className="whitespace-nowrap text-sm text-slate-300">
                    {item.syntax}
                  </code>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Important concept */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              IMPORTANT CONCEPT
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Exact match vs approximate match
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              When working with lookup functions, you need to understand
              whether you're looking for an exact value or an approximate
              result. For many everyday lookup tasks, an exact match is the
              safer starting point.
            </p>

            <div className="mt-7 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  EXACT MATCH
                </p>

                <p className="mt-3 font-mono text-sm text-slate-300">
                  FALSE / 0
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Find the specific value you're looking for. If it isn't
                  found, the lookup can return an error such as #N/A.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  APPROXIMATE MATCH
                </p>

                <p className="mt-3 font-mono text-sm text-slate-300">
                  TRUE / 1
                </p>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Useful when the lookup is based on ranges or bands and an
                  exact value may not exist.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="border-y border-white/10 bg-white/[0.015] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              STEP 03 — CHECK YOUR UNDERSTANDING
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Can you retrieve data without searching manually?
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
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.05] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              STEP 04 — PRACTICE
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Build a lookup practice sheet.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Create two related tables and practice retrieving information
              from one table using a value from another.
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
            STAGE 04 COMPLETE
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Now start analyzing the data.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Once you can clean data and connect information across tables, the
            next step is using Excel's analytical tools to find patterns and
            answer business questions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/careers/data-analyst/excel"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              ← Excel Roadmap
            </a>

            <a
              href="/careers/data-analyst/excel/data-analysis"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Next: Data Analysis →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}