<template>
  <tiny-user-head type="icon" :model-value="tinyIconSmile"></tiny-user-head>
</template>

<script setup>
import { iconSmile } from '@opentiny/vue-icon'

const tinyIconSmile = iconSmile()
</script>
