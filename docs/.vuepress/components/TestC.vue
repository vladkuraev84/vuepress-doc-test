<script setup lang="ts">
  import { ref } from 'vue'
  const msg = ref('');
</script>

<template>
  {{msg}}<br>
  <input type="text" v-model="msg">
</template>

<style scoped>

</style>
