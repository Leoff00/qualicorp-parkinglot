<template>
  <v-app>
    <v-main>
      <Header />
      <CarsList />
      <Footer />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import CarsList from './components/CarsList.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',

  components: {
    Header,
    CarsList,
    Footer
  },

  data() {
    return {

    }
  },
})
</script>
