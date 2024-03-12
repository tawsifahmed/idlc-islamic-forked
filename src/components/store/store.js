import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        search: ""
    },
    getters: {
        serach: state => {
            return state.search; 
        }
    },
    mutations: {
        updateSearch: (state, payload) => {
            state.search = payload;
        }
    },
    actions: {
        updateSearch({commit}, payload) {
            commit('updateSearch', payload);
        }
    }
});
