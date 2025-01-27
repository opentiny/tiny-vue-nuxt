<template>
  <div>
    <tiny-alert description="type 为默认值 info"></tiny-alert>
    <h1>图标</h1>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script setup>
const handleClick=()=> {
  TinyModal.alert({ message: '成功提示框', status: 'success' })
}
</script>
