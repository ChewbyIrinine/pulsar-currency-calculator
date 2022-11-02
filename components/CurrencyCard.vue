<template>
  <article class="p-6 md:px-6 md:pt-9 pb-10 md:pb-12 bg-gray rounded-2xl">
    <img
      class="mb-5 md:mb-7"
      :src="`/_nuxt/assets/svg/currency-${getIconColor(index)}.svg`"
      :alt="`currency-${getIconColor(index)}`"
    />
    <h6 class="mb-5 md:mb-7 font-bold text-17 md:text-18 text-primary">
      {{ currencyData.CharCode }}
    </h6>
    <p class="mb-7 md:mb-10 text-14 text-text-gray-950">
      {{ currencyData.Name }}
    </p>
    <ul class="space-y-4 md:space-y-6">
      <li class="flex gap-2 font-semibold text-14 text-text-gray-900">
        <img src="@/assets/svg/mark.svg" alt="mark" />
        Номинал: {{ currencyData.Nominal }}
      </li>
      <li class="flex gap-2 font-semibold text-14 text-text-gray-900">
        <img src="@/assets/svg/mark.svg" alt="mark" />
        Курс: {{ currencyData.Value }}
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: "CurrencyCard",

  props: {
    currencyData: {
      type: Object,
      default: () => ({}),
    },
    index: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    getIconColor(index) {
      return index % 2 ? "red" : "blue";
    },
  },
};
</script>
