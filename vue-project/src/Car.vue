<template>
  <div class="car">
    <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
    <p>Year: {{ carYear }}</p>
    <button type="button" name="button" @click='changeName'>ChangeName</button>
  </div>
</template>

<script>
export default {
  props: {
    carName: {
      type: String,
      //required: true,
      default: 'DefaultName'
    },
    carYear: Number
  },
  methods: {
    changeName(){
      this.carName = 'Mazda',
      //Обращение к род. параметру
      // 1 - кастомное название события
      // 2 - к чем обращаемся
      this.$emit('nameChanged', this.carName)
    }
  },
  computed: {
    reverseName(){
      return this.carName.split('').reverse().join('')
    }
  }
}
</script>

<style>
  .car{
    border: 1px solid #666,
  }

  .car h3{
    margin-bottom: 5px
  }
</style>
