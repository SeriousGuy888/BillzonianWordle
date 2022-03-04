<template>
  <LetterGrid :rowContents="guesses" :width="5" :height="maxGuessCount" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LetterGrid from "./components/LetterGrid.vue"
import wordlist from "./wordlist"

export default defineComponent({
  name: "App",
  components: { LetterGrid },
  setup() {
    const targetWord = ref(wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase())
    const guesses = ref([] as string[])
    const guessCount = 0

    return { targetWord, guesses, guessCount }
  },
  data() {
    return {
      maxGuessCount: 6
    }
  },
})
</script>


<style>
</style>