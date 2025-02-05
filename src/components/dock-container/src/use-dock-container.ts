import { ref, watch, onMounted, getCurrentInstance, computed, onBeforeUnmount, nextTick } from 'vue';
import { useTimeoutFn } from '@vueuse/core';
import { useZIndex } from 'element-plus';
import { ModelessDialogManager } from '@/components/modeless-dialog';
import { useRestoreActive, isServer } from '@/utils';

import type { Ref } from 'vue';
import type { DockContainerProps, DockItem } from './dock-container';

export const CLOSE_EVENT = 'close';
export const OPEN_EVENT = 'open';
export const CLOSED_EVENT = 'closed';
export const OPENED_EVENT = 'opened';
export const ITEM_ADDED_EVENT = 'item-added';
export const ITEM_CLOSED_EVENT = 'item-closed';
export const ITEM_RESTORED_EVENT = 'item-restored';
export const UPDATE_MODEL_EVENT = 'update:modelValue';

export const useDockContainer = (props: DockContainerProps, scrollbarRef: Ref<{ update: () => void }>) => {
  const { nextZIndex } = useZIndex();
  const visible = ref(false);
  const closed = ref(false);
  const zIndex = ref(props.zIndex || nextZIndex());
  const dockItems = ref<Array<DockItem>>([]);

  const animName = computed(() => {
    let name = props.animationName;
    if (!name) {
      switch (props.placement) {
        case 'left':
          name = 'slideRightSide';
          break;
        case 'right':
          name = 'slideLeftSide';
          break;
        case 'bottom':
          name = 'slideTopSide';
          break;
        case 'top':
          name = 'slideBottomSide';
          break;
      }
    }
    return name;
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
  }

  useRestoreActive(visible);

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        closed.value = false;
        open();
        emit(OPEN_EVENT);
        zIndex.value = props.zIndex ? zIndex.value++ : nextZIndex();
      } else {
        if (visible.value) {
          close();
        }
      }
    },
  );

  watch(
    () => dockItems.value.length,
    () => {
      nextTick(() => {
        scrollbarRef.value?.update();
      });
    },
  );

  function addDockItems(id: string) {
    const dialog = ModelessDialogManager.get(id);
    const item = {
      id,
      title: dialog.title || (document.querySelector(`#${id} .panel-header`) as HTMLElement).innerText,
      snapshot: dialog.snapshot,
    };
    dockItems.value.push(item);

    emit(ITEM_ADDED_EVENT, item, dockItems.value);
  }
  function closeDockItem(id: string) {
    const itemIdx = dockItems.value.findIndex((i) => i.id === id);
    const itemsDel = dockItems.value.splice(itemIdx, 1);
    ModelessDialogManager.get(id).close();

    emit(ITEM_CLOSED_EVENT, itemsDel[0], dockItems.value);
  }
  function restoreDockItem(id: string) {
    const itemIdx = dockItems.value.findIndex((i) => i.id === id);
    const itemsDel = dockItems.value.splice(itemIdx, 1);
    ModelessDialogManager.get(id).toggleShow();

    emit(ITEM_RESTORED_EVENT, itemsDel[0], dockItems.value);
  }
  const eventRemover = ModelessDialogManager.addEventListener({
    collapse: addDockItems,
  });

  onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      open();
    }
  });

  onBeforeUnmount(() => {
    eventRemover();
  });

  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    closed,
    visible,
    zIndex,
    animName,
    dockItems,
    closeDockItem,
    restoreDockItem,
  };
};
