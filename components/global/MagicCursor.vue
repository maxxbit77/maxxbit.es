<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const x = ref(0);
const y = ref(0);

const updateCursorPosition = (e) => {
  x.value = e.clientX;
  y.value = e.clientY;
};

onMounted(() => {
  document.addEventListener("mousemove", updateCursorPosition);
});

onBeforeUnmount(() => {
  document.removeEventListener("mousemove", updateCursorPosition);
});
</script>

<template>
  <div class="magic-cursor" :style="{ top: `${y}px`, left: `${x}px` }"></div>
</template>

<style scoped>
.magic-cursor {
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background: radial-gradient(rgba(29, 78, 216, 0.15), transparent 80%);
  animation: pulse 2s infinite alternate;
}
</style>
