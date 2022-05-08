<template>
  <div class="keyboard">
    <div class="keyboard-row" v-for="(row, i) in layout" v-bind:key="i">
      <div class="keyboard-key cell" :class="store.letterColours[letter] ?? ''" v-for="(letter, j) in row"
        v-bind:key="j" @click="typeKey(letter)">
        {{ keyIcon(letter) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { store } from "@/store"

const layout = [
  "Q W E R T Y U I O P",
  "A S D F G H J K L",
  "Z X C V B N M Enter Backspace",
]

export default defineComponent({
  name: "VirtualKeyboard",
  data() {
    return {
      store,
      layout: layout.map(s => s.split(" ")),
    }
  },
  methods: {
    typeKey(key: string) {
      this.$emit("type-key", key)
    },
    keyIcon(keyLetter: string) {
      if(keyLetter === "Backspace") return "⬅"
      if(keyLetter === "Enter") return "✓"
      else return keyLetter
    }
  },
})
</script>

<style scoped>
.keyboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  vertical-align: bottom;
  user-select: none;
}

.keyboard-row {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

.keyboard-key {
  padding: 1.5vmin;
  font-size: 4.5vmin;
}

.keyboard-key:hover {
  transition: 100ms;
  background-color: #72e9e98c;
}
</style>