import React from 'react';
import FounderCard from './FounderCard';

const founders = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Chief Executive Officer',
    image: '/vlearning/instrutor6.jpg',
    bio: 'Định hướng chiến lược & tầm nhìn',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'sarah@company.com'
    }
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Chief Technology Officer',
    image: '/vlearning/instrutor5.jpg',
    bio: 'Kiến trúc hệ thống & công nghệ',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'david@company.com'
    }
  },
  {
    id: 3,
    name: 'Emily Nguyen',
    role: 'Chief Marketing Officer',
    image: '/vlearning/instrutor7.jpg',
    bio: 'Marketing số & Phát triển thương hiệu',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'emily@company.com'
    }
  },
  {
    id: 4,
    name: 'Alex Wong',
    role: 'Chief Product Officer',
    image: '/vlearning/instrutor8.jpg',
    bio: 'Chiến lược sản phẩm & UX',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'alex@company.com'
    }
  },
  {
    id: 5,
    name: 'Lisa Park',
    role: 'Chief Design Officer',
    image: '/vlearning/instrutor9.jpg',
    bio: 'Thiết kế & Trải nghiệm người dùng',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'lisa@company.com'
    }
  },
  {
    id: 6,
    name: 'Michael Zhang',
    role: 'Chief Financial Officer',
    image: '/vlearning/instrutor10.jpg',
    bio: 'Chiến lược tài chính & Đầu tư',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      email: 'michael@company.com'
    }
  }
];

const CoFounders = () => {
  const combinedFounders = [...founders, ...founders];

  return (
    <section className="relative overflow-hidden bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-black to-pink-900/20" />

      <div className="relative mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Đội ngũ đồng sáng lập
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Những người tiên phong định hình tương lai công nghệ
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="animate-infinite-scroll space-x-8 py-4">
            {combinedFounders.map((founder, index) => (
              <FounderCard key={index} founder={founder} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoFounders;
