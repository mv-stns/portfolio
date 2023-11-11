<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
import '@/styles/tailwind.css'
</script>

<template>
  <Navigation />
  <RouterView class='h-full' />
</template>

<style>
</style>
