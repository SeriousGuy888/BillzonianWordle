<template>
  <div class="letter-grid">
    <LetterRow
      v-for="i in height"
      :key="i"
      :word="rowIsActive(i - 1) ? store.currentGuess : rowContents[i - 1]"
      :rowIndex="i - 1"
      :length="width" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import LetterRow from "./LetterRow.vue"
import { store } from "@/store"

export default defineComponent({
  components: { LetterRow },
  props: {
    rowContents: {
      required: true,
      type: Array as PropType<string[]>,
    },
    width: {
      required: true,
      type: Number,
    },
    height: {
      required: true,
      type: Number,
    },
  },
  data() {
    return { store }
  },
  methods: {
    rowIsActive: (num: number) => num === store.guessCount,
  },
})
</script>


<style scoped>
.letter-grid {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 1vmin;
  user-select: none;
}
</style>