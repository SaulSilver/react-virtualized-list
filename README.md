# react-virtualized-list

A lightweight React virtualized list library for fixed-height rows.

## Install

```bash
npm install react-virtualized-list
```

## Usage

```tsx
import { VirtualList } from "react-virtualized-list";

export function Example() {
  return (
    <VirtualList
      items={["Alpha", "Beta", "Gamma"]}
      height={320}
      itemHeight={40}
      renderItem={(item) => <div>{item}</div>}
    />
  );
}
```

## Performance Benchmarks

The benchmark suite stresses `useVirtualizer` with a 100,000-item list and repeated scroll-position recomputation.

Latest local benchmark run:

| Benchmark | Throughput |
| --- | ---: |
| Compute windows for a 100k item list | 7,972,375.59 hz |
| Recompute windows across many scroll positions | 1,342.99 hz |

Run the benchmark locally with:

```bash
npm run bench
```

Benchmark results vary by machine and Vitest version.