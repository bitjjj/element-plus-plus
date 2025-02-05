import { isClient, isIOS } from '@vueuse/core';

export const isFirefox = (): boolean => isClient && /firefox/i.test(window.navigator.userAgent);

export function supportTouch() {
  const inBrowser = typeof window !== 'undefined';
  return inBrowser && 'ontouchstart' in window;
}

export { isClient, isIOS };
