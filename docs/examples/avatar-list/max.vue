<template>
  <epp-avatar-list :data="list" :max="5" url-field="img">
    <template #tip="{ item }">
      <h5>Name：{{ item.name }}</h5>
    </template>
  </epp-avatar-list>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const list = ref([
  {
    img: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
    name: 'Jack',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg',
    name: 'Musk',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg',
    name: 'Mary',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg',
    name: 'Tom',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg',
    name: 'Dog',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-female-avatar-vector-icon-png-image_3725439.jpg',
    name: 'Cat',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190614/original/pngtree-male-student-icon-png-image_3728104.jpg',
    name: 'Banana',
  },
  {
    img: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-human-avatar-free-vector-png-image_4825373.jpg',
    name: 'Pear',
  },
]);
</script>
