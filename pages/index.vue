<template>
  <div class="container">
    <main class="py-5 xl:pt-9 xl:pb-6">
      <h1
        class="mb-6 md:mb-5 xl:mb-8 font-bold text-20 md:text-26 text-primary"
      >
        Валютный калькулятор
      </h1>
      <div class="flex flex-col md:flex-row gap-x-7 xl:gap-x-10 gap-y-4">
        <section class="md:w-1/2">
          <FormLabel class="mb-5 md:mb-8" text="Валюта 1">
            <CurrencySelect
              :currency-data="getCurrencies"
              placeholder="Введите название или код"
              v-model="firstCurrencyID"
            />
          </FormLabel>

          <FormLabel class="mb-5 md:mb-8" text="Валюта 2">
            <CurrencySelect
              :currency-data="getCurrencies"
              placeholder="Введите название или код"
              v-model="secondCurrencyID"
            />
          </FormLabel>

          <FormLabel class="mb-5 md:mb-6 xl:mb-5" text="Количество">
            <input
              class="h-12 p-5 border border-solid border-text-gray-100 rounded-md"
              type="text"
              placeholder="Введите число"
              v-model="amount"
            />
          </FormLabel>
          <div
            class="flex items-center gap-5 px-7 md:px-8 py-5 md:py-8 bg-secondary rounded-2xl"
          >
            <img src="@/assets/svg/info-red.svg" alt="info-red" />
            <p class="font-semibold text-14 md:text-16 xl:text-20 text-primary">
              Итого: {{ getTotal }}
            </p>
          </div>
        </section>
        <section
          class="md:w-1/2 h-full px-4 xl:px-6 py-7 xl:py-8 md:pt-6 md:pb-4 bg-secondary border border-solid border-text-gray-100 rounded-2xl"
        >
          <h2
            class="mb-8 xl:mb-10 font-semibold text-12 md:text-15 text-primary uppercase"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor:
          </h2>
          <div class="flex flex-col md:flex-row gap-x-5 gap-y-8">
            <ul
              class="md:w-2/3 xl:w-1/2 space-y-5 text-14 md:text-13 xl:text-14"
            >
              <li class="flex gap-2">
                <img src="@/assets/svg/mark.svg" alt="mark" />
                Incididunt ut labore et dolore magna aliqua
              </li>

              <li class="flex gap-2">
                <img src="@/assets/svg/mark.svg" alt="mark" />
                Incididunt ut labore et
              </li>

              <li class="flex gap-2">
                <img src="@/assets/svg/mark.svg" alt="mark" />
                Incididunt ut labore et dolore
              </li>

              <li class="flex gap-2">
                <img src="@/assets/svg/mark.svg" alt="mark" />
                Labore et dolore
              </li>

              <li class="flex gap-2">
                <img src="@/assets/svg/mark.svg" alt="mark" />
                Incididunt ut
              </li>

              <li class="flex gap-2">
                <img src="@/assets/svg/mark.svg" alt="mark" />
                Incididunt ut labore et dolore
              </li>

              <li class="flex gap-2">
                <img src="@/assets/svg/mark.svg" alt="mark" />
                Incididunt ut labore
              </li>
            </ul>
            <div
              class="xl:h-full md:w-1/3 xl:w-1/2 flex md:flex-col xl:grid grid-cols-2 gap-2 xl:gap-x-3"
            >
              <div class="w-1/4 md:w-full">
                <img
                  class="rounded-tr-2xl rounded-bl-2xl xl:rounded-none"
                  src="@/assets/images/img-1.jpg"
                  alt="img-1"
                />
              </div>

              <div class="w-1/4 md:w-full">
                <img
                  class="rounded-tl-2xl rounded-br-2xl xl:rounded-none xl:rounded-tr-3xl"
                  src="@/assets/images/img-2.jpg"
                  alt="img-2"
                />
              </div>

              <div class="w-1/4 md:w-full">
                <img
                  class="rounded-tr-2xl rounded-bl-2xl xl:rounded-none xl:rounded-bl-3xl"
                  src="@/assets/images/img-3.jpg"
                  alt="img-3"
                />
              </div>

              <div class="w-1/4 md:w-full">
                <img
                  class="rounded-tl-2xl rounded-br-2xl xl:rounded-none"
                  src="@/assets/images/img-4.png"
                  alt="img-4"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <footer
      class="-mx-4 md:mx-0 px-4 xl:px-8 xl:py-14 pt-7 pb-5 mb-16 flex flex-col md:flex-row gap-y-7 bg-secondary text-center md:rounded-xl"
    >
      <div class="md:w-1/2 md:text-left">
        <h2
          class="font-bold md:text-18 xl:text-30 text-primary mb-5 md:mb-4 xl:mb-6"
        >
          Нужна помощь?<br />Мы поможем! Просто свяжитесь с нами.
        </h2>
        <p class="text-12 md:text-10 xl:text-13">
          Наши специалисты с радостью ответят на все ваши вопросы и дадут
          профессиональную консультацию по товарам.
        </p>
      </div>
      <div class="md:w-1/2">
        <p
          class="font-semibold text-26 md:text-24 xl:text-40 text-primary mb-4 xl:mb-8"
        >
          <a href="tel:+78008889028">8 (800) 888-90-28</a>
        </p>
        <p class="text-12 xl:text-18 mb-2 xl:mb-6">ИЛИ</p>
        <p class="text-18 md:text-20 xl:text-24 text-primary">
          <a href="mailto:info@example.ru">info@example.ru</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import FormLabel from "@/components/FormLabel";
import CurrencySelect from "@/components/CurrencySelect";

export default {
  name: "Home",

  components: {
    FormLabel,
    CurrencySelect,
  },

  data() {
    return {
      firstCurrencyID: null,
      secondCurrencyID: null,
      amount: null,
    };
  },

  computed: {
    getCurrencies() {
      return Object.values(this.$store.state.currencies.currencies);
    },

    getTotal() {
      return (
        (
          (this.getFirstCurrencyData?.Value /
            this.getSecondsCurrencyData?.Value /
            this.getFirstCurrencyData?.Nominal) *
          this.getSecondsCurrencyData?.Nominal *
          this.amount
        ).toFixed(4) || "..."
      );
    },

    getFirstCurrencyData() {
      return (
        this.getCurrencies.find((item) => item.ID === this.firstCurrencyID) ||
        {}
      );
    },

    getSecondsCurrencyData() {
      return (
        this.getCurrencies.find((item) => item.ID === this.secondCurrencyID) ||
        {}
      );
    },
  },

  created() {
    this.$store.dispatch("currencies/GET_CURRENCIES");
  },
};
</script>
