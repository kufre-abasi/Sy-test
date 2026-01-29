<script setup lang="ts">
import { ref, computed } from "vue";
import { useIntervalFn } from "@vueuse/core";

const testimonials = [
  {
    name: "Peter Leo",
    role: "CTO - Criston",
    quote:
      "Very denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, combined with a handfulso blinde...",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    color: "#D1FADF",
  },
  {
    name: "Sarah Chen",
    role: "CEO - TechFlow",
    quote:
      "Our financial foundations have never been stronger since we started using Staco. The automation features saved us hundreds of hours in manual management.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    color: "#BAE6FD",
  },
];

const currentIndex = ref(0);
const duration = 5000; // 5 seconds per slide
const progress = ref(0);

// Auto-play logic
const { pause, resume } = useIntervalFn(() => {
  if (progress.value >= 100) {
    progress.value = 0;
    currentIndex.value = (currentIndex.value + 1) % testimonials.length;
  } else {
    progress.value += 1; // Increment for smooth progress
  }
}, duration / 100);

const activeTestimonial = computed(() => testimonials[currentIndex.value]);

const partners = ["jQuery", "GitHub", "Portis", "envato", "DAOMAK"];
</script>

<template>
  <div class="bg-[#ecf1f1] z-30 px-6 py-40">
    <div class="container">
      <div
        class="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden"
      >
        <div class="grid md:grid-cols-2 items-center p-8 md:p-16 gap-12">
          <div class="relative flex justify-center">
            <div
              class="absolute -left-10 top-1/4 w-32 h-64 bg-[#064E3B] rounded-full -rotate-45 z-0"
            />

            <div
              class="relative w-72 h-80 bg-[#D1FADF] rounded-t-full overflow-hidden border-[12px] border-[#064E3B]/10"
            >
              <Transition name="fade-slide" mode="out-in">
                <img
                  :key="currentIndex"
                  :src="activeTestimonial.image"
                  class="w-full h-full object-cover"
                  alt="Testimonial"
                />
              </Transition>
            </div>
          </div>

          <div class="space-y-6">
            <div
              class="w-12 h-12 bg-[#D1FADF] rounded-full flex items-center justify-center text-[#064E3B]"
            >
              <IconQuote :size="24" fill="currentColor" />
            </div>

            <Transition name="fade" mode="out-in">
              <div :key="currentIndex">
                <p
                  class="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-8"
                >
                  "{{ activeTestimonial.quote }}"
                </p>

                <div>
                  <h4 class="font-bold text-lg text-gray-900">
                    {{ activeTestimonial.name }},
                  </h4>
                  <p class="text-gray-500">{{ activeTestimonial.role }}</p>
                </div>
              </div>
            </Transition>
          </div>
        </div>

        <div class="border-t border-gray-100 p-8">
          <div class="w-full h-1 bg-gray-100 rounded-full mb-8 overflow-hidden">
            <div
              class="h-full bg-[#10B981] transition-all duration-100 ease-linear"
              :style="{ width: `${progress}%` }"
            />
          </div>

          <div
            class="flex flex-wrap justify-between items-center opacity-40 grayscale gap-6"
          >
            <span
              v-for="brand in partners"
              :key="brand"
              class="text-xl font-bold font-mono"
            >
              {{ brand }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Image Transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Text Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
