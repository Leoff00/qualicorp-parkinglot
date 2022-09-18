<template>
  <v-container fluid class="parentContainer">
    <RegisterCar title="🚧&nbsp;&nbsp;Formulario de cadastro de carros&nbsp;&nbsp;🚧" />
    <v-container fluid>
      <v-row align="center" justify="center">
      </v-row>
      <v-row align="center" justify="center">
        <h1 class=" contentTitle">Estacione AQUI!</h1>
      </v-row>
    </v-container>

    <v-container fluid align="center" justify="center">
      <v-simple-table dark dense fixed-header>
        <template v-slot:default>
          <div>
            <h1 class="tableTitle">Tabela de Estacionados</h1>
          </div>
          <thead>
            <tr>
              <th class="text-left">
                ID do Usuario
              </th>
              <th class="text-left">
                Nome e sobrenome
              </th>
              <th class="text-left">
                Placa do Carro
              </th>
              <th class="text-left">
                Horario de entrada
              </th>
              <th class="text-left">
                Horario de saída
              </th>
            </tr>
          </thead>
          <tbody align="center" justify="space-around">
            <tr v-for="car in cars" :key="car.user_id">
              <td>{{car.user_id }}</td>
              <td>{{ car?.name}} {{car.lastName}}</td>
              <td>{{car.carPlate}}</td>
              <td>{{car.arrivalDate}}</td>
              <td>{{car.departureDate}}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { API } from '../api/baseUrl';
import { responseProps } from "../types/ResponseProps"
import RegisterCar from './RegisterCar.vue';
export default defineComponent({
  name: "CarsList",
  async mounted() {
    const response = (await API.get("/find"));
    const data = response.data;
    this.cars = data;
  },
  data() {
    return {
      cars: [] as Array<responseProps>
    };
  },
  components: { RegisterCar }
})
</script>

<style scoped>
.tableTitle {
  font-size: 2rem;
}

.parentContainer {
  background-color: #2f2f2f;
  width: 100%;
  margin-top: 1.5rem;
}

.contentTitle {
  clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
  font-size: 4rem;
  color: rgb(231, 242, 21);
}

v-simple-table>template>div>h1 {
  font-size: 100px;
}

.text-left {
  font-size: 1.1rem;
  margin: 0 5rem;
  padding: 16px;
}
</style>
