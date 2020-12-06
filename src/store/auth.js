import firebase from "firebase";

export default {
  state: {
  },
  mutations: {
  },
  actions: {
    async login ({dispatch, commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (e) {
        throw e;
      }
    }
  },
  modules: {
  }
}
