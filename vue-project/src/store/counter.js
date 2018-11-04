export default {
    state: {
        counter: 0
    },
    mutations: {
        //Максимум передается 2 параметра. Если нужно больше, то второй должен быть объектом
        changeCounter(state, payload){
            state.counter += payload;
        }
    },
    actions: {
        //payload - данные с которыми нужно работать
        //{commit} деконструкция context.commit
        asyncChangeCounter({commit}, payload){
            setTimeout(() => {
                commit('changeCounter', payload.counterValue)
            }, payload.timeoutDelay)
        }
    },
    getters: {
        computedCounter(state){
            return state.counter * 10
        }
    }
}