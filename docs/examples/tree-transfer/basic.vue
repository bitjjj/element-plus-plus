<template>
  <p>filterable: <el-checkbox v-model="filterable" /></p>
  <epp-tree-transfer v-model="value" :filterable="filterable" :tree-props="treeProps" />
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

const filterNode = (value: string, data: { label: string }) => {
  if (!value) return true;
  return data.label.indexOf(value) !== -1;
};

const value = ref(['2']);
const filterable = ref(true);
const treeProps = reactive({
  nodeKey: 'id',
  checkStrictly: true,
  showCheckbox: false,
  filterNodeMethod: filterNode,
  data: [
    {
      label: 'xxxx自治区',
      id: '1',
      childrens: [
        {
          label: '城市1',
          id: '2',
          childrens: [
            { label: '区域1', id: '7', childrens: [] },
            { label: '区域2', id: '8', childrens: [] },
            {
              label: '县级1',
              id: '9',
              childrens: [
                {
                  label: '测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇测试乡镇',
                  id: '8-1',
                  childrens: [],
                },
                { label: '测试乡镇2', id: '8-2', childrens: [] },
                { label: '测试乡镇3', id: '8-3', childrens: [] },
              ],
            },
          ],
        },
        {
          label: '城市2',
          id: '3',
          disabled: true,
          childrens: [
            {
              label: '区域1',
              id: '10',
              disabled: true,
              childrens: [],
            },
            {
              label: '区域2',
              id: '11',
              disabled: true,
              childrens: [],
            },
            {
              label: '区域3',
              id: '12',
              disabled: true,
              childrens: [],
            },
          ],
        },
        { label: '城市3', id: '4', childrens: [] },
        { label: '城市4', id: '5', childrens: [] },
        { label: '城市5', id: '6', childrens: [] },
      ],
    },
  ],
  props: {
    children: 'childrens',
    label: 'label',
  },
});
</script>
