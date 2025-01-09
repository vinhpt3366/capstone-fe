import React from 'react';
import { IconType } from 'react-icons';

interface GradientIconProps {
  icon: IconType;
}

const GradientIcon: React.FC<GradientIconProps> = ({ icon: Icon }) => {
  return (
    <div className="gradient-icon w-7 h-7 flex items-center justify-center text-gray-100 text-sm font-light rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-pink-500 bg-[length:200%] mr-2 transition-all duration-300 transform hover:scale-110 hover:bg-right hover:shadow-lg">
      <Icon />
    </div>
  );
};

export default GradientIcon;
