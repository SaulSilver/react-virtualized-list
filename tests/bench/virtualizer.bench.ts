import { bench, describe } from "vitest";

import { useVirtualizer } from "../../src/useVirtualizer";

describe("useVirtualizer performance", () => {
  bench("computes windows for a 100k item list", () => {
    const result = useVirtualizer({
      itemCount: 100_000,
      itemHeight: 32,
      viewportHeight: 640,
      scrollTop: 1_234_567,
      overscan: 8,
    });

    if (result.virtualItems.length === 0) {
      throw new Error("Expected virtual items to be produced");
    }
  });

  bench("recomputes windows across many scroll positions", () => {
    let checksum = 0;

    for (let scrollTop = 0; scrollTop < 2_000_000; scrollTop += 257) {
      const result = useVirtualizer({
        itemCount: 100_000,
        itemHeight: 32,
        viewportHeight: 640,
        scrollTop,
        overscan: 8,
      });

      checksum += result.virtualItems.length;
    }

    if (checksum <= 0) {
      throw new Error("Expected benchmark checksum to be positive");
    }
  });
});