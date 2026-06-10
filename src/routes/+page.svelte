<script lang="ts">
  import { Header, Section, Device } from "$lib/components";
</script>

<div class="flex h-dvh flex-col">
  <Header />

  <main class="flex flex-1 items-center justify-center p-16 text-center">
    <Section>
      <h1 class="text-2xl font-medium">Hi, I'm Heliton.</h1>

      <h2 class="mt-2 text-5xl font-medium text-balance">
        I build SaaS products founders rely on.
      </h2>

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
