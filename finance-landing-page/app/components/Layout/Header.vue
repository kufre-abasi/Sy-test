<script setup lang="ts">
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

const isSticky = ref(false);
const mobileMenuOpen = ref(false);

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const handleScroll = () => {
  isSticky.value = window.scrollY > window.innerHeight;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const links = [
  {
    name: "Home",
    dropdownItems: [
      {
        description: "Pages",
        link: "/",
      },
      {
        description: "Services",
        href: "/",
      },
      {
        description: "Credit Cards",
        href: "/",
      },
    ],
  },
  {
    name: "Pages",
    dropdownItems: [
      {
        description: "For Individuals",
        href: "/",
      },
      {
        description: "For Businesses",
        href: "/",
      },
    ],
  },
  {
    name: "Services",
    href: "/",
  },
  {
    name: "Blogs",
    href: "/",
  },
  {
    name: "Contact Us",
    href: "/",
  },
];
</script>

<template>
  <header
    v-motion
    :initial="{ y: -20, opacity: 0 }"
    :enter="{ y: 0, opacity: 1 }"
    :duration="500"
    class="z-50 py-4 transition-all duration-300"
    :class="[
      isSticky
        ? 'fixed top-0 left-0 right-0 bg-white/5 backdrop-blur-md shadow-lg lg:!py-2'
        : 'absolute top-0 left-0 right-0 bg-transparent',
    ]"
  >
    <div class="container">
      <div
        class="flex items-center justify-between lg:!px-10 !px-4 lg:py-3 py-2 transition-all duration-300"
        :class="{
          'lg:backdrop-blur-xl lg:bg-white/5 !text-black rounded-full navbar': !isSticky,
        }"
      >
        <div class="flex items-center gap-3">
          <a class="navbar-brand header-logo" href="/">
            <img
              v-if="!isSticky"
              src="https://staco-react.vercel.app/assets/finance-logo-CcnUpYEH.svg"
              alt="logo"
              class="logo-light lg:w-auto w-24"
            />
            <img
              v-else
              class="logo-light lg:w-auto w-24"
              src="data:image/png;base64,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"
              alt="logo"
            />
          </a>
        </div>

        <div class="hidden lg:block">
          <nav ref="navRef" class="relative inline-flex items-center gap-2 rounded-full">
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
                'relative z-10 px-6 py-5 rounded-full text-center text-sm font-medium transition-colors duration-200',
                activeTab === tab
                  ? `text-blac`
                  : `${!isSticky ? 'text-zinc-300' : 'text-black'}`,
              ]"
            >
              {{ tab }}
            </button>
          </nav>
        </div>

        <div class="lg:flex hidden items-center gap-4">
          <button
            :class="!isSticky ? '!text-white' : ''"
            class="hidden md:flex items-center bg-olive-btn !bg-transparent !pl-4 !w-[30%] !justify-start border gap-2 hover:text-white transition-colors"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
              />
            </svg>
            <span class="text-sm">EN</span>
          </button>

          <NuxtLink
            to="#"
            :class="!isSticky ? '!text-white hover:text-whit' : 'text-black'"
            class="hidden md:block !w-[25%] text-[16px] e transition-colors"
          >
            Sign in
          </NuxtLink>

          <button class="bg-olive-btn">Start Free</button>
        </div>
        <button class="lg:hidden p-2 text-white" @click="toggleMenu">
          <IconMenu class="w-6 h-6" />
        </button>
      </div>

      <Transition
        :css="false"
        @leave="
          (el, done) => {
            /* Optional: add leave animation logic */ done();
          }
        "
      >
        <div
          v-if="mobileMenuOpen"
          v-motion
          :initial="{ opacity: 0, y: -10 }"
          :enter="{ opacity: 1, y: 0 }"
          class="lg:hidden mt-2 bg-card/95 backdrop-blur-xl rounded-2xl p-4 border border-border/50"
        >
          <nav class="flex flex-col gap-2">
            <template v-for="link in links" :key="link.name">
              <NuxtLink
                v-if="link.href"
                :to="link.href"
                class="px-4 py-3 text-white hover:text-white hover:bg-muted/50 rounded-lg transition-colors capitalize"
                @click="toggleMenu"
              >
                {{ link.name }}
              </NuxtLink>
              <template v-if="link.dropdownItems">
                <div class="px-4 py-3 font-semibold text-white capitalize">
                  {{ link.name }}
                </div>
                <NuxtLink
                  v-for="item in link.dropdownItems"
                  :key="item.description"
                  :to="item.link"
                  class="px-4 py-2 text-white hover:text-white hover:bg-muted/50 rounded-lg transition-colors ml-4"
                  @click="toggleMenu"
                >
                  {{ item.description }}
                </NuxtLink>
              </template>
            </template>
            <div class="border-t border-border/50 mt-2 pt-4 flex flex-col gap-2">
              <NuxtLink to="#" class="px-4 py-2 text-white" @click="toggleMenu"
                >Sign in</NuxtLink
              >
              <button class="bg-olive-btn">Start Free</button>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>
