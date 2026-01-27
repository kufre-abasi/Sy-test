<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const words = ["Accountable", "Easier", "Unbeatable"];
const currentIndex = ref(0);
let interval: any;

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % words.length;
  }, 3000);
});

onUnmounted(() => clearInterval(interval));
</script>

<template>
  <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
    <span class="text-white">Financial Security</span>
    <br />
    <span class="text-white">Made </span>
    <span class="relative inline-block">
      <Transition mode="out-in" name="slide-up">
        <span :key="words[currentIndex]" class="text-gradient-primary inline-block">
          {{ words[currentIndex] }}
        </span>
      </Transition>

      <div
        v-motion
        :initial="{ scaleX: 0 }"
        :enter="{ scaleX: 1, transition: { duration: 800, delay: 300 } }"
        class="absolute -bottom-1 left-0 right-0 h-1.5 rounded-full origin-left"
        style="
          background: linear-gradient(
            90deg,
            hsl(var(--primary)),
            hsl(var(--accent-mint))
          );
        "
      />
    </span>
  </h1>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-up-enter-from {
  transform: translateY(40px);
  opacity: 0;
}
.slide-up-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
</style>
