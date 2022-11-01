<template>
  <div>
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: "Default",

  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
body {
  @apply font-roboto text-text-main;
}
</style>
