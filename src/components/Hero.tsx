import React from 'react';

export function Hero() {
  return (
    <div className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1545959570-a94084071b5d?auto=format&fit=crop&q=80"
          alt="Dance Studio"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="relative px-4 py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          舞動人生雙人舞蹈教室
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300">
          專業 Flamenco 及雙人舞教學 - Salsa • Brazilian Zouk • Bachata
        </p>
        <div className="mt-10">
          <a
            href="#schedule"
            className="inline-block bg-purple-600 px-8 py-3 text-lg font-medium text-white hover:bg-purple-700 rounded-lg transition"
          >
            立即預約體驗
          </a>
        </div>
      </div>
    </div>
  );
}