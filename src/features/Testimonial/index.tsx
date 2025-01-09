import { useEffect, useState } from 'react';

const Testimonial = () => {
  const clients = [
    {
      id: 1,
      name: 'Cak Dikin',
      role: 'CEO & Founder',
      testimonial:
        'Duis feugiat est tincidunt ligula maximus convallis. Aenean ultrices, mi non vestibulum auctor, erat tortor porttitor ipsum, nec dictum tortor sem eget nunc.',
      avatar: '/vlearning/instrutor5.jpg'
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'Marketing Manager',
      testimonial:
        'Etiam sed posuere augue, ut malesuada erat. Nam ipsum tellus, tempus vel ante ut, aliquet finibus dui. Praesent in lacinia, erat tu feugiat fringilla.',
      avatar: '/vlearning/instrutor6.jpg'
    },
    {
      id: 3,
      name: 'John Smith',
      role: 'Software Engineer',
      testimonial:
        'Tortor eros ultricies sem, sed finibus massa ex at sem ligula. Duis feugiat est tincidunt ligula maximus convallis. Aenean ultrices, mi non vestibulum auctor.',
      avatar: '/vlearning/instrutor7.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Increased to 5 seconds for better user experience

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setSlideDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
      setIsAnimating(false);
    }, 500);
  };

  const handleClientClick = (index: number) => {
    if (index === currentIndex) return;

    setSlideDirection(index > currentIndex ? 'right' : 'left');
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-pink-100/50 rounded-full blur-xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-100/50 rounded-full blur-xl -z-10 animate-pulse"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <p className="text-pink-500 font-bold uppercase tracking-wider mb-2">
            Testimonial
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
            See What Our Clients Say's
          </h2>
        </div> */}
        <div className="text-center mb-12">
          <div className="text-pink-500 text-sm font-medium mb-2">
            ĐÁNH GIÁ CỦA HỌC VIÊN
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Học Viên Nói Gì Về Chúng Tôi?
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Avatar Section */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-4 mb-12">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className="relative group cursor-pointer"
              onClick={() => handleClientClick(index)}
            >
              <div
                className={`
                w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden
                transform transition-all duration-500 ease-in-out
                ${currentIndex === index ? 'scale-110 ring-4 ring-pink-500' : 'scale-100 ring-2 ring-gray-200'}
                hover:ring-pink-300 group-hover:scale-105
              `}
              >
                <img
                  src={client.avatar}
                  alt={client.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* {currentIndex === index && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-500 rounded-full"></div>
              )} */}
            </div>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-3xl mx-auto">
          <div
            className={`
              bg-white rounded-xl shadow-xl p-8 sm:p-10
              transform transition-all duration-500 ease-in-out
              ${
                isAnimating
                  ? `${
                      slideDirection === 'right'
                        ? 'translate-x-full opacity-0'
                        : '-translate-x-full opacity-0'
                    }`
                  : 'translate-x-0 opacity-100'
              }
            `}
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                {clients[currentIndex].name}
              </h3>
              <p className="text-pink-500 text-sm sm:text-base font-semibold">
                {clients[currentIndex].role}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {clients[currentIndex].testimonial}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
