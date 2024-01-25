<template>
  <div class="dark:bg-zinc-950 bg-gray-100">
    
    <Navigation />
    <main class="mx-auto w-full max-w-7xl lg:px-8 bg-white dark:bg-zinc-900 dark:ring-zinc-300/20">
      <router-view />
    </main>
  </div>
  <Toaster theme="dark" v-if="prefersDark" />
  <Toaster theme="light" v-else />
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import { Toaster, toast } from 'vue-sonner'

// method to check if user prefers dark mode
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
export default {
  name: 'App',
  components: {
    Navigation,
    Toaster
  },
  setup() {
    return {
      prefersDark
    }
  },
  mounted() {
    toast.info('We don\'t use any sort of tracking or cookies on this website.')
  }
}


</script>

<style>
#app {
  height: 100vh;
}
</style>