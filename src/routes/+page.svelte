<script lang="ts">
  import { dev } from "$app/environment";
  import { Header, Section, Device } from "$lib/components";

  const wipId = $props.id();
</script>

<div
  class="flex h-dvh flex-col"
  inert={!dev}
  aria-hidden={dev ? undefined : "true"}
>
  <Header />

  <main class="flex flex-1 items-center justify-center p-16 text-center">
    <Section>
      <p class="text-2xl font-medium">Hi, I'm Heliton.</p>

      <h1 class="mt-2 text-5xl font-medium text-balance">
        I build SaaS products founders rely on.
      </h1>

      <p class="mt-4 text-lg font-medium text-pretty text-zinc-500">
        From product design to implementation, testing, and deployment, with
        senior TypeScript execution and careful attention to every detail.
      </p>

      <div class="mt-16 flex items-center justify-center">
        <Device />
      </div>

      <p class="mt-16 text-lg font-medium text-pretty text-zinc-500">
        An app is worth a thousand words. Try the demo above before reading on.
        It shows how I think about product quality, interaction details, and
        implementation. The source code is available if you want to inspect the
        work.
      </p>
    </Section>
  </main>
</div>

{#if !dev}
  <div
    class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/85 p-6 text-center backdrop-blur-xs"
    role="dialog"
    aria-labelledby={wipId}
    aria-modal="true"
  >
    <h2 id={wipId} class="text-5xl font-medium">Work in progress.</h2>

    <p class="mt-4 text-xl font-medium text-zinc-500">Check back soon.</p>
  </div>
{/if}
