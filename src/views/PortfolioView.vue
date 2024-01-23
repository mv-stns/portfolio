<template>
  <div class="flex flex-col gap-4 h-screen">
    <div class="pt-32 pb-12 self-start w-full">
      <h1 class="text-4xl font-bold tracking-tight flex-none max-w-lg text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Works
      </h1>
      <p class="mt-8 text-zinc-600 dark:text-zinc-400 grow">
        Here are some of my works I've done in the past.
      </p>
    </div>
    <section class="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <!-- <Work
        class="cursor-pointer"
        v-for="work in works"
        :key="work.id"
        :image="work.image"
        :title="work.title"
        :date="new Date(work.date)"
        @click="toggler = !toggler, slide = work.id"
      /> -->
      <Work
        class="cursor-pointer"
        v-for="work in works"
        :key="work.id"
        :image="work.image"
        :title="work.title"
        :date="new Date(work.date)"
        @click="handleClick(work.id)">
      </Work>
    </section>
  </div>
  <!-- set current image as lightbox -->
  
  <FsLightbox
    :toggler="toggler"
    :sources="works.map(work => work.image)"
    :type="'image'"
    :slide="slide"
  />
  <teleport 
    ref="popup"
    to="body">
    <WorkPopup
      v-if="popup"
      :image="works[popup - 1].image"
      :title="works[popup - 1].title"
      :date="new Date(works[popup - 1].date)" 
      @close="closePopup"
      />
  </teleport>

</template>

<script>
import Work from '@/views/work/Work.vue'
import FsLightbox from 'fslightbox-vue/v3'
import { ref } from 'vue'
import WorkPopup from './work/Work.popup.vue'

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
    FsLightbox,
    WorkPopup
  },
  data() {
    return {
      works,
      toggler: ref(false),
      popup: null,
    }
  },
  methods: {
    handleClick(id) {
      this.popup = id
    },
    closePopup() {
      this.popup = null
    }
  }
}
</script>

<style>

</style>