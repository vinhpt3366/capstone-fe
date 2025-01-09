import { Star } from 'lucide-react';

interface Instructor {
  id: number;
  name: string;
  avatar: string;
  specialty: string;
  rating: number;
  reviews: number;
}

const TopInstructors = () => {
  const instructors: Instructor[] = [
    {
      id: 1,
      name: 'Big DadMoon',
      avatar: '/vlearning/instrutor5.jpg',
      specialty: 'Chuyên gia lĩnh vực lập trình',
      rating: 4.9,
      reviews: 100
    },
    {
      id: 2,
      name: 'IcarDi MenBor',
      avatar: '/vlearning/instrutor6.jpg',
      specialty: 'Chuyên gia ngôn ngữ Vue Js',
      rating: 4.9,
      reviews: 100
    },
    {
      id: 3,
      name: 'Bladin Slaham',
      avatar: '/vlearning/instrutor7.jpg',
      specialty: 'Chuyên gia hệ thống máy tính',
      rating: 4.9,
      reviews: 100
    },
    {
      id: 4,
      name: 'Chris Andersan',
      avatar: '/vlearning/instrutor8.jpg',
      specialty: 'Chuyên gia lĩnh vực Full Skill',
      rating: 4.9,
      reviews: 100
    },
    {
      id: 5,
      name: 'VueLo Gadi',
      avatar: '/vlearning/instrutor9.jpg',
      specialty: 'Chuyên gia lĩnh vực Phân tích',
      rating: 4.9,
      reviews: 100
    },
    {
      id: 6,
      name: 'Hoang Nam',
      avatar: '/vlearning/instrutor10.jpg',
      specialty: 'Chuyên gia lĩnh vực PHP',
      rating: 4.9,
      reviews: 100
    }
  ];

  return (
    <section className="py-12 bg-transparent">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Giảng Viên Hàng Đầu
          </h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                {/* Avatar and Name Section */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-pink-500">
                      <img
                        src={instructor.avatar}
                        alt={instructor.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {instructor.name}
                    </h3>
                    <p className="text-sm text-pink-500">
                      {instructor.specialty}
                    </p>
                  </div>
                </div>

                {/* Rating Section */}
                <div className="mt-4 flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-600">
                    {instructor.rating}
                  </span>
                  <span className="mx-2 text-gray-300">|</span>
                  <span className="text-sm text-gray-500">
                    {instructor.reviews} Đánh giá
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
