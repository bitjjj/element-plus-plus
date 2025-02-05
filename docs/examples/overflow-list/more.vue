<template>
  <epp-overflow-list :dropdown-props="{ trigger: 'click' }">
    <el-button link type="primary">操作1</el-button>
    <el-button link type="primary">操作2</el-button>
    <el-button link type="primary">操作3</el-button>
    <el-button link type="primary">操作4</el-button>
    <el-button link type="primary">操作5</el-button>
    <template #more>
      <el-icon>
        <Film />
      </el-icon>
    </template>
  </epp-overflow-list>
</template>
<script lang="ts" setup>
import { Film } from '@element-plus/icons-vue';
</script>
