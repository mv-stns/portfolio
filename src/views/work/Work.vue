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

<template>
  <div class="[&>*]:[box-shadow:var(--tw-shadow,_0_0_#0000),_var(--tw-ring-shadow),_var(--tw-ring-offset-shadow)] w-72 dark:ring-0 [box-shadow:var(--tw-shadow,_0_0_#0000),_var(--tw-ring-shadow),_var(--tw-ring-offset-shadow)] overflow-hidden hover:scale-110 hover:z-10 aspect-[16:9] transition-all duration-300 rounded-lg ring-gray-200 ring-4 shadow-md">
    <div class="relative group">
      <img
        :alt="title"
        class="object-cover w-full h-full opacity-50 inset-0"
        :src="image"
      />
      <div class="transition-all absolute inset-0 duration-300 to-black/25 backdrop-blur-sm bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-start items-end p-8">
        <div class="text-white">
          <h3 class="font-semibold text-xl md:text-base">{{ title }}</h3>
          <p class="text-sm">{{ date.toLocaleDateString('de-DE') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles here */
</style>
