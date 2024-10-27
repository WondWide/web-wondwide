import React from 'react';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">당신만의 스마트한 AI 비서</span>
              <span className="block text-primary-600">Zinisus</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              일정 관리부터 업무 자동화까지, 더 효율적인 하루를 만들어드립니다
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white 
bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10">
                  무료로 시작하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
