<template>
  <div class="dark:bg-zinc-950 bg-gray-100">
    
    <Navigation />
    <main class="mx-auto w-full max-w-7xl lg:px-8 bg-white dark:bg-zinc-900 dark:ring-zinc-300/20">
      <router-view />
    </main>
  </div>
  <Toaster
    v-if="isDarkMode"
    theme="dark"
  />
  <Toaster
    v-if="!isDarkMode"
    theme="light"
  />
</template>

<script>
import { RouterLink } from 'vue-router'
import { Toaster, toast } from 'vue-sonner'
import StyledRouterLink from '@/components/StyledRouterLink.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Toaster,
    RouterLink,
    Navigation,
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
  },
  watch: {
    '$route' (to) {
      document.title = to.meta.title || 'Marcus Vaitschulis Personal Website'
    }
  }
}
</script>

<style>
#app {
  height: 100vh;
}
</style>