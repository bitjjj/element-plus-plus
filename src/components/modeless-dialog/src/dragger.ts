import { useZIndex } from 'element-plus';

import type { Directive, DirectiveBinding } from 'vue';

export interface DialogElement extends HTMLDivElement {
  __dragger__: {
    offsetX: number;
    offsetY: number;
    cursor: string; // init value
    zIndex: string; // init value
    boundings: [number, number, number, number] | null;
    rect: DOMRect;
    moveHandler: (e: MouseEvent) => void;
    upHandler: (e: MouseEvent) => void;
    downHandler: (e: MouseEvent) => void;
  };
}

const initModelessDialogDragger = (dlg: DialogElement) => {
  const dragger = dlg.__dragger__;
  const header = dlg.querySelector('.panel-header') as HTMLDivElement;
  header.addEventListener('mousedown', dragger.downHandler);
  header.style.cursor = 'move';

  dragger.offsetX = 0;
  dragger.offsetY = 0;
};

const resetModelessDialogDragger = (dlg: DialogElement) => {
  const dragger = dlg.__dragger__;
  const header = dlg.querySelector('.panel-header') as HTMLDivElement;
  header.removeEventListener('mousedown', dragger.downHandler);
  header.style.cursor = dragger.cursor;
};

const ModelessDialogDragger: Directive = {
  beforeMount: (dlg: DialogElement, params: DirectiveBinding) => {
    const { nextZIndex } = useZIndex();
    const header = dlg.querySelector('.panel-header') as HTMLDivElement;
    dlg.__dragger__ = Object.assign({
      cursor: header.style.cursor,
      boundings: params.value.boundings,
      moveHandler: (e: MouseEvent) => {
        const dragger = dlg.__dragger__;
        const rect = dragger.rect;
        const boundings = dragger.boundings;
        const left = e.pageX - dragger.offsetX;
        const top = e.pageY - dragger.offsetY;
        if (boundings) {
          if (left - 0.5 * rect.width >= boundings[0] && left + rect.width <= boundings[2]) {
            dlg.style.left = left + 'px';
          }
          if (top >= boundings[1] && top + rect.height <= boundings[3]) {
            dlg.style.top = top + 'px';
          }
        } else {
          dlg.style.left = left + 'px';
          dlg.style.top = top + 'px';
        }
      },
      upHandler: () => {
        const dragger = dlg.__dragger__;
        dlg.style.zIndex = dragger.zIndex;
        removeEventListener('mousemove', dragger.moveHandler);
        removeEventListener('mouseup', dragger.upHandler);
      },
      downHandler: (e: MouseEvent) => {
        const dragger = dlg.__dragger__;
        dragger.zIndex = dlg.style.zIndex;
        dlg.style.zIndex = String(nextZIndex());
        dragger.offsetX = e.pageX - dlg.offsetLeft;
        dragger.offsetY = e.pageY - dlg.offsetTop;
        dragger.rect = dlg.getBoundingClientRect();

        addEventListener('mousemove', dragger.moveHandler);
        addEventListener('mouseup', dragger.upHandler);
      },
    });

    params.value.drag && initModelessDialogDragger(dlg);
  },
  updated(dlg: DialogElement, binding: DirectiveBinding) {
    dlg.__dragger__.boundings = binding.value.boundings;
  },
  beforeUnmount(dlg: DialogElement, binding: DirectiveBinding) {
    binding.value.drag && resetModelessDialogDragger(dlg);
    dlg.__dragger__ = null as any;
  },
};

export { ModelessDialogDragger };
