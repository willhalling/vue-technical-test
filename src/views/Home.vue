<template>
  <div class="home">
    <heading>Technical Test | Will Halling</heading>
    <div class="home__carousel">
      <VueSlickCarousel v-if="videos.length > 0" :arrows="true" :dots="true" v-bind="settings">
        <div v-for="(video, index) in videos" :key="index">
          <router-link :title="video.title" :to="`/video/${index}-${slugify(video.title)}`">
            <img :src="video.poster" :alt="video.title"/>
          </router-link>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import { slugify } from '../utils/url'
import { mapGetters, mapActions } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import Heading from '@/components/Heading.vue'
import { CONFIG } from '../constants/config.js'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Home',
  components: {
    Heading,
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        "centerMode": true,
        "draggable": false,
        "centerPadding": "0",
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "speed": 500
      }
    }
  },
  mounted() {
    const api = CONFIG.url
    this.getAllVideos(api)
  },
  computed: {
    ...mapGetters({
      'videos': 'movie/videos'
    })
  },
  methods: {
    ...mapActions({
      'getAllVideos': 'movie/getAllVideos'
    }),
    slugify(string) {
      return slugify(string)
    }
  }
}
</script>

<style lang="scss">
  @import "../scss/_variables.scss";
  .home {
    $carousel-thumb-width: 400px;
    $carousel-thumb-height: 600px;
    &__carousel {
      color: black;
      margin: 0 auto;
      max-width: $carousel-thumb-width;
      .slick-next:before, .slick-prev:before {
        color: black;
      }
      .slick-slide a {
        display: block;
        &:focus {
          border: 2px solid $focus-colour;
        }
      }
      img {
        max-height: $carousel-thumb-height;
        width: 100%;
        pointer-events: none;
      }
    }
  }
</style>
