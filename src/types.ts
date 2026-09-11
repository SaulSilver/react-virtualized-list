import type { Key, ReactNode } from "react";

export type VirtualItem = {
  index: number;
  start: number;
  size: number;
};

export type UseVirtualizerOptions = {
  itemCount: number;
  itemHeight: number;
  viewportHeight: number;
  scrollTop: number;
  overscan?: number;
};

export type UseVirtualizerResult = {
  totalHeight: number;
  startIndex: number;
  endIndex: number;
  virtualItems: VirtualItem[];
};

export type VirtualListProps<T> = {
  items: T[];
  height: number;
  itemHeight: number;
  overscan?: number;
  renderItem: (item: T, index: number) => ReactNode;
  getItemKey?: (item: T, index: number) => Key;
};