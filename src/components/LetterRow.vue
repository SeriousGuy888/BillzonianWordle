<template>
  <div class="letter-row">
    {{ rowIndex }}
    <LetterCell
      v-for="i in length"
      :key="i"
      :letter="word?.charAt(i - 1)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LetterCell from "./LetterCell.vue"

export default defineComponent({
  components: { LetterCell },
  props: {
    word: {
      required: false,
      type: String,
    },
    length: {
      required: true,
      type: Number,
    },
    rowIndex: {
      required: true,
      type: Number,
    },
  },
})
</script>

<style scoped>
.letter-row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-self: center;
}
</style>