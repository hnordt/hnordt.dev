<script lang="ts">
  import "@fontsource/geist/400.css";
  import "@fontsource/geist/500.css";
  import "@fontsource/geist/600.css";

  import favicon from "$lib/assets/favicon.svg";

  import "./layout.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>Heliton Nordt — Principal Software Engineer</title>
  <meta
    name="description"
    content="Heliton Nordt is a principal software engineer focused on architecture, technical leadership, and product engineering."
  />
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
