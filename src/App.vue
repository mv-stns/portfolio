<template>
  <nav class="container mx-auto mt-10 w-full">
    <ul class="flex mx-auto w-fit items-center gap-12">
      <li class="px-4 py-2 focus:bg-gray-200 rounded-full hover:bg-gray-200 font-medium transition-all duration-300"><router-link to="/">About</router-link></li>
      <li class="px-4 py-2 focus:bg-gray-200 rounded-full hover:bg-gray-200 font-medium transition-all duration-300"><router-link to="/portfolio">Portfolio</router-link></li>
      <li class="px-4 py-2 focus:bg-gray-200 rounded-full hover:bg-gray-200 font-medium transition-all duration-300"><router-link to="/articles">Articles</router-link></li>
      <li class="px-4 py-2 focus:bg-gray-200 rounded-full hover:bg-gray-200 font-medium transition-all duration-300"><router-link to="/uses" >Uses</router-link></li>
      <!-- <li><StyledRouterLink to="/portfolio">Portfolio</StyledRouterLink></li> -->
    </ul>
  </nav>
  <main class="container mx-auto">
    <router-view />
  </main>
  <Toaster />
</template>

<script>
import { RouterLink } from 'vue-router'
import { Toaster, toast } from 'vue-sonner'
import StyledRouterLink from './components/StyledRouterLink.vue'

export default {
  components: {
    Toaster,
    RouterLink,
    // StyledRouterLink
  },
  data() {
    return {
      StyledRouterLink,
      isDarkMode: false
    }
  },
  mounted() {
    // Check if the OS theme is set to dark mode
    this.isDarkMode = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Listen for changes in the OS theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.handleThemeChange);
    toast.info('We don\'t use cookies, but we do use local storage to save your theme preference.');
  },
  beforeUnmount() {
    // Cleanup the event listener when the component is unmounted
    window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', this.handleThemeChange);
  },
  methods: {
    handleThemeChange(event) {
      // Update the isDarkMode value when the OS theme changes
      this.isDarkMode = event.matches;
    }
  }
}
</script>

<style>
</style>