import { hyphenate } from '@/utils';

import type { ExtractPropTypes, PropType } from 'vue';

export const panelProps = {
  borderless: Boolean,
  outlineless: Boolean,
  collapsed: Boolean,
  fullscreen: {
    type: [Boolean, Object] as PropType<boolean | Record<'left' | 'right' | 'top' | 'bottom', string>>,
    default: false,
  },
  radius: String,
  headerHeight: String,
  padding: String,
  bodyPadding: String,
  footerPadding: String,
  headerClass: String,
  headerStyle: String,
  bodyClass: String,
  bodyStyle: String,
  footerClass: String,
  footerStyle: String,
  fullBody: Boolean,
};
export type PanelProps = ExtractPropTypes<typeof panelProps>;
export type PanelPropKeys = keyof typeof panelProps;

export const panelStyleProps = ['radius', 'padding', 'headerHeight', 'bodyPadding', 'footerPadding'] as const;
export const panelClassProps = ['borderless', 'outlineless', 'collapsed', 'fullscreen', 'fullBody'] as const;

export function usePanelProps(props: PanelProps) {
  const panelClass: Record<string, unknown> = {};
  panelClassProps.forEach((p) => {
    panelClass[hyphenate(p)] = typeof props[p] === 'boolean' ? props[p] : !!props[p];
  });

  const panelStyle: string[] = [];
  panelStyleProps.forEach((p) => {
    const propVal = getPropVal(p);
    panelStyle.push(propVal.val ? `--panel-${propVal.otherName}: ${propVal.val}` : '');
  });
  if (props.fullscreen && typeof props.fullscreen === 'object') {
    ['top', 'bottom', 'left', 'right'].forEach((p) => {
      panelStyle.push(
        (props.fullscreen as Record<string, string>)[p]
          ? `--panel-fullscreen-${p}: ${(props.fullscreen as Record<string, string>)[p]}`
          : '',
      );
    });
  }

  function getPropVal(propName: PanelPropKeys): { val: any; otherName: string } {
    const propNameOther = propName.replace(/([A-Z])/g, (_, $1) => '-' + $1.toLowerCase()) as PanelPropKeys;
    return { val: props[propName] || props[propNameOther], otherName: propNameOther };
  }

  return {
    panelClass,
    headerClass: getPropVal('headerClass').val || '',
    headerStyle: getPropVal('headerStyle').val || '',
    bodyClass: getPropVal('bodyClass').val || '',
    bodyStyle: getPropVal('bodyStyle').val || '',
    footerClass: getPropVal('footerClass').val || '',
    footerStyle: getPropVal('footerStyle').val || '',
    panelStyle,
  };
}
