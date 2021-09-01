<template>
  <div class="container">
    <div>Listing</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Listing",
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("fetchPokemonList");
    });
  },
});
</script>
