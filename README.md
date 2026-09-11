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