<template>
  <div class="video">
    <h1 class="video__title">{{ video.title }}</h1>
    <div class="video__player" @click="togglePlay">
      <video ref="videoPlayer" class="video-js video__element"></video>
      <play-button class="video__button" :playing="playing" />
    </div>
  </div>
</template>

<script>
  import videojs from 'video.js';
  import { mapGetters, mapActions } from 'vuex'
  import PlayButton from '@/components/PlayButton.vue'

  require('video.js/dist/video-js.css')

  export default {
    name: 'Video',
    components: {
      PlayButton
    },
    data() {
      return {
        player: null,
        playing: false
      }
    },
    async mounted() {
      const index = Number(this.$route.params.index)
      const apiParams = {
        url: 'http://hybridtv.ss7.tv/techtest/movies.json',
        index
      }
      await this.getSingleVideo(apiParams)
      this.initVideo()
    },
    computed: {
      ...mapGetters({
        'video': 'video/video'
      })
    },
    methods: {
      ...mapActions({
        'getSingleVideo': 'video/getSingleVideo'
      }),
      initVideo() {
        const options = {
          autoplay: false,
          controls: false,
          poster: this.video.poster,
          sources: [
            {
              src: this.video.video,
              type: "video/mp4"
            }
          ]
        }
        this.player = videojs(this.$refs.videoPlayer, options, function onPlayerReady() {
          // console.log('Player Ready')
        })
      },
      togglePlay() {
        if (this.player.paused()) {
          this.player.play()
          this.playing = true
        } else {
          this.player.pause()
          this.playing = false
        }
      }
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose()
      }
    }
  }
</script>

<style lang="scss">
  @import "../scss/_variables.scss";
  .video {
    &__player {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .vjs-playing {
        + .video__button {
          opacity: 0;
        }
      }
      &:hover {
        .vjs-playing {
          + .video__button {
            opacity: 1;
          }
        }
      }
    }
    &__title {
      font-size: 3rem;
    }
    &__button {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: opacity 0.5s ease-in-out;
    }
  }
</style>
