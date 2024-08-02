"use server";

import { getApiUrl } from "~/utils/getApiUrl";
import BlogDetailsPage from "./_components/BlogDetailsPage";

const page = async ({ params }: { params: { id: string } }) => {
  const url = await getApiUrl();
  return (
    <div>
      <BlogDetailsPage id={params.id} url={url} />
    </div>
  );
};

export default page;
