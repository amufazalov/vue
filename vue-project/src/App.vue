<template>
  <!-- Корневой элемент! -->
  <div>
    <h1>Parent: {{ carName }}</h1>
    <!-- Передача параметров -->
    <app-car :carName="carName" :carYear="carYear"></app-car>
  </div>
</template>

<script>
//регистрация локально
import Car from './Car.vue'

export default {
  data () {
    return {
      carName: 'Ford from parent',
      carYear: 2018
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
