import Form from './src/form.vue'

Form.install = function (Vue) {
    Vue.component(Form.name, Form)
} // 给 Vue.use() 使用

export default Form