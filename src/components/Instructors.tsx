import React from 'react';

const instructors = [
  {
    name: 'Patricia & Patrick',
    style: 'Flamenco',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&q=80',
    description: '專業佛拉宅，Flamenco 歌手吉他舞蹈三項全能',
  },
  {
    name: 'Patricia & Patrick',
    style: 'Salsa',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&q=80',
    description: '專業Salsa舞者，擁有超過10年教學經驗',
  },
  {
    name: 'Patricia & Patrick',
    style: 'Brazilian Zouk',
    image: 'https://images.unsplash.com/photo-1516666481761-a8534232cba8?auto=format&fit=crop&q=80',
    description: '巴西柔克舞蹈專家，多次國際比賽冠軍',
  },
  {
    name: 'Patricia & Patrick',
    style: 'Bachata',
    image: 'https://images.unsplash.com/photo-1545959570-a94084071b5d?auto=format&fit=crop&q=80',
    description: 'Bachata編舞家，擅長感性浪漫風格',
  },
];

export function Instructors() {
  return (
    <section id="instructors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">專業師資團隊</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-64 object-cover"
                src={instructor.image}
                alt={instructor.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{instructor.name}</h3>
                <p className="text-purple-600 font-semibold mb-2">{instructor.style}</p>
                <p className="text-gray-600">{instructor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}