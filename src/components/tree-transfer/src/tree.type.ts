export type TreeProps = {
  nodeKey: string;
  lazy: boolean;
  checkStrictly: boolean;
  showCheckbox: boolean;
  filterNodeMethod: (query: string, data: unknown) => boolean;
  props: {
    label: string;
    isLeaf: boolean;
    children: string;
    disabled: string;
  };
  data: Array<unknown>;
  [x: string]: any;
};
