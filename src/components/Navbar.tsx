import React, { useState } from 'react';
import { Music2 } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Music2 className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-xl font-bold">舞動人生</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#instructors" className="text-gray-700 hover:text-purple-600">師資介紹</a>
            <a href="#schedule" className="text-gray-700 hover:text-purple-600">課程時間</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600">課程價格</a>
            <a href="#blog" className="text-gray-700 hover:text-purple-600">舞蹈專欄</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="#instructors" className="block py-2 text-gray-700 hover:text-purple-600">師資介紹</a>
            <a href="#schedule" className="block py-2 text-gray-700 hover:text-purple-600">課程時間</a>
            <a href="#pricing" className="block py-2 text-gray-700 hover:text-purple-600">課程價格</a>
            <a href="#blog" className="block py-2 text-gray-700 hover:text-purple-600">舞蹈專欄</a>
          </div>
        )}
      </div>
    </nav>
  );
}