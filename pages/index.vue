<template>
  <div>
    <main class="px-4 py-5">
      <h1 class="mb-6 font-bold text-20 text-primary">Валютный калькулятор</h1>
      <section>
        <div class="mb-5">
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

        <div class="mb-5">
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

        <div class="mb-5">
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
      </section>
      <section
        class="flex items-center gap-5 px-7 py-5 mb-4 bg-secondary rounded-2xl"
      >
        <img src="@/assets/svg/info.svg" alt="info" />
        <p class="font-semibold text-14 text-primary">Итого: {{ getTotal }}</p>
      </section>
      <section
        class="px-4 py-7 bg-secondary border border-solid border-text-gray-100 rounded-2xl"
      >
        <h2 class="font-semibold text-12 text-primary uppercase">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor:
        </h2>
        <ul class="my-8 space-y-5">
          <li class="flex gap-2 font-medium text-14">
            <img src="@/assets/svg/mark.svg" alt="mark" />
            Incididunt ut labore et dolore magna aliqua
          </li>

          <li class="flex gap-2 font-medium text-14">
            <img src="@/assets/svg/mark.svg" alt="mark" />
            Incididunt ut labore et
          </li>

          <li class="flex gap-2 font-medium text-14">
            <img src="@/assets/svg/mark.svg" alt="mark" />
            Incididunt ut labore et dolore
          </li>

          <li class="flex gap-2 font-medium text-14">
            <img src="@/assets/svg/mark.svg" alt="mark" />
            Labore et dolore
          </li>

          <li class="flex gap-2 font-medium text-14">
            <img src="@/assets/svg/mark.svg" alt="mark" />
            Incididunt ut
          </li>

          <li class="flex gap-2 font-medium text-14">
            <img src="@/assets/svg/mark.svg" alt="mark" />
            Incididunt ut labore et dolore
          </li>

          <li class="flex gap-2 font-medium text-14">
            <img src="@/assets/svg/mark.svg" alt="mark" />
            Incididunt ut labore
          </li>
        </ul>
        <div class="flex gap-2">
          <div class="w-1/4">
            <img
              class="rounded-tr-2xl rounded-bl-2xl"
              src="@/assets/images/img-1.jpg"
              alt="img-1"
            />
          </div>

          <div class="w-1/4">
            <img
              class="rounded-tl-2xl rounded-br-2xl"
              src="@/assets/images/img-2.jpg"
              alt="img-2"
            />
          </div>

          <div class="w-1/4">
            <img
              class="rounded-tr-2xl rounded-bl-2xl"
              src="@/assets/images/img-3.jpg"
              alt="img-3"
            />
          </div>

          <div class="w-1/4">
            <img
              class="rounded-tl-2xl rounded-br-2xl"
              src="@/assets/images/img-4.png"
              alt="img-4"
            />
          </div>
        </div>
      </section>
    </main>
    <footer class="px-4 pt-7 pb-5 mb-16 bg-secondary text-center">
      <h2 class="font-bold text-primary mb-5">
        Нужна помощь?<br />Мы поможем! Просто свяжитесь с нами.
      </h2>
      <p class="font-medium text-12 mb-7">
        Наши специалисты с радостью ответят на все ваши вопросы и дадут
        профессиональную консультацию по товарам.
      </p>
      <a class="font-semibold text-26 text-primary mb-4" href="tel:+78008889028"
        >8 (800) 888-90-28
      </a>
      <p class="font-medium text-12 mb-2">ИЛИ</p>
      <a class="font-medium text-18 text-primary" href="mailto:info@example.ru"
        >info@example.ru
      </a>
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
