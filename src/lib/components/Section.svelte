<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    class?: string;
    children: Snippet;
  };

  let { class: klass = "max-w-2xl text-center", children }: Props = $props();
</script>

<section class="flex h-dvh snap-start flex-col justify-center p-16">
  <div class={["mx-auto", klass]}>
    {@render children()}
  </div>
</section>
