<template>
  <teleport to="body">
    <transition :name="animName" @after-enter="afterEnter" @after-leave="afterLeave" @before-leave="beforeLeave">
      <div
        v-show="visible"
        v-bind="$attrs"
        :class="['epp-dock-container', 'epp-panel', 'at-' + placement, customClass]"
        :style="[
          {
            width: width,
            height: height,
            zIndex,
            '--dock-item-width': itemWidth,
            '--dock-item-height': itemHeight,
          },
        ]"
        aria-modal="true"
        role="drawer"
        aria-label="drawer"
        @click.stop
      >
        <div class="panel-body">
          <slot :data="dockItems">
            <el-scrollbar v-if="dockItems.length" ref="scrollbarRef" class="scrollbar">
              <div class="dock-items">
                <el-space
                  v-for="item in dockItems"
                  :key="item.id"
                  class="dock-item"
                  direction="vertical"
                  @click.stop="restoreDockItem(item.id)"
                >
                  <div class="item-content">
                    <slot name="dock-item" :item="item">
                      <template v-if="!item.snapshot">
                        <div class="dock-placeholder media"></div>
                      </template>
                      <template v-else-if="typeof item.snapshot === 'string'">
                        <p class="media text" :title="item.snapshot">{{ item.snapshot }}</p>
                      </template>
                      <template v-else-if="typeof item.snapshot === 'object'">
                        <template v-if="item.snapshot.type === 'image'">
                          <el-image :src="item.snapshot.url" class="media full" fit="cover" />
                        </template>
                        <template v-else-if="item.snapshot.type === 'video'">
                          <video :src="item.snapshot.url" class="media"></video>
                        </template>
                        <template v-else-if="item.snapshot.type === 'audio'">
                          <audio :src="item.snapshot.url" class="media" controls></audio>
                        </template>
                      </template>
                    </slot>
                  </div>
                  <div class="item-title">{{ item.title }}</div>
                  <div class="item-close" @click.stop="closeDockItem(item.id)">
                    <el-icon>
                      <CloseBold />
                    </el-icon>
                  </div>
                </el-space>
              </div>
            </el-scrollbar>
            <p v-if="dockItems.length === 0" class="empty-text">{{ t('el.table.emptyText') }}</p>
          </slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElScrollbar, ElSpace, ElIcon, ElImage, useLocale } from 'element-plus';
import { CloseBold } from '@element-plus/icons-vue';
import { dockContainerProps, dockContainerEmits } from './dock-container';
import { useDockContainer } from './use-dock-container';

defineOptions({
  name: 'EppDockContainer',
  inheritAttrs: false,
});

const props = defineProps(dockContainerProps);
defineEmits(dockContainerEmits);

const scrollbarRef = ref();
const { t } = useLocale();
// const dialogRef = ref<HTMLElement>();

const {
  afterEnter,
  afterLeave,
  beforeLeave,
  // handleClose,
  // closed,
  visible,
  zIndex,
  animName,
  dockItems,
  closeDockItem,
  restoreDockItem,
} = useDockContainer(props, scrollbarRef);
</script>
