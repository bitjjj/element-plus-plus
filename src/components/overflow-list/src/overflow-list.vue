<script lang="ts">
import { defineComponent, h, ref, vShow, withDirectives } from 'vue';
import { ElDropdown, ElDropdownItem, ElDropdownMenu, ElIcon } from 'element-plus';
import { MoreFilled, ArrowDownBold } from '@element-plus/icons-vue';
import { overflowListProps } from './overflow-list';

import type { VNode } from 'vue';

export default defineComponent({
  name: 'EppOverflowList',
  props: overflowListProps,
  setup(props, { slots }) {
    const hasMore = ref(true);

    const show = () => {
      hasMore.value = false;
    };
    const hide = () => {
      hasMore.value = true;
    };

    return () => {
      let childDoms = slots.default?.() ?? [],
        realDoms = childDoms;
      if (
        childDoms.length === 1 &&
        /Symbol\(.*\)/.test(childDoms[0].type.toString()) &&
        childDoms[0]!.children!.length
      ) {
        childDoms = childDoms[0].children as any;
        realDoms = childDoms;
      }

      realDoms = realDoms.filter((rd) => !/Symbol\(.*\)/.test(rd.type.toString()));

      if (realDoms.length <= props.showCount) {
        return h(
          'div',
          {
            class: `epp-overflow-list`,
          },
          realDoms,
        );
      } else {
        if (props.showType === 'tooltip') {
          const dropMenuLen = realDoms.length - 1,
            dropMenuDoms: VNode[] = [];
          for (let i = props.showCount; i <= dropMenuLen; i++) {
            dropMenuDoms.push(h(ElDropdownItem, null, { default: () => realDoms[i] }));
          }
          const dropdown = h(
            ElDropdown,
            { showTimeout: 0, placement: 'bottom', ...props.dropdownProps },
            {
              default: () =>
                slots.more
                  ? slots.more({ hasMore })
                  : h(ElIcon, { style: 'transform:rotate(90deg)' }, { default: () => h(MoreFilled) }),
              dropdown: () => h(ElDropdownMenu, { class: 'overflow-items' }, { default: () => dropMenuDoms }),
            },
          );

          return h(
            'div',
            {
              class: 'epp-overflow-list',
            },
            [realDoms.slice(0, props.showCount), dropdown],
          );
        } else {
          const len = realDoms.length - 1,
            moreItems: VNode[] = [];
          for (let i = props.showCount; i <= len; i++) {
            moreItems.push(withDirectives(h(realDoms[i]), [[vShow, !hasMore.value]]));
          }
          const moreIcon = slots.more
            ? slots.more({ hasMore: hasMore.value, show, hide })
            : h(
                ElIcon,
                {
                  style: hasMore.value ? '' : 'transform:rotate(180deg)',
                  class: 'cursor-pointer',
                  onClick: () => {
                    hasMore.value = !hasMore.value;
                  },
                },
                { default: () => h(ArrowDownBold) },
              );
          return h(
            'div',
            {
              class: `epp-overflow-list`,
            },
            [realDoms.slice(0, props.showCount), ...moreItems, moreIcon],
          );
        }
      }
    };
  },
});
</script>
