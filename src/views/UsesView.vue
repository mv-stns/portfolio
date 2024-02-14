<template>
  <div>
      <div class="py-32 space-y-2 max-w-2xl">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">Software I use, gadgets I love, and other things I recommend.</h1>
        <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."</p>
      </div>
      <div class="space-y-8 max-w-4xl mb-32 mt-16 sm:mt-20">
        <ToolsSection title="Workstation">
          <ToolItem title="16” MacBook Pro, M1 Max, 64GB RAM">
            Upgraded to this badboy a few months ago. More then enough to handle everything
          </ToolItem>
          <!-- <ToolItem title="16” MacBook Pro, Intel Core i7, 16GB RAM (Late 2019)">
            All handy for web development, but I’m not a fan of the keyboard.
            Could be better. But trusty nonetheless. Worked well for me for the last 2 years.
          </ToolItem> -->
          <ToolItem title="hp Pavilion 27xi Display">
            Does it's job. Great additional screen for my MacBook Pro.
          </ToolItem>
          <ToolItem title="MX Keys for Mac">
              I love the keyboard. It's a bit pricey, but it's worth it.
              I'm using it for a year now and I'm still happy with it.
              It has a great feel and it's very quiet.
          </ToolItem>
          <ToolItem title="MX Master 3s">
            The best office mouse I've ever used. Very comfortable and precise.
            Alot of features and it's very customizable. Also using it for a year now and I'm still happy with it.
          </ToolItem>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <ToolItem title="VSCode">
            Very powerful and customizable. Community is great & the extensions are awesome.
            I'm recently switched to WebStorm, but I'm still using VSCode for some projects.
          </ToolItem>
          <ToolItem title="PhpStorm">
              Very powerful php IDE. Didn't use it for a long time, but will try out in my higher education.
          </ToolItem>
          <ToolItem title="WebStorm">
            Currently using WebStorm for my projects. Beautiful new interface and great features.
            I'll stick with it for a while until I'll miss VSCode 😅.
          </ToolItem>
          <ToolItem title="TablePlus">
            Best databaste tool avaliable for Mac. Period.
          </ToolItem>
        </ToolsSection>
        <ToolsSection title="Design">
          <ToolItem title="Figma">
            We started using Figma as just a design tool but now it’s become
            our virtual whiteboard for the entire company. Never would have
            expected the collaboration features to be the real hook.
          </ToolItem>
          <ToolItem title="Adobe Creative Cloud">
            Who would have thought.
            No but for real, it's a great tool for designers. The best if you ask me.
            But unfortunately it's a subscription model and takes the money out of your pocket.
          </ToolItem>
          <ToolItem title="Affinity Suit by Sans Serif">
            The biggest competitor to Adobe Creative Cloud. Huge software with similar features like Adobe.
            One time payment and you're good to go.
          </ToolItem>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <ToolItem title="Raycast">
            The fastest commandbar for Mac. Heavily customizable and very fast.
            If you're using a Mac, you have to try it out.
          </ToolItem>
          <ToolItem title="Craft.do">
            Writing down my daily notes and some tasks. Heavily using it for my education.
            Great features like TeX Support, Markdown Support, and more.
          </ToolItem>
          <ToolItem title="Notion">
            Second Brain for me. Writing down my tasks with Hyper, an Extension for Raycast,
            to easily access my tasks. Also using it for my education and for work.
          </ToolItem>
        </ToolsSection>
      </div>
    </div>
    <div class="w-full h-32"></div>
</template>

<script lang="ts">

import ToolsSection from '@/components/ToolsSection.vue'
import ToolItem from '@/components/ToolItem.vue'


export default {
  components: {
    ToolsSection,
    ToolItem
  },
  name: 'UsesView',
  data() {
    return {}
  },
}

</script>

<style>

</style>