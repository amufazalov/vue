<template>
  <!-- Корневой элемент! -->
  <div>
    <h2>{{ title }}</h2>

    <input type="text" v-model="searchName">

    <ul>
      <li v-for="name of filterdNmaes">{{ name }}</li>
    </ul>
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
        searchName: '',
        names: ['vlad', 'max', 'elena', 'igor']
    }
  },
    computed: {
      filterdNmaes(){
          return this.names.filter(name => {
              return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
          })
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
