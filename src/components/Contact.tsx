import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-red-500" />
              <span>123 Dance Street, City, Country</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-red-500" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-red-500" />
              <span>info@almaflamenca.com</span>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
            ></textarea>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}