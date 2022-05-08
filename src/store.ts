import { reactive } from "vue";
import wordlist from "./wordlist"

interface CellColours {
  [key: string]: ("" | "grey" | "yellow" | "green")
}

// https://www.raymondcamden.com/2019/10/16/using-indexeddb-with-vuejs
export const store = reactive({
  maxGuessCount: 6,
  maxWordLength: 5,
  isGameOver: false,
  guessCount: 0,
  currentGuess: "",
  prevGuesses: [] as string[],
  letterColours: {} as CellColours,
  targetWord: "",
  submitGuess() {
    
    if(this.currentGuess === this.targetWord) {
      alert("thu vik")
      this.isGameOver = true
    }

    this.prevGuesses.push(this.currentGuess)
    this.currentGuess = ""
    this.guessCount++

    if(!this.isGameOver && this.guessCount >= this.maxGuessCount) {
      alert(`thu misvik - akrat word: "${this.targetWord}"`)
      this.isGameOver = true
    }
  },
  newGame() {
    this.isGameOver = false
    this.guessCount = 0
    this.currentGuess = ""
    this.prevGuesses = []
    this.letterColours = {}
    this.targetWord = this.getTargetWord()
  },
  getTargetWord() {
    return wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase()
  }
})