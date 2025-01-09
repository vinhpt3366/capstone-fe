import { ArrowRight } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="relative min-h-[400px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('/vlearning/bg-about.png')] 
          bg-cover bg-center bg-no-repeat"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 to-slate-900/90 opacity-100" />

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div
            className="text-lg md:text-xl font-medium text-emerald-400 
              tracking-wide mb-4"
          >
            V LEARNING HỌC LÀ VUI
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Cùng nhau khám phá
            <span className="block mt-2 text-yellow-400">
              những điều mới mẻ
            </span>
          </h1>

          <p className="text-xl text-gray-200 font-medium">
            Học đi đôi với hành
          </p>

          <div className="mt-8">
            <button
              className="group px-6 py-3 bg-yellow-400 hover:bg-yellow-500 
                text-slate-900 rounded-lg font-medium
                transition-all duration-300 transform hover:scale-105
                flex items-center gap-2 mx-auto"
            >
              Khám phá ngay
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />

        <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
