<template>
  <div>
    <main class="px-4 py-5">
      <h1 class="mb-5 font-bold text-20 text-primary">Курс рубля</h1>
      <section class="flex flex-col gap-5 mb-4">
        <article class="p-6 pb-10 bg-gray rounded-2xl">
          <img
            class="mb-5"
            src="@/assets/svg/currency-blue.svg"
            alt="currency-blue"
          />
          <h6 class="mb-5 font-bold text-17 text-primary">AUD</h6>
          <p class="mb-7 text-14 text-text-gray-950">Австралийский доллар</p>
          <ul class="space-y-4">
            <li class="flex gap-2 font-semibold text-14 text-text-gray-900">
              <img src="@/assets/svg/mark.svg" alt="mark" />
              Номинал: 1
            </li>
            <li class="flex gap-2 font-semibold text-14 text-text-gray-900">
              <img src="@/assets/svg/mark.svg" alt="mark" />
              Курс: 39.841
            </li>
          </ul>
        </article>
        <article class="p-6 pb-10 bg-gray rounded-2xl">
          <img
            class="mb-5"
            src="@/assets/svg/currency-red.svg"
            alt="currency-red"
          />
          <h6 class="mb-5 font-bold text-17 text-primary">AUD</h6>
          <p class="mb-7 text-14 text-text-gray-950">Австралийский доллар</p>
          <ul class="space-y-4">
            <li class="flex gap-2 font-semibold text-14 text-text-gray-900">
              <img src="@/assets/svg/mark.svg" alt="mark" />
              Номинал: 1
            </li>
            <li class="flex gap-2 font-semibold text-14 text-text-gray-900">
              <img src="@/assets/svg/mark.svg" alt="mark" />
              Курс: 39.841
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
};
</script>
