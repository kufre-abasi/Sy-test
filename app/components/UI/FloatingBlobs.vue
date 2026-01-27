<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <svg
      v-motion
      :enter="{
        y: [0, -10, 0],
        rotate: [0, 5, 0],
        transition: { duration: 8000, repeat: Infinity, ease: 'easeInOut' },
      }"
      class="absolute top-32 left-20 w-12 h-14 opacity-30"
      viewBox="0 0 39 45"
      fill="none"
    >
      <path
        d="M4.35993 8.12197C-0.593748 13.8731 -1.08911 28.1803 2.52242 35.9656C7.8417 47.1326 27.7987 47.1679 33.3327 36.604C37.5794 28.3821 36.4727 17.5359 38.6821 0.572389C22.3362 3.68367 9.16665 2.37763 4.35993 8.12197Z"
        fill="hsl(var(--accent-mint))"
      />
    </svg>

    <svg
      v-motion
      :enter="{
        y: [0, 10, 0],
        rotate: [0, -3, 0],
        transition: { duration: 7000, repeat: Infinity, ease: 'easeInOut', delay: 1000 },
      }"
      class="absolute top-40 right-1/4 w-14 h-12 opacity-30"
      viewBox="0 0 52 41"
      fill="none"
    >
      <path
        d="M18.6144 0.0465448C13.3054 -0.784969 1.64645 9.71291 0.397269 16.469C-1.99699 29.5653 6.64316 41.5183 20.5923 40.8947C28.816 40.4789 36.6234 31.2283 51.9258 21.2502C36.4152 10.7523 28.0873 1.81351 18.6144 0.0465448Z"
        fill="hsl(var(--accent-mint))"
      />
    </svg>
    <svg
      v-motion
      :enter="{
        y: [0, 10, 0],
        rotate: [0, -3, 0],
        transition: { duration: 7000, repeat: Infinity, ease: 'easeInOut', delay: 1000 },
      }"
      class="absolute top-40 right-1/2 w-14 h-12 opacity-30"
      viewBox="0 0 52 41"
      fill="none"
    >
      <path
        d="M18.6144 0.0465448C13.3054 -0.784969 1.64645 9.71291 0.397269 16.469C-1.99699 29.5653 6.64316 41.5183 20.5923 40.8947C28.816 40.4789 36.6234 31.2283 51.9258 21.2502C36.4152 10.7523 28.0873 1.81351 18.6144 0.0465448Z"
        fill="hsl(var(--accent-mint))"
      />
    </svg>
    <svg
      v-motion
      :enter="{
        y: [0, 10, 0],
        rotate: [0, -3, 0],
        transition: { duration: 7000, repeat: Infinity, ease: 'easeInOut', delay: 1000 },
      }"
      class="absolute top-40 left-1/2 w-14 h-12 opacity-30"
      viewBox="0 0 52 41"
      fill="none"
    >
      <path
        d="M18.6144 0.0465448C13.3054 -0.784969 1.64645 9.71291 0.397269 16.469C-1.99699 29.5653 6.64316 41.5183 20.5923 40.8947C28.816 40.4789 36.6234 31.2283 51.9258 21.2502C36.4152 10.7523 28.0873 1.81351 18.6144 0.0465448Z"
        fill="hsl(var(--accent-mint))"
      />
    </svg>
  </div>
</template>
