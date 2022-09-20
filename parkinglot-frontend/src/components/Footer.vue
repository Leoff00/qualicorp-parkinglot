<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Densenvolvido por Leonardo Ferreira</strong>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Footer"
})
</script>

<style scoped>
.v-footer {
  background-color: #000;
}
</style>