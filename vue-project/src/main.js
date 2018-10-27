import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './color'

Vue.filter('uppercase', value => value.toUpperCase())

//Шина событий
//Получаем достуе к @emit и @on
export const eventEmitter = new Vue()

new Vue({
  el: '#app',
    render: h => h(App)
})
