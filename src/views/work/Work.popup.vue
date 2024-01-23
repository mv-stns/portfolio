<template>
  <div
    class="inset-0 absolute flex justify-center items-center z-50 bg-zinc-950/25 backdrop-blur-sm"
    @click="handleClickOutside"
  >
    <div class="p-8 dark:bg-zinc-800 relative max-w-5xl bg-zinc-100 rounded-2xl w-fit shadow-fancy"
    v-motion
    :initial="{
      opacity: 0,
      y: 10,
      scale: 0.9
    }"
    :enter="{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5
      }
    }"
    :exit="{
      opacity: 0,
      y: 10,
      scale: 0.9,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 25,
        mass: 0.5
      }
    }"
    >
      <div
        class="absolute size-8 flex items-center justify-center bg-white rounded-full -right-2 -top-2"
        @click="close"
      >
        <svg
          class="size-6 text-zinc-700 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 cursor-pointer"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18M6 6L18 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <h1
        class="dark:text-white text-zinc-700 text-4xl font-playfair italic font-light tracking-tight"
      >
        {{ title }}
      </h1>
      <div class="mt-4">
        <p class="text-zinc-700 dark:text-zinc-400">Created at {{ date.toLocaleDateString() }}</p>
        <img
          :src="image"
          :alt="title"
          class="mt-4 w-full rounded-xl ring ring-zinc-200/15 dark:ring-zinc-400/25"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'WorkPopup',
  props: {
    image: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    date: {
      type: Date,
      required: false
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    close() {
        this.$emit('close')
    },
    handleClickOutside(event) {
            if (event.target === this.$el) {
                this.close()
            }
        }
  }
}
</script>

<style>
</style>