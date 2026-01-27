
<template>
  <div>
    <header>
    <NuxtLink to="/">
        <AppLogo class="w-auto h-6 shrink-0" />
        </NuxtLink>

      <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
        aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
    </header>

      <slot></slot>


    <UFooter>
      <template #left>
        <p class="text-sm text-muted">
          Built with Nuxt UI • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <UButton
          to="https://github.com/nuxt-ui-templates/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UFooter>
  </div>
</template>
