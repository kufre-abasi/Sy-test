<template>
  <div
    class="hidden pt-6 transition-all duration-200 ease-in-out group-hover:block lg:absolute lg:-left-1 lg:top-[100%] flex-col gap-3 lg:shadow-2xl !text-black bg-white rounded-[5px] lg:drop-shadow-2xl lg:p-5 lg:w-[267px]"
  >
    <div class="flex flex-col gap-[23px]">
      <div v-for="(item, index) in items" :key="index">
        <NuxtLink :to="item.link">
          <div
            class="lg:text-[16px] text-[14px] leading-[21px] tracking-[-1.5%] font-normal text-[#000000]"
          >
            {{ item.description }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: Array<{
    description: string;
    link: string;
  }>;
}>();
</script>

<style></style>
