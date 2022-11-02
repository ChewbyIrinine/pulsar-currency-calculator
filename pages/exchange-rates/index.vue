<template>
  <div>
    <main class="px-4 md:px-8 py-5 md:pb-8">
      <h1 class="mb-5 font-bold text-20 md:text-26 text-primary">Курс рубля</h1>
      <section class="grid md:grid-cols-2 gap-5 mb-4">
        <article
          v-for="(currency, index) in getCurrencies"
          :key="currency.ID"
          class="p-6 md:px-6 md:pt-9 pb-10 md:pb-12 bg-gray rounded-2xl"
        >
          <img
            class="mb-5 md:mb-7"
            :src="`/_nuxt/assets/svg/currency-${getIconColor(index)}.svg`"
            :alt="`currency-${getIconColor(index)}`"
          />
          <h6 class="mb-5 md:mb-7 font-bold text-17 md:text-18 text-primary">
            {{ currency.CharCode }}
          </h6>
          <p class="mb-7 md:mb-10 text-14 text-text-gray-950">
            {{ currency.Name }}
          </p>
          <ul class="space-y-4 md:space-y-6">
            <li class="flex gap-2 font-semibold text-14 text-text-gray-900">
              <img src="@/assets/svg/mark.svg" alt="mark" />
              Номинал: {{ currency.Nominal }}
            </li>
            <li class="flex gap-2 font-semibold text-14 text-text-gray-900">
              <img src="@/assets/svg/mark.svg" alt="mark" />
              Курс: {{ currency.Value }}
            </li>
          </ul>
        </article>
      </section>
    </main>
    <footer
      class="mx-4 md:mx-8 mb-24 md:mb-11 px-7 md:px-6 py-8 md:py-7 flex flex-col md:flex-row gap-x-7 gap-y-6 md:items-center bg-gray rounded-2xl"
    >
      <img class="w-10" src="@/assets/svg/info-blue.svg" alt="info-blue" />
      <p class="font-bold md:text-18 text-primary">
        Телефон: 8 (800) 888-90-28,<br class="md:hidden" />
        email: info@example.ru.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ExchangeRates",

  computed: {
    getCurrencies() {
      // Convert object to array to get index
      return Object.values(this.$store.state.currencies.currencies);
    },
  },

  created() {
    this.$store.dispatch("currencies/GET_CURRENCIES");
  },

  methods: {
    getIconColor(index) {
      return index % 2 ? "red" : "blue";
    },
  },
};
</script>
