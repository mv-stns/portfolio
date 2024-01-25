

<script lang="ts">
import { toast } from 'vue-sonner'
import { useRoute, useRouter } from 'vue-router'
import { defineComponent } from 'vue'

export default defineComponent({

  data() {
    return {
      route: useRoute(),
      router: useRouter()
    }
  },
  methods: {
    navigateTo(path: string) {
      this.router.push(path)
    },
    navigateToPortfolio() {
      this.router.push('/portfolio')
    },
    navigateToArticles() {
      this.router.push('/articles')
    },
    navigateToUses() {
      this.router.push('/uses')
    },
  },
  computed: {
    prefersDark() {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  },

})

</script>

<template>
  <nav class="mx-auto w-fit p-2 rounded-full fixed left-0 right-0 top-5 z-50">
    <div
      class="relative w-[800px] flex gap-1 rounded-xl dark:bg-zink-800 bg-gray-200 ring-[2px] ring-gray-200 dark:ring-zinc-800 dark:bg-zinc-800"
    >
      <!-- add method to input to navigate to "/" -->
      <input class="peer/about hidden" type="radio" name="range" id="about" 
        @click="navigateTo('/')"
        />
      <label
        class="z-10 cursor-pointer px-6 py-2 text-center basis-full text-gray-400 transition-all duration-500 ease-[cubic-bezier(0.15,0.88,0.15,0.97)] hover:text-gray-500 peer-checked/about:text-black dark:peer-checked/about:text-white"
        for="about"
      >
        About
      </label>

      <input class="peer/portfolio hidden" type="radio" name="range" id="portfolio"
        @click="navigateToPortfolio()"
      />
      <label
        class="z-10 cursor-pointer px-6 py-2 text-center basis-full text-gray-400 transition-all duration-500 ease-[cubic-bezier(0.15,0.88,0.15,0.97)] hover:text-gray-500 peer-checked/portfolio:text-black dark:peer-checked/portfolio:text-white"
        for="portfolio"
      >
        Portfolio
      </label>

      <input class="peer/articles hidden" type="radio" name="range" id="articles" 
        @click="navigateToArticles()"
      />
      <label
        class="z-10 cursor-pointer px-6 py-2 text-center basis-full text-gray-400 transition-all duration-500 ease-[cubic-bezier(0.15,0.88,0.15,0.97)] hover:text-gray-500 peer-checked/articles:text-black dark:peer-checked/articles:text-white"
        for="articles"
      >
        Articles
      </label>

      <input class="peer/uses hidden" type="radio" name="range" id="uses" 
        @click="navigateToUses()"
      />
      <label
        class="z-10 cursor-pointer px-6 py-2 text-center basis-full text-gray-400 transition-all duration-500 ease-[cubic-bezier(0.15,0.88,0.15,0.97)] hover:text-gray-500 peer-checked/uses:text-black dark:peer-checked/uses:text-white"
        for="uses"
      >
        Uses
      </label>

      <div
        class="absolute h-full w-1/4 rounded-xl bg-white dark:bg-zinc-950 shadow-fancy transition-all duration-500 ease-[cubic-bezier(0.15,0.88,0.15,0.97)] peer-checked/uses:translate-x-[300%] peer-checked/articles:translate-x-[200%] peer-checked/portfolio:translate-x-[100%] peer-checked/about:translate-x-0"
      ></div>
    </div>
  </nav>
</template>

<style scoped>
</style>