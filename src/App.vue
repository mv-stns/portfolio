<template>
  
  <div class="container mx-auto">
    <router-view />
  </div>
</template>

<script>
import '@/styles/tailwind.css'

export default {
  data() {
    return {
      isDarkMode: false
    }
  },
  mounted() {
    // Check if the OS theme is set to dark mode
    this.isDarkMode = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Listen for changes in the OS theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.handleThemeChange);
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