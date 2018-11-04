<template>
    <div class="container pt-4">
        <div class="form-group">
            <label for="name">Car name</label>
            <input type="text" id="name" class="form-control" v-model.trim="carName">
        </div>

        <div class="form-group">
            <label for="year">Car year</label>
            <input type="text" id="year" class="form-control" v-model.number="carYear">
        </div>

        <button class="btn btn-success" @click="createCar">Create Car</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                carName: '',
                carYear: 2018
            }
        },
        methods: {
            createCar(){
                const car = {
                    name: this.carName,
                    year: this.carYear
                }
                //совпадает с db.json
                this.$http.post('http://localhost:3000/cars', car)
                    .then(response => {
                       return response.json()
                    })
                    .then(newCar => {
                        console.log(newCar)
                    })
            }
        }

    }
</script>