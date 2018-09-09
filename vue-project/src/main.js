import Vue from 'vue'
import App from './App.vue'

//Глобальная регистрация
// import Car from './Car.vue'
//
// Vue.component('app-car', Car)

new Vue({
  el: '#app',
    render: h => h(App)
})


//Шина событий
//Получаем достуе к @emit и @on
//export const eventEmmiter = new Vue()
