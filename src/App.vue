<template>
  <div
    id="canvas"
    class="relative w-96 mx-auto h-96 border-blue-400 border mt-5"
  >
    <div class="AD-item absolute" style="width: 160px; height: 100px">
      <div class="relative h-full w-full">
        <div class="resizer absolute -right-4 -bottom-4 w-3 h-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick, onBeforeUpdate, reactive, ref } from "vue";
import grab from "./lib/grab";
import resize from "./lib/resize";

export default {
  setup() {
    const list = reactive([1, 2, 3]);
    const divs = ref([]);

    // Make sure to reset the refs before each update.
    onBeforeUpdate(() => {
      divs.value = [];
    });

    nextTick(() => {
      grab();
      resize();
    });

    return {
      list,
      divs,
    };
  },
};
</script>

<style lang="postcss" scoped>
.AD-item {
  @apply border border-slate-400 bg-gray-100 cursor-move;
}
.resizer {
  @apply border border-gray-400 cursor-nwse-resize;
}
</style>
