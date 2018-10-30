<template>
    <div>
        <button class="on" :class="{'active':value}" @click="onChange(true)">On</button>
        <button class="off" :class="{'active':!value}" @click="onChange(false)">Off</button>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            onChange(newValue){
                this.$emit('input', newValue)
            }
        }
    }
</script>

<style scoped>
    .active{
        background: #f00;
        color: #fff;
    }

    button{
        margin: 5px;
        padding: 10px;
    }
</style>