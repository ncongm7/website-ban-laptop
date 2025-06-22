<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<script setup>

import Footer from './layout/Footer.vue';
import Header from './layout/Header.vue';

</script>

<style scoped></style>