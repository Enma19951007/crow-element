import Input from './src/input.vue'

Input.install = function (Vue) {
    Vue.component(Input.name, Input)
} // 给 Vue.use() 使用

export default Input