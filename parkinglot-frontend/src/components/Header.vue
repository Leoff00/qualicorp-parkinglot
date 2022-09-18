<template>
  <header>
    <Nav />
  </header>
</template>
<script lang="ts">
import Nav from './Nav.vue';

import { defineComponent } from 'vue';
export default defineComponent({
  name: "Header",
  components: { Nav }
})
</script>
  
  
<style scoped>
header {
  width: 100%;
}
</style>
  