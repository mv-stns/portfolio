<template>
  <div class="[&>*]:[box-shadow:var(--tw-shadow,_0_0_#0000),_var(--tw-ring-shadow),_var(--tw-ring-offset-shadow)] [box-shadow:var(--tw-shadow,_0_0_#0000),_var(--tw-ring-shadow),_var(--tw-ring-offset-shadow)] relative group overflow-hidden hover:scale-110 hover:z-10 transition-all duration-300 rounded-lg ring-gray-200 ring-4 shadow-md">
    <img
      alt="Image 1"
      class="object-cover w-full h-full"
      :src="image"
    />
    <div class="absolute inset-0 hover:-inset-5 bg-gradient-to-b from-transparent transition-all duration-300 to-black/25 backdrop-blur-sm bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-start items-end p-8">
      <div class="text-white">
        <h3 class="font-semibold text-xl md:text-xl">{{ title }}</h3>
        <p class="text-sm">{{ date.toLocaleDateString('de-DE') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
