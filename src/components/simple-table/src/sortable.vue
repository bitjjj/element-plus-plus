<template>
  <span v-if="shouldShow" :class="['caret-wrapper', active]">
    <i class="sort-caret ascending" @click="sort('ascending')"></i>
    <i class="sort-caret descending" @click="sort('descending')"></i>
  </span>
</template>
<script lang="ts">
import { computed, ref, watch, defineComponent } from 'vue';

import type { PropType } from 'vue';

export default defineComponent({
  name: 'SimpleTableSortableIcon',
  props: {
    sortable: [Boolean, String] as PropType<boolean | 'descending' | 'ascending'>,
  },
  emits: ['sort-change'],
  setup(props, { emit }) {
    const active = ref(getActive());
    const shouldShow = computed(() => {
      return typeof props.sortable === 'boolean' ? props.sortable : !!props.sortable;
    });

    const sort = (which: string) => {
      if (active.value !== which) {
        active.value = which;
      } else {
        active.value = '';
      }
      emit('sort-change', active.value);
    };

    function getActive() {
      return typeof props.sortable !== 'boolean' && props.sortable ? props.sortable : '';
    }

    watch(
      () => props.sortable,
      () => {
        active.value = getActive();
      },
    );

    return {
      active,
      shouldShow,
      sort,
    };
  },
});
</script>
