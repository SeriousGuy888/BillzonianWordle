<template>
  <div
      class="letter-cell"
      :class="colourClass"
      :style="'--delay: ' + (xIndex * 0.1) + 's'">
    {{ letter }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    letter: {
      required: false,
      type: String,
    },
    colourClass: {
      required: true,
      type: String,
    },
    xIndex: {
      required: true,
      type: Number,
    },
  },
})
</script>

<style scoped lang="scss">
.letter-cell {
  font-family: Gill Sans, Gill Sans MT, Calibri, sans-serif;

  display: flex;
  border: 0.25vmin solid #747475;
  border-radius: 5%;
  padding: 2vmin;
  font-size: 7vmin;
  width: 1em;
  height: 1em;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: transparent;

  $time: 1s;
  transition: $time;
  transition-delay: var(--delay);
  &.grey, &.yellow, &.green {
    animation: flip-cell $time ease-in;
    animation-delay: var(--delay);
  }

  &.grey {
    background-color: #666;
  }
  &.yellow {
    background-color: #c2a61a;
    border-color: #8b7507;
  }
  &.green {
    background-color: #538d4e;
    border-color: #366632;
  }
}


@keyframes flip-cell {
  0%    { transform: rotateX(0); }
  50%   { transform: rotateX(90deg); }
  100%  { transform: rotateX(0); }
}
</style>