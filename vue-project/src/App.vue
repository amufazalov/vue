<template>
  <!-- Корневой элемент! -->
  <div>
    <h2>{{ title }}</h2>
    <h2>{{ title | lowercase }}</h2>
    <h2>{{ title | uppercase }}</h2>
    <h2>{{ title | uppercase }}</h2>
  </div>
</template>

<script>
//регистрация локально
import Car from './Car.vue'
//import Counter from './Counter.vue'

export default {
  data(){
    return {
        title: 'Привет всем!',
    }
  },
  filters: {
      lowercase(value){
          return value.toLowerCase()
      }
  }
}
</script>

<style scoped>

</style>
