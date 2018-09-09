<template>
  <!-- Корневой элемент! -->
  <div>
    <h1>Parent: {{ carName }}</h1>
    <!-- Передача параметров -->
    <!-- :carName="carName" -->
    <app-car  :carYear="carYear"></app-car>
  </div>
</template>

<script>
//регистрация локально
import Car from './Car.vue'

export default {
  data () {
    return {
      carName: 'Ford',
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
