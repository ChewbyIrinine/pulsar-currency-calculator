<template>
  <div class="container">
    <main class="py-5">
      <h1 class="mb-6 md:mb-5 font-bold text-20 md:text-26 text-primary">
        Валютный калькулятор
      </h1>
      <div class="flex flex-col md:flex-row gap-x-7 gap-y-4">
        <section class="md:w-80">
          <div class="mb-5 md:mb-8">
            <label class="flex flex-col gap-3 font-semibold text-14">
              Валюта 1
              <select
                class="h-12 px-5 border border-solid border-text-gray-100 rounded-md"
                type="text"
                v-model="firstCurrency"
              >
                <option class="hidden" :value="null" disabled selected>
                  Введите название или код
                </option>
                <option
                  v-for="currency in getCurrencies"
                  :key="currency.ID"
                  :value="currency"
                >
                  {{ currency.CharCode }} {{ currency.Name }}
                </option>
              </select>
            </label>
          </div>

          <div class="mb-5 md:mb-8">
            <label class="flex flex-col gap-3 font-semibold text-14">
              Валюта 2
              <select
                class="h-12 px-5 border border-solid border-text-gray-100 rounded-md"
                type="text"
                v-model="secondCurrency"
              >
                <option class="hidden" :value="null" disabled selected>
                  Введите название или код
                </option>
                <option
                  v-for="currency in getCurrencies"
                  :key="currency.ID"
                  :value="currency"
                >
                  {{ currency.CharCode }} {{ currency.Name }}
                </option>
              </select>
            </label>
          </div>

          <div class="mb-5 md:mb-6">
            <label class="flex flex-col gap-3 font-semibold text-14">
              Количество
              <input
                class="h-12 p-5 border border-solid border-text-gray-100 rounded-md"
                type="text"
                placeholder="Введите число"
                v-model="amount"
              />
            </label>
          </div>
          <div
            class="flex items-center gap-5 px-7 py-5 md:py-8 bg-secondary rounded-2xl"
          >
            <img src="@/assets/svg/info-red.svg" alt="info-red" />
            <p class="font-semibold text-14 md:text-16 text-primary">
              Итого: {{ getTotal }}
            </p>
          </div>
        </section>
        <section
          class="h-full px-4 py-7 md:pt-6 md:pb-4 bg-secondary border border-solid border-text-gray-100 rounded-2xl"
        >
          <h2 class="mb-8 font-semibold text-12 text-primary uppercase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor:
          </h2>
          <div class="flex flex-col md:flex-row gap-x-5 gap-y-8">
            <ul class="md:w-2/3 space-y-5 text-14 md:text-13">
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
            <div class="md:w-1/3 flex md:flex-col gap-2">
              <div class="w-1/4 md:w-full">
                <img
                  class="rounded-tr-2xl rounded-bl-2xl"
                  src="@/assets/images/img-1.jpg"
                  alt="img-1"
                />
              </div>

              <div class="w-1/4 md:w-full">
                <img
                  class="rounded-tl-2xl rounded-br-2xl"
                  src="@/assets/images/img-2.jpg"
                  alt="img-2"
                />
              </div>

              <div class="w-1/4 md:w-full">
                <img
                  class="rounded-tr-2xl rounded-bl-2xl"
                  src="@/assets/images/img-3.jpg"
                  alt="img-3"
                />
              </div>

              <div class="w-1/4 md:w-full">
                <img
                  class="rounded-tl-2xl rounded-br-2xl"
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
      class="-mx-4 md:mx-0 px-4 pt-7 pb-5 mb-16 flex flex-col md:flex-row bg-secondary text-center md:rounded-xl"
    >
      <div class="md:text-left">
        <h2 class="font-bold md:text-18 text-primary mb-5 md:mb-4">
          Нужна помощь?<br />Мы поможем! Просто свяжитесь с нами.
        </h2>
        <p class="text-12 md:text-10 mb-7">
          Наши специалисты с радостью ответят на все ваши вопросы и дадут
          профессиональную консультацию по товарам.
        </p>
      </div>
      <div class="md:w-1/2">
        <a
          class="font-semibold text-26 md:text-24 text-primary mb-4"
          href="tel:+78008889028"
        >
          8 (800) 888-90-28
        </a>
        <p class="text-12 mb-2">ИЛИ</p>
        <a
          class="text-18 md:text-20 text-primary"
          href="mailto:info@example.ru"
        >
          info@example.ru
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      firstCurrency: null,
      secondCurrency: null,
      amount: null,
    };
  },

  computed: {
    getCurrencies() {
      return this.$store.state.currencies.currencies;
    },

    getTotal() {
      return (
        (this.firstCurrency?.Value /
          this.secondCurrency?.Value /
          this.firstCurrency?.Nominal) *
          this.secondCurrency?.Nominal *
          this.amount || "..."
      );
    },
  },

  created() {
    this.$store.dispatch("currencies/GET_CURRENCIES");
  },
};
</script>
