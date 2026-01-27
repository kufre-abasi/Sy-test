<template>
  <div class="min-h-screen bg-black flex items-center justify-center">
    <nav
      ref="navRef"
      class="relative inline-flex items-center gap-2 bg-zinc-800 rounded-full p-2"
    >
      <!-- Active tab white background -->
      <div
        class="absolute top-2 left-0 h-[calc(100%-16px)] bg-white rounded-full transition-all duration-300 ease-out"
        :style="indicatorStyle"
      />

      <!-- Hover state gray background -->
      <div
        class="absolute top-2 left-0 h-[calc(100%-16px)] bg-zinc-600/50 rounded-full transition-all duration-200 ease-out pointer-events-none"
        :style="hoverStyleComputed"
      />

      <!-- Tab buttons -->
      <button
        v-for="tab in tabs"
        :key="tab"
        :ref="(el) => setTabRef(tab, el)"
        @click="handleTabClick(tab)"
        @mouseenter="handleMouseEnter(tab)"
        @mouseleave="handleMouseLeave"
        :class="[
          'relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200',
          activeTab === tab ? 'text-black' : 'text-zinc-300',
        ]"
      >
        {{ tab }}
      </button>
    </nav>

    <!-- Content area to demonstrate the navbar -->
    <div class="absolute bottom-20 text-center">
      <p class="text-zinc-500 text-sm">
        Active tab: <span class="text-zinc-300 font-medium">{{ activeTab }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, nextTick } from "vue";

const activeTab = ref("Studio");
const hoveredTab = ref(null);
const indicatorStyle = ref({});
const hoverStyle = ref({});
const tabRefs = ref({});
const navRef = ref(null);

const tabs = ["Projects", "Gallery", "Studio", "Profile"];

const hoverStyleComputed = computed(() => ({
  ...hoverStyle.value,
  opacity: hoveredTab.value && hoveredTab.value !== activeTab.value ? 1 : 0,
}));

const setTabRef = (tab, el) => {
  if (el) {
    tabRefs.value[tab] = el;
  }
};

const updateIndicator = (tabName) => {
  const tabElement = tabRefs.value[tabName];
  const navElement = navRef.value;

  if (tabElement && navElement) {
    const navRect = navElement.getBoundingClientRect();
    const tabRect = tabElement.getBoundingClientRect();

    indicatorStyle.value = {
      width: `${tabRect.width}px`,
      transform: `translateX(${tabRect.left - navRect.left}px)`,
    };
  }
};

const updateHoverIndicator = (tabName) => {
  const tabElement = tabRefs.value[tabName];
  const navElement = navRef.value;

  if (tabElement && navElement) {
    const navRect = navElement.getBoundingClientRect();
    const tabRect = tabElement.getBoundingClientRect();

    hoverStyle.value = {
      width: `${tabRect.width}px`,
      transform: `translateX(${tabRect.left - navRect.left}px)`,
      opacity: 1,
    };
  }
};

const handleTabClick = (tab) => {
  activeTab.value = tab;
};

const handleMouseEnter = (tab) => {
  if (tab !== activeTab.value) {
    hoveredTab.value = tab;
    updateHoverIndicator(tab);
  }
};

const handleMouseLeave = () => {
  hoveredTab.value = null;
  hoverStyle.value = { ...hoverStyle.value, opacity: 0 };
};

// Watch for activeTab changes
watch(activeTab, (newTab) => {
  nextTick(() => {
    updateIndicator(newTab);
  });
});

// Initialize on mount
onMounted(() => {
  nextTick(() => {
    updateIndicator(activeTab.value);
  });
});
</script>

<style scoped>
/* Tailwind CSS classes are used, make sure Tailwind is configured in your Vue project */
</style>
