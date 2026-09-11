import type {
  UseVirtualizerOptions,
  UseVirtualizerResult,
  VirtualItem,
} from "./types";

export function useVirtualizer({
  itemCount,
  itemHeight,
  viewportHeight,
  scrollTop,
  overscan = 3,
}: UseVirtualizerOptions): UseVirtualizerResult {
  const totalHeight = itemCount * itemHeight;
  const rawStartIndex = Math.floor(scrollTop / itemHeight);
  const startIndex = Math.max(0, rawStartIndex - overscan);
  const visibleItemCount = Math.ceil(viewportHeight / itemHeight);
  const endIndex = Math.min(
    itemCount,
    rawStartIndex + visibleItemCount + overscan
  );

  const virtualItems: VirtualItem[] = [];

  for (let index = startIndex; index < endIndex; index += 1) {
    virtualItems.push({
      index,
      start: index * itemHeight,
      size: itemHeight,
    });
  }

  return {
    totalHeight,
    startIndex,
    endIndex,
    virtualItems,
  };
}