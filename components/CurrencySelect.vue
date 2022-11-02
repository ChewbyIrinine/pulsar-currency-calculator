<template>
  <select
    :value="value"
    class="h-12 px-5 border border-solid border-text-gray-100 rounded-md"
    type="text"
    @input="handleInput"
  >
    <option v-if="placeholder" class="hidden" :value="null" disabled selected>
      {{ placeholder }}
    </option>
    <option
      v-for="currency in currencyData"
      :key="currency.ID"
      :value="currency.ID"
    >
      {{ currency.CharCode }} {{ currency.Name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CurrencySelect",

  props: {
    value: {
      type: String,
      default: "",
    },
    currencyData: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "",
    },
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
