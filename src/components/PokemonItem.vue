<template>
  <div
    class="p-3 mb-3 overflow-hidden shadow-sm clic"
    style="background-color: #48d0b0; border-radius: 20px; cursor: pointer;"
  >
    <div class="row">
      <div class="col-sm-6">
        <p
          class="text-capitalize font-weight-bold text-white text-size-sm mb-0"
        >
          {{ name }}
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