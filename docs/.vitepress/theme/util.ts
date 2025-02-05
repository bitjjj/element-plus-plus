function utoa(data) {
  return btoa(unescape(encodeURIComponent(data)))
}

const XMAP_IMPORT = {
  core: {
    imports: {
      '@vueuse/core': 'https://fastly.jsdelivr.net/npm/@vueuse/core@latest/index.mjs',
      '@vueuse/shared': 'https://fastly.jsdelivr.net/npm/@vueuse/shared@latest/index.mjs',
      '@vue/shared': 'https://fastly.jsdelivr.net/npm/@vue/shared@latest/dist/shared.esm-bundler.js',
      'sortablejs': 'https://cdn.jsdelivr.net/npm/sortablejs@1.15.6/modular/sortable.esm.js',
      'element-plus-plus':
        'https://fastly.jsdelivr.net/npm/element-plus-plus@latest/element-plus-plus.es.mjs'
        // 'http://localhost:9999/element-plus-plus.es.mjs'
    },
  },
  deck: {},
}

export { utoa, XMAP_IMPORT }
