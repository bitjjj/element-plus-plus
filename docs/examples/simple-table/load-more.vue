<template>
  <div ref="divWrapper" style="height: 200px; overflow-y: scroll">
    <epp-simple-table :cols="cols" :data="tableData" border="border-x" fixed-header>
      <template #tableIndex="{ rowIndex }">
        <span>{{ rowIndex + 1 }}</span>
      </template>
      <template #handle>
        <el-button link type="primary">修改</el-button>
      </template>
      <template v-if="hadMoreData" #more>
        <template v-if="loading">
          <el-space size="large">
            <epp-spinner size="16px" />
            <span>正在加载...</span>
          </el-space>
        </template>
      </template>
    </epp-simple-table>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, toRefs, watch } from 'vue';
import { useScroll } from '@vueuse/core';

const divWrapper = ref();

let count = 1;
function id() {
  return count++;
}
const data = [
  {
    id: id(),
    name: '王二麻子',
    sex: '男',
    org: '某个公司',
    des: '来自中国南方的温暖城市！',
  },
  { id: id(), name: '李四', sex: '男', org: '某个公司', des: '来自中国' },
  {
    id: id(),
    name: '张三',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
  {
    id: id(),
    name: '张三2',
    sex: '男',
    org: '某个公司',
    des: '来自中国北方的寒冷的城市！',
  },
];

const loading = ref(false);
const tableData = ref(JSON.parse(JSON.stringify(data)));
const cols = ref([
  { title: '#', slotName: 'tableIndex', width: '8%' },
  { title: '用户名', prop: 'name', width: '15%' },
  { title: '性别', prop: 'sex', width: '8%' },
  { title: '单位', prop: 'org', width: '20%' },
  { title: '简介', prop: 'des' },
  { title: '操作', slotName: 'handle', align: 'center', width: '10%' },
]);

const hadMoreData = computed(() => tableData.value.length < 12);
const loadMore = () => {
  if (loading.value || !hadMoreData.value) return;
  loading.value = true;
  window.setTimeout(() => {
    const moreData = JSON.parse(JSON.stringify(data));
    moreData.forEach((d: any) => {
      d.id = id();
      d.name = d.name + d.id;
    });
    tableData.value.push(...moreData);
    loading.value = false;
  }, 300);
};

const { arrivedState } = useScroll(divWrapper, { behavior: 'smooth' });
const { bottom } = toRefs(arrivedState);
watch(bottom, () => {
  if (bottom.value) {
    loadMore();
  }
});
</script>
