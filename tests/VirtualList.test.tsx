import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { VirtualList } from "../src/VirtualList";

describe("VirtualList", () => {
  it("renders only the visible items for a large list", () => {
    const items = Array.from({ length: 10_000 }, (_, index) => `Item ${index}`);

    const { container } = render(
      <VirtualList
        items={items}
        height={240}
        itemHeight={24}
        overscan={4}
        renderItem={(item) => <div>{item}</div>}
      />
    );

    expect(screen.getByText("Item 0")).not.toBeNull();
    expect(screen.getByText("Item 13")).not.toBeNull();
    expect(container.querySelectorAll('[style*="position: absolute"]').length).toBe(14);
    expect(screen.queryByText("Item 250")).toBeNull();
  });

  it("updates the rendered window after scrolling", () => {
    const items = Array.from({ length: 1_000 }, (_, index) => `Row ${index}`);

    const { container } = render(
      <VirtualList
        items={items}
        height={200}
        itemHeight={20}
        overscan={2}
        renderItem={(item) => <div>{item}</div>}
      />
    );

    fireEvent.scroll(container.firstElementChild as HTMLElement, {
      target: { scrollTop: 600 },
    });

    expect(screen.getByText("Row 28")).not.toBeNull();
    expect(screen.getByText("Row 32")).not.toBeNull();
    expect(screen.queryByText("Row 0")).toBeNull();
  });
});