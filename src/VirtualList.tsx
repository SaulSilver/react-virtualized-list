import { useState } from "react";

import { useVirtualizer } from "./useVirtualizer";
import type { VirtualListProps } from "./types";

export function VirtualList<T>({
  items,
  height,
  itemHeight,
  overscan = 3,
  renderItem,
  getItemKey,
}: VirtualListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);

  const { totalHeight, virtualItems } = useVirtualizer({
    itemCount: items.length,
    itemHeight,
    viewportHeight: height,
    scrollTop,
    overscan,
  });

  return (
    <div
      style={{
        height,
        overflowY: "auto",
        position: "relative",
        width: "100%",
      }}
      onScroll={(event) => {
        setScrollTop(event.currentTarget.scrollTop);
      }}
    >
      <div
        style={{
          height: totalHeight,
          position: "relative",
          width: "100%",
        }}
      >
        {virtualItems.map((virtualItem) => {
          const item = items[virtualItem.index];
          const key = getItemKey
            ? getItemKey(item, virtualItem.index)
            : virtualItem.index;

          return (
            <div
              key={key}
              style={{
                position: "absolute",
                top: virtualItem.start,
                left: 0,
                right: 0,
                height: virtualItem.size,
              }}
            >
              {renderItem(item, virtualItem.index)}
            </div>
          );
        })}
      </div>
    </div>
  );
}