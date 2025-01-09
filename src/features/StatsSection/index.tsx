import React, { memo, useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const StatsSection = memo((): React.ReactElement => {
  const stats = [
    {
      id: 1,
      icon: '/vlearning/students.png',
      number: 9000,
      label: 'Học viên'
    },
    {
      id: 2,
      icon: '/vlearning/timetable.png',
      number: 1000,
      label: 'Khóa học'
    },
    {
      id: 3,
      icon: '/vlearning/hourglass.png',
      number: 33200,
      label: 'Giờ học'
    },
    {
      id: 4,
      icon: '/vlearning/teacher.png',
      number: 400,
      label: 'Giảng viên'
    }
  ];

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center space-y-4">
              <img
                src={stat.icon}
                alt={stat.label}
                className="w-16 h-16 sm:w-20 sm:h-20"
              />

              <p className="text-4xl sm:text-5xl leading-snug font-extrabold text-pink-500">
                {hasAnimated ? (
                  <CountUp end={stat.number ?? 0} duration={2} />
                ) : (
                  stat.number
                )}
              </p>
              <h2 className="text-base md:text-lg lg:text-xl text-blue-900 font-bold uppercase tracking-wide">
                {stat.label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default StatsSection;
