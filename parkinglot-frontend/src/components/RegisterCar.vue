<template>
  <v-row align="center" justify="center">
    <h1 class="formTitle">{{title}}</h1>
  </v-row>
  <v-form v-model="valid" v-on:reset="true" v-on:submit="">
    <v-container>
      <v-row align="center" justify="space-evenly">
        <v-col cols="4" md="4">
          <v-text-field v-model="firstname" label="Nome" required></v-text-field>
          <v-text-field v-model="lastname" label="Sobrenome" required></v-text-field>
        </v-col>

        <v-col cols="4" md="4">
          <v-text-field v-model="password" label="Senha" required></v-text-field>
          <v-text-field v-model="carPlate" :counter="7" :rules="carPlateRules" label="Placa do Carro" required>
          </v-text-field>
        </v-col>
      </v-row>
      <v-row align="center" justify="space-evenly">
        <v-col cols="4" md="4">
          <v-text-field v-model="now" :readonly="true" label="Inicio do Horário" required>
          </v-text-field>
        </v-col>

        <!-- TODO: IMPLEMENT DUE DATE -->
        <v-col cols="4" md="4">
          <v-text-field v-model="due" :rules="dateRules" Fim do Horário required></v-text-field>
        </v-col>
      </v-row>


    </v-container>
  </v-form>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
const BRAZIL_TIMEZONE = "America/Sao_Paulo"
const now = new Date(Date.now())

export default defineComponent({
  name: "RegisterCar",
  props: {
    title: String,
    icon: String
  },

  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    password: '',
    carPlate: '',
    now: '',
    due: '',
    e5: null,
    carPlateRules: [
      (v: string) => !!v || 'A placa do carro é obrigatória!',
      (v: string) => v.length < 7 || 'A placa do carro precisa ter 7 digitos.',
    ],
    dateRules: [
      (v: Date | number) => v < now || "Nao pode marcar a data de termino menor que a data de inicio."
    ],
  }),

  mounted() {
    setInterval(() => {
      this.$data.now = new Date().toLocaleTimeString('pt-br', { timeZone: BRAZIL_TIMEZONE }).split(' ')[0]
    }, 1000)
  }

}
)
</script>

<style scoped>
.formTitle {
  font-size: 2rem;
}
</style>