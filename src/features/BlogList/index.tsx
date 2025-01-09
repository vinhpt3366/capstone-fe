import React from 'react';
import BlogCard from './BlogCard';

const BlogList: React.FC = () => {
  const blogs = [
    {
      title: 'Học React từ cơ bản đến nâng cao',
      description:
        'React là một thư viện JavaScript phổ biến để xây dựng giao diện người dùng. Hãy khám phá cách sử dụng React trong dự án của bạn.',
      image: '/images/pic2.jpg',
      date: '05/01/2025',
      author: 'Nguyễn Văn A',
      link: '#',
      views: 1200,
      likes: 300,
      comments: 45
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
      image: '/images/pic2_1.jpg',
      date: '03/01/2025',
      author: 'Lê Văn C',
      link: '#',
      likes: 150
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  gap-8">
      {blogs.map((blog, index) => (
        <BlogCard key={index} options={blog} />
      ))}
    </div>
  );
};

export default BlogList;
