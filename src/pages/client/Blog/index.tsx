import BlogListWithSidebar from '@/features/BlogList/BlogListWithSidebar';
import React, { memo } from 'react';

const Blog = memo((): React.ReactElement => {
  return (
    <>
      <BlogListWithSidebar />
    </>
  );
});

export default Blog;
