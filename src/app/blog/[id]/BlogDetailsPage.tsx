"use client";

import RelatedArticle from "./RelatedArticle";

const BlogDetailsPage = () => {
  return (
    <div>
      <div className="flex flex-col pl-[30px] md:pl-[0]">
        Blog Details Section
        <RelatedArticle />
      </div>
    </div>
  );
};

export default BlogDetailsPage;
