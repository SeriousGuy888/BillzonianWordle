<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const state = reactive({
      word: "?????",
    })

    return { ...toRefs(state) }
  },
});
</script>

<style>

</style>
