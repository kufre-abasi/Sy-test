<script setup>
import { ref, onMounted, onUnmounted } from "vue";
// import {
//   ArrowUpIcon,
//   ChevronRightIcon
// } from '@heroicons/vue/24/outline'

const scrollProgress = ref(0);
const showButton = ref(false);
const disclaimerSection = ref(null);
const disclaimerHeight = ref(0);

// Logic for Back to Top progress border
const updateScroll = () => {
  const pixelsCustom = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  scrollProgress.value = (pixelsCustom / docHeight) * 100;
  showButton.value = pixelsCustom > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const updateDisclaimerHeight = () => {
  if (disclaimerSection.value) {
    disclaimerHeight.value = disclaimerSection.value.offsetHeight;
  }
};

let resizeObserver = null;

onMounted(() => {
  window.addEventListener("scroll", updateScroll);
  if (disclaimerSection.value) {
    resizeObserver = new ResizeObserver(updateDisclaimerHeight);
    resizeObserver.observe(disclaimerSection.value);
    updateDisclaimerHeight();
  }
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
  if (resizeObserver) resizeObserver.disconnect();
});

const footerLinks = {
  products: [
    "HR Management",
    "Invoice System",
    "Email Marketing",
    "Web Services",
    "Digital Marketing",
  ],
  whyChoose: ["Customers", "Why Staco?", "Book a demo"],
  resources: ["Latest Blog", "Supports", "Knowledgebase", "FAQs"],
  company: ["About", "What we do", "Contact us", "Careers"],
};
</script>

<template>
  <div class="relative min-h-screen">
    <!-- footer -->
    <div
      class="relative z-10 bg-slate-50"
      :style="{ marginBottom: `${disclaimerHeight}px` }"
    >
      <footer
        class="bg-[#1A1F2D] text-white rounded-[30px] pt-20 mx-6 pb-10 px-6 relative z-10"
      >
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            <div class="lg:col-span-1">
              <div class="flex items-center gap-2 mb-8">
                <div class="w-8 h-8 bg-emerald-400 rounded-full blur-[1px]"></div>
                <span class="text-2xl font-bold tracking-tight">Staco</span>
              </div>
              <p class="text-gray-400 leading-relaxed mb-8">
                Staco is the dedicated platform for performance management that helps to
                grow your startup quickly.
              </p>
              <div class="flex gap-3">
                <div
                  v-for="i in 5"
                  :key="i"
                  class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 transition-colors cursor-pointer"
                >
                  <span class="text-xs">𝕏</span>
                </div>
              </div>
            </div>

            <div>
              <h5 class="font-bold mb-8 flex items-center gap-2">PRODUCTS 🔥</h5>
              <ul class="space-y-4 text-gray-400">
                <li
                  v-for="link in footerLinks.products"
                  :key="link"
                  class="hover:text-white cursor-pointer transition-colors"
                >
                  {{ link }}
                </li>
              </ul>
            </div>

            <div>
              <h5 class="font-bold mb-8 flex items-center gap-2">WHY CHOOSE 🌟</h5>
              <ul class="space-y-4 text-gray-400">
                <li
                  v-for="link in footerLinks.whyChoose"
                  :key="link"
                  class="hover:text-white cursor-pointer transition-colors"
                >
                  {{ link }}
                </li>
              </ul>
            </div>

            <div>
              <h5 class="font-bold mb-8 flex items-center gap-2">RESOURCES ➕</h5>
              <ul class="space-y-4 text-gray-400">
                <li
                  v-for="link in footerLinks.resources"
                  :key="link"
                  class="hover:text-white cursor-pointer transition-colors"
                >
                  {{ link }}
                </li>
              </ul>
            </div>

            <div>
              <h5 class="font-bold mb-8 flex items-center gap-2">COMPANY 💎</h5>
              <ul class="space-y-4 text-gray-400">
                <li
                  v-for="link in footerLinks.company"
                  :key="link"
                  class="hover:text-white cursor-pointer transition-colors"
                >
                  {{ link }}
                </li>
              </ul>
            </div>
          </div>

          <div
            class="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm"
          >
            <p>2023 Staco. All rights reserved.</p>
            <div class="flex gap-8">
              <a href="#" class="hover:text-white">Terms and conditions</a>
              <a href="#" class="hover:text-white">Cookies</a>
              <a href="#" class="hover:text-white">Privacy policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    <!-- Disclaimer section -->
    <div
      ref="disclaimerSection"
      class="fixed bottom-0 left-0 w-full z-0 bg-slate-50 ixYIBr"
    >
      <div class="container px-6 py-10 pb-30">
        <div class="">
          <h4 class="font-bold text-slate-900 mb-4">Disclaimer:</h4>
          <p class="text-gray-500 leading-relaxed mb-6">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable.
          </p>
          <p class="text-gray-500 leading-relaxed">
            Making this the first true generator on the Internet. It uses a dictionary of
            over 200 Latin words, combined handful of model sentence structures.
          </p>
        </div>
      </div>
    </div>
    <!-- Disclaimer section -->
    <button
      v-show="showButton"
      @click="scrollToTop"
      class="fixed bottom-10 right-10 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group z-50"
    >
      <svg class="absolute inset-0 w-full h-full -rotate-90">
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="currentColor"
          stroke-width="3"
          fill="transparent"
          class="text-gray-100"
        />
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="currentColor"
          stroke-width="3"
          fill="transparent"
          stroke-dasharray="150.7"
          :stroke-dashoffset="150.7 - (150.7 * scrollProgress) / 100"
          class="text-emerald-500 transition-all duration-100"
        />
      </svg>
      <IconArrowUp
        class="w-6 h-6 text-emerald-500 relative z-10 group-hover:-translate-y-1 transition-transform"
      />
    </button>
  </div>
</template>

<style>
/* Smooth scrolling for the whole page */
html {
  scroll-behavior: smooth;
}
.ixYIBr {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  z-index: 0;
  background-color: rgb(236, 241, 241);
}
</style>
