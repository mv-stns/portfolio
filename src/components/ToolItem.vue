<template>
  <li class="group relative flex flex-col items-start rounded-lg">
    <h3 class="z-10 text-base tracking-tight font-semibold dark:text-zinc-500">{{ title }}</h3>
    <p class="relative z-10 mt-2 text-sm dark:text-zinc-400"><slot></slot></p>
    <div class="absolute -inset-x-4 -inset-y-6 z-0 scale-75 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50"></div>
  </li>
</template>

<script>
export default {
    name: 'ToolItem',
    props: {
        title: {
        type: String,
        required: true
        }
    }
}
</script>

<style>

</style>