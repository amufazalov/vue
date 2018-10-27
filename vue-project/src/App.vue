<template>
  <!-- Корневой элемент! -->
  <div>
    <h2 v-colored v-if="visible">{{ title }}</h2>
    <button @click="visible = !visible">toggle</button>
    <button @click="title = 'New Title'">changed</button>
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
        visible: true
    }
  }
}
</script>

<style scoped>

</style>
