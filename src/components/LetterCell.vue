<template>
  <div class="letter-cell">
    {{ letter }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    letter: {
      required: false,
      type: String,
    }
  }
})
</script>

<style scoped>
.letter-cell {
  display: flex;
  border: 4px solid #747475;
  border-radius: 5%;
  padding: 2rem;
  font-size: 3rem;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
</style>