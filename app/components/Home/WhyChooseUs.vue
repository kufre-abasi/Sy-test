<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
// import { CheckIcon } from '@heroicons/vue/24/outline'

const activeIndex = ref(0);
const isAutoPlaying = ref(true);
let timer = null;

const gallery = [
  {
    title: "Streamline your workflow",
    text:
      "Experience seamless integration with our advanced toolkit designed for high-performing teams.",
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800",
    list: ["99% Survey Report", "Trusted by teams", "Self-Service"],
  },
  {
    title: "Manage team increase productivity",
    text:
      "We use as filler text for layouts, non-readability is of great importance but because those who do not know how to pursue pleasure rationally.",
    url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800",
    list: ["99% Survey Report", "Trusted by teams", "Self-Service"],
  },
  {
    title: "Data-driven insights",
    text:
      "Unlock the power of your team's metrics with real-time reporting and analytics that drive better decision making.",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800",
    list: ["99% Survey Report", "Trusted by teams", "Self-Service"],
  },
];

// --- Core Auto-Play Logic ---
const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % gallery.length;
};

const startTimer = () => {
  stopTimer(); // Clear any existing
  timer = setInterval(nextSlide, 5000);
};

const stopTimer = () => {
  if (timer) clearInterval(timer);
};

// Manual Interaction
const selectCard = (index) => {
  activeIndex.value = index;
  isAutoPlaying.value = false; // Stop auto-play when user clicks
  stopTimer();
};

// --- Swipe Logic ---
const touchStart = ref(0);
const handleTouchStart = (e) => (touchStart.value = e.touches[0].clientX);
const handleTouchEnd = (e) => {
  const touchEnd = e.changedTouches[0].clientX;
  const diff = touchStart.value - touchEnd;

  if (Math.abs(diff) > 50) {
    if (diff > 0) nextSlide();
    else activeIndex.value = (activeIndex.value - 1 + gallery.length) % gallery.length;
    isAutoPlaying.value = false;
    stopTimer();
  }
};

onMounted(() => startTimer());
onUnmounted(() => stopTimer());
</script>

<template>
  <section
    class="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <div class="lg:w-1/2 min-h-[350px]">
      <transition name="slide-fade" mode="out-in">
        <div :key="activeIndex" class="text-center lg:text-left">
          <header class="mb-8">
            <span
              class="text-blue-600 font-bold tracking-widest leading-[30px] uppercase text-[18px]"
              >Why Choose Us</span
            >

            <div class="mt-4">
              <h2 class="text-5xl font-bold text-slate-900 leading-[60px] mb-6">
                {{ gallery[activeIndex].title }}
              </h2>
              <p class="text-gray-500 text-lg leading-relaxed">
                {{ gallery[activeIndex].text }}
              </p>
            </div>
          </header>

          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="i in gallery[activeIndex].list"
              :key="i"
              class="flex items-center gap-2"
            >
              <CheckIcon class="w-5 h-5 text-emerald-500 stroke-3" />
              <span class="font-bold text-slate-700 text-sm">{{ i }}</span>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div class="lg:w-1/2 flex gap-4 h-125 w-full">
      <div
        v-for="(img, index) in gallery"
        :key="index"
        @click="selectCard(index)"
        class="relative h-full overflow-hidden rounded-[40px] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
        :class="
          activeIndex === index
            ? 'flex-[4]'
            : 'flex-1 grayscale brightness-75 hover:brightness-100'
        "
      >
        <img :src="img.url" class="absolute inset-0 w-full h-full object-cover" />

        <div
          v-if="activeIndex === index"
          class="absolute bottom-8 left-8 right-8 h-1.5 bg-white/20 rounded-full overflow-hidden"
        >
          <div
            class="h-full bg-white transition-none"
            :class="{ 'progress-bar-active': isAutoPlaying }"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Text Transition */
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.4s ease-in;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Progress Bar Keyframe */
.progress-bar-active {
  animation: fill 5s linear forwards;
}

@keyframes fill {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
