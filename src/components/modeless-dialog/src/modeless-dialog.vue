<template>
  <teleport to="body">
    <transition :name="animationName" @after-enter="afterEnter" @after-leave="afterLeave" @before-leave="beforeLeave">
      <div
        v-if="visible"
        v-show="shown"
        v-bind="$attrs"
        :id="id"
        ref="dialogRef"
        v-trap-focus
        v-dragger="{ boundings, drag }"
        v-resizer="resize"
        :class="['epp-panel', 'epp-modeless-dialog', customClass, panelClass, innerClass]"
        :style="getDialogStyle()"
        aria-modal="true"
        role="dialog"
        aria-label="dialog"
        @click.stop
      >
        <div :class="['panel-header', panelHeaderClass]">
          <slot v-if="$slots.header" name="header"></slot>
          <template v-else-if="title || showClose">
            <h4 class="panel-title">{{ title }}</h4>
            <div class="panel-header-right">
              <button v-if="showCollapse" class="panel-close" @click="handleCollapse">
                <el-icon>
                  <ArrowDownBold v-if="collapse" />
                  <ArrowUpBold v-else />
                </el-icon>
              </button>
              <button v-if="showMaximize" class="panel-close" @click="handleMaximize">
                <el-icon>
                  <SemiSelect v-if="maximize" />
                  <FullScreen v-else />
                </el-icon>
              </button>
              <button v-if="showClose" class="panel-close" @click="handleClose">
                <el-icon><CloseBold /></el-icon>
              </button>
            </div>
          </template>
        </div>
        <div :class="['panel-body', panelBodyClass]">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" :class="['panel-footer', panelFooterClass]">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElIcon, TrapFocus } from 'element-plus';
import { ArrowUpBold, ArrowDownBold, CloseBold, FullScreen, SemiSelect } from '@element-plus/icons-vue';
import { usePanelProps } from '@/components/panel';
import { modelessDialogProps, modelessDialogEmits } from './modeless-dialog';
import { ModelessDialogDragger } from './dragger';
import { ModelessDialogResizer } from './resizer';
import { useDialog } from './use-modeless-dialog';

import type { ModelessDialogProps } from './modeless-dialog';

export default defineComponent({
  name: 'ModelessDialog',
  components: {
    ElIcon,
    CloseBold,
    SemiSelect,
    FullScreen,
    ArrowUpBold,
    ArrowDownBold,
  },
  directives: {
    TrapFocus,
    dragger: ModelessDialogDragger,
    resizer: ModelessDialogResizer,
  },
  inheritAttrs: false,
  props: modelessDialogProps,
  emits: modelessDialogEmits,
  setup(props: ModelessDialogProps) {
    const dialogRef = ref<HTMLDivElement>();

    const dialog = useDialog(props, dialogRef);
    const {
      panelStyle,
      panelClass,
      headerClass: panelHeaderClass,
      bodyClass: panelBodyClass,
      footerClass: panelFooterClass,
    } = usePanelProps(props);

    const getDialogStyle = () => {
      let width = props.width,
        height = props.height,
        top = props.top,
        zIndex = props.zIndex;
      const style = dialogRef.value?.style;
      if (style) {
        width = style.width;
        height = style.height;
        top = style.top;
        zIndex = style.zIndex;
      }
      return [
        {
          width,
          height,
          top,
          zIndex,
        },
        panelStyle,
      ];
    };

    return {
      dialogRef,
      panelStyle,
      getDialogStyle,
      panelClass,
      panelHeaderClass,
      panelBodyClass,
      panelFooterClass,
      ...dialog,
    };
  },
});
</script>
