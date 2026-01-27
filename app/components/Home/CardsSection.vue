<script setup>
const features = [
  {
    title: "Used advanced technologies",
    description:
      "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born",
    isActive: false,
  },
  {
    title: "Clean design & Typography",
    description:
      "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born",
    isActive: true,
  },
  {
    title: "Best customer support",
    description:
      "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born",
    isActive: false,
  },
];
</script>

<template>
  <section
    class="relative container py-16 lg:py-[150px] w-full bg-cover bg-center flex flex-col items-center"
  >
    <div
      v-motion="containerVariants"
      class="grid grid-cols-1 md:grid-cols-3 gap-8"
      :visible-once="true"
    >
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="bg-[#F3F4F6] p-[40px_30px] rounded-[30px] transition-all duration-300 flex flex-col justify-between group"
      >
        <div>
          <div
            class="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center hover:bg-emerald-100 bg-slate-200"
          >
            <div class="w-8 h-8 opacity-50 bg-current rounded-sm"></div>
          </div>

          <h3 class="text-[18px] font-bold text-gray-900 mb-6">
            {{ feature.title }}
          </h3>

          <p class="text-gray-600 text-[16px] font-medium leading-relaxed mb-10">
            {{ feature.description }}
          </p>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="font-bold transition-colors group-hover:text-emerald-500 text-gray-700"
          >
            Learn more
          </button>

          <div
            class="w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:bg-emerald-500 group-hover:text-white bg-gray-200 text-gray-900"
          >
            <LucideArrowRightIcon class="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
