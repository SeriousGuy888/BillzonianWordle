import { reactive } from "vue";
import wordlist from "./wordlist"

export const store = reactive({
  guessCount: 0,
  currentGuess: "",
  prevGuesses: [] as string[],
  targetWord: wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase(),
  submitGuess() {
    this.prevGuesses.push(this.currentGuess)
    this.currentGuess = ""
    this.guessCount++
  }
})