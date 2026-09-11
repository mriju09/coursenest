"use client";

import { useState } from "react";

const careers = [
  {
    icon: "📊",
    title: "Financial Analyst",
    description: "Finance, Excel, financial modelling, valuation and business analysis.",
    skills: ["Excel", "Accounting", "Financial Modelling"],
    color: "cyan",
  },
  {
    icon: "💻",
    title: "Web Developer",
    description: "Build modern websites and applications from zero to job-ready.",
    skills: ["HTML/CSS", "JavaScript", "React"],
    color: "blue",
  },
  {
    icon: "🤖",
    title: "AI Automation Specialist",
    description: "Build AI-powered workflows, automations and intelligent applications.",
    skills: ["AI Tools", "Automation", "APIs"],
    color: "purple",
  },
  {
    icon: "📈",
    title: "Data Analyst",
    description: "Turn raw data into insights using spreadsheets, SQL and visualization.",
    skills: ["Excel", "SQL", "Power BI"],
    color: "emerald",
  },
];

const journey = [
  {
    number: "01",
    title: "Choose",
    text: "Find a career that matches your interests, skills and goals.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Roadmap",
    text: "Get an exact step-by-step path instead of random resources.",
    icon: "🗺️",
  },
  {
    number: "03",
    title: "Learn",
    text: "Follow carefully selected free-first learning resources.",
    icon: "📚",
  },
  {
    number: "04",
    title: "Practice",
    text: "Solve exercises, assessments and realistic problems.",
    icon: "⚡",
  },
  {
    number: "05",
    title: "Build",
    text: "Create projects that prove you can actually use the skill.",
    icon: "🔨",
  },
  {
    number: "06",
    title: "Prove",
    text: "Test your readiness, identify gaps and build your portfolio.",
    icon: "🏆",
  },
  {
    number: "07",
    title: "Apply",
    text: "Build your resume and discover relevant opportunities.",
    icon: "🚀",
  },
  {
    number: "08",
    title: "Grow",
    text: "Track applications, improve skills and keep progressing.",
    icon: "📈",
  },
];

const features = [
  {
    icon: "🧭",
    title: "Career Discovery",
    text: "Don't know what career to choose? Start with discovery.",
  },
  {
    icon: "🗺️",
    title: "Exact Roadmaps",
    text: "Know what to learn, what to practice and what comes next.",
  },
  {
    icon: "🤖",
    title: "AI Career Assistant",
    text: "Get personalized guidance while you move through your roadmap.",
  },
  {
    icon: "🧪",
    title: "Skill Assessments",
    text: "Measure your actual ability instead of simply completing videos.",
  },
  {
    icon: "💼",
    title: "Jobs & Internships",
    text: "Move from learning toward real opportunities.",
  },
  {
    icon: "📋",
    title: "Application Tracker",
    text: "Keep your applications organized and never lose track.",
  },
];

export default function Home() {
  const [career, setCareer] = useState("");
  const [showCareers, setShowCareers] = useState(false);

  function handleCareerSearch(e: React.FormEvent) {
    e.preventDefault();

    if (!career.trim()) {
      setShowCareers(true);
      return;
    }

    setShowCareers(true);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">

      {/* ========================================================= */}
      {/* BACKGROUND EFFECTS */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

        <div className="absolute left-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-[-180px] top-[300px] h-[550px] w-[550px] rounded-full bg-purple-600/10 blur-[150px]" />

        <div className="absolute bottom-[-200px] left-[30%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]" />

      </div>

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav className="relative z-50 border-b border-white/[0.06] bg-[#030712]/70 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          {/* LOGO */}

          <a href="#" className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-300 via-blue-500 to-purple-600 text-xl font-black shadow-lg shadow-cyan-500/20">
              C
            </div>

            <div>
              <div className="text-xl font-black tracking-tight">
                Course<span className="text-cyan-400">Nest</span>
              </div>

              <div className="hidden text-[10px] uppercase tracking-[0.25em] text-slate-500 sm:block">
                Career Execution Platform
              </div>
            </div>

          </a>

          {/* DESKTOP NAV */}

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">

            <a href="#careers" className="transition hover:text-white">
              Careers
            </a>

            <a href="#how" className="transition hover:text-white">
              How it works
            </a>

            <a href="#features" className="transition hover:text-white">
              Features
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

          </div>

          {/* ACTIONS */}

          <div className="flex items-center gap-3">

            <button className="hidden px-3 py-2 text-sm text-slate-400 transition hover:text-white sm:block">
              Log in
            </button>

            <button className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100">
              Get Started
            </button>

          </div>

        </div>

      </nav>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative z-10">

        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">

          <div className="mx-auto max-w-5xl text-center">

            {/* Badge */}

            <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-4 py-2 text-sm text-cyan-300">

              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              Your career. Your roadmap. Your next move.

            </div>

            {/* Main heading */}

            <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">

              Stop wondering

              <br />

              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                what to do next.
              </span>

            </h1>

            {/* Description */}

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">

              CourseNest gives you a complete path from

              <span className="font-semibold text-white">
                {" "}career choice
              </span>

              {" "}to

              <span className="font-semibold text-white">
                {" "}job-ready skills.
              </span>

              {" "}Learn, practice, build proof and move toward real opportunities.

            </p>

            {/* SEARCH */}

            <form
              onSubmit={handleCareerSearch}
              className="mx-auto mt-10 max-w-2xl"
            >

              <div className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-2 shadow-2xl shadow-black/20 backdrop-blur-xl sm:flex-row">

                <div className="flex flex-1 items-center gap-3 px-4">

                  <span className="text-xl text-slate-500">
                    ⌕
                  </span>

                  <input
                    value={career}
                    onChange={(e) => setCareer(e.target.value)}
                    placeholder="What career do you want to explore?"
                    className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-600 sm:text-base"
                  />

                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-7 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  Find My Path →
                </button>

              </div>

              <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-slate-600">

                <span>Try:</span>

                <button
                  type="button"
                  onClick={() => setCareer("Financial Analyst")}
                  className="transition hover:text-cyan-400"
                >
                  Financial Analyst
                </button>

                <span>•</span>

                <button
                  type="button"
                  onClick={() => setCareer("Web Developer")}
                  className="transition hover:text-cyan-400"
                >
                  Web Developer
                </button>

                <span>•</span>

                <button
                  type="button"
                  onClick={() => setCareer("AI Automation Specialist")}
                  className="transition hover:text-cyan-400"
                >
                  AI Automation
                </button>

              </div>

            </form>

          </div>

          {/* SEARCH RESULTS */}

          {showCareers && (

            <div
              id="careers"
              className="mx-auto mt-12 max-w-6xl scroll-mt-24"
            >

              <div className="mb-6 flex items-end justify-between">

                <div>

                  <p className="text-sm font-semibold text-cyan-400">
                    CAREER EXPLORER
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    {career
                      ? `Paths related to "${career}"`
                      : "Explore career paths"}
                  </h2>

                </div>

                <button
                  onClick={() => setShowCareers(false)}
                  className="text-sm text-slate-500 hover:text-white"
                >
                  Close
                </button>

              </div>

              <div className="grid gap-4 md:grid-cols-2">

                {careers.map((item) => (

                  <div
                    key={item.title}
                    className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
                  >

                    <div className="flex gap-5">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-2xl">
                        {item.icon}
                      </div>

                      <div className="flex-1">

                        <h3 className="text-xl font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500">
                          {item.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">

                          {item.skills.map((skill) => (

                            <span
                              key={skill}
                              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-400"
                            >
                              {skill}
                            </span>

                          ))}

                        </div>

                        <button className="mt-5 text-sm font-bold text-cyan-400 transition group-hover:translate-x-1">
                          View roadmap →
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}

          {/* HERO VISUAL */}

          {!showCareers && (

            <div className="relative mx-auto mt-20 max-w-5xl">

              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl backdrop-blur-xl">

                <div className="rounded-[1.5rem] border border-white/10 bg-[#080d1a] p-5 sm:p-8">

                  {/* Fake dashboard top */}

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex gap-1.5">

                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                      </div>

                      <span className="text-xs text-slate-600">
                        coursenest / career-roadmap
                      </span>

                    </div>

                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-400">
                      ● On Track
                    </span>

                  </div>

                  {/* Dashboard */}

                  <div className="mt-8 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">

                    {/* LEFT */}

                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                      <p className="text-xs uppercase tracking-widest text-slate-600">
                        Your Career
                      </p>

                      <div className="mt-4 flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                          📊
                        </div>

                        <div>

                          <h3 className="font-bold">
                            Financial Analyst
                          </h3>

                          <p className="text-xs text-slate-500">
                            Career roadmap
                          </p>

                        </div>

                      </div>

                      <div className="mt-7">

                        <div className="mb-2 flex justify-between text-xs">
                          <span className="text-slate-500">
                            Overall progress
                          </span>

                          <span className="font-bold text-cyan-400">
                            42%
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-slate-800">

                          <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />

                        </div>

                      </div>

                      <div className="mt-7 grid grid-cols-2 gap-3">

                        <div className="rounded-xl bg-white/[0.03] p-4">

                          <p className="text-xl font-black">
                            18
                          </p>

                          <p className="mt-1 text-xs text-slate-600">
                            Skills
                          </p>

                        </div>

                        <div className="rounded-xl bg-white/[0.03] p-4">

                          <p className="text-xl font-black">
                            7
                          </p>

                          <p className="mt-1 text-xs text-slate-600">
                            Projects
                          </p>

                        </div>

                      </div>

                    </div>

                    {/* RIGHT */}

                    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-xs uppercase tracking-widest text-slate-600">
                            Your next steps
                          </p>

                          <h3 className="mt-2 text-xl font-bold">
                            Roadmap
                          </h3>

                        </div>

                        <span className="text-sm text-cyan-400">
                          4 / 9
                        </span>

                      </div>

                      <div className="mt-6 space-y-3">

                        {[
                          ["✓", "Accounting Fundamentals", "Completed"],
                          ["✓", "Excel Fundamentals", "Completed"],
                          ["→", "Financial Statement Analysis", "Current"],
                          ["○", "Financial Modelling", "Next"],
                          ["○", "Portfolio Project", "Upcoming"],
                        ].map(([icon, title, status], index) => (

                          <div
                            key={title}
                            className={`flex items-center gap-4 rounded-xl border p-4 ${
                              index === 2
                                ? "border-cyan-400/20 bg-cyan-400/[0.05]"
                                : "border-white/5 bg-white/[0.02]"
                            }`}
                          >

                            <div
                              className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm ${
                                index === 2
                                  ? "bg-cyan-400/10 text-cyan-400"
                                  : "bg-white/5 text-slate-500"
                              }`}
                            >
                              {icon}
                            </div>

                            <div className="flex-1">

                              <p className="text-sm font-semibold">
                                {title}
                              </p>

                              <p className="mt-0.5 text-xs text-slate-600">
                                {status}
                              </p>

                            </div>

                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          )}

        </div>

      </section>

      {/* ========================================================= */}
      {/* VALUE PROPOSITION */}
      {/* ========================================================= */}

      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.015]">

        <div className="mx-auto grid max-w-7xl gap-0 px-6 lg:grid-cols-3 lg:px-10">

          <div className="border-b border-white/[0.06] p-8 lg:border-b-0 lg:border-r">

            <div className="text-3xl">
              🧠
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Information isn't the goal.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              You don't need another website that gives you 500
              links and tells you to figure it out yourself.
            </p>

          </div>

          <div className="border-b border-white/[0.06] p-8 lg:border-b-0 lg:border-r">

            <div className="text-3xl">
              🧭
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Direction is the goal.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              CourseNest organizes the journey so you always
              know what you should learn and do next.
            </p>

          </div>

          <div className="p-8">

            <div className="text-3xl">
              🚀
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Execution is the outcome.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Learn → practice → build → prove → apply.
              The platform is designed around action.
            </p>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* HOW IT WORKS */}
      {/* ========================================================= */}

      <section
        id="how"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10"
      >

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            The CourseNest Journey
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            One system.
            <br />
            <span className="text-slate-500">
              Every step connected.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Instead of jumping between random websites, follow
            one connected journey from choosing a career to
            proving that you are ready.
          </p>

        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {journey.map((item, index) => (

            <div
              key={item.number}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.045]"
            >

              <div className="flex items-center justify-between">

                <span className="text-xs font-bold tracking-widest text-slate-600">
                  {item.number}
                </span>

                <span className="text-2xl transition duration-300 group-hover:scale-110">
                  {item.icon}
                </span>

              </div>

              <h3 className="mt-8 text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.text}
              </p>

              {index < journey.length - 1 && (
                <div className="absolute -right-2 top-1/2 z-20 hidden text-cyan-400/40 lg:block">
                  →
                </div>
              )}

            </div>

          ))}

        </div>

      </section>

      {/* ========================================================= */}
      {/* CAREER SECTION */}
      {/* ========================================================= */}

      <section
        id="careers"
        className="relative z-10 scroll-mt-20 border-y border-white/[0.06] bg-white/[0.015]"
      >

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-purple-400">
                Explore Careers
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Where do you want to go?
              </h2>

              <p className="mt-5 max-w-2xl text-slate-400">
                Choose a direction. We'll help turn it into
                a structured execution plan.
              </p>

            </div>

            <button className="text-sm font-bold text-cyan-400 hover:text-cyan-300">
              Explore all careers →
            </button>

          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {careers.map((item) => (

              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080d1a] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >

                <div className="absolute right-[-60px] top-[-60px] h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl transition group-hover:bg-cyan-400/10" />

                <div className="relative flex gap-5">

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-3xl">
                    {item.icon}
                  </div>

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center justify-between gap-3">

                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs text-emerald-400">
                        Roadmap available
                      </span>

                    </div>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">

                      {item.skills.map((skill) => (

                        <span
                          key={skill}
                          className="rounded-lg bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400"
                        >
                          {skill}
                        </span>

                      ))}

                    </div>

                    <button className="mt-6 font-semibold text-cyan-400 transition group-hover:translate-x-1">
                      See career roadmap →
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FEATURES */}
      {/* ========================================================= */}

      <section
        id="features"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10"
      >

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Everything Connected
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
            More than a course platform.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Every tool exists for one reason: helping you move
            from where you are to where you want to be.
          </p>

        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.045]"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] text-2xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {feature.text}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ========================================================= */}
      {/* AI ASSISTANT */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-10">

        <div className="relative overflow-hidden rounded-[2.5rem] border border-purple-400/20 bg-gradient-to-br from-purple-500/[0.12] via-blue-500/[0.06] to-cyan-500/[0.08] p-8 sm:p-12 lg:p-16">

          <div className="absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-purple-500/10 blur-[100px]" />

          <div className="relative grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">

            <div>

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-400/10 text-2xl">
                🤖
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-300">
                AI Career Assistant
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                When you're stuck,
                <br />
                ask what comes next.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Your AI assistant will understand your roadmap,
                progress and goals and help you make the next
                decision instead of giving generic advice.
              </p>

              <button className="mt-8 rounded-xl bg-white px-6 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5">
                Meet Your AI Assistant →
              </button>

            </div>

            {/* CHAT MOCKUP */}

            <div className="rounded-3xl border border-white/10 bg-[#060a14]/80 p-5 shadow-2xl backdrop-blur-xl">

              <div className="flex items-center gap-3 border-b border-white/10 pb-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-blue-500">
                  ✦
                </div>

                <div>

                  <p className="font-bold">
                    CourseNest AI
                  </p>

                  <p className="text-xs text-emerald-400">
                    ● Ready to help
                  </p>

                </div>

              </div>

              <div className="space-y-4 py-5">

                <div className="rounded-2xl rounded-tl-none bg-white/[0.05] p-4 text-sm leading-6 text-slate-300">
                  You've completed Excel fundamentals. Your next step is Financial Statement Analysis.
                </div>

                <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-none bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-100">
                  What should I learn first?
                </div>

                <div className="rounded-2xl rounded-tl-none bg-white/[0.05] p-4 text-sm leading-6 text-slate-300">
                  Start with the three core statements: Income Statement, Balance Sheet and Cash Flow Statement. Then complete the practice assessment.
                </div>

              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-600">
                Ask CourseNest anything...
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section
        id="about"
        className="relative z-10 mx-auto max-w-7xl scroll-mt-20 px-6 py-28 lg:px-10"
      >

        <div className="relative overflow-hidden rounded-[3rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/[0.12] via-blue-600/[0.08] to-purple-600/[0.12] px-6 py-20 text-center sm:px-12">

          <div className="absolute left-1/2 top-[-120px] h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.08] text-3xl">
              🚀
            </div>

            <h2 className="mx-auto mt-7 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
              Your career shouldn't be a guessing game.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Choose a direction. Get your roadmap. Build the skills.
              Prove what you can do. Find the opportunity.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

              <button className="rounded-xl bg-white px-8 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-50">
                Build My Career Path →
              </button>

              <button className="rounded-xl border border-white/10 bg-white/[0.04] px-8 py-4 font-semibold text-white transition hover:bg-white/[0.08]">
                Explore Careers
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="relative z-10 border-t border-white/[0.06]">

        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-300 to-blue-600 font-black text-slate-950">
                  C
                </div>

                <span className="text-lg font-black">
                  Course<span className="text-cyan-400">Nest</span>
                </span>

              </div>

              <p className="mt-3 text-sm text-slate-600">
                Learn. Build. Prove. Move forward.
              </p>

            </div>

            <div className="flex flex-wrap gap-6 text-sm text-slate-600">

              <a href="#careers" className="hover:text-white">
                Careers
              </a>

              <a href="#how" className="hover:text-white">
                Roadmaps
              </a>

              <a href="#features" className="hover:text-white">
                Features
              </a>

              <a href="#about" className="hover:text-white">
                About
              </a>

            </div>

          </div>

          <div className="mt-10 border-t border-white/[0.06] pt-6 text-xs text-slate-700">
            © 2026 CourseNest. Built for people who want to move forward.
          </div>

        </div>

      </footer>

    </main>
  );
}