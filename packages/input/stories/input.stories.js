import Input from '../index.js'

export default {
    title: 'Input', // 一级菜单的名字
    component: Input // 要使用的组件
}

// 创建故事
export const Text = () => ({
    components: {
        Input
    }, // 要使用的组件
    template: `<Input v-model="user" />`, // 要展示的模版
    data() {
        return {
            user: 'admin'
        }
    } // 可以正常的绑定数据。这里写的就是vue一样
}) // 二级菜单的名字;多加一层小括号表示返回的对象，而不是代码块

export const Password = () => {
    return {
        components: {
            Input
        }, // 要使用的组件
        template: `<Input type='password' v-model="value" />`, // 要展示的模版
        data() {
            return {
                value: 'admin'
            }
        } // 可以正常的绑定数据。这里写的就是vue一样
    }

}