import React from 'react';

const articles = [
  {
    title: 'Salsa 舞蹈的基本節奏與步伐',
    author: 'Sherry',
    excerpt: '想要學習 Salsa 卻不知道從何開始？本文將為您介紹 Salsa 的基本節奏與重要步伐...',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&q=80',
  },
  {
    title: 'Brazilian Zouk 的音樂特色',
    author: '呂莛',
    excerpt: 'Brazilian Zouk 的音樂風格獨特，融合了巴西傳統音樂與現代流行音樂...',
    image: 'https://images.unsplash.com/photo-1516666481761-a8534232cba8?auto=format&fit=crop&q=80',
  },
  {
    title: 'Bachata 的浪漫與魅力',
    author: 'Ester',
    excerpt: 'Bachata 不僅是一種舞蹈，更是一種情感的表達方式...',
    image: 'https://images.unsplash.com/photo-1545959570-a94084071b5d?auto=format&fit=crop&q=80',
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">舞蹈專欄</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={article.image}
                alt={article.title}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">作者：{article.author}</p>
                <p className="text-gray-700">{article.excerpt}</p>
                <button className="mt-4 text-purple-600 hover:text-purple-700 font-medium">
                  閱讀更多 →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}