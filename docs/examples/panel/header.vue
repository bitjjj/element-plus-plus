<template>
  <el-row :gutter="16">
    <el-col :span="12">
      <epp-panel footer-align="align-left">
        <template #header>
          <div class="panel-header-left">
            <el-icon size="20"><Monitor /></el-icon>
          </div>
          <div class="panel-title">Title</div>
          <div class="panel-header-right">
            <button class="panel-close"></button>
          </div>
        </template>
        Panel-Body
      </epp-panel>
    </el-col>

    <el-col :span="12">
      <epp-panel>
        <template #header>
          <div class="panel-header-left">
            <el-tag type="primary">测试</el-tag>
          </div>
          <div class="panel-title">
            <h5>对方正在输入中...</h5>
          </div>
          <div class="panel-header-right">
            <button class="panel-close"></button>
          </div>
        </template>
        Panel-Body
      </epp-panel>
    </el-col>

    <el-col :span="12" class="m-t-lg">
      <epp-panel>
        <template #header>
          <div class="panel-title">Title</div>
          <div class="panel-header-right">
            <el-input placeholder="请输入内容">
              <template #suffix>
                <el-icon><Search /></el-icon>
              </template>
            </el-input>
          </div>
        </template>
        Panel-Body
      </epp-panel>
    </el-col>

    <el-col :span="12" class="m-t-lg">
      <epp-panel>
        <template #header>
          <div class="panel-title">Title</div>
          <div class="panel-header-right">
            <el-button type="primary" icon-position="right">
              搜索
              <template #icon>
                <el-icon><Search /></el-icon>
              </template>
            </el-button>
          </div>
        </template>
        Panel-Body
      </epp-panel>
    </el-col>

    <el-col :span="12" class="m-t-lg">
      <epp-panel>
        <template #header>
          <div class="panel-title">Title</div>
          <div class="panel-header-right">
            <el-dropdown>
              <el-link type="primary">
                选择 <el-icon><ArrowDownBold /></el-icon>
              </el-link>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>数据流</el-dropdown-item>
                  <el-dropdown-item>传输属性值</el-dropdown-item>
                  <el-dropdown-item>已断线</el-dropdown-item>
                  <el-dropdown-item>待恢复</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </template>
        Panel-Body
      </epp-panel>
    </el-col>

    <el-col :span="12" class="m-t-lg">
      <epp-panel>
        <template #header>
          <div class="panel-title">Title</div>
          <div class="panel-header-right">
            <span class="text-danger">小贴士</span>
          </div>
        </template>
        Panel-Body
      </epp-panel>
    </el-col>
  </el-row>
</template>
<script setup lang="ts">
import { Monitor, ArrowDownBold, Search } from '@element-plus/icons-vue';
</script>
