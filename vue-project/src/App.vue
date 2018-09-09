<template>
  <!-- Корневой элемент! -->
  <div>
    <h1>{{ msg }}</h1>
    <app-car></app-car>
  </div>
</template>

<script>
//регистрация локально
import Car from './Car.vue'

export default {
  data () {
    return {
      msg: 'Welcome'
    }
  },
  //регистрация локально
  components: {
    appCar: Car
  }
}
</script>

<style>

</style>
