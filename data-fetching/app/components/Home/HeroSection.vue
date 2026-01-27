<script setup lang="ts">
const isPlaying = ref(true);
</script>

<template>
  <section
    class="relative min-h-screen flex items-center z-10 justify-center pt-32 pb-20 bg-dark-navy overflow-hidden"
  >
    <UIFloatingBlobs />
    <UICurvedLines />

    <div class="container px-4 sm:px-6 lg:px-8">
      <div class="flex lg:flex-row flex-col gap-12 justify-between lg:gap-8 items-center">
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 200 } }"
          class="relative z-10"
        >
          <UIAnimatedHeadline />

          <p
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 500 } }"
            class="mt-6 text-lg text-white font-medium max-w-lg"
          >
            Staco is the dedicated platform for human management that helps to grow your
            startup business quickly
          </p>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 700 } }"
            class="mt-10 flex flex-wrap items-center gap-4"
          >
            <NuxtLink to="#" class="btn-hero-primary"> Get Start For Free </NuxtLink>
            <NuxtLink to="#" class="btn-hero-secondary group">
              <span>Let's talk</span>
              <IconArrowRight
                class="w-5 h-5 transition-transform group-hover:translate-x-1"
              />
            </NuxtLink>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 700, delay: 400 } }"
          class="relative z-10 lg:w-[40%]"
        >
          <div class="video-container relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
              alt="Business meeting"
              class="w-full h-full object-cover"
            />

            <button
              @click="isPlaying = !isPlaying"
              class="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:border-primary transition-all group"
            >
              <IconPause
                v-if="isPlaying"
                class="w-5 h-5 text-[#44c486] group-hover:text-primary-foreground transition-colors"
              />
              <IconPlay
                v-else
                class="w-5 h-5 text-[#44c486] group-hover:text-primary-foreground transition-colors ml-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
