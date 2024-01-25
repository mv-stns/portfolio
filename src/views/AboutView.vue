<script lang="ts">
import { defineComponent } from "vue"
import { toast } from "vue-sonner"
export default defineComponent({
  methods: {
    runToast() {
      toast.success("Hello World")
    }
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="pt-32 pb-12 self-start md:flex w-full">
      <h1 class="text-4xl font-bold tracking-tight flex-none max-w-lg text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Hey, I'm <span class="font-playfair font-light italic text-orange-500">Marcus</span>, a media computer science student 
        <a href="https://hs-rm.de" target="_blank" class="flex cursor-pointer rounded-full group relative ml-auto whitespace-nowrap w-fit items-center justify-center font-black border border-orange-500 text-orange-500">
          <span class="py-2 z-20 px-2 flex justify-center items-center">
            <svg class="size-12 text-white dark:text-zinc-950"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 7.99999V13C16 13.7956 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2043 16 19 16C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V12C21.9999 9.74302 21.2362 7.55247 19.8333 5.78452C18.4303 4.01658 16.4705 2.77521 14.2726 2.26229C12.0747 1.74936 9.76793 1.99503 7.72734 2.95936C5.68676 3.92368 4.03239 5.54995 3.03325 7.57371C2.03411 9.59748 1.74896 11.8997 2.22416 14.1061C2.69936 16.3125 3.90697 18.2932 5.65062 19.7263C7.39428 21.1593 9.57143 21.9603 11.8281 21.9991C14.0847 22.0379 16.2881 21.3122 18.08 19.94M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79085 9.79086 7.99999 12 7.99999C14.2091 7.99999 16 9.79085 16 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="ml-2 z-20 leading-none pointer-events-none pr-3 font-playfair transition-color duration-300 group-hover:text-white dark:group-hover:text-zinc-950 font-light italic">Hochschule RheinMain</span>
          <div class="absolute left-0 transition-all duration-300 size-16 group-hover:w-full ring-1 z-10 ring-orange-500 bg-orange-500 rounded-full"></div>
        </a> from Germany.
      </h1>
      <div class="mt-8 self-end text-right text-zinc-600 dark:text-zinc-400 grow">
        <span>
          Currently working  
        </span>
        <a href="https://kedar-partner.de" target="_blank" class="flex cursor-pointer rounded-full group relative ml-auto whitespace-nowrap w-fit items-center justify-center font-black border border-orange-500 text-orange-500">
          <span class="py-2 z-20 px-2 size-8 flex justify-center items-center">
            <svg class="size-12 text-white dark:text-zinc-950"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 7.99999V13C16 13.7956 16.3161 14.5587 16.8787 15.1213C17.4413 15.6839 18.2043 16 19 16C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V12C21.9999 9.74302 21.2362 7.55247 19.8333 5.78452C18.4303 4.01658 16.4705 2.77521 14.2726 2.26229C12.0747 1.74936 9.76793 1.99503 7.72734 2.95936C5.68676 3.92368 4.03239 5.54995 3.03325 7.57371C2.03411 9.59748 1.74896 11.8997 2.22416 14.1061C2.69936 16.3125 3.90697 18.2932 5.65062 19.7263C7.39428 21.1593 9.57143 21.9603 11.8281 21.9991C14.0847 22.0379 16.2881 21.3122 18.08 19.94M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79085 9.79086 7.99999 12 7.99999C14.2091 7.99999 16 9.79085 16 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span class="ml-2 z-20 pointer-events-none pr-3 font-playfair transition-color duration-300 group-hover:text-white dark:group-hover:text-zinc-950 font-light italic">Kedar & Partner</span>
          <div class="absolute left-0 transition-all duration-300 size-8 group-hover:w-full ring-1 z-10 ring-orange-500 bg-orange-500 rounded-full"></div>
        </a>
      </div>
    </div>
    <div
      class="w-full h-[calc(100vh-theme(spacing.40))] pt-12 flex flex-col rounded items-center justify-center bg-[#FAFAFA] dark:bg-zinc-800 ring-zinc-200 dark:ring-zinc-200/20 ring-1 shadow-fancy"
    >
      <h1 class="text-4xl font-bold text-gray-300 dark:text-zinc-700 animate-pulse mb-12">WIP</h1>
      <div class="grid grid-cols-3 gap-1 [&>div:nth-child(5)]:bg-transparent w-fit relative">
        <div class="circle size-2 rounded-full dark:bg-zinc-700 bg-gray-200"></div>
        <div class="circle size-2 rounded-full dark:bg-zinc-700 bg-gray-200 animation-delay-[125ms!important]"></div>
        <div class="circle size-2 rounded-full dark:bg-zinc-700 bg-gray-200"></div>
        <div class="circle size-2 rounded-full dark:bg-zinc-700 bg-gray-200 animation-delay-[500ms!important]"></div>
        <div class="circle size-2 rounded-full dark:bg-zinc-700 bg-gray-200"></div>
        <div class="circle size-2 rounded-full dark:bg-zinc-700 bg-gray-200 animation-delay-[250ms!important]"></div>
        <div class="circle size-2 rounded-full dark:bg-zinc-700 bg-gray-200"></div>
        <div class="circle size-2 rounded-full dark:bg-zinc-700 bg-gray-200 animation-delay-[375ms!important]"></div>
        <div class="circle size-2 rounded-full dark:bg-zinc-700 bg-gray-200"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>