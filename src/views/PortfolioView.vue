<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-4xl [font-family:'Geist',sans-serif]">Portfolio</h1>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <Work
        class="cursor-pointer"
        v-for="work in works"
        :key="work.id"
        :image="work.image"
        :title="work.title"
        :date="new Date(work.date)"
        @click="toggler = !toggler, slide = work.id"
      />
    </section>
  </div>
  <!-- set current image as lightbox -->
  
  <FsLightbox
    :toggler="toggler"
    :sources="works.map(work => work.image)"
    :type="'image'"
    :slide="slide"
  />

</template>

<script>
import Work from '@/views/work/Work.vue'
import FsLightbox from 'fslightbox-vue/v3'
import { ref } from 'vue'

const works = [
  {
    "id": 1,
    "image": "/images/works/work_01.png",
    "title": "Folder Illustration",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget.",
    "date": "2023-05-23"
  },
  {
    "id": 2,
    "image": "/images/works/work_02.png",
    "title": "K&P Landingpage [WIP]",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget.",
    "date": "2024-01-05"
  },
  {
    "id": 3,
    "image": "/images/works/work_03.png",
    "title": "payify - Customer Empty State",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget.",
    "date": "2023-12-20"
  },
  {
    "id": 4,
    "image": "/images/works/work_04.png",
    "title": "payify - Sign In / Sign Up Page",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget.",
    "date": "2023-07-17"
  },
  {
    "id": 5,
    "image": "/images/works/work_05.png",
    "title": "CHAIN - NFT Marketplace (University Project)",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget.",
    "date": "2023-06-12"
  },
  {
    "id": 6,
    "image": "/images/works/work_06.png",
    "title": "search2fit - Sign In / Sign Up Page",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget.",
    "date": "2022-12-16"
  },
  {
    "id": 7,
    "image": "/images/works/work_07.png",
    "title": "taimr - Blog Entries & Categories CMS",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget.",
    "date": "2023-04-25"
  },
  {
    "id": 8,
    "image": "/images/works/work_08.png",
    "title": "PraxisBooster - About Us Page",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget.",
    "date": "2023-06-02"
  },
]
export default {
  components: {
    Work,
    FsLightbox
  },
  data() {
    return {
      works,
      toggler: ref(false)
    }
  }
}
</script>

<style>

</style>