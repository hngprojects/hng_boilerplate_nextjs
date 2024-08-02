import BlogDetailsPage from "./_components/BlogDetailsPage";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <BlogDetailsPage id={params.id} />
    </div>
  );
};

export default page;
