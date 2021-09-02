<template>
  <div class="container">
    <div class="outer-layer shadow-sm">
      <div class="background px-4 py-3">
        <h4 class="text-capitalize text-white font-weight-bold" v-if="detail">
          {{ detail.name }}
        </h4>
        <h5 class="text-white">#{{ pokemonSlug }}</h5>
        <ul class="label">
          <li
            v-for="item in detail.types"
            :key="item.slot"
            class="text-capitalize"
          >
            {{ item.type.name }}
          </li>
        </ul>
        <img class="img-fluid mx-auto d-block" :src="image" width="300" />
      </div>
      <div class="description">
        <!-- <pre>{{ detail }}</pre> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { pad } from "@/helpers";

export default defineComponent({
  name: "Detail",
  setup() {
    const store = useStore();
    const route = useRoute();

    const image = computed(
      () =>
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pad(
          route.params.pokemonId,
          3
        )}.png`
    );

    onMounted(() => {
      store.dispatch("fetchPokemonDetail", route.params.pokemonId);
    });

    return {
      pokemonSlug: computed(() => pad(route.params.pokemonId, 3)),
      image,
      detail: computed(() => store.state.PokemonModules.detail),
    };
  },
});
</script>

<style lang="scss">
.background {
  background-color: #48d0b0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.description {
  background-color: #fff;
  min-height: 100px;
  border-radius: 20px;
  margin-top: -60px;
}

.outer-layer {
  border-radius: 20px;
}

.label {
  list-style-type: none;
  padding: 0;
  li {
    background: rgba(255, 255, 255, 0.25);
    display: inline-block;
    margin-right: 6px;
    padding: 2px 14px;
    border-radius: 15px;
    font-size: 14px;
    color: #fff;
  }
}

body {
  background-color: #f1f3f9;
}
</style>