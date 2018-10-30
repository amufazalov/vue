<template>
  <div>
    <h2>Form inputs</h2>
    <input type="text" v-model.lazy="name">
    <p>text: {{ name }}</p>
    <hr>

    <textarea name="" id="" cols="30" rows="10" v-model.lazy="textarea"></textarea>
    <p>textarea: {{ textarea }}</p>
    <hr>

    <label>
      <input type="checkbox" value="instagram" v-model="social"> Instagram
    </label>
    <label>
      <input type="checkbox" value="vk" v-model="social"> Vkontakte
    </label>
    <label>
      <input type="checkbox" value="facebook" v-model="social"> Facebook
    </label>

    <ul>
      <li v-for="s in social">{{ s }}</li>
    </ul>
    <hr>

    <label>
      <input type="radio" value="instagram" v-model="radio"> Instagram
    </label>
    <label>
      <input type="radio" value="vk" v-model="radio"> Vkontakte
    </label>
    <label>
      <input type="radio" value="facebook" v-model="radio"> Facebook
    </label>

    <ul>
      <li>{{ radio }}</li>
    </ul>
    <hr>

    <select v-model="defaulSocial">
      <option v-for="s in socialsList">{{ s }}</option>
    </select>
  </div>
</template>

<script>
export default {
  data(){
    return {
        name: '',
        textarea: 'Initial State',
        socialsList: ['vk', 'instagram', 'facebook'],
        defaulSocial: 'facebook',
        social: ['vk'],
        radio: 'vk'
    }
  },
}
</script>

<style scoped>
  textarea{
    width: 400px;
    height: 100px;
  }

  p{
    white-space: pre;
  }
</style>