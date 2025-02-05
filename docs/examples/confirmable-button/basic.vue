<template>
  <epp-confirmable-button tip="Click Again" @confirm="del"> Delete </epp-confirmable-button>
</template>
<script lang="ts" setup>
const del = () => {
  console.log('Make sure');
};
</script>
