<template>
  <label class="flex flex-col gap-3 xl:gap-4 font-semibold text-14">
    {{ text }}
    <slot />
  </label>
</template>

<script>
export default {
  name: "FormLabel",

  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>
