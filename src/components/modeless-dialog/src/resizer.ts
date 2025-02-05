import type { Directive, DirectiveBinding } from 'vue';

export interface DialogElement extends HTMLDivElement {
  __resizer__: {
    offset: [number, number];
    area: [number, number];
    moveHandler: (e: MouseEvent) => void;
    upHandler: (e: MouseEvent) => void;
    downHandler: (e: MouseEvent) => void;
  };
}

const initModelessDialogResizer = (dlg: DialogElement) => {
  if (dlg.querySelector('.panel-resizer')) return;

  const resizerEle = document.createElement('span');
  resizerEle.className = 'panel-resizer';
  resizerEle.addEventListener('mousedown', dlg.__resizer__.downHandler);
  dlg.appendChild(resizerEle);
};

const resetModelessDialogResizer = (dlg: DialogElement) => {
  const resizerEle = dlg.querySelector('.panel-resizer') as HTMLElement;
  if (resizerEle) {
    resizerEle.removeEventListener('mousedown', dlg.__resizer__.downHandler);
    dlg.removeChild(resizerEle);
  }
};

const ModelessDialogResizer: Directive = {
  beforeMount: (dlg: DialogElement, binding: DirectiveBinding<boolean>) => {
    dlg.__resizer__ = Object.assign({
      moveHandler: (e: MouseEvent) => {
        e.preventDefault();

        const __resizer__ = dlg.__resizer__;
        const X = e.clientX - __resizer__.offset[0],
          Y = e.clientY - __resizer__.offset[1];
        const width = __resizer__.area[0] + X + 'px',
          height = __resizer__.area[1] + Y + 'px';
        dlg.style.width = width;
        dlg.style.height = height;

        binding.instance!.$emit('resize', dlg);
      },
      upHandler: () => {
        const __resizer__ = dlg.__resizer__;
        removeEventListener('mousemove', __resizer__.moveHandler);
        removeEventListener('mouseup', __resizer__.upHandler);

        document.body.style.cursor = '';
      },
      downHandler: (e: MouseEvent) => {
        e.preventDefault();

        const __resizer__ = dlg.__resizer__;
        __resizer__.offset = [e.clientX, e.clientY];
        __resizer__.area = [dlg.getBoundingClientRect().width, dlg.getBoundingClientRect().height];
        addEventListener('mousemove', __resizer__.moveHandler);
        addEventListener('mouseup', __resizer__.upHandler);

        document.body.style.cursor = 'se-resize';
      },
    });

    binding.value && initModelessDialogResizer(dlg);
  },
  updated(dlg: DialogElement, binding: DirectiveBinding<boolean>) {
    if (binding.value) {
      initModelessDialogResizer(dlg);
    } else {
      resetModelessDialogResizer(dlg);
    }
  },
  beforeUnmount(dlg: DialogElement) {
    resetModelessDialogResizer(dlg);
    dlg.__resizer__ = null as any;
  },
};

export { ModelessDialogResizer };
