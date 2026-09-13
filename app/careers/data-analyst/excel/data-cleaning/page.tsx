const resources = [
  {
    language: "ENGLISH",
    title: "Data Cleaning in Excel - 10 Tricks (Beginner to PRO)",
    creator: "Chandoo",
    duration: "15:20",
    level: "Beginner",
    link: "https://www.youtube.com/watch?v=q7EpoOwBcnM",
    covers:
      "Flash Fill, Text to Columns, Remove Duplicates, formula-based cleaning, Power Query, extra spaces, splitting data, inconsistent dates and incomplete data.",
  },
  {
    language: "HINGLISH",
    title: "Top 10 Ways to clean data in excel easily !",
    creator: "Deepak EduWorld",
    duration: "11:34",
    level: "Beginner",
    link: "https://youtu.be/6ia0h_pWW1A",
    covers:
      "Blank rows, TRIM, Remove Duplicates, Text to Columns, Flash Fill, IFERROR and practical techniques for cleaning messy Excel datasets.",
  },
];

const cleaningSkills = [
  {
    title: "Remove Duplicates",
    description:
      "Identify and remove duplicate records so the dataset does not contain repeated entries.",
  },
  {
    title: "TRIM",
    description:
      "Remove unnecessary spaces from text and make inconsistent text entries cleaner.",
  },
  {
    title: "Text to Columns",
    description:
      "Split combined information into separate columns when the original data is not structured correctly.",
  },
  {
    title: "Flash Fill",
    description:
      "Recognize patterns and quickly transform or restructure data based on examples.",
  },
  {
    title: "IFERROR",
    description:
      "Handle formula errors more effectively when working with imperfect datasets.",
  },
  {
    title: "Inconsistent Data",
    description:
      "Recognize and fix inconsistent dates, text formats, blanks and incomplete records.",
  },
];

const checklist = [
  "Identify duplicate records",
  "Remove unnecessary blank rows",
  "Clean extra spaces using TRIM",
  "Split combined information using Text to Columns",
  "Use Flash Fill to restructure data",
  "Recognize inconsistent dates and formats",
  "Handle incomplete or problematic data",
  "Understand when Power Query can help with cleaning",
];

const practiceTasks = [
  "Create or download a messy dataset containing at least 20 rows.",
  "Find and remove duplicate records.",
  "Clean text containing unnecessary spaces.",
  "Split a combined column into separate columns.",
  "Fix inconsistent date or text formats.",
  "Handle blank or incomplete records.",
  "Use IFERROR where appropriate.",
  "Try at least one cleaning task with Power Query.",
];

export default function DataCleaningPage() {
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
            DATA ANALYST → EXCEL → STAGE 03
          </div>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            Data Cleaning
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Turn messy data into usable data.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            Learn how to identify, clean and prepare messy spreadsheet data
            before using it for analysis, reporting and decision-making.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Duplicates",
              "TRIM",
              "Text to Columns",
              "Flash Fill",
              "IFERROR",
              "Data Formats",
              "Power Query",
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

      {/* Objective */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              YOUR OBJECTIVE
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Clean data before you analyze it.
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-slate-400">
              Real-world datasets are rarely perfect. Your job is to recognize
              problems in the data and transform the dataset into a cleaner,
              more reliable structure for analysis.
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
              Learn the cleaning techniques.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Follow along with Excel while watching the resource. Don't just
              watch the demonstration — reproduce the steps yourself.
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

      {/* Cleaning Skills */}
      <section className="border-y border-white/10 bg-white/[0.015] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              STEP 02 — UNDERSTAND
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Your data-cleaning toolkit
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              These are the core techniques you should understand before
              moving forward.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {cleaningSkills.map((skill, index) => (
              <article
                key={skill.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-sm font-bold text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{skill.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After concept */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              THINK LIKE AN ANALYST
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Messy data → analysis-ready data
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-red-400/10 bg-red-400/[0.03] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-300">
                BEFORE
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Problems in the dataset
              </h3>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-400">
                <li>• Duplicate records</li>
                <li>• Extra spaces</li>
                <li>• Blank rows</li>
                <li>• Inconsistent formats</li>
                <li>• Combined information</li>
                <li>• Missing or incomplete data</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                AFTER
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                Analysis-ready dataset
              </h3>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-400">
                <li>✓ Duplicates identified and handled</li>
                <li>✓ Text cleaned</li>
                <li>✓ Dataset structured correctly</li>
                <li>✓ Consistent formats</li>
                <li>✓ Columns separated appropriately</li>
                <li>✓ Data prepared for analysis</li>
              </ul>
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
              Can you clean a dataset without the tutorial?
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
              Clean a messy dataset yourself.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              This is where the skill becomes real. Take a messy dataset and
              work through each problem without following the video step by
              step.
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
            STAGE 03 COMPLETE
          </p>

          <h2 className="mt-4 text-3xl font-black md:text-5xl">
            Clean data. Then connect it.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            Once you can prepare messy datasets, the next major Excel skill is
            connecting information across tables with lookup and reference
            techniques.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/careers/data-analyst/excel"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              ← Excel Roadmap
            </a>

            <a
              href="/careers/data-analyst/excel/lookup-reference"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Next: Lookup & Reference →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}