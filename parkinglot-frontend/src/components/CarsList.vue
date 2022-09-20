<template>
  <v-container fluid class="parentContainer">
    <RegisterCar @create-car="fetchCars" title="🚧&nbsp;&nbsp;Formulario de cadastro de carros&nbsp;&nbsp;🚧" />
    <v-container fluid>
      <v-row align="center" justify="center">
      </v-row>
      <v-row align="center" justify="center">
        <h1 class=" contentTitle">Estacione AQUI!</h1>
      </v-row>
    </v-container>

    <v-container fluid align="center" justify="center">
      <v-simple-table height="40" dark fixed-header>
        <template v-slot:default>
          <div>
            <h1 class="tableTitle">Tabela de Estacionados</h1>
          </div>
          <thead>
            <tr>
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
              <td>{{car?.name}} {{car?.lastName}}</td>
              <td>{{car?.carPlate}}</td>
              <td>{{car?.arrivalDate}}</td>
              <td>{{car?.departureDate}}</td>
              <td>
                <v-btn class="btns" @click="editItem(car.user_id, car)" color="warning" small>
                  <v-icon small>mdi-pencil</v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn class="btns" @click="deletePost(car.user_id)" color="error" small>
                  <v-icon small>mdi-trash-can</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>

      <v-dialog dark v-model="dialog" max-width="500px">
        <v-card class="modal">
          <v-card-title align="center" class="text-h5">Deseja alterar os dados abaixo?
          </v-card-title>
          <v-row align="center" justify="space-evenly">
            <v-col cols="4" md="4">
              <v-text-field dark v-model="FormUpdateModal.name" :rules="[rules[0]]" label="Nome" required>
              </v-text-field>
              <v-text-field dark v-model="FormUpdateModal.lastName" :rules="[rules[1]]" label="Sobrenome" required>
              </v-text-field>
              <v-text-field type="time" v-model="FormUpdateModal.departureDate" :rules="[rules[2]]"
                label="Horario de saida" required>
              </v-text-field>
            </v-col>
          </v-row>
          <v-card-actions>

            <v-spacer></v-spacer>
            <v-btn color="error" @click="() => dialog = false" text>Cancelar</v-btn>
            <v-btn color="success"
              @click="updateData(editedItem.user_id, {name: FormUpdateModal.name, lastName: FormUpdateModal.lastName, departureDate: FormUpdateModal.departureDate})"
              text>
              OK!
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { API } from '../api/baseUrl';
import { responseProps, updateData } from "../types/ResponseProps"
import RegisterCar from './RegisterCar.vue';
export default defineComponent({
  name: "CarsList",
  components: { RegisterCar },
  data() {
    return {
      responseData: null as any,
      cars: [] as Array<responseProps>,
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        user_id: '',
        name: '',
        lastName: '',
        departureDate: '' as Date | number | string,
      },
      FormUpdateModal: {
        name: '',
        lastName: '',
        departureDate: '',
      },
      rules: [
        (v: string) => !!v || 'Nome é obrigatório!',
        (v: string) => !!v || 'Sobrenome é obrigatório!',
        (v: string) => !!v || 'O Horario de saida é obrigatória!',
      ]
    };
  },
  async mounted() {
    await this.fetchCars();
  },
  methods: {
    async updateData(id: string, updatedObj: updateData) {
      try {
        await API.put(`/update/${id}`, updatedObj);
        await this.fetchCars()
      }
      catch (err) {
        this.responseData = err
      }
    },

    async fetchCars() {
      const response = (await API.get("/find"));
      const data = response.data;
      this.cars = data;
    },
    async deletePost(id: string) {
      try {
        await API.delete(`/delete/${id}`)
        this.fetchCars()
      }
      catch (err) {
        this.responseData = err
      }
    },
    editItem(id: string, item: updateData) {
      // this.editedIndex = this.cars.indexOf(item)
      this.editedItem = Object.assign({}, { name: item.name, lastName: item.lastName, departureDate: item.departureDate, user_id: id })
      this.dialog = true
    },

  },
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

.text-left {
  font-size: 1.1rem;
  margin: 0 5rem;
  padding: 2rem;
}

.btns {
  margin: 0.5rem;
}

.v-text-field {
  color: #2f2f2f;
}
</style>