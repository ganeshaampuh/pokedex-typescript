<template>
  <div>
    <h4 class="h4 mb-4">Pokedex</h4>

    <div class="row">
      <div class="col-sm-12" v-for="(item, index) in list" :key="item.name">
        <PokemonItem
          :name="item.name"
          :number="pad(index + 1, 3)"
          @click="goToDetail(index + 1)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { pad } from "@/helpers";
import PokemonItem from "@/components/PokemonItem.vue";

export default defineComponent({
  name: "Listing",
  components: {
    PokemonItem,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const goToDetail = (id: number) => {
      router.push({
        name: "Detail",
        params: {
          pokemonId: id,
        },
      });
    };

    onMounted(() => {
      store.dispatch("fetchPokemonList");
    });

    return {
      pad,
      goToDetail,
      list: computed(() => store.state.PokemonModules.list),
    };
  },
});
</script>
