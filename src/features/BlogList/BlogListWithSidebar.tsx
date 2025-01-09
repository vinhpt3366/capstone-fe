import React, { useState } from 'react';
import BlogCard from './BlogCard';
import Sidebar from './Sidebar';
import Button from '@/components/Button/Button';

const BlogListWithSidebar: React.FC = () => {
  const blogs = [
    {
      title: 'Học React từ cơ bản đến nâng cao',
      description:
        'React là một thư viện JavaScript phổ biến để xây dựng giao diện người dùng. Hãy khám phá cách sử dụng React trong dự án của bạn.',
      image: '/images/pic2.jpg',
      date: '05/01/2025',
      author: 'Nguyễn Văn A',
      link: '#',
      views: 100,
      likes: 100,
      comments: 100
    },
    {
      title: 'Tailwind CSS: Tương lai của thiết kế web',
      description:
        'Tailwind CSS mang lại cách tiếp cận mới mẻ cho việc thiết kế giao diện web. Tìm hiểu cách sử dụng nó để tăng tốc độ phát triển.',
      image: '/images/pic2_1.jpg',
      date: '04/01/2025',
      author: 'Trần Thị B',
      link: '#'
    },
    {
      title: 'Node.js: Xây dựng ứng dụng server-side mạnh mẽ',
      description:
        'Node.js là nền tảng lý tưởng để xây dựng các ứng dụng server-side. Học cách triển khai Node.js trong dự án của bạn.',
      image: '/images/pic2.jpg',
      date: '03/01/2025',
      author: 'Lê Văn C',
      link: '#',
      likes: 150
    },
    {
      title: 'Node.js: Xây dựng ứng dụng server-side mạnh mẽ',
      description:
        'Node.js là nền tảng lý tưởng để xây dựng các ứng dụng server-side. Học cách triển khai Node.js trong dự án của bạn.',
      image: '/images/pic2_1.jpg',
      date: '03/01/2025',
      author: 'Lê Văn C',
      link: '#',
      likes: 150
    }
  ];

  const [visibleBlogs, setVisibleBlogs] = useState(2);
  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 2);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
      <Sidebar />

      <div className="flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogs.slice(0, visibleBlogs).map((blog, index) => (
            <BlogCard key={index} options={blog} />
          ))}
        </div>

        {visibleBlogs < blogs.length && (
          <div className="flex justify-center mt-8">
            <Button text="Load More" onClick={handleLoadMore} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogListWithSidebar;
