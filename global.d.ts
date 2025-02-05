declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    EppAlias: typeof import('element-plus-plus')['EppAlias']
    EppAvatarList: typeof import('element-plus-plus')['EppAvatarList']
    EppBanner: typeof import('element-plus-plus')['EppBanner']
    EppConfirmableButton: typeof import('element-plus-plus')['EppConfirmableButton']
    EppDockContainer: typeof import('element-plus-plus')['EppDockContainer']
    EppModelessDialog: typeof import('element-plus-plus')['EppModelessDialog']
    EppOverflowList: typeof import('element-plus-plus')['EppOverflowList']
    EppPanel: typeof import('element-plus-plus')['EppPanel']
    EppSimpleTable: typeof import('element-plus-plus')['EppSimpleTable']
    EppSpinner: typeof import('element-plus-plus')['EppSpinner']
    EppTextOverflow: typeof import('element-plus-plus')['EppTextOverflow']
    EppTreeTransfer: typeof import('element-plus-plus')['EppTreeTransfer']
  }
}

export {}
