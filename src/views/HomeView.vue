<script>
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
<template>
    <div class="w-1/3 m-auto h-1/3" :class="isDarkMode ? 'bg-zinc-950' : ''">
    <!-- <Navigation />
    <RouterView class="h-full" /> -->
    <picture>
      <source
        media="(prefers-color-scheme: dark)"
        srcset="https://readme.mv-stns.workers.dev?section=top&theme=dark"
      />
      <img
        src="https://readme.mv-stns.workers.dev?section=top&theme=light"
        width="100%"
        height="20"
        align="left"
      />
    </picture>
    <a href="https://vaitschulis.com">
      <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcset="https://readme.mv-stns.workers.dev?section=link-website&theme=dark"
          label="Visit"
        />
        <img
          src="https://readme.mv-stns.workers.dev?section=link-website&theme=light&i=0"
          alt="visit my website"
          width="100"
          height="18px"
          align="left"
        />
      </picture>
    </a>
    <img src="data:null;," width="100%" height="0" align="left" alt="" />
    <a href="https://twitter.com/MarcusSowieso">
      <picture>
        <source
          media="(prefers-color-scheme: dark)"
          srcset="https://readme.mv-stns.workers.dev?section=link-twitter&theme=dark"
        />
        <img
          src="https://readme.mv-stns.workers.dev?section=link-twitter&theme=light&i=1"
          alt="visit my Twitter/X profile"
          width="100"
          height="18"
          align="left"
        />
      </picture>
    </a>
    <img src="data:null;," width="100%" height="0" align="left" alt="" />
    <!-- <a href="https://www.instagram.com/mv-stnsg">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://readme.mv-stns.workers.dev?section=link-instagram&theme=dark">
    <img src="https://readme.mv-stns.workers.dev?section=link-instagram&theme=light&i=2" alt="visit my Instagram" width="100" height="18" align="left">
  </picture>
</a> -->
    <img src="data:null;," width="100%" height="0" align="left" alt="" />
    <picture>
      <source
        media="(prefers-color-scheme: dark)"
        srcset="https://readme.mv-stns.workers.dev?section=fallback&theme=dark"
      />
      <img
        src="https://readme.mv-stns.workers.dev?section=fallback&theme=light"
        alt=""
        width="420"
        align="left"
      />
    </picture>
    <picture class="absolute bottom-0 left-0 w-screen h-screen">
      <source
        media="(prefers-color-scheme: dark)"
        srcset="https://readme.mv-stns.workers.dev?section=main&theme=dark"
        class="absolute"
      />
      <img
        src="https://readme.mv-stns.workers.dev?section=main&theme=light"
        alt="I'm Marcus. A Germany-based Nerd."
        height="290"
        align="left"
        class="absolute bottom-0 w-full"
      />
    </picture>
  </div>
</template>

<style scoped lang='scss'>

</style>