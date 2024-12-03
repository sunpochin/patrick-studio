import React from 'react';
import { Users, Clock, Star } from 'lucide-react';

const classes = [
  {
    title: 'Beginner Flamenco',
    description: 'Perfect for those taking their first steps into the world of flamenco.',
    icon: Users,
  },
  {
    title: 'Intermediate',
    description: 'Advance your technique and explore complex rhythms and movements.',
    icon: Clock,
  },
  {
    title: 'Advanced',
    description: 'Master the art of flamenco with professional-level instruction.',
    icon: Star,
  },
];

export function Classes() {
  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Classes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <div key={classItem.title} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <classItem.icon className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">{classItem.title}</h3>
              <p className="text-gray-600">{classItem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}