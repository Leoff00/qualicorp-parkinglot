<template>
  <v-container fluid>
    <v-container fluid class="carAndText">
      <div>
        <v-img :src="car" alt="Car Image" aria-label="hidden" />
      </div>
      <div>
        <h1 align="center" class="headerTitle">CAR FLOW - Estacionamentos</h1>
      </div>
      <div>
        <h2 align="center" class="headerSubTitle">Sistema de estacionamento do dia-a-dia de carros.</h2>
      </div>
    </v-container>
  </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import car from "../assets/car.svg"
export default defineComponent({
  name: 'Nav',
  data() {
    return {
      car
    }
  }
})
</script>

<style scoped>
.v-img {
  width: 64px;
  height: 64px;
  fill: green;
}

.headerTitle {
  color: rgb(208, 208, 208);
  font-size: 2rem;
  margin: 0 2rem;
  transition: 0.5s;
}

.headerTitle:hover {
  color: rgb(129, 129, 129);
}

.headerSubTitle {
  color: aliceblue;
  font-size: 1.2rem;
  margin: 0 2rem;
  transition: 0.5s;
}

.headerSubTitle:hover {
  color: rgb(215, 215, 215);
}

.carAndText {
  display: flex;
  align-items: center;
  justify-content: center;
}

.v-container {
  width: 100%;
  background-color: #2f2f2f;
}
</style>