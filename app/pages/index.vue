<template>
  <section class="home">
    <div class="py-24 md:py-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      <div class="flex flex-col w-full xl:w-3/5 justify-center lg:items-start">
        <div v-html="$md.render(welcomeText)" class="home__welcome prose sm:prose-sm lg:prose-xl" />
        <div class="flex w-full mt-4">
          <img alt="Hero" class="rounded-md shadow-md" :src="welcomeImage" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import settings from '@/content/settings/general.json';

@Component({
  // Called to know which transition to apply
  transition() {
    return 'slide-left';
  },
})
export default class Home extends Vue {
  welcomeText = settings.welcomeText;

  welcomeImage = settings.welcomeImage;

  get posts(): Post[] {
    return this.$store.state.hops;
  }
}
</script>
