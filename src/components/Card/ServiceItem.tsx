import React from 'react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description
}) => {
  return (
    <div className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-pink-400 hover:shadow-md">
      <div className="w-40 h-40 mb-4 rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-pink-500 transition-colors duration-300">
        {title}
      </h3>

      <p className="text-sm text-gray-600 text-center group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
