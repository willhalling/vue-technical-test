<template>
  <div class="playButton" :class="classes">
    <button class="playButton__btn">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'PlayButton',
  props: {
    playing: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    text() {
      if (this.playing) {
        return 'Play'
      }
      return 'Pause'
    },
    classes() {
      return {
        [`playButton--play`]: this.playing,
        [`playButton--pause`]: !this.playing
      }
    }
  },
}
</script>

<style lang="scss">
  @import "../scss/_variables.scss";
  .playButton {
    button {
      cursor: pointer;
      font-size: 100%;
      font-family: inherit;
      border: 0;
      background-color: transparent;
      outline: 0;
    }
    &__btn {
      background-image: url('~@/assets/btn-pause.png');
      background-position: 50%;
      background-repeat: no-repeat;
      width: calc(36px + #{$button-spacing});
      height: calc(46px + #{$button-spacing});
      text-indent: -9999px;
      &:focus {
        background-color: $focus-colour;
      }
    }
    &--pause {
      .playButton__btn {
        background-image: url('~@/assets/btn-play.png');
      }
    }
  }
</style>
