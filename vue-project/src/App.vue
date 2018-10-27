<template>
  <!-- Корневой элемент! -->
  <div>
    <h2>{{ title }}</h2>

    <input type="text" v-model="searchName">

    <ul>
      <li v-for="name of filterdNmaes">{{ name }}</li>
    </ul>

    <hr>

    <app-list></app-list>
  </div>
</template>

<script>
    import ListMixin from './listMixin'
export default {
  data(){
    return {
        title: 'Привет всем!',
    }
  },
    mixins: [ListMixin]

}
</script>

<style scoped>

</style>
