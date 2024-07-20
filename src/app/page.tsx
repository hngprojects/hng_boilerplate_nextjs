import BlogPostHeader from '../components/BlogPostHeader/BlogPostHeader';

const HomePage = () => {
  return (
    <div>
      <BlogPostHeader
        title="The Untold Story of the First Computer"
        subtitle="Exploring the history and impact of early computing machines."
        date="July 12, 2024"
        authorName="Nora Nora"
        authorProfilePicture="/author.svg"
        tag="BUSINESS"
        readingTime="5 min"
        blogImage="/blog-image.jpg"
        excerpt="This is an example excerpt of the blog post."
        commentsCount={44}
        likesCount={77}
      />
    </div>
  );
};

export default HomePage;
