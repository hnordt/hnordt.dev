<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    children: Snippet;
  };

  let { children }: Props = $props();
</script>

<section class="mx-auto max-w-2xl">
  {@render children()}
</section>
