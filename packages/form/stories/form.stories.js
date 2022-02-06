import LgForm from '../index.js'
import LgFormItem from '../../form-item'
import LgInput from '../../input'
import LgButton from '../../button'

export default {
    title: 'LgForm', // 一级菜单的名字
    component: LgForm // 要使用的组件
}

// 创建故事
export const Text = () => ({
    components: {
        LgForm,
        LgFormItem,
        LgInput,
        LgButton,
    }, // 要使用的组件
    template: `  <lg-form class="form" ref="form" :model="user" :rules="rules">
    <lg-form-item label="用户名" prop="username">
      <lg-input v-model="user.username" placeholder="请输入用户名"></lg-input>
      <!-- <lg-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></lg-input> -->
    </lg-form-item>
    <lg-form-item label="密码" prop="password">
      <lg-input type="password" v-model="user.password"></lg-input>
    </lg-form-item>
    <lg-form-item>
      <lg-button type="primary" @click="login">登 录</lg-button>
    </lg-form-item>
  </lg-form>`, // 要展示的模版
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            rules: {
                username: [{
                    required: true,
                    message: '请输入用户名'
                }],
                password: [{
                        required: true,
                        message: '请输入密码'
                    },
                    {
                        min: 6,
                        max: 12,
                        message: '请输入6-12位密码'
                    }
                ]
            }
        }
    }, // 可以正常的绑定数据。这里写的就是vue一样
    methods: {
        login() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    alert('验证成功')
                } else {
                    alert('验证失败')
                    return false
                }
            })
        }
    }
}) // 二级菜单的名字;多加一层小括号表示返回的对象，而不是代码块