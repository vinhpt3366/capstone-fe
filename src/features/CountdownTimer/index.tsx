import { Calendar, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date('2025-12-25T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 
          bg-black/50 backdrop-blur-sm rounded-lg 
          p-4 md:p-6 w-[80px] sm:w-[100px] md:w-[120px] text-center
          border border-white/10 shadow-xl"
        >
          {value.toString().padStart(2, '0')}
        </div>
        {/* Glass Effect */}
        <div
          className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-b from-white/20 to-transparent 
          rounded-b-lg blur-sm"
        />
      </div>
      <span className="text-white font-medium mt-2 text-base sm:text-lg drop-shadow-lg">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative w-full min-h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/vlearning/backroundTech.jpg')] 
        bg-cover bg-center bg-no-repeat"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-8">
        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 mb-8 max-w-3xl mx-auto">
          <TimeUnit value={timeLeft.days} label="Ngày" />
          <TimeUnit value={timeLeft.hours} label="Giờ" />
          <TimeUnit value={timeLeft.minutes} label="Phút" />
          <TimeUnit value={timeLeft.seconds} label="Giây" />
        </div>

        {/* Event Details */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg uppercase">
            Sự kiện công nghệ lớn nhất 2025
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-yellow-400" />
              <span className="drop-shadow-lg">20 - 25 tháng 12, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-yellow-400" />
              <span className="drop-shadow-lg">Việt Nam</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
