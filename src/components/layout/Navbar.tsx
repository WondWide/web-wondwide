import React from 'react';
import { Menu, Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed z-50 w-full bg-white shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex items-center">
            <Globe className="w-8 h-8 text-primary-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">원드와이드</span>
          </div>

          {/* 메뉴 아이템들 */}
          <div className="items-center hidden space-x-8 md:flex">
            <a href="#" className="text-gray-500 hover:text-gray-900">서비스</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">기능</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">가격</a>
            <a href="#" className="text-gray-500 hover:text-gray-900">문의하기</a>
          </div>

          {/* 로그인/회원가입 버튼 */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-900">
              로그인
            </button>
            <button className="px-4 py-2 text-white rounded-lg bg-primary-600 hover:bg-primary-700">
              시작하기
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;