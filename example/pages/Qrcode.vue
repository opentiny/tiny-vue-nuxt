<template>
  <tiny-qr-code v-bind="params"></tiny-qr-code>
</template>

<script setup>
const params = {
  value: '测试二维码数据',
  size: 250
}
</script>
