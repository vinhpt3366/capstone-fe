import React from 'react';
import { CheckCircle } from 'lucide-react';

interface OverviewListProps {
  title: string;
  items: string[];
}

const OverviewList: React.FC<OverviewListProps> = ({ title, items }) => (
  <div>
    <h3 className="font-semibold mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2">
          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const CourseOverview: React.FC = () => (
  <section className="bg-white rounded-lg shadow-sm p-6">
    <h2 className="text-xl font-semibold mb-6">
      Tại sao bạn nên học khóa học này?
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      <OverviewList
        title="Bạn sẽ học được:"
        items={[
          'Xây dựng ứng dụng React với TypeScript từ A-Z',
          'Hiểu sâu về React Hooks và Custom Hooks',
          'Áp dụng các design patterns hiện đại'
        ]}
      />
      <OverviewList
        title="Phù hợp với:"
        items={[
          'Frontend developers muốn nâng cao kỹ năng',
          'Developers đã biết JavaScript cơ bản',
          'Người muốn chuyển sang Frontend Development'
        ]}
      />
    </div>
  </section>
);
