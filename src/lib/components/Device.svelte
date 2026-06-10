<script lang="ts">
  import type { Snippet } from "svelte";

  import Icon from "$lib/components/Icon.svelte";

  type Props = {
    children?: Snippet;
  };

  let { children }: Props = $props();
</script>

<div
  class="relative h-120 w-57.5 rounded-[36px] border-[6px] border-zinc-900 shadow-[0_0_2px_2px_rgba(255,255,255,0.1)]"
>
  <div
    class="absolute top-0.5 left-1/2 z-20 h-4.5 w-18 -translate-x-1/2 transform rounded-full bg-zinc-900"
  ></div>

  <div
    class="border-opacity-40 pointer-events-none absolute -inset-px rounded-[30px] border-2 border-zinc-700"
  ></div>

  <div
    class="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[30px] bg-zinc-900"
  >
    {#if children}
      {@render children()}
    {:else}
      <Icon name="apple" class="hidden h-16 fill-white" />
      <div
        class="absolute top-1/2 left-1/2 h-19 w-9.5 -translate-x-1/2 -translate-y-1/2 bg-zinc-600 blur-3xl"
      ></div>
    {/if}
  </div>

  <div
    class="absolute top-16 -left-2.5 h-6 w-1.25 rounded-l-md bg-zinc-900 shadow-md"
  ></div>

  <div
    class="absolute top-28.75 -left-2.5 h-9.5 w-1.25 rounded-l-md bg-zinc-900 shadow-md"
  ></div>

  <div
    class="absolute top-41.5 -left-2.5 h-9.5 w-1.25 rounded-l-md bg-zinc-900 shadow-md"
  ></div>

  <div
    class="absolute top-28.75 -right-2.5 h-12.75 w-1.25 rounded-r-md bg-zinc-900 shadow-md"
  ></div>
</div>
