<template>
  <div class="car">
    <h3>Name: {{ carName }} \ {{ reverseName }}</h3>
    <p>Year: {{ carYear }}</p>
  </div>
</template>

<script>
export default {
  //нзв входящего параметра
  //props: ['carName', 'carYear'],
  //Validation
  // props: {
  //   carName: String,
  //   carYear: Number
  // },
  props: {
    carName: {
      type: String,
      //required: true,
      default: 'DefaultName'
    },
    carYear: Number
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
