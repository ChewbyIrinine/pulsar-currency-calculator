<template>
  <div class="container">
    <main class="py-5 md:pb-8">
      <h1 class="mb-5 font-bold text-20 md:text-26 text-primary">Курс рубля</h1>
      <section class="grid md:grid-cols-2 gap-5 mb-4">
        <CurrencyCard
          v-for="(currency, index) in getCurrencies"
          :key="currency.ID"
          :currency-data="currency"
          :index="index"
        />
      </section>
    </main>
    <footer
      class="mb-24 md:mb-11 px-7 md:px-6 py-8 md:py-7 flex flex-col md:flex-row gap-x-7 gap-y-6 md:items-center bg-gray rounded-2xl"
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
import CurrencyCard from "@/components/CurrencyCard";

export default {
  name: "ExchangeRates",

  components: {
    CurrencyCard,
  },

  computed: {
    getCurrencies() {
      // Convert object to array to get index
      return Object.values(this.$store.state.currencies.currencies);
    },
  },

  created() {
    this.$store.dispatch("currencies/GET_CURRENCIES");
  },
};
</script>
