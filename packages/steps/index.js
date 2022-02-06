import Button from './src/button.vue'

Button.install = function (Vue) {
    Vue.component(Button.name, Button)
} // 给 Vue.use() 使用

export default Button