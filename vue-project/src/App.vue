<template>
  <div class="container">
    <form class="pt-5">
        <div class="form-group">
            <label for="email">Email</label>
            <input v-model="email" type="email" class="form-control" id="email">
        </div>
    </form>
  </div>
</template>

<script>

export default {
    data(){
        return {
            email: ''
        }
    }
}
</script>