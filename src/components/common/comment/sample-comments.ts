import { CommentProperties } from ".";

export const sampleComments: Omit<CommentProperties, "session">[] = [
  {
    id: "1",
    avatar: "",
    name: "Uduak Essien",
    username: "Uduess",
    content:
      "Living a balanced lifestyle is essential. Focus on healthy eating, regular exercise, and mental well-being. A well-rounded lifestyle leads to a happier, more fulfilling life. Embrace positive habits and enjoy the journey.",
    timestamp: "2024-07-24T06:53:16.073Z",
    likes: 0,
    dislikes: 0,
  },
  {
    id: "2",
    avatar: "",
    name: "John Doe",
    username: "johnd",
    content:
      "Technology is rapidly changing our world. It's fascinating to see how AI and machine learning are revolutionizing various industries. We need to stay adaptable and keep learning to thrive in this digital age.",
    timestamp: "2024-07-24T06:53:16.073Z",
    likes: 15,
    dislikes: 2,
  },
  {
    id: "3",
    avatar: "",
    name: "Jane Smith",
    username: "janes",
    content:
      "Climate change is a pressing issue that requires immediate action. We all need to do our part in reducing our carbon footprint. Small changes in our daily lives can make a big difference when we act collectively.",
    timestamp: "2024-07-24T06:53:16.073Z",
    likes: 30,
    dislikes: 3,
  },
];
