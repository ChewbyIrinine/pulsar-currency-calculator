<template>
  <div class="container">
    <main class="pt-5 xl:pt-9 2xl:pt-8 pb-4 md:pb-8 xl:pb-12 2xl:pb-8">
      <h1
        class="mb-5 xl:mb-10 font-bold text-20 md:text-26 2xl:text-36 text-primary"
      >
        Курс рубля
      </h1>
      <section class="grid md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8">
        <CurrencyCard
          v-for="(currency, index) in getCurrencies"
          :key="currency.ID"
          :currency-data="currency"
          :index="index"
        />
      </section>
    </main>
    <footer
      class="mb-24 md:mb-11 xl:mb-28 2xl:mb-24 px-7 md:px-6 2xl:px-8 py-8 md:py-7 xl:py-10 flex flex-col md:flex-row gap-x-7 gap-y-6 md:items-center bg-gray rounded-2xl"
    >
      <img class="w-10" src="@/assets/svg/info-blue.svg" alt="info-blue" />
      <p class="font-bold md:text-18 md:text-20 text-primary">
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
