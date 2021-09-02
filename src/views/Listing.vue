<template>
  <div class="container">
    <h4 class="h4 mb-3">Pokedex</h4>
    <div class="row">
      <div class="col-sm-4" v-for="(item, index) in list" :key="item.name">
        <PokemonItem
          :name="item.name"
          :number="pad(index + 1, 3)"
        ></PokemonItem>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "vuex";
import PokemonItem from "@/components/PokemonItem.vue";

export default defineComponent({
  name: "Listing",
  components: {
    PokemonItem,
  },
  setup() {
    const store = useStore();

    const pad = (n: number, length: number) => {
      var len = length - ("" + n).length;
      return (len > 0 ? new Array(++len).join("0") : "") + n;
    };

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
