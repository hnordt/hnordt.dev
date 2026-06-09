<script lang="ts">
  const links = {
    calendly: "https://calendly.com/hnordt",
    email: "mailto:hnordt@hnordt.dev",
    linkedin: "https://linkedin.com/in/hnordt",
    github: "https://github.com/hnordt",
    upwork: "https://www.upwork.com/freelancers/~01aed9527e35ad0ea7",
  };

  const stats = [
    ["20 years", "Software development"],
    ["Principal", "Engineer at DNSFilter"],
    ["$400k+", "Earned on Upwork"],
    ["Since 2015", "Remote US work"],
  ];

  const work = [
    {
      title: "Authentication systems",
      text: "Led security and authentication initiatives for a large-scale SaaS platform.",
    },
    {
      title: "Feature delivery infrastructure",
      text: "Improved developer experience and application performance through platform-level work.",
    },
    {
      title: "SaaS product engineering",
      text: "Built and evolved web products from early product stages to mature production systems.",
    },
  ];

  const packages = [
    {
      title: "Fractional Engineering",
      text: "Ongoing senior technical execution for teams that need Principal-level support without a full-time hire.",
    },
    {
      title: "Project Delivery",
      text: "Focused architecture and implementation work for new products, migrations, or critical initiatives.",
    },
    {
      title: "Technical Advisory",
      text: "Architecture reviews, system design, execution planning, and technical decision support.",
    },
  ];

  const technologies = [
    "TypeScript",
    "React",
    "Svelte",
    "SvelteKit",
    "Bun",
    "Node.js",
    "SQLite",
    "PostgreSQL",
    "Tailwind CSS",
  ];
</script>

<svelte:head>
  <title>Heliton Nordt | Fractional Principal Engineer</title>
  <meta
    name="description"
    content="Fractional Principal Engineer for SaaS teams. TypeScript, web products, architecture, and implementation."
  />
</svelte:head>

<main class="min-h-screen bg-[#fafafa] text-neutral-950">
  <div class="mx-auto max-w-5xl px-6 py-8 sm:px-8 lg:px-10">
    <header class="flex items-center justify-between">
      <a href="/" class="flex items-center gap-3">
        <span
          class="grid h-9 w-9 place-items-center rounded-full border border-neutral-200 bg-white text-sm font-semibold"
        >
          HN
        </span>
        <span class="text-sm font-medium tracking-tight">Heliton Nordt</span>
      </a>

      <nav class="hidden items-center gap-7 text-sm text-neutral-500 md:flex">
        <a class="hover:text-neutral-950" href="#work">Work</a>
        <a class="hover:text-neutral-950" href="#services">Services</a>
        <a class="hover:text-neutral-950" href="#contact">Contact</a>
      </nav>
    </header>

    <section class="py-28 sm:py-36">
      <p class="mb-6 text-sm text-neutral-500">
        TypeScript · SaaS · Architecture · Product Engineering
      </p>

      <h1
        class="max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl"
      >
        Fractional Principal Engineer for SaaS companies.
      </h1>

      <p class="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
        I help teams build, scale, and stabilize web products using TypeScript,
        modern web technologies, and pragmatic engineering practices.
      </p>

      <p class="mt-5 text-sm text-neutral-500">
        Currently available for fractional and project-based engagements.
      </p>

      <div class="mt-10 flex flex-col gap-3 sm:flex-row">
        <a
          href={links.calendly}
          class="rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-medium text-white hover:bg-neutral-800"
        >
          Book a call
        </a>

        <a
          href={links.upwork}
          class="rounded-full border border-neutral-300 bg-white px-5 py-3 text-center text-sm font-medium text-neutral-800 hover:border-neutral-400"
        >
          View Upwork profile
        </a>
      </div>
    </section>

    <section
      class="grid gap-4 border-y border-neutral-200 py-10 sm:grid-cols-4"
    >
      {#each stats as [value, label]}
        <div>
          <p class="text-2xl font-semibold tracking-tight">{value}</p>
          <p class="mt-1 text-sm text-neutral-500">{label}</p>
        </div>
      {/each}
    </section>

    <section id="work" class="py-28">
      <div class="max-w-2xl">
        <p class="text-sm text-neutral-500">Selected work</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight">
          Senior execution across SaaS systems.
        </h2>
      </div>

      <div class="mt-10 grid gap-4 md:grid-cols-3">
        {#each work as item}
          <article class="rounded-3xl border border-neutral-200 bg-white p-6">
            <h3 class="text-base font-semibold">{item.title}</h3>
            <p class="mt-4 text-sm leading-6 text-neutral-600">{item.text}</p>
          </article>
        {/each}
      </div>
    </section>

    <section id="services" class="py-28">
      <div class="max-w-2xl">
        <p class="text-sm text-neutral-500">Services</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight">
          Work packages you can hire.
        </h2>
      </div>

      <div class="mt-10 grid gap-4 md:grid-cols-3">
        {#each packages as item}
          <article class="rounded-3xl border border-neutral-200 bg-white p-6">
            <h3 class="text-base font-semibold">{item.title}</h3>
            <p class="mt-4 text-sm leading-6 text-neutral-600">{item.text}</p>
          </article>
        {/each}
      </div>
    </section>

    <section class="py-28">
      <div class="max-w-2xl">
        <p class="text-sm text-neutral-500">Technologies</p>
        <h2 class="mt-3 text-3xl font-semibold tracking-tight">
          Modern web stack.
        </h2>
      </div>

      <div class="mt-10 flex flex-wrap gap-3">
        {#each technologies as tech}
          <div
            class="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700"
          >
            <!-- <Logo /> -->
            {tech}
          </div>
        {/each}
      </div>
    </section>

    <section id="contact" class="py-28">
      <div
        class="rounded-[2rem] border border-neutral-200 bg-white p-8 sm:p-12"
      >
        <p class="text-sm text-neutral-500">Contact</p>

        <h2 class="mt-3 max-w-2xl text-4xl font-semibold tracking-tight">
          Need senior technical execution?
        </h2>

        <p class="mt-5 max-w-2xl text-neutral-600">
          Book a call to discuss product delivery, architecture, performance, or
          implementation work.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={links.calendly}
            class="rounded-full bg-neutral-950 px-5 py-3 text-center text-sm font-medium text-white hover:bg-neutral-800"
          >
            Book a call
          </a>

          <a
            href={links.email}
            class="rounded-full border border-neutral-300 px-5 py-3 text-center text-sm font-medium text-neutral-800 hover:border-neutral-400"
          >
            hnordt@hnordt.dev
          </a>
        </div>
      </div>
    </section>

    <footer
      class="flex flex-col gap-5 border-t border-neutral-200 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between"
    >
      <p>© 2026 Heliton Nordt</p>

      <div class="flex gap-5">
        <a class="hover:text-neutral-950" href={links.linkedin}>LinkedIn</a>
        <a class="hover:text-neutral-950" href={links.github}>GitHub</a>
        <a class="hover:text-neutral-950" href={links.upwork}>Upwork</a>
      </div>
    </footer>
  </div>
</main>
