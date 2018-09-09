<template>
  <div class="car">
    <h3>Name: {{ carName }}</h3>
    <p>Year: {{ carYear }}</p>
  </div>
</template>

<script>
export default {
  //нзв входящего параметра
  props: ['carName', 'carYear'],
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
