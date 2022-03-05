<template>
  <nav>
    <h2>Billzonian Unkrat Wordle</h2>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  
})
</script>

<style scoped lang="scss">
nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #414242;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  height: 3rem;

  & > * {
    padding: 0;
    margin: 0;
  }
}
</style>