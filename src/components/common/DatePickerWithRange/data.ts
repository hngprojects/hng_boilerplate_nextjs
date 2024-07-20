interface DataItem {
  id: number;
  name: string;
  date: {
    from: Date;
    to: Date;
  };
}

export const data: DataItem[] = [
  {
    id: 1,
    name: "Item 1",
    date: { from: new Date(2024, 0, 20), to: new Date(2024, 0, 20) },
  },
  {
    id: 2,
    name: "Item 2",
    date: { from: new Date(2024, 0, 22), to: new Date(2024, 0, 23) },
  },
  {
    id: 3,
    name: "Item 3",
    date: { from: new Date(2024, 0, 23), to: new Date(2024, 0, 24) },
  },
  {
    id: 4,
    name: "Item 4",
    date: { from: new Date(2024, 0, 24), to: new Date(2024, 0, 25) },
  },
  {
    id: 5,
    name: "Item 5",
    date: { from: new Date(2024, 0, 25), to: new Date(2024, 0, 26) },
  },
];
