<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <svg class="absolute -top-10 right-0 w-[400px] h-[700px] opacity-60" viewBox="0 0 300 600" fill="none">
      <path
        v-motion
        d="M250 0 Q300 150, 200 300 Q100 450, 150 600"
        stroke="hsl(var(--accent-mint))"
        stroke-width="3"
        stroke-linecap="round"
        fill="none"
        :initial="{ pathLength: 0, opacity: 0 }"
        :enter="{
          pathLength: 1,
          opacity: 1,
          transition: { duration: 2000, ease: 'easeInOut' }
        }"
      />
    </svg>
  </div>
</template>
