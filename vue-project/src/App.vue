<template>
  <!-- Корневой элемент! -->
  <div>
    <h2 v-colored:background.font="'red'">{{ title }}</h2>
    <h2 v-colored:color.delay="'blue'">{{ title }}</h2>
    <h2 v-font>Local Font Directive</h2>

  </div>
</template>

<script>
//регистрация локально
import Car from './Car.vue'
//import Counter from './Counter.vue'

export default {
  data(){
    return {
        title: 'Ford',
    }
  },
    //ЛОКАЛЬНАЯ РЕГИСТРАЦИЯ ДИРЕКТИВЫ
    directives: {
      font: {
          bind(el, bindings, vnode){
              el.style.fontSize = '40px';
          }
      }
    }
}
</script>

<style scoped>

</style>
