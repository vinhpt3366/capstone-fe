import React from 'react';
import { Mail, User, Phone, Users, BadgeCheck } from 'lucide-react';
import Button from '@/components/Button/Button';

interface UserInfoProps {
  email: string;
  name: string;
  phone: string;
  username: string;
  group: string;
  role: string;
  onUpdate: () => void;
}

const UserInfo: React.FC<UserInfoProps> = ({
  email,
  name,
  phone,
  username,
  group,
  role,
  onUpdate
}) => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl rounded-xl p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Thông tin cá nhân
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center space-x-4">
            <Mail className="text-yellow-500 w-5 h-5" />
            <p className="text-gray-700 text-sm">
              <span className="font-semibold text-gray-900">Email:</span>{' '}
              {email}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <User className="text-blue-500 w-5 h-5" />
            <p className="text-gray-700 text-sm">
              <span className="font-semibold text-gray-900">Họ và tên:</span>{' '}
              {name}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-green-500 w-5 h-5" />
            <p className="text-gray-700 text-sm">
              <span className="font-semibold text-gray-900">
                Số điện thoại:
              </span>{' '}
              {phone}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <BadgeCheck className="text-purple-500 w-5 h-5" />
            <p className="text-gray-700 text-sm">
              <span className="font-semibold text-gray-900">Tài khoản:</span>{' '}
              {username}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Users className="text-red-500 w-5 h-5" />
            <p className="text-gray-700 text-sm">
              <span className="font-semibold text-gray-900">Nhóm:</span> {group}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <BadgeCheck className="text-indigo-500 w-5 h-5" />
            <p className="text-gray-700 text-sm">
              <span className="font-semibold text-gray-900">Đối tượng:</span>{' '}
              {role}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button text="Cập nhật" onClick={onUpdate} />
      </div>

      <div className="bg-white rounded-lg p-6 shadow-inner">
        <h3 className="text-lg font-bold text-gray-800 mb-6">
          Kỹ năng của tôi
        </h3>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-semibold text-orange-600">HTML</p>
              <p className="text-sm text-gray-500">90%</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                className="bg-orange-500 h-full rounded-full transition-all duration-300"
                style={{ width: '90%' }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-semibold text-pink-600">CSS</p>
              <p className="text-sm text-gray-500">70%</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                className="bg-pink-500 h-full rounded-full transition-all duration-300"
                style={{ width: '70%' }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-semibold text-yellow-600">
                JavaScript
              </p>
              <p className="text-sm text-gray-500">50%</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                className="bg-yellow-500 h-full rounded-full transition-all duration-300"
                style={{ width: '50%' }}
              ></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-semibold text-green-600">React</p>
              <p className="text-sm text-gray-500">80%</p>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                className="bg-green-600 h-full rounded-full transition-all duration-300"
                style={{ width: '80%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
