import { describe, expect, it } from "vitest";

import { useVirtualizer } from "../src/useVirtualizer";

describe("useVirtualizer", () => {
  it("calculates the rendered window with overscan", () => {
    const result = useVirtualizer({
      itemCount: 100,
      itemHeight: 40,
      viewportHeight: 200,
      scrollTop: 120,
      overscan: 2,
    });

    expect(result.totalHeight).toBe(4000);
    expect(result.startIndex).toBe(1);
    expect(result.endIndex).toBe(10);
    expect(result.virtualItems).toHaveLength(9);
    expect(result.virtualItems[0]).toEqual({ index: 1, start: 40, size: 40 });
    expect(result.virtualItems[result.virtualItems.length - 1]).toEqual({
      index: 9,
      start: 360,
      size: 40,
    });
  });

  it("clamps the window to the available item count", () => {
    const result = useVirtualizer({
      itemCount: 3,
      itemHeight: 32,
      viewportHeight: 128,
      scrollTop: 0,
      overscan: 10,
    });

    expect(result.startIndex).toBe(0);
    expect(result.endIndex).toBe(3);
    expect(result.virtualItems).toHaveLength(3);
  });
});