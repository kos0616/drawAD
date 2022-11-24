<template>
  <div
    id="canvas"
    class="relative w-96 mx-auto h-96 border-blue-400 border mt-5"
  >
    <div class="AD-item w-10 h-10 bg-purple-200 absolute"></div>
  </div>
</template>

<script>
import { nextTick, onBeforeUpdate, reactive, ref } from "vue";
import grab from "./lib/grab";

export default {
  setup() {
    const list = reactive([1, 2, 3]);
    const divs = ref([]);

    // Make sure to reset the refs before each update.
    onBeforeUpdate(() => {
      divs.value = [];
    });

    nextTick(() => grab());

    return {
      list,
      divs,
    };
  },
};
</script>
