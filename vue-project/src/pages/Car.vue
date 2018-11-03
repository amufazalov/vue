<template>
    <div>
        <h1>Car id {{ id }}</h1>

        <button class="btn btn-sm btn-info" @click="goBackToCars">Back</button>
        <hr>

        <router-link
                class="btn btn-primary"
                tag="button"
                :to="{ name: 'carFull', params: { id: id }, query: {name:'Mazda', year:2000}, hash: '#scroll'}"
        >Full info</router-link>

        <hr>

        <router-view></router-view>
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
        },
        beforeRouteLeave(to, fromR, next){
            console.log('beforeRouteLeave');
            if(window.confirm('Are you sure want to leave?')){
                next()
            }else{
                next(false)
            }
        }
    }
</script>