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
        ? 'fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-md shadow-lg !py-2'
        : 'absolute top-0 left-0 right-0 bg-transparent',
    ]"
  >
    <div class="container">
      <div
        class="flex items-center justify-between lg:!px-10 !px-0 py-3 transition-all duration-300"
        :class="{ 'backdrop-blur-xl bg-white/5 rounded-full navbar': !isSticky }"
      >
        <div class="flex items-center gap-3">
          <a class="navbar-brand header-logo" href="/">
            <img
              src="https://staco-react.vercel.app/assets/finance-logo-CcnUpYEH.svg"
              alt="logo"
              class="logo-light lg:w-auto w-24"
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
                activeTab === tab ? 'text-black' : 'text-zinc-300',
              ]"
            >
              {{ tab }}
            </button>
          </nav>
        </div>

        <div class="lg:flex hidden items-center gap-4">
          <button
            class="hidden md:flex items-center bg-olive-btn !bg-transparent !text-white !pl-4 !w-[30%] !justify-start border gap-2 hover:text-white transition-colors"
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
            class="hidden md:block !w-[25%] text-[16px] text-white hover:text-white transition-colors"
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
