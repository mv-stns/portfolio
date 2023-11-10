<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import '@/styles/tailwind.css'
</script>

<template>
  <ul>
    <li>
      <RouterLink to="/about">AboutView</RouterLink>
    </li>
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
  </ul>
  <RouterView />
</template>

<style>
</style>
