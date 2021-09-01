import { createStore } from 'vuex'
import { apiUrl } from '@/variables'
import axios from 'axios'
import PokemonModel from '../models/PokemonModel'

const PokemonModules = {
  state: () => ({
    list: Array<PokemonModel>()
  }),
  mutations: {
    addPokemonToList(state: { list: PokemonModel[] }, pokemonModel: PokemonModel) {
      state.list.push(pokemonModel)
    },
    clearAllPokemonList(state: { list: PokemonModel[] }) {
      state.list = []
    }
  },
  actions: {
    fetchPokemonList({ commit }): void {
      axios.request(
        {
          method: "get",
          url: apiUrl + 'pokemon'
        }
      ).then(response => {
        if (response.data.length !== 0) {
          for (let i = 0; i < response.data.length; i++) {
            const element = response.data[i];
            commit('addPokemonToList', element)
          }
        }
      })
    }
  },
  getters: { }
}

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    PokemonModules
  }
})
