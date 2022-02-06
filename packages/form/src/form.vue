<template>
  <form>
      <slot></slot>
  </form>
</template>

<script>
export default {
    name: "Form",
    props: {
        model: {
            type: Object
        },
        rules: {
            type: Object
        }
    },
    provide() {
        return {
            form: this
        }
    },
    methods: {
        validate(cb){
            // 我写的方法
            // let allValidate = []
            // this.$children.forEach(child => {
            //     if (child.$options.name === 'FormItem') {
            //         allValidate.push(child.validate())
            //     }
            // }) // 如果form-item被存储在多层，直接通过children是拿不到的，可以尝试写一个这个东西 todo
            // 老师写的方法
            const tasks = this.$children
                .filter(item => item.$options.name === 'FormItem')
                .map(item => item.validate())
            // 最后的认证
            Promise.all(tasks).then(() => {
                cb(true)
            }).catch(() => {
                cb(false)
            })
        }
    }
}
</script>

<style>

</style>