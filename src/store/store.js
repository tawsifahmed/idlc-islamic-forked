import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);




export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("accessToken") || "",
    successMessage: "",
    status: "",
    search: "",
    isLoading: true,
    shareBaseUrl :'web.idlc.com/share/',
    storyShareBaseUrl :'web.idlc.com/story/share/',
    csrShareBaseUrl :'web.idlc.com/csr/share/',
    favourite :[],
    favouriteRouteTitle :[],
  },
  getters: {
    serach: state => {
      return state.search;
    }
  },

  mutations: {
    auth_success(state, token){
      state.status = 'success',
      state.token = token
    },
    updateSearch: (state, payload) => {
        state.search = payload;
    }
  },

  actions: {
    submitContactForm({commit}, payload){
      return new Promise( (resolve, reject ) => {
        axios.post('contact-us', payload)
          .then(res => {
            commit("dataAdded");
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(error);
          })
      })
    },

    submitComplaint({commit}, payload){
      return new Promise( (resolve, reject ) => {
        axios.post('post-feedback-complaint', payload)
          .then(res => {
            commit("dataAdded");
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(error);
          })
      })
    },

    submitForHomeLoan({commit}, payload){
      return new Promise( (resolve, reject ) => {
        axios.post('apply-loan', payload)
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(error);
          })
      })

    },
    updateSearch({commit}, payload) {
        commit('updateSearch', payload);
    },
    submitAppliedResumeForm({commit}, payload){
      console.log('fromStore');
      return new Promise( (resolve, reject ) => {
        axios.post('applied-resume', payload)
          .then(res => {
            commit("dataAdded");
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(error);
          })
      })
    },

    submitDepositForm({commit}, payload){
      return new Promise( (resolve, reject ) => {
        axios.post('post-dps', payload)
          .then(res => {
            commit("dataAdded");
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(error);
          })
      })
    },
    submitForSME({commit}, payload){

      return new Promise( (resolve, reject ) => {
        axios.post('sme-loan-applied', payload)
          .then(res => {
            commit("dataAdded");
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(error);
          })
      })
    },

    submitAfterEligibilityChecked({commit}, payload){
      return new Promise( (resolve, reject ) => {
        axios.post('post-home-loan-eligible', payload)
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(error);
          })
      })

    },

    investorInformationSubmit({commit}, payload){
      return new Promise( (resolve, reject ) => {
        axios.post('investor-relation-form', payload)
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            console.log(err);
            reject(error);
          })
      })

    },



  },


  modules:{

  }





});
