<template>
  <tiny-numeric v-model="value" placeholder="请输入非空数值"></tiny-numeric>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(1)
</script>
