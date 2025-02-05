; (() => {
  const defaultLang = localStorage.getItem('epp_lang') || 'zh-CN'
  const path = location.pathname
  if (!path.includes('/en-US') && !path.includes('/zh-CN')) {
    location.href = `${process.env.NODE_ENV === 'production' ? '/element-plus-plus/' : '/'}${defaultLang}`
  }

  navigation.addEventListener('navigate', (event) => {
    const url = event.destination.url
    if (url.indexOf('en-US') > -1) {
      localStorage.setItem('epp_lang', 'en-US')
    } else {
      localStorage.setItem('epp_lang', 'zh-CN')
    }
  });
})()
