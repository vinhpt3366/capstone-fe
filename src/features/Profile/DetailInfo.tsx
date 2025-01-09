import React from 'react';

interface DetailInfoProps {
  avatar: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  bio: string;
}

const DetailInfo: React.FC<DetailInfoProps> = ({
  avatar,
  name,
  email,
  phone,
  address,
  bio
}) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 shadow-lg rounded-2xl p-8 max-w-md mx-auto">
      <div className="flex flex-col items-center">
        {/* Avatar */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl"></div>
          <img
            src={avatar}
            alt="Avatar"
            className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>

        <h2 className="mt-6 text-3xl font-extrabold text-gray-800">{name}</h2>
        <p className="text-gray-500 text-sm mt-1">{email}</p>
      </div>

      <div className="mt-8 text-center space-y-4">
        {/* {phone && (
          <p className="text-gray-700">
            <strong className="font-semibold text-gray-900">Điện thoại:</strong>{' '}
            {phone}
          </p>
        )} */}
        {address && (
          <p className="text-gray-700">
            <strong className="font-semibold text-gray-900">Địa chỉ:</strong>{' '}
            {address}
          </p>
        )}
      </div>

      <div className="mt-6 p-6 bg-gradient-to-r from-purple-50 to-purple-100 border-l-4 border-purple-500 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 bg-purple-500 text-white rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2h2z"
              />
            </svg>
          </div>
          <h3 className="ml-3 text-lg font-bold text-purple-700">Giới thiệu</h3>
        </div>
        <p className="text-gray-700 text-sm leading-relaxed italic">"{bio}"</p>
      </div>
    </div>
  );
};

export default DetailInfo;
