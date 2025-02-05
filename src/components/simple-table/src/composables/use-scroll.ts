import { getCurrentInstance, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { debounce } from 'lodash-unified';
import { isString } from '@/utils';

import type { ComputedRef, Ref } from 'vue';
import type { ColumnType, ScrollContainer } from '../simple-table';

function useScroll(
  scrollContainer: ScrollContainer | undefined,
  cols: ComputedRef<{ realCols: ColumnType[] }>,
  table: Ref<HTMLTableElement | undefined>,
) {
  const scrollClass = ref('is-scrolling-left');
  let resizeObserver: ResizeObserver | null = null;

  const { proxy } = getCurrentInstance()!;

  const hasFixedCol = () => cols.value.realCols.some((c) => !!c.fixed);

  const getParentElement: () => HTMLElement = () => {
    let parent;
    if (proxy?.$parent?.$options.name === 'Scrollbar') {
      parent = table.value!.parentElement?.parentElement;
    } else {
      parent = table.value!.parentElement;
    }
    return parent!;
  };

  const getScrollContainer = () => {
    let scrollContainerEle: HTMLElement;
    if (scrollContainer) {
      if (isString(scrollContainer)) {
        scrollContainerEle = document.querySelector(scrollContainer) as HTMLElement;
      } else {
        scrollContainerEle = scrollContainer;
      }
    } else {
      scrollContainerEle = getParentElement();
    }
    return scrollContainerEle;
  };

  const initScrollClass = (container: HTMLElement) => {
    if (container.getBoundingClientRect().width >= table.value!.scrollWidth) {
      scrollClass.value = 'is-scrolling-none';
    } else {
      scrollClass.value = 'is-scrolling-left';
    }
  };

  const scrollEventHandler = (event: Event) => {
    const { scrollLeft, offsetWidth, scrollWidth } = event.target as HTMLElement;
    const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
    if (scrollLeft >= maxScrollLeftPosition) {
      scrollClass.value = 'is-scrolling-right';
    } else if (scrollLeft === 0) {
      scrollClass.value = 'is-scrolling-left';
    } else {
      scrollClass.value = 'is-scrolling-middle';
    }
  };

  const addScrollEvent = () => {
    if (hasFixedCol()) {
      const container = getScrollContainer();
      initScrollClass(container);
      container?.addEventListener('scroll', scrollEventHandler, {
        passive: true,
      });

      resizeObserver = new ResizeObserver(
        debounce(() => {
          initScrollClass(container);
        }, 300),
      );
      resizeObserver.observe(container);
    } else {
      scrollClass.value = 'is-scrolling-none';
    }
  };

  const removeScrollEvent = () => {
    const container = getScrollContainer();
    container?.removeEventListener('scroll', scrollEventHandler);

    resizeObserver && resizeObserver.disconnect();
    resizeObserver = null;
  };

  watch(
    () => cols.value.realCols,
    () => {
      !resizeObserver && addScrollEvent();
    },
    {
      deep: true,
    },
  );

  onMounted(() => {
    addScrollEvent();
  });

  onBeforeUnmount(() => {
    removeScrollEvent();
  });

  return {
    scrollClass,
  };
}

export { useScroll };
