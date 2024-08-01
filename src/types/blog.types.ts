import {
  blogCard1,
  blogCard2,
  blogCard3,
  blogCard4,
  blogCard5,
  blogCard6,
} from "../../public/images/blogPage/utils";

export const blogPosts = [
  {
    id: 1,
    title: "The Power of Networking: How to Build Meaningful Connections",
    date: "Jul 12, 2024",
    readTime: "5",
    category: "Business",
    image: blogCard1,
    labelClassName: "bg-primary",
    author: "Nora Nora",
  },
  {
    id: 2,
    title: "The Global Impact of Climate Change: A Look at the Evidence",
    date: "Jul 12, 2024",
    readTime: "5",
    category: "World News",
    image: blogCard2,
    labelClassName: "bg-warning",
    author: "Jane Doe",
  },
  {
    id: 3,
    title: "5 Easy and Delicious Recipes for Busy Weeknights",
    date: "Jul 12, 2024",
    readTime: "5",
    category: "Food",
    image: blogCard3,
    labelClassName: "bg-success",
    author: "John Doe",
  },
  {
    id: 4,
    title: "5 Simple Habits to Improve Your Mental Wellbeing",
    date: "Jul 12, 2024",
    readTime: "5",
    category: "Lifestyle",
    image: blogCard4,
    labelClassName: "bg-primary",
    author: "Jane Doe",
  },
  {
    id: 5,
    title: "The Ultimate Guide to Dressing Stylishly with Fewer Clothes",
    date: "Jul 12, 2024",
    readTime: "5",
    category: "Fashion",
    image: blogCard5,
    labelClassName: "bg-success",
    author: "John Doe",
  },
  {
    id: 6,
    title: "The Future of Travel: What Will the World Look Like in 2030?",
    date: "Jul 12, 2024",
    readTime: "5",
    category: "World News",
    image: blogCard6,
    labelClassName: "bg-warning",
    author: "Nora Nora",
  },
];

export interface IGetLatestBlogs {
  data: ISingleBlog[];
  message: string;
  status_code: number;
}

export interface ISingleBlogResponse {
  data: ISingleBlog;
  message: string;
  status_code: number;
}

export interface ISingleBlog {
  id?: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
  category: string;
  image_url: string;
}
