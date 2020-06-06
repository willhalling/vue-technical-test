<template>
  <header class="heading">
    <transition name="slide">
      <component
        v-show="show.title"
        :is="type">
        <slot/>
      </component>
    </transition>
  </header>
</template>

<script>
  export default {
    name: 'Heading',
    props: {
      type: {
        type: String,
        default: 'h1'
      }
    },
    data() {
      return {
        show: {
          title: false
        }
      }
    },

    mounted() {
      setTimeout(() => {
        this.show.title = true
      }, 200)
    }
  }
</script>

<style lang="scss">
  @import "../scss/_variables.scss";
  .heading {
    $heading-height: 5rem;
    font-weight: bold;
    background-color: black;
    color: white;
    line-height: 1;
    padding: 0;
    min-height: $heading-height;
    margin: 0 0 $default-spacing;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    h1 {
      line-height: 1;
      margin: 0 auto;
      padding: 0;
    }

    // Heading Transition
    .slide-enter {
      opacity: 0;
      transform: translate3d(-20px, 0, 0);
      animation-fill-mode: forwards
    }

    .slide-enter-active {
      transition: transform 250ms ease;
    }

    .slide-leave-active {
      transition: transform 250ms ease;
      opacity: 0;
    }
  }
</style>
