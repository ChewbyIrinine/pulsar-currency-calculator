<template>
  <div>
    <main class="px-4 py-5">
      <h1 class="mb-5 font-bold text-20 text-primary">Курс рубля</h1>
      <section class="flex flex-col gap-5 mb-4">
        <article
          v-for="(currency, index) in getCurrencies"
          :key="currency.ID"
          class="p-6 pb-10 bg-gray rounded-2xl"
        >
          <img
            class="mb-5"
            :src="`/_nuxt/assets/svg/currency-${getIconColor(index)}.svg`"
            :alt="`currency-${getIconColor(index)}`"
          />
          <h6 class="mb-5 font-bold text-17 text-primary">
            {{ currency.CharCode }}
          </h6>
          <p class="mb-7 text-14 text-text-gray-950">{{ currency.Name }}</p>
          <ul class="space-y-4">
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
    <footer class="mx-4 mb-24 px-7 py-8 bg-gray rounded-2xl">
      <img class="mb-7" src="@/assets/svg/info-blue.svg" alt="info-blue" />
      <p class="font-bold text-primary">
        Телефон: 8 (800) 888-90-28,<br />
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
