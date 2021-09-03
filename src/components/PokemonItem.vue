<template>
  <div class="p-3 mb-3 overflow-hidden shadow-sm poke-card">
    <div class="row">
      <div class="col-sm-6">
        <p
          class="text-capitalize font-weight-bold text-white text-size-md mb-0"
        >
          {{ name }}
        </p>
        <p class="text-capitalize text-white text-size-xs mb-0">
          #{{ number }}
        </p>
      </div>
      <div class="col-sm-6">
        <img class="img-fluid" :src="image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
// import * as Vibrant from "node-vibrant";

export default defineComponent({
  props: {
    name: String,
    number: String,
  },
  setup(props) {
    let image = computed(
      () =>
        `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${props.number}.png`
    );

    let imageHTML = ref();

    // const getImageColor = () => {
    //   Vibrant.from(imageHTML).getPalette((err, palette) =>
    //     console.log(palette)
    //   );
    // };

    onMounted(() => {
      // getImageColor();
    });

    return {
      image,
      imageHTML,
    };
  },
});
</script>

<style lang="scss">
.poke-card {
  background-color: #48d0b0;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  }
}
</style>