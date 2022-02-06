import FormItem from './src/form-item.vue'

FormItem.install = function (Vue) {
    Vue.component(FormItem.name, FormItem)
} // 给 Vue.use() 使用

export default FormItem