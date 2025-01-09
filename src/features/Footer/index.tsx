import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold">
                V
              </div>
              <span className="text-xl font-bold text-white">learning</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-pink-500" />
                <span>1800-123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-pink-500" />
                <span>devit@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-pink-500" />
                <span>Đà Nẵng</span>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Liên kết</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Dịch vụ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Nhóm
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Khóa học</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Front End
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Back End
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Full stack
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition-colors">
                  Node.Js
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-white font-bold mb-4 text-lg">
              Đăng kí tư vấn
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full px-3 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full px-3 py-2 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                ĐĂNG KÍ
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">Copyright © 2025. All rights reserved.</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <FaFacebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <FaTwitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <FaInstagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
