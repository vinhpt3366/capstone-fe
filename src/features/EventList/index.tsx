import { ArrowRight, Calendar, Clock, MapPin, Users } from 'lucide-react';

interface Event {
  id: number;
  date: {
    day: string;
    month: string;
    year: string;
  };
  title: string;
  location: string;
  description: string;
  price: number;
  dateRange: {
    start: string;
    end: string;
  };
  image: string;
  category: string;
  candidates?: number;
}

const EventCard = ({ event }: { event: Event }) => (
  <div className="group relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-32 bg-gradient-to-br from-purple-600 to-pink-600 p-4 md:p-8">
        <div className="flex md:flex-col items-center justify-center text-white gap-3 md:gap-1">
          <div className="flex items-center md:flex-col flex-1 justify-center">
            <Calendar className="w-5 h-5 md:hidden mr-2" />
            <span className="text-3xl md:text-4xl font-bold tracking-tight">
              {event.date.day}
            </span>
            <span className="ml-2 md:ml-0 text-lg uppercase tracking-wider">
              {event.date.month}
            </span>
          </div>
          <span className="text-sm opacity-80 md:text-center flex-1 md:flex-none text-center">
            {event.date.year}
          </span>
        </div>
      </div>

      <div className="flex-grow p-6 md:p-8 text-white">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
          {event.category}
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-4 md:flex-1">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
              {event.title}
            </h3>

            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{event.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                  <span className="whitespace-nowrap">
                    {event.dateRange.start}
                  </span>
                  <span className="hidden md:inline">-</span>
                  <span className="whitespace-nowrap">
                    {event.dateRange.end}
                  </span>
                </div>
              </div>

              <div className="flex md:hidden items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>{event.candidates} người tham gia</span>
              </div>
            </div>

            <p className="text-gray-400 line-clamp-2 max-w-2xl">
              {event.description}
            </p>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-8 justify-between w-full md:w-auto md:justify-center">
            <div className="text-left md:text-right order-last md:order-first">
              <div className="text-sm text-gray-400">Giá từ</div>
              <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                ${event.price}
              </div>
            </div>

            <button
              className="group/btn flex items-center gap-2 px-6 py-3 rounded-full 
                bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 
                transition-all duration-300 text-white font-medium order-first md:order-last whitespace-nowrap"
            >
              Chi tiết
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block relative w-80">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent z-10" />
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
);

const EventList = () => {
  const events: Event[] = [
    {
      id: 1,
      date: {
        day: '16',
        month: 'Dec',
        year: '2021'
      },
      title: 'Lead Generation Specialist',
      location: 'Aluwalia Resort',
      description:
        'Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis. Sed auctor magna lacus, in placerat nisi sollicitudin ut.',
      price: 200,
      dateRange: {
        start: '16 Dec, 8:00 AM',
        end: '18 Dec, 5:00 PM'
      },
      image: '/vlearning/it.png',
      category: 'Marketing',
      candidates: 45
    },
    {
      id: 2,
      date: {
        day: '06',
        month: 'Dec',
        year: '2021'
      },
      title: 'International Education',
      location: 'Aluwalia Resort',
      description:
        'Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis. Sed auctor magna lacus, in placerat nisi sollicitudin ut.',
      price: 200,
      dateRange: {
        start: '6 Dec, 9:00 AM',
        end: '26 Dec, 6:00 PM'
      },
      image: '/vlearning/it.png',
      category: 'Education',
      candidates: 32
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500">
            Upcoming Events
          </h2>
          <p className="mt-4 text-gray-400">
            Discover our latest events and workshops
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
