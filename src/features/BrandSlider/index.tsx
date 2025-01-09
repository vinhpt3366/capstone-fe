import React from 'react';

const brands = [
  { id: 1, name: 'Fort Dexon', logo: 'FORT DEXON' },
  { id: 2, name: 'Caley Peace', logo: 'CALEY PEACE' },
  { id: 3, name: 'Barbecue', logo: 'BARBECUE' },
  { id: 4, name: 'Harrison', logo: 'HARRISON' },
  { id: 5, name: 'Design Studio', logo: 'DESIGN STUDIO' },
  { id: 6, name: 'Design Exclusive', logo: 'DESIGN EXCLUSIVE' }
];

const BrandSlider = () => {
  return (
    <div className="relative flex w-full overflow-x-hidden bg-gradient-to-r from-purple-100 via-pink-100 to-rose-100">
      <div className="animate-marquee flex whitespace-nowrap py-12 hover:[animation-play-state:paused]">
        {brands.map((brand) => (
          <div
            key={`original-${brand.id}`}
            className="mx-8 inline-flex w-64 shrink-0"
          >
            <div className="w-full transform cursor-pointer rounded-xl bg-gradient-to-br from-white/60 to-white/95 p-8 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-500/25">
              <p className="text-lg font-semibold">{brand.logo}</p>
            </div>
          </div>
        ))}

        {brands.map((brand) => (
          <div
            key={`duplicate-${brand.id}`}
            className="mx-8 inline-flex w-64 shrink-0"
          >
            <div className="w-full transform cursor-pointer rounded-xl bg-gradient-to-br from-white/60 to-white/95 p-8 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white hover:shadow-lg hover:shadow-pink-500/25">
              <p className="text-lg font-semibold">{brand.logo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
