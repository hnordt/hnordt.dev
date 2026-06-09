<script lang="ts">
  import "@fontsource-variable/inter";
  import "@fontsource-variable/geist";

  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
