<template>
  <main>
    <parallax-wrapper threshold="-30">
      <goat-scene class="goat" />
    </parallax-wrapper>
  </main>
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Button from "./components/Button.vue";
import { ButtonType } from "@/types";
import ParallaxWrapper from "@/wrappers/ParallaxWrapper.vue";
import Cards from "@/components/Cards.vue";
import CardsItem from "@/components/CardsItem.vue";
import "./assets/styles/main.scss";
import Footer from "@/components/Footer.vue";
import GoatScene from "@/components/GoatScene.vue";

@Options({
  components: {
    GoatScene,
    Footer,
    ParallaxWrapper,
    Button,
    Cards,
    CardsItem,
  },
  data() {
    return {
      ButtonType,
    };
  },
  methods: {
    log() {
      console.log("click from App");
    },
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  main {
    flex-grow: 1;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
