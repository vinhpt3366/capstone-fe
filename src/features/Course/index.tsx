import React from 'react';
import {
  BookOpen,
  GraduationCap,
  Users,
  Award,
  CheckCircle2
} from 'lucide-react';

interface FeatureCardProps {
  title: string;
  features: string[];
  icon: React.ReactNode;
  className?: string;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  features,
  icon,
  className = '',
  gradient
}) => (
  <div
    className={`
    relative rounded-xl p-6 h-full bg-white shadow-lg
    before:absolute before:inset-0 before:rounded-xl before:opacity-0 
    ${gradient} before:transition-all before:duration-300
    hover:before:opacity-100 hover:-translate-y-1 
    transition-all duration-300 group
    border border-transparent hover:border-pink-500/20
    ${className}
  `}
  >
    <div className="relative z-10 flex flex-col h-full">
      {/* Icon & Title */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-pink-500 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
      </div>

      {/* Features List */}
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 text-pink-500 group-hover:text-white mt-1 flex-shrink-0 transition-colors duration-300" />
            <p className="text-gray-600 group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CourseFeatures: React.FC = () => {
  const features = [
    {
      title: 'KHÓA HỌC',
      icon: <BookOpen className="w-6 h-6" />,
      gradient:
        'before:bg-gradient-to-br before:from-orange-400 before:to-pink-500',
      features: [
        'Học qua dự án thực tế, học đi đôi với hành, không lý thuyết lan man',
        'Hơn 1000 bài tập và dự án thực tế',
        'Công nghệ cập nhật mới nhất',
        'Hình ảnh, ví dụ, bài giảng sinh động trực quan',
        'Tư duy phân tích, giải quyết vấn đề trong dự án',
        'Cơ hội thực tập tại các công ty FPT, Microsoft'
      ]
    },
    {
      title: 'LỘ TRÌNH PHÙ HỢP',
      icon: <GraduationCap className="w-6 h-6" />,
      gradient:
        'before:bg-gradient-to-br before:from-orange-400 before:to-pink-500',
      features: [
        'Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao',
        'Học, luyện tập code, kỹ thuật phân tích, soft skill',
        'Huấn luyện để phát triển năng lực và niềm đam mê lập trình'
      ]
    },
    {
      title: 'HỆ THỐNG HỌC TẬP',
      icon: <Users className="w-6 h-6" />,
      gradient:
        'before:bg-gradient-to-br before:from-orange-400 before:to-pink-500',
      features: [
        'Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên',
        'Thống kê lượt xem video, làm bài, điểm số theo chu kỳ',
        'Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập'
      ]
    },
    {
      title: 'CHỨNG NHẬN',
      icon: <Award className="w-6 h-6" />,
      gradient:
        'before:bg-gradient-to-br before:from-orange-400 before:to-pink-500',
      features: [
        'Chấm bài và có thể vấn đáp trực tuyến để review',
        'Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo',
        'Kết nối CV của bạn đến với các đối tác của V learning'
      ]
    }
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-transparent text-pink-500 text-sm font-medium rounded-full mb-4">
            TÍNH NĂNG
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Tính Năng Nổi Bật
          </h2>
          <p className="text-gray-600">
            Khám phá các tính năng độc đáo giúp việc học lập trình trở nên hiệu
            quả hơn
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
