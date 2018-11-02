<template>
    <div>
        <h1>Car id {{ id }}</h1>

        <button class="btn btn-sm btn-info" @click="goBackToCars">Back</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                //id: this.$router.currentRoute.params['id'] //Теущий id передаваемый по ссылке
                id: this.$route.params['id'] //аналагично к текущему роуту
            }
        },
        methods: {
            goBackToCars(){
                this.$router.push('/cars');
            }
        },
        //Чтобы снова отрендерился компонент Car при переходе с Car 3 на Car 4 в меню
        watch: {
            $route(toR, fromR){
                this.id = toR.params['id']
            }
        }
    }
</script>