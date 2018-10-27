import Vue from 'vue'
import App from './App.vue'
import List from './List.vue'

Vue.filter('uppercase', value => value.toUpperCase())

Vue.component('app-list', List)

//Шина событий
//Получаем достуе к @emit и @on
export const eventEmitter = new Vue()

new Vue({
  el: '#app',
    render: h => h(App)
})
