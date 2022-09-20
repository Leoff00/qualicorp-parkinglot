<template>
  <v-row align="center" justify="center">
    <h1 class="formTitle">{{title}}</h1>
  </v-row>
  <v-form lazy-validation ref="formValidate" v-model="valid">
    <v-container>
      <v-row align="center" justify="space-evenly">
        <v-col cols="4" md="4">
          <v-text-field v-model="FormData.name" :rules="[(v: string) => !!v || 'Nome é obrigatório!']" label="Nome"
            required></v-text-field>
          <v-text-field v-model="FormData.lastName" :rules="[(v: string) => !!v || 'Sobrenome é obrigatório!',
          ]" label="Sobrenome" required></v-text-field>
        </v-col>

        <v-col cols="4" md="4">
          <v-text-field type="password" v-model="FormData.password" :rules="[(v: string) => !!v || 'Senha é obrigatório!',
          ]" label="Senha" required>
          </v-text-field>
          <v-text-field v-model="FormData.carPlate" :counter="8" :rules="[(v: string) => !!v || 'A placa do carro é obrigatória!',
          ]" label="Placa do Carro" required>
          </v-text-field>
        </v-col>
      </v-row>

      <v-row align="center" justify="space-evenly">
        <v-col cols="4" md="4">
          <v-text-field v-model="FormData.arrivalDate" :readonly="true" label="Inicio do Horário" required>
          </v-text-field>
        </v-col>

        <!-- TODO: IMPLEMENT DUE DATE -->
        <v-col cols="4" md="4">
          <v-text-field type="time" v-model="FormData.departureDate" :rules="nowRules" label="Fim do Horário" required>
          </v-text-field>
        </v-col>

      </v-row>
      <v-row align="center" justify="space-evenly" class="btnContainer">
        <v-btn color="success" @click="createPost" class="mr-4">Cadastrar!</v-btn>
        <v-btn color="#88884D" @click="clear">
          Limpar campos
        </v-btn>
      </v-row>

      <v-dialog v-model="successDialog" hide-overlay persistent width="300">
        <v-card color="success">
          <v-card-text>
            Usuário cadastrado com sucesso...
            <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from "Vue"
import { defineComponent } from 'vue';
const BRAZIL_TIMEZONE = "America/Sao_Paulo"
import { API } from '../api/baseUrl';

export default defineComponent({
  name: "RegisterCar",
  props: {
    title: String,
  },
  data: () => ({
    responseData: null as any,
    valid: true,
    successDialog: false,
    FormData: {
      name: '',
      lastName: '',
      password: '',
      carPlate: '',
      arrivalDate: '',
      departureDate: '',
    },
    rules: [
      (v: string) => v.length < 9 || 'A placa do carro precisa ter 8 digitos.',
    ],
    carPlateRules: [
    ],
    nowRules: [
    ],
  }),
  watch: {
    successDialog(val) {
      console.log('the val is -> ', val)
      if (!val) return
      setTimeout(() => (this.successDialog = false), 2000)
    },
  },
  methods: {
    clear() {
      this.FormData.name = ""
      this.FormData.lastName = ""
      this.FormData.carPlate = ""
      this.FormData.password = ""
      this.FormData.departureDate = ""
    },

    async createPost() {
      (this.$refs.formValidate as Vue.App & { validate: () => boolean }).validate()

      if (!this.valid) {
        return;
      }
      try {
        this.successDialog = true
        const response = await API.post("/save", this.FormData)
        this.$emit("create-car")
        const data = response.data;
        this.responseData = data
      }
      catch (err) {
        this.responseData = err
      }
    }
  },
  mounted() {
    setInterval(() => {
      this.$data.FormData.arrivalDate = new Date().toLocaleTimeString('pt-br', { timeZone: BRAZIL_TIMEZONE }).split(' ')[0].slice(0, 5)
    }, 1000)
  }
}
)
</script>

<style scoped>
.btnContainer {
  margin: 2rem;
}

.formTitle {
  font-weight: 300;
  margin-bottom: 1rem;
  font-size: 2rem;
}
</style>