<template>
  <header class="container py-3 md:py-2 2xl:py-3 bg-gray">
    <ul class="flex gap-7">
      <li>
        <nuxt-link to="/" class="font-semibold text-12 text-text-gray-700"
          >Калькулятор
        </nuxt-link>
      </li>
      <li>
        <nuxt-link
          to="/exchange-rates"
          class="font-semibold text-12 text-text-gray-500"
          >Курс рубля
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
