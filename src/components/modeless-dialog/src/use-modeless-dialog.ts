import { ref, watch, onMounted, getCurrentInstance, computed } from 'vue';
import html2canvas from 'html2canvas';
import { useZIndex } from 'element-plus';
import { useTimeoutFn } from '@vueuse/core';
import { useRestoreActive, isServer } from '@/utils';
import { ModelessDialogManager } from './manager';

import type { Ref } from 'vue';
import type { ModelessDialogProps } from './modeless-dialog';

export const CLOSE_EVENT = 'close';
export const OPEN_EVENT = 'open';
export const CLOSED_EVENT = 'closed';
export const OPENED_EVENT = 'opened';
export const COLLAPSE_EVENT = 'collapse';
export const MAX_EVENT = 'maximize';
export const UPDATE_MODEL_EVENT = 'update:modelValue';

export const useDialog = (props: ModelessDialogProps, targetRef: Ref<HTMLElement | undefined>) => {
  const { nextZIndex } = useZIndex();
  const visible = ref(false);
  const shown = ref(true);
  const closed = ref(false);
  const maximize = ref(false);
  const collapse = ref(false);
  const zIndex = ref(props.zIndex || nextZIndex());

  const innerClass = computed(() => {
    const clazz: Record<string, boolean> = {};
    if (maximize.value) {
      clazz.fullscreen = maximize.value;
    }
    if (collapse.value) {
      clazz.collapsed = collapse.value;
    }
    return clazz;
  });

  let stopOpenTimer: (() => void) | undefined = undefined;
  let stopCloseTimer: (() => void) | undefined = undefined;

  const { emit } = getCurrentInstance()!;

  function afterEnter() {
    emit(OPENED_EVENT);
  }

  function afterLeave() {
    emit(CLOSED_EVENT);
    emit(UPDATE_MODEL_EVENT, false);
  }

  function beforeLeave() {
    emit(CLOSE_EVENT);
  }

  function open() {
    stopCloseTimer?.();
    stopOpenTimer?.();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: stopOpenTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }

  function close() {
    // if (this.willClose && !this.willClose()) return;
    stopOpenTimer?.();
    stopCloseTimer?.();

    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: stopCloseTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }

  function hide(shouldCancel: boolean) {
    if (shouldCancel) return;
    closed.value = true;
    visible.value = false;
  }

  function handleClose() {
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }

  function doOpen() {
    if (isServer) {
      return;
    }
    visible.value = true;
  }

  function doClose() {
    visible.value = false;
    emit('destroy');
  }

  function handleCollapse() {
    if (props.showCollapse) {
      collapseDialog();
    }
  }
  function collapseDialog(collapsable?: boolean) {
    let p: Promise<void>;
    if (props.useDock && props.snapshot === true) {
      p = html2canvas(targetRef.value!).then((canvas) => {
        ModelessDialogManager.get(props.id!).snapshot = { type: 'image', url: canvas.toDataURL('image/png') };
      });
    } else {
      p = Promise.resolve();
    }
    p.finally(() => {
      if (props.useDock) {
        shown.value = !shown.value;
      } else {
        collapse.value = collapsable ?? !collapse.value;
      }
      emit(COLLAPSE_EVENT, props.useDock ? shown.value : collapse.value);
      ModelessDialogManager.triggerEvent(COLLAPSE_EVENT, props.id!);
    });
  }

  function handleMaximize() {
    if (props.showMaximize) {
      maximizeDialog();
    }
  }
  function maximizeDialog() {
    maximize.value = !maximize.value;
    emit(MAX_EVENT, collapse.value);
  }

  useRestoreActive(visible);

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false;
        open();
        emit(OPEN_EVENT);
        zIndex.value = props.zIndex ? Number(zIndex.value) + 1 : nextZIndex();
      } else {
        if (visible.value) {
          close();
        }
      }
    },
  );

  onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      open();
    }
  });

  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    handleCollapse,
    collapseDialog,
    handleMaximize,
    maximizeDialog,
    closed,
    shown,
    visible,
    collapse,
    maximize,
    zIndex,
    innerClass,
  };
};
