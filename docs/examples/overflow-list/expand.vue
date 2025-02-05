<template>
  <epp-overflow-list :show-count="3" show-type="expand">
    <p>第一行内容(First Line)</p>
    <p>第二行内容(Second Line)</p>
    <p>第三行内容(Third Line)</p>
    <p>第四行内容(Fourth Line)</p>
    <p>第五行内容</p>
    <template #more="{ hasMore, show, hide }">
      <el-icon size="20px" style="cursor: pointer; margin-left: 16px">
        <Download v-if="hasMore" @click="show" />
        <Upload v-else @click="hide" />
      </el-icon>
    </template>
  </epp-overflow-list>
</template>
<script lang="ts" setup>
import { Download, Upload } from '@element-plus/icons-vue';
</script>
