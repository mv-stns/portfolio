

<script>

export default {
  name: 'Navigation',
  components: {

  },
  // navigate to each route when the corresponding radio button is clicked
  methods: {
    navigateToAbout() {
      this.$router.push({ name: 'home' })
    },
    navigateToPortfolio() {
      this.$router.push({ name: 'portfolio' })
    },
    navigateToArticles() {
      this.$router.push({ name: 'articles' })
    },
    navigateToUses() {
      this.$router.push({ name: 'uses' })
    }
  },
}
</script>

<template>
  <nav
    class="mx-auto w-fit p-2 rounded-full fixed left-0 right-0 top-5 z-50"
  >
    <div
      class="relative w-[800px] flex gap-1 rounded-xl dark:bg-zink-800 bg-gray-200 ring-[2px] ring-gray-200 dark:ring-zinc-800 dark:bg-zinc-800"
    >
      <input class="peer/about hidden" type="radio" name="range" id="about"
        :checked="$route.path === '/'"
      />
      <label
      @click="navigateToAbout" 
        class="z-10 cursor-pointer px-6 py-2 text-center basis-full text-gray-400 transition-all duration-500 ease-[cubic-bezier(0.15,0.88,0.15,0.97)] hover:text-gray-500 peer-checked/about:text-black dark:peer-checked/about:text-white"
        for="about"
      >
        About
      </label>

      <input class="peer/portfolio hidden" type="radio" name="range" id="portfolio"
        :checked="$route.path === '/portfolio'"
      />
      <label
      @click="navigateToPortfolio" 
        class="z-10 cursor-pointer px-6 py-2 text-center basis-full text-gray-400 transition-all duration-500 ease-[cubic-bezier(0.15,0.88,0.15,0.97)] hover:text-gray-500 peer-checked/portfolio:text-black dark:peer-checked/portfolio:text-white"
        for="portfolio"
      >
        Portfolio
      </label>

      <input class="peer/articles hidden" type="radio" name="range" id="articles"
        :checked="$route.path === '/articles'"
      />
      <label
      @click="navigateToArticles" 
        class="z-10 cursor-pointer px-6 py-2 text-center basis-full text-gray-400 transition-all duration-500 ease-[cubic-bezier(0.15,0.88,0.15,0.97)] hover:text-gray-500 peer-checked/articles:text-black dark:peer-checked/articles:text-white"
        for="articles"
      >
        Articles
      </label>

      <input class="peer/uses hidden" type="radio" name="range" id="uses"
        :checked="$route.path === '/uses'"
      />
      <label
      @click="navigateToUses" 
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