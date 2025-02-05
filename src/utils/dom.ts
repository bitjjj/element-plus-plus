import { camelize, isObject, isString } from '@vue/shared';
import { isNumber } from '@vueuse/core';
import { isServer } from './funcs';

import type { CSSProperties } from 'vue';

// Same as the return type
export const getStyle = function (element: HTMLElement, styleName: string): string | null {
  if (isServer) return null;
  if (!element || !styleName) return null;
  styleName = camelize(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    const style = element.style[styleName as any];
    if (style) return style;
    const computed = document.defaultView!.getComputedStyle(element, '');
    return computed ? computed[styleName as any] : '';
  } catch (e) {
    return element.style[styleName as any];
  }
};

/* istanbul ignore next */
export function setStyle(element: HTMLElement, styleName: CSSProperties | string, value?: string): void {
  if (!element || !styleName) return;

  if (isObject(styleName)) {
    Object.keys(styleName).forEach((prop) => {
      setStyle(element, prop, (styleName as any)[prop]);
    });
  } else {
    styleName = camelize(styleName);
    element.style[styleName as any] = value!;
  }
}

export function removeStyle(element: HTMLElement, style: CSSProperties | string) {
  if (!element || !style) return;

  if (isObject(style)) {
    Object.keys(style).forEach((prop) => {
      setStyle(element, prop, '');
    });
  } else {
    setStyle(element, style, '');
  }
}

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) return '';
  if (isString(value)) {
    return value;
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
}
