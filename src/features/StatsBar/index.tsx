import React from 'react';
import CountUp from 'react-countup';
import {
  Monitor,
  Camera,
  Briefcase,
  BookOpen,
  Video,
  Hexagon
} from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  bgColor: string;
}

const StatItem = ({ icon, label, value, bgColor }: StatItemProps) => (
  <div
    className={`
      ${bgColor} 
      p-4
      flex flex-col items-center justify-center 
      text-white
      transition-all duration-300 ease-in-out
      hover:brightness-110
      w-full
      min-w-[140px]
      h-32
    `}
  >
    <div className="mb-2 transition-transform duration-300 ease-in-out hover:scale-110">
      {React.cloneElement(icon as React.ReactElement, {
        className: 'w-6 h-6'
      })}
    </div>
    <div className="font-bold text-xl sm:text-2xl mb-1 tabular-nums">
      <CountUp
        end={value}
        duration={2}
        separator=","
        enableScrollSpy
        scrollSpyOnce
      />
    </div>
    <div className="text-sm uppercase tracking-wide text-white/90 text-center">
      {label}
    </div>
  </div>
);

const StatsBar = () => {
  const stats: StatItemProps[] = [
    {
      icon: <Monitor />,
      label: 'Chương trình học',
      value: 300,
      bgColor: 'bg-slate-700'
    },
    {
      icon: <Camera />,
      label: 'Nhà sáng tạo',
      value: 10000,
      bgColor: 'bg-emerald-500'
    },
    {
      icon: <Briefcase />,
      label: 'Nhà thiết kế',
      value: 400,
      bgColor: 'bg-yellow-400'
    },
    {
      icon: <BookOpen />,
      label: 'Bài giảng',
      value: 3000,
      bgColor: 'bg-orange-400'
    },
    {
      icon: <Video />,
      label: 'Video',
      value: 40000,
      bgColor: 'bg-red-400'
    },
    {
      icon: <Hexagon />,
      label: 'Lĩnh vực',
      value: 200,
      bgColor: 'bg-rose-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 justify-items-center">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
