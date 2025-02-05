<template>
  <epp-avatar-list :data="list" indent="-10px" />
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const list = ref([
  {
    url: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
  },
  {
    url: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg',
    title: 'Avatar 2',
  },
  {
    url: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg',
    title: 'Avatar 3',
  },
  {
    url: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg',
    title: 'Avatar 4',
  },
]);
</script>
