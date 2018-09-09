<template>
  <!-- Корневой элемент! -->
  <div>
    <h1>Parent: {{ carName }}</h1>
    <!-- Передача параметров -->
    <app-counter :counter="counter"></app-counter>

    <app-car
      :counter="counter"
      :carYear="carYear"
      :carName="carName"
      :changeFunc="changeNameToAudi"
       @nameChanged="carName = $event"
       @counterUpdated="counter = $event"
    >
     </app-car>
  </div>
</template>

<script>
//регистрация локально
import Car from './Car.vue'
import Counter from './Counter.vue'

export default {
  data () {
    return {
      carName: 'Ford',
      carYear: 2018,
      counter: 0
    }
  },
  methods: {
    changeNameToAudi(){
      this.carName = 'Audi'
    }
  },
  //регистрация локально
  components: {
    appCar: Car,
    appCounter: Counter
  }
}
</script>

<style>

</style>
