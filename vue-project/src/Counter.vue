<template lang="html">
  <h1>Counter: {{ counter }}</h1>
</template>

<script>
import {eventEmitter} from './main'

export default {
  data(){
    return {
      counter: 0
    }
  },
  created(){
    //получаем параметр из Car eventEmitter.$emit('counterUpdated', 3)
    eventEmitter.$on('counterUpdated', (num) => {
      this.counter += num
    })
  }
}
</script>

<style lang="css">
</style>
