<script lang="ts">
  type Props = {
    data: {
      content: string;
    };
  };

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>AI — Heliton Nordt</title>
  <meta name="description" content="How I use AI in product engineering." />
</svelte:head>

<main class="flex flex-col items-center p-24">
  <article class="prose prose-zinc">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html data.content}
  </article>
</main>
