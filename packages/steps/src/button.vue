<template>
  <button @click="handleClick">
      <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  methods: {
      handleClick(e){
          this.$emit("click", e)
          e.preventDefault()
      }
  }
};
</script>

<style>
</style>