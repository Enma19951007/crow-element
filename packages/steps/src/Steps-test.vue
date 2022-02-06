<template>
    <div>
        <Steps :count="6" :active="active"></Steps>
        <el-button @click="fn">次数加加</el-button>
    </div>
    
</template>

<script>
import Steps from './Steps.vue'
export default {
    components: {
        Steps
    },
    data(){
        return {
            active: 0
        }
    },
    methods: {
        fn(){
            this.active++
        }
    }
}
</script>

<style>

</style>