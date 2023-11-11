<template>
  <nav class='w-full'>
    <ul class='flex justify-evenly items-center h-10'>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">AboutView</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // Your component's data properties go here
    }
  },
  methods: {
    // Your component's methods go here
  },
  mounted() {
    // Code to run after the component is mounted
  }
  // ...other component options as needed
}
</script>

<style scoped>
/* Your component's CSS styles go here */
</style>
