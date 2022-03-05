<template>
  <div class="letter-row">
    <LetterCell
      v-for="i in length"
      :key="i"
      :letter="word?.charAt(i - 1)"
      :colourClass="getCellColour(i - 1)"
      :xIndex="i - 1" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LetterCell from "./LetterCell.vue"
import { store } from "@/store"

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
  data() {
    return { store }
  },
  methods: {
    getCellColour(letterIndex: number): ("" | "grey" | "yellow" | "green") {
      const letter = this.word?.charAt(letterIndex)
      if(store.guessCount === this.rowIndex || !letter)
        return ""
      
      // right letter in the right place
      if(store.targetWord.charAt(letterIndex) === letter)
        return "green"

      let targetWordCopy = store.targetWord
      for(let i = 0; i < this.length; i++) { // loop and remove any letters that are already green from consideration
        if(store.targetWord.charAt(i) === this.word?.charAt(i))
          targetWordCopy = targetWordCopy.substring(0, i) + "." + targetWordCopy.substring(i + 1)
      }
      if(targetWordCopy.includes(letter)) // if the letter is the wrong place, return yellow
        return "yellow"
      return "grey"
    }
  },
})
</script>

<style scoped>
.letter-row {
  display: flex;
  flex-direction: row;
  gap: 1vmin;
  align-self: center;
}
</style>