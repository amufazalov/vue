<template>
  <!-- Корневой элемент! -->
  <div>

    <app-counter></app-counter>
    <app-car></app-car>
  </div>
</template>

<script>
//регистрация локально
import Car from './Car.vue'
import Counter from './Counter.vue'

export default {
  //регистрация локально
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>

</style>
