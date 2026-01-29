<script setup>
useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [
    {
      rel: "icon",
      href: "https://staco-react.vercel.app/assets/finance-logo-CcnUpYEH.svg",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

const title = "Staco - Financial Security";
const description =
  "Staco is the dedicated platform for human management that helps to grow your startup business quickly";

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: "https://staco-react.vercel.app/assets/finance-logo-CcnUpYEH.svg",
  twitterImage: "https://staco-react.vercel.app/assets/finance-logo-CcnUpYEH.svg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <UApp>
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>
