<template>
  <NavHeader />
  <LetterGrid
    :rowContents="store.prevGuesses"
    :width="store.maxWordLength"
    :height="store.maxGuessCount" />
  <h2>Guess {{ store.guessCount }} of {{ store.maxGuessCount }}</h2>
  {{ store.currentGuess }}
  {{ store.targetWord }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LetterGrid from "./components/LetterGrid.vue"
import NavHeader from "./components/NavHeader.vue"
import { store } from "@/store"

export default defineComponent({
  name: "App",
  components: { LetterGrid, NavHeader },
  mounted() {
    document.addEventListener("keydown", this.handleKey)
    store.newGame()
  },
  data() {
    return { store }
  },
  methods: {
    handleKey(event: KeyboardEvent) {
      if(store.isGameOver) {
        store.newGame()
        return
      }
      if(store.guessCount >= store.maxGuessCount)
        return

      switch(event.key) {
        case "Backspace":
          store.currentGuess = store.currentGuess.slice(0, store.currentGuess.length - 1)
          break
        case "Enter":
          if(store.currentGuess.length < store.maxWordLength)
            break
          store.submitGuess()
          break
        default:
          if(event.key.length === 1
              && event.key.match(/[a-z]/i)
              && store.currentGuess.length < store.maxWordLength)
            store.currentGuess += event.key.toUpperCase()
          break
      }
    },
  },
})
</script>


<style>
</style>