import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      counter: 0,
      images: []
    }),
    mutations: {
      increment (state) {
        state.counter++
      },
      addImage (state, img) {
        state.images.push(img);
      }
    },
    getters: {
      counter: state => state.counter,
      images: state => state.images
    }
  })
}

export default createStore
