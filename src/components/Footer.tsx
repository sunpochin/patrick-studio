import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">舞動人生</h3>
            <p className="text-gray-400">
              專業雙人舞蹈教學，帶您進入舞蹈的奇妙世界
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">聯絡資訊</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>02-2345-6789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@dancestudio.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>台北市中山區舞蹈街123號</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">營業時間</h3>
            <p className="text-gray-400">
              週一至週五：18:00 - 22:30<br />
              週六：14:00 - 18:00<br />
              週日：休息
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 舞動人生. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}