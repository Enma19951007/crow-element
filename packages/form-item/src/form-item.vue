<template>
  <div>
    <label for="">{{ label }}</label>
    <div>
      <slot></slot>
      <p v-if="errMessage">{{ errMessage }}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
export default {
  name: "FormItem",
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  data() {
    return {
      errMessage: "",
    };
  },
  mounted() {
      this.$on('validate', () => {
          this.validate()
      })
  },
  inject: ["form"],
  methods: {
    validate() {
      if (!this.prop) return; // 如果没有传递prop表示不需要进行认证
      const value = this.form.model[this.prop];
      const rules = this.form.rules[this.prop];

      // 下面内容都是validator的语法，不用在意
      const descriptor = { [this.prop]: rules };
      const validator = new AsyncValidator(descriptor);
      return validator.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.errMessage = errors[0].message;
        } else {
          this.errMessage = "";
        }
      }); // 注意这个方法返回的是一个promise
    },
  },
};
</script>

<style>
</style>