export interface Squeeze {
  title: string;
  uri: string;
  status: boolean;
  created_at: string;
}

export interface User {
  name: string;
  email: string;
  squeeze_page: string;
  date: string;
}

export const squeezePages: Squeeze[] = [
  {
    title: "Hypernova Headphones",
    uri: "hypernova-headphones",
    status: true,
    created_at: "2024-07-16 10:36AM",
  },
  {
    title: "Galaxy Tablet",
    uri: "galaxy-tablet",
    status: true,
    created_at: "2024-07-14 03:15PM",
  },
  {
    title: "Astro Smartwatch",
    uri: "astro-smartwatch",
    status: false,
    created_at: "2024-07-10 09:20AM",
  },
  {
    title: "Nebula Laptop",
    uri: "nebula-laptop",
    status: true,
    created_at: "2024-07-08 01:45PM",
  },
];

export const squeezeUsers: User[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    squeeze_page: "page1",
    date: "2024-07-16 10:36AM",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    squeeze_page: "page2",
    date: "2024-07-17 11:00AM",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    squeeze_page: "page3",
    date: "2024-07-18 12:15PM",
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    squeeze_page: "page4",
    date: "2024-07-19 09:45AM",
  },
  {
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    squeeze_page: "page5",
    date: "2024-07-20 08:30AM",
  },
  {
    name: "Daisy Miller",
    email: "daisy.miller@example.com",
    squeeze_page: "page6",
    date: "2024-07-21 07:50AM",
  },
  {
    name: "Ethan Wilson",
    email: "ethan.wilson@example.com",
    squeeze_page: "page7",
    date: "2024-07-22 01:20PM",
  },
  {
    name: "Fiona Taylor",
    email: "fiona.taylor@example.com",
    squeeze_page: "page8",
    date: "2024-07-23 02:35PM",
  },
  {
    name: "George Harris",
    email: "george.harris@example.com",
    squeeze_page: "page9",
    date: "2024-07-24 03:40PM",
  },
  {
    name: "Hannah White",
    email: "hannah.white@example.com",
    squeeze_page: "page10",
    date: "2024-07-25 04:55PM",
  },
];
