import { render } from '@testing-library/react';
import BlogPostHeader from './BlogPostHeader';

test('renders BlogPostHeader with all props', () => {
  const { getByText, getByAltText } = render(
    <BlogPostHeader
      title="The Untold Story of the First Computer"
      subtitle="Exploring the history and impact of early computing machines"
      date="July 12, 2024"
      authorName="Author Name"
      authorProfilePicture="/author.jpg"
      tag="Tech"
      readingTime="5 min"
      blogImage="/blog-image.jpg"
      excerpt="This is an example excerpt of the blog post"
      commentsCount={44}
      likesCount={77}
    />
  );
  expect(getByText('The Untold Story of the First Computer')).toBeInTheDocument();
  expect(getByText('Exploring the history and impact of early computing machines')).toBeInTheDocument();
  expect(getByText('Author Name')).toBeInTheDocument();
  expect(getByAltText('Author Name')).toBeInTheDocument();
  expect(getByText('Tech')).toBeInTheDocument();
  expect(getByText("This is an example excerpt of the blog post")).toBeInTheDocument();
  expect(getByText('44')).toBeInTheDocument();
  expect(getByText('77')).toBeInTheDocument();
});
