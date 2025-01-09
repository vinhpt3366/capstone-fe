import { ArrowRight } from 'lucide-react';

interface ContentSectionProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  imageUrl: string;
  isReversed?: boolean;
}

const ContentSection = ({
  title,
  subtitle,
  description,
  features,
  imageUrl,
  isReversed
}: ContentSectionProps) => (
  <div
    className={`
    flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}
    items-center gap-8 py-16 px-4
  `}
  >
    {/* Image Section */}
    <div className="w-full md:w-1/2">
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>

    {/* Content Section */}
    <div className="w-full md:w-1/2 space-y-6">
      <div className="space-y-2">
        <p className="text-pink-600 font-medium">{subtitle}</p>
        <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
      </div>

      <p className="text-gray-600 leading-relaxed">{description}</p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-pink-600" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Alternating = () => {
  const sections: ContentSectionProps[] = [
    {
      title: 'Build Your Business Website Better',
      subtitle: 'About Us',
      description:
        'Chúng tôi giúp doanh nghiệp của bạn xây dựng website chuyên nghiệp, tối ưu trải nghiệm người dùng và tăng tỷ lệ chuyển đổi thông qua các giải pháp thiết kế web hiện đại.',
      features: [
        'Thiết kế website responsive trên mọi thiết bị',
        'Tối ưu hóa tốc độ và hiệu suất',
        'Tích hợp các công cụ marketing hiện đại'
      ],
      imageUrl: '/vlearning/hero-flex.png'
    },
    {
      title: 'Optimize Your Digital Presence',
      subtitle: 'Our Services',
      description:
        'Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cung cấp các giải pháp tối ưu hóa hiện diện số toàn diện cho doanh nghiệp của bạn.',
      features: [
        'Phân tích và tối ưu SEO toàn diện',
        'Chiến lược content marketing hiệu quả',
        'Quản lý mạng xã hội chuyên nghiệp'
      ],
      imageUrl: '/vlearning/education-hero.png',
      isReversed: true
    },
    {
      title: 'Custom Development Solutions',
      subtitle: 'Technology',
      description:
        'Phát triển các giải pháp phần mềm tùy chỉnh đáp ứng nhu cầu đặc thù của doanh nghiệp, từ ứng dụng web đến hệ thống quản lý.',
      features: [
        'Phát triển ứng dụng web tùy chỉnh',
        'Tích hợp API và microservices',
        'Bảo mật và hiệu suất cao'
      ],
      imageUrl: '/vlearning/olstudy.png'
    },
    {
      title: '24/7 Support & Maintenance',
      subtitle: 'Customer Care',
      description:
        'Đội ngũ hỗ trợ kỹ thuật luôn sẵn sàng 24/7 để đảm bảo website của bạn hoạt động ổn định và an toàn.',
      features: [
        'Hỗ trợ kỹ thuật 24/7',
        'Backup và bảo mật thường xuyên',
        'Cập nhật và bảo trì định kỳ'
      ],
      imageUrl: '/vlearning/students2.png',
      isReversed: true
    }
  ];

  return (
    <div className="container mx-auto">
      {sections.map((section, index) => (
        <ContentSection key={index} {...section} />
      ))}
    </div>
  );
};

export default Alternating;
