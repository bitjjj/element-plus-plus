<template>
  <el-button type="primary" class="m-l-md" @click="openPlay">Play</el-button>
</template>

<script setup lang="ts">
import { XMAP_IMPORT, utoa } from './util'
import styleSource from './style.scss?raw'

const props = defineProps({
  sourceCode: String,
  package: {
    type: String,
    default: 'core',
  },
})

const openPlay = () => {
  const runtimeCode = props.sourceCode!
  const tplStart = runtimeCode.indexOf('<template>'),
    tplEnd = runtimeCode.indexOf('</template>')
  const templateStr = runtimeCode.substring(tplStart, tplEnd)
  let tags = [...templateStr.matchAll(/<([a-zA-Z0-9$_-]+)[^<>]*>/g)]
    .map((g) => (g[1] && g[1].startsWith('epp-') ? g[1] : ''))
    .filter((t) => t)
    .map((t) => t.replace(/-(.)/g, (_, $1) => $1.toUpperCase()))
    .map((t) => t[0].toUpperCase() + t.slice(1))
  tags = Array.from(new Set([...tags]))

  const codeLines = runtimeCode.split('\n')
  const scriptLine = codeLines.findIndex((c) => c.includes('<script'))

  if (tags.length) {
    codeLines.splice(
      scriptLine + 1,
      0,
      `import { ${tags.join(', ')} } from 'element-plus-plus'`
    )
  }

  const source = `${codeLines.join('\r\n')}
<style>
@import 'https://fastly.jsdelivr.net/npm/element-plus-plus@latest/index.css';
${styleSource.split('/*Override Default Vitepress Theme*/')[0]}
</style>
`

  const MAIN_FILE_NAME = 'App.vue'
  const originCode = {
    [MAIN_FILE_NAME]: source,
    'import_map.json': JSON.stringify(XMAP_IMPORT[props.package]),
  }

  const encoded = utoa(JSON.stringify(originCode))
  const link = `https://element-plus.run/#${encoded}`
  window.open(link, '_blank')
}
</script>
