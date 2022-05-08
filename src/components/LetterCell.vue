<template>
  <div
      class="cell letter-cell"
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
  padding: 1.5vmin;
  font-size: 6vmin;
  font-weight: bold;

  $time: 1s;
  transition: $time;
  transition-delay: var(--delay);
  &.grey, &.yellow, &.green {
    animation: flip-cell $time ease-in;
    animation-delay: var(--delay);
  }
}


@keyframes flip-cell {
  0%    { transform: rotateX(0); }
  50%   { transform: rotateX(90deg); }
  100%  { transform: rotateX(0); }
}
</style>