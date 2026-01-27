<script setup lang="ts">
import ProductDropdown from "./UI/ProductDropdown.vue";
import { LucideMenu, ChevronDown } from "lucide-vue-next";

const mobileMenuOpen = ref(false);

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

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
    class="fixed top-0 left-0 right-0 z-50 py-4"
  >
    <div class="container">
      <div
        class="flex items-center justify-between navbar backdrop-blur-xl rounded-full !px-10 py-3"
      >
        <div class="flex items-center gap-3">
          <a class="navbar-brand header-logo" href="/">
            <img
              src="https://staco-react.vercel.app/assets/finance-logo-CcnUpYEH.svg"
              alt="logo"
              class="logo-light"
            />
          </a>
        </div>

        <div class="hidden lg:block">
          <nav>
            <ul class="hidden lg:flex items-center space-x-4">
              <li
                v-for="link in links"
                :key="link.name"
                class="relative flex items-center gap-[3px] group"
              >
                <NuxtLink
                  :to="link.href || '#'"
                  class="font-normal capitalize tracking-[-1.5%] leading-[100%] text-[18px] text-white"
                >
                  {{ link.name }}
                </NuxtLink>
                <ChevronDown v-if="link.dropdownItems" :size="18" class="text-white" />
                <ProductDropdown v-if="link.dropdownItems" :items="link.dropdownItems" />
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <button
            class="hidden md:flex items-center bg-olive-btn !bg-transparent !text-white !pl-4 !w-[30%] !justify-start border gap-2 hover:text-foreground transition-colors"
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
            class="hidden md:block !w-[25%] text-[16px] text-white hover:text-foreground transition-colors"
          >
            Sign in
          </NuxtLink>

          <button class="bg-olive-btn">Start Free</button>

          <button class="lg:hidden p-2 text-white" @click="toggleMenu">
            <LucideMenu class="w-6 h-6" />
          </button>
        </div>
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
                class="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors capitalize"
                @click="toggleMenu"
              >
                {{ link.name }}
              </NuxtLink>
              <template v-if="link.dropdownItems">
                <div class="px-4 py-3 font-semibold text-foreground capitalize">
                  {{ link.name }}
                </div>
                <NuxtLink
                  v-for="item in link.dropdownItems"
                  :key="item.description"
                  :to="item.link"
                  class="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors ml-4"
                  @click="toggleMenu"
                >
                  {{ item.description }}
                </NuxtLink>
              </template>
            </template>
            <div class="border-t border-border/50 mt-2 pt-4 flex flex-col gap-2">
              <NuxtLink to="#" class="px-4 py-2 text-muted-foreground" @click="toggleMenu"
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
