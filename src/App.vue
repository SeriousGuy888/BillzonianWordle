<template>
  <NavHeader />
  <LetterGrid
    :rowContents="store.prevGuesses"
    :width="store.maxWordLength"
    :height="store.maxGuessCount" />
  <h2>Guess {{ store.guessCount }} of {{ store.maxGuessCount }}</h2>
  <!-- {{ store.targetWord }} -->

  <VirtualKeyboard @type-key="typeKey" />
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { store } from "@/store"
import LetterGrid from "./components/LetterGrid.vue"
import NavHeader from "./components/NavHeader.vue"
import VirtualKeyboard from "./components/VirtualKeyboard.vue"

export default defineComponent({
  name: "App",
  components: {
    LetterGrid,
    NavHeader,
    VirtualKeyboard,
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyPress)
    store.newGame()
  },
  data() {
    return { store }
  },
  methods: {
    handleKeyPress(event: KeyboardEvent) {
      if(event.ctrlKey || event.altKey || event.shiftKey || event.metaKey)
        return

      if(store.isGameOver) {
        store.newGame()
        return
      }
      
      this.typeKey(event.key)
    },
    typeKey(key: string) {
      switch(key) {
        case "Backspace":
          store.currentGuess = store.currentGuess.slice(0, store.currentGuess.length - 1)
          break
        case "Enter":
          if(store.currentGuess.length < store.maxWordLength)
            break
          store.submitGuess()
          break
        default:
          if(key.length === 1
              && key.match(/[a-z]/i)
              && store.currentGuess.length < store.maxWordLength)
            store.currentGuess += key.toUpperCase()
          break
      }
    }
  },
})
</script>


<style>
</style>