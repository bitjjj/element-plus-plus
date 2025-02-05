<template>
  <el-row>
    <el-col :span="12">
      <el-space direction="vertical">
        <h6>默认方式(Default)</h6>
        <epp-spinner :status="status" @click="handle('')" />
        <el-space size="small">
          <el-button :disabled="disabled" @click="handle('success')">Success</el-button>
          <el-button :disabled="disabled" @click="handle('error')">Error</el-button>
          <el-button :disabled="disabled" @click="handle('warning')">Warning</el-button>
          <el-button :disabled="disabled" @click="handle('info')">Info</el-button>
        </el-space>
      </el-space>
    </el-col>

    <el-col :span="12">
      <el-space direction="vertical">
        <h6>slot方式(Slot)</h6>
        <epp-spinner :status="status1" @click="handle1('')">
          <template #error>提交错误</template>
          <template #success>
            <el-icon>
              <GoodsFilled />
            </el-icon>
          </template>
          <template #warning>
            <el-icon>
              <AlarmClock />
            </el-icon>
          </template>
          <template #info>
            <el-icon>
              <Present />
            </el-icon>
          </template>
        </epp-spinner>
        <el-space size="small">
          <el-button :disabled="disabled1" @click="handle1('success')">Success</el-button>
          <el-button :disabled="disabled1" @click="handle1('error')">Error</el-button>
          <el-button :disabled="disabled1" @click="handle1('warning')">Warning</el-button>
          <el-button :disabled="disabled1" @click="handle1('info')">Info</el-button>
        </el-space>
      </el-space>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Present, AlarmClock, GoodsFilled } from '@element-plus/icons-vue';

const disabled = ref(false);
const disabled1 = ref(false);
const status = ref('');
const status1 = ref('');

const handle = (s) => {
  status.value = s;
  disabled.value = true;
  setTimeout(() => {
    status.value = '';
    disabled.value = false;
  }, 2000);
};
const handle1 = (s) => {
  status1.value = s;
  disabled1.value = true;
  setTimeout(() => {
    status1.value = '';
    disabled1.value = false;
  }, 2000);
};
</script>
