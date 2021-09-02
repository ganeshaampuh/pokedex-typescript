<template>
  <div class="container">
    <h4 class="h4 mb-3">Pokedex</h4>
    <div class="row">
      <div class="col-sm-4" v-for="(item, index) in list" :key="item.name">
        <div
          class="p-3 mb-3 overflow-hidden"
          style="background-color: #48d0b0; border-radius: 20px"
        >
          <div class="row">
            <div class="col-sm-6">
              <p class="text-capitalize font-weight-bold text-white text-size-sm mb-0">
                {{ item.name }}
              </p>
            </div>
            <div class="col-sm-6">
              <img
                class="img-fluid"
                :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(
                  index + 1,
                  3
                )}.png`"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Listing",
  setup() {
    const store = useStore();

    function pad(n, length) {
      var len = length - ("" + n).length;
      return (len > 0 ? new Array(++len).join("0") : "") + n;
    }

    onMounted(() => {
      store.dispatch("fetchPokemonList");
    });

    return {
      pad,
      list: computed(() => store.state.PokemonModules.list),
    };
  },
});
</script>
