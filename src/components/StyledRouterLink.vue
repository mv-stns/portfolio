<template>
    <RouterLink :to="urlToGoto" class="[--r:50px] [--p:2px] [--c:#FB4F17] group relative flex items-center justify-center rounded-[var(--r)] bg-[var(--c)] text-white shadow-[0px_0px_0px_2px_var(--c),0px_1px_2px_0px_rgba(13,13,18,0.40)] outline outline-2 outline-offset-4 outline-transparent transition-all duration-150 before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-[calc(var(--r))] before:bg-gradient-to-b before:from-white/20 before:from-15% before:to-white/0 before:to-100% after:absolute after:top-[--p] after:h-[calc(100%-4px)] after:w-[calc(100%-4px)] after:rounded-[calc(var(--r)-var(--p))] after:bg-[var(--c)] after:bg-gradient-to-b after:from-white/0 after:from-0% after:to-white/0 after:to-100% hover:after:bg-gradient-to-b hover:after:from-white/0 hover:after:from-0% hover:after:to-white/0 hover:after:to-100% focus:outline-[theme(colors.orange.300/25)] active:before:hidden">
      <span class="z-10 flex flex-grow items-center justify-center from-white to-white/0 px-8 py-4 text-center text-sm font-medium leading-8 transition-all duration-150 before:absolute before:inset-0 before:rounded-[calc(var(--r))] before:bg-gradient-to-b before:opacity-5 before:transition-all before:duration-150 active:[box-shadow:unset] shadow-[0_2px_2px] rounded-[--r] shadow-black/25 drop-shadow-[0_1px_rgba(0,0,0,0.15)] gap-2 [font-family:'SF_Pro_Rounded',sans-serif]">
          <span class="text-2xl">
              <slot></slot>
          </span>
      </span>
      </RouterLink>
  </template>

<script>
import { RouterLink } from 'vue-router'
export default {
    components: {
        RouterLink
    },
    props: {
        urlToGoto: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
</style>