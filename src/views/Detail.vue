<template>
  <div>
    <div class="outer-layer shadow-sm">
      <div class="background px-4 py-3">
        <div class="mb-3">
          <router-link class="text-white" to="/">
            <i class="fas fa-arrow-left"></i>
          </router-link>
        </div>
        <div class="row">
          <div class="col">
            <h4
              class="text-capitalize text-white font-weight-bold"
              v-if="detail"
            >
              {{ detail.name }}
            </h4>
          </div>
          <div class="col">
            <h5 class="text-white text-right">#{{ pokemonSlug }}</h5>
          </div>
        </div>
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
        <ul class="menus">
          <li
            v-for="item in menu"
            :key="item"
            :class="{ active: item === 'about' }"
          >
            {{ makeTitle(item) }}
          </li>
        </ul>
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

    const menu = ["about", "base_stats", "evolution", "moves"];

    const makeTitle = (slug) => {
      var words = slug.split("_");

      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
      }

      return words.join(" ");
    };

    onMounted(() => {
      store.dispatch("fetchPokemonDetail", route.params.pokemonId);
    });

    return {
      pokemonSlug: computed(() => pad(route.params.pokemonId, 3)),
      image,
      menu,
      makeTitle,
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

.menus {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  li {
    margin: 0 15px;
    padding-top: 30px;
    color: #d6d8d9;
    font-weight: bold;

    &.active {
      color: #93979c;
    }
  }
}

body {
  background-color: #f1f3f9;
  font-family: "Roboto", sans-serif;
}
</style>