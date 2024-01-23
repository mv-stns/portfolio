<template>
    <section class="md:border-l md:border-zinc-100 dark:md:border-zinc-600 md:pl-6">
    <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
      <h2 class="font-bold text-lg dark:text-zinc-400">{{ title }}</h2>
      <div class="md:col-span-3">
        <ul class="space-y-8">
            <slot></slot>
        </ul>
      </div>
    </div>
    </section>

</template>

<script>
export default {
  name: 'ToolsSection',
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