<template>
  <div class="letter-grid">
    <LetterRow
      v-for="i in height"
      :key="i"
      :word="rowContents[i - 1]"
      :length="width" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import LetterRow from "./LetterRow.vue"

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
})
</script>


<style scoped>
.letter-grid {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  user-select: none;
}
</style>