<template>
  <!-- Корневой элемент! -->
  <div>

    <app-car>
      <h2 slot="text">{{ carName }}</h2>
    </app-car>
  </div>
</template>

<script>
//регистрация локально
import Car from './Car.vue'
//import Counter from './Counter.vue'

export default {
  data(){
    return {
      carName: 'Ford'
    }
  },
  //регистрация локально
  components: {
    appCar: Car,
    //appCounter: Counter
  }
}
</script>

<style scoped>
  h2 {
    color: red
  }
</style>
