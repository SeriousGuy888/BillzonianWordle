<template>
  <LetterGrid
    :rowContents="store.prevGuesses"
    :width="maxWordLength"
    :height="maxGuessCount" />
  <h2>Guess {{ store.guessCount }} of {{ maxGuessCount }}</h2>
  {{ store.currentGuess }}
  {{ store.targetWord }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LetterGrid from "./components/LetterGrid.vue"
import { store } from "@/store"

export default defineComponent({
  name: "App",
  components: { LetterGrid },
  created() {
    window.addEventListener("keydown", this.handleKey)
  },
  data() {
    return {
      maxGuessCount: 6,
      maxWordLength: 5,
      store,
    }
  },
  methods: {
    handleKey(event: KeyboardEvent) {
      if(store.guessCount >= this.maxGuessCount)
        return

      switch(event.key) {
        case "Backspace":
          store.currentGuess = store.currentGuess.slice(0, store.currentGuess.length - 1)
          break
        case "Enter":
          if(store.currentGuess.length < this.maxWordLength)
            break
          store.submitGuess()
          break
        default:
          if(event.key.length === 1
              && event.key.match(/[a-z]/i)
              && store.currentGuess.length < this.maxWordLength)
            store.currentGuess += event.key.toUpperCase()
          break
      }
    },
  },
})
</script>


<style>
</style>