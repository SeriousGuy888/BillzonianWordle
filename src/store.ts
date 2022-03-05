import { reactive } from "vue";
import wordlist from "./wordlist"

export const store = reactive({
  maxGuessCount: 6,
  maxWordLength: 5,
  isGameOver: false,
  guessCount: 0,
  currentGuess: "",
  prevGuesses: [] as string[],
  targetWord: "",
  submitGuess() {
    if(this.currentGuess === this.targetWord) {
      alert("thu vik")
      this.isGameOver = true
    }

    this.prevGuesses.push(this.currentGuess)
    this.currentGuess = ""
    this.guessCount++

    if(this.guessCount >= this.maxGuessCount) {
      alert("thu misvik")
      this.isGameOver = true
    }
  },
  newGame() {
    this.isGameOver = false
    this.guessCount = 0
    this.currentGuess = ""
    this.prevGuesses = []
    this.targetWord = this.getTargetWord()
  },
  getTargetWord() {
    return wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase()
  }
})