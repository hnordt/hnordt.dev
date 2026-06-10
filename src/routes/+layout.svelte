<script lang="ts">
  import "@fontsource/fira-sans/300.css";
  import "@fontsource/fira-sans/400.css";
  import "@fontsource/fira-sans/500.css";
  import "@fontsource/fira-sans/600.css";
  import "@fontsource/fira-sans/700.css";
  import "@fontsource/fira-sans/800.css";
  import "./layout.css";

  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
