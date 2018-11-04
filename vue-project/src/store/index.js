import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        computedCounter(state){
            return state.counter * (7 - 2 * (5 + 4))
        }
    },
    mutations: {
        //Максимум передается 2 параметра. Если нужно больше, то второй должен быть объектом
        changeCounter(state, payload){
            state.counter += payload;
        }
    }
})