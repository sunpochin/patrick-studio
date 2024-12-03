import React from 'react';

const schedule = [
  {
    day: '星期一',
    classes: [
      { time: '19:00-20:30', style: 'Salsa 初級', instructors: 'Sherry & Dan' },
      { time: '20:45-22:15', style: 'Salsa 中級', instructors: 'Sherry & Dan' },
    ],
  },
  {
    day: '星期三',
    classes: [
      { time: '19:00-20:30', style: 'Brazilian Zouk 初級', instructors: '呂莛 & Vanessa' },
      { time: '20:45-22:15', style: 'Brazilian Zouk 中級', instructors: '呂莛 & Vanessa' },
    ],
  },
  {
    day: '星期五',
    classes: [
      { time: '19:00-20:30', style: 'Bachata 初級', instructors: 'Ester & Trevor' },
      { time: '20:45-22:15', style: 'Bachata 中級', instructors: 'Ester & Trevor' },
    ],
  },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">課程時間表</h2>
        <div className="grid gap-8">
          {schedule.map((day) => (
            <div key={day.day} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">{day.day}</h3>
              <div className="space-y-4">
                {day.classes.map((cls, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-50 rounded">
                    <div className="font-medium">{cls.time}</div>
                    <div className="text-purple-600">{cls.style}</div>
                    <div className="text-gray-600">{cls.instructors}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}