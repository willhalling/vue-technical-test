<template>
  <div class="home">
    <div class="home__carousel">
      <VueSlickCarousel v-if="videos.length > 0" :arrows="true" :dots="true" v-bind="settings">
        <div v-for="(video, index) in videos" :key="index">
          <router-link :to="`/video/${index}`">
            <img :src="video.poster"/>
          </router-link>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'Home',
  components: {
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
    const api = 'http://hybridtv.ss7.tv/techtest/movies.json'
    this.getAllVideos(api)
  },
  computed: {
    ...mapGetters({
      'videos': 'video/videos'
    })
  },
  methods: {
    ...mapActions({
      'getAllVideos': 'video/getAllVideos'
    }),
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
      }
    }
  }
</style>
