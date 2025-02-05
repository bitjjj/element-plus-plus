<template>
  <div ref="iconRef" :class="['epp-spinner', animation, status ? `is-finish ${status}` : '']" :style="style">
    <div class="spinner-wrap">
      <slot>
        <RefreshRight />
      </slot>
    </div>
    <div class="show-result">
      <slot v-if="status === 'info'" name="info">
        <el-icon :size="size">
          <InfoFilled />
        </el-icon>
      </slot>

      <slot v-else-if="status === 'success'" name="success">
        <el-icon :size="size">
          <SuccessFilled />
        </el-icon>
      </slot>

      <slot v-else-if="status === 'warning'" name="warning">
        <el-icon :size="size">
          <WarningFilled />
        </el-icon>
      </slot>

      <slot v-else-if="status === 'error' || !status" name="error">
        <el-icon :size="size">
          <CircleCloseFilled />
        </el-icon>
      </slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { ElIcon } from 'element-plus';
import { RefreshRight, SuccessFilled, InfoFilled, WarningFilled, CircleCloseFilled } from '@element-plus/icons-vue';
import { spinnerProps } from './spinner';

defineOptions({
  name: 'EppSpinner',
});

const props = defineProps(spinnerProps);

const style = ref<any>({
  '--spinner-color': props.color,
  '--spinner-duration': props.duration,
});

if (props.size) {
  Object.assign(style.value, { '--spinner-width': props.size, '--spinner-height': props.size });
}
</script>
