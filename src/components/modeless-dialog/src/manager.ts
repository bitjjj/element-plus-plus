import { createVNode, isVNode, render, watch, isReactive } from 'vue';
import { useZIndex } from 'element-plus';
import { isServer } from '@/utils';
import { usePanelProps } from '@/components/panel';
import ModelessDialogConstructor from './modeless-dialog.vue';

import type { ComponentPublicInstance, VNode } from 'vue';
import type { ModelessDialogProps, ModelessInsance, ModelessProxy } from './modeless-dialog';

export type ModelessDialogOptions = Partial<
  ModelessDialogProps & {
    header?: VNode;
    body?: VNode;
    footer?: VNode;
    onResize?: (dlg: HTMLDivElement) => void;
    onOpen?: () => void;
    onOpened?: () => void;
    onClose?: () => void;
    onClosed?: () => void;
    onDestroy?: () => void;
    onCollapse?: (value: boolean) => void;
    onMaximize?: (value: boolean) => void;
  }
>;

const ModelessDialogInstances: Record<string, ModelessInsance | null> = {};
const ModelessDialogListeners: Array<Record<string, (id: string) => void>> = [];
let seed = 1;

const { nextZIndex } = useZIndex();

function show(options: ModelessDialogOptions = {}): ModelessInsance {
  // @ts-ignore
  if (isServer) return;
  if (ModelessDialogInstances[options.id!]) return ModelessDialogInstances[options.id!]!;

  const id = options.id || `modeless_dialog_${seed++}`;

  const props: ModelessDialogOptions = {
    zIndex: nextZIndex(),
    ...options,
    id,
    modelValue: true,
  };

  const container = document.createElement('div');

  const slots: Record<string, () => VNode> = {};
  if (props.header) {
    slots.header = () => props.header!;
  }
  if (props.body) {
    slots.default = () => props.body!;
  }
  if (props.footer) {
    slots.footer = () => props.footer!;
  }
  const vm = createVNode(ModelessDialogConstructor, props, Object.keys(slots).length ? slots : null);

  // clean notification element preventing mem leak
  vm.props!.onDestroy = () => {
    ModelessDialogInstances[id] = null;
    delete ModelessDialogInstances[id];

    // render(null, container)
  };

  // instances will remove this item when close function gets called. So we do not need to worry about it.
  render(vm, container);

  const proxy = vm.component!.proxy as ComponentPublicInstance<ModelessProxy>;

  if (isReactive(options)) {
    watch(options, (newVal) => {
      Object.assign(vm.component!.props, options);

      if (isVNode(newVal.header)) {
        vm.component!.slots.header! = () => [newVal.header!];
      }
      if (isVNode(newVal.body)) {
        vm.component!.slots.default! = () => [newVal.body!];
      }
      if (isVNode(newVal.footer)) {
        vm.component!.slots.footer! = () => [newVal.footer!];
      }

      const {
        panelStyle,
        panelClass,
        headerClass: panelHeaderClass,
        bodyClass: panelBodyClass,
        footerClass: panelFooterClass,
      } = usePanelProps(newVal as any);
      Object.assign(proxy, { panelClass, panelStyle, panelHeaderClass, panelBodyClass, panelFooterClass });

      vm.component!.proxy?.$forceUpdate();
    });
  }

  const returnVal = {
    // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
    // for out component, so that all closing steps will not be skipped.
    close: () => {
      proxy.visible = false;
      proxy.$emit('destroy');
    },
    toggleShow: (shown?: boolean) => {
      proxy.shown = shown ?? !proxy.shown;
    },
    toggleCollapse: (collapsable?: boolean) => {
      proxy.collapseDialog(collapsable);
    },
    toggleMaximize: (maximizable?: boolean) => {
      proxy.maximizeDialog(maximizable);
    },
    isShown: () => {
      return proxy.shown;
    },
    isClosed: () => {
      return !!ModelessDialogInstances[id];
    },
    isCollapsed: () => {
      return proxy.collapse;
    },
    isMaximized: () => {
      return proxy.maximize;
    },
    title: props.title!,
    snapshot: props.snapshot!,
  };

  ModelessDialogInstances[id] = returnVal;

  return returnVal;
}

function callAllDialogMethods(name: string, ...args: any[]) {
  for (const vm of Object.values(ModelessDialogInstances)) {
    (vm as any)[name](...args);
  }
}

function closeAll(): void {
  callAllDialogMethods('close');
}

function showAll(): void {
  callAllDialogMethods('toggleShow', true);
}

function hideAll(): void {
  callAllDialogMethods('toggleShow', false);
}

function collapseAll(): void {
  callAllDialogMethods('toggleCollapse', true);
}

function expandAll(): void {
  callAllDialogMethods('toggleCollapse', false);
}

function get(id: string): ModelessInsance {
  return ModelessDialogInstances[id]!;
}

function has(id: string): boolean {
  return !!ModelessDialogInstances[id];
}

function addEventListener(listener: Record<string, (id: string) => void>) {
  !ModelessDialogListeners.includes(listener) && ModelessDialogListeners.push(listener);
  return () => {
    ModelessDialogListeners.splice(ModelessDialogListeners.indexOf(listener), 1);
  };
}

function triggerEvent(name: string, id: string) {
  id &&
    ModelessDialogListeners.forEach((listener) => {
      if (listener[name]) {
        listener[name](id);
      }
    });
}

const ModelessDialogManager = {
  get,
  has,
  show,
  closeAll,
  showAll,
  hideAll,
  collapseAll,
  expandAll,
  addEventListener,
  triggerEvent,
};

export { ModelessDialogManager };
