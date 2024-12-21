import React from 'react';
import { News } from '@/types/news';

const NewsCard: React.FC<{ news: News }> = ({ news }) => {
  return (
    <div className="relative overflow-hidden rounded-lg text-beje w-full max-w-sm">
      {/* Image with gradient overlay */}
      <div className="relative h-60">
        <img
          src={news.image}
          alt={news.title}
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="relative p-4">
        {/* Author section */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-600">
            <img
              src={news.authorImage}
              alt={news.authorImage}
              className="h-full w-full object-cover"
            />
          </div>
          <h3 className="font-medium text-beje uppercase border-b border-gray-400 pb-1">
            {news.authorName}
          </h3>
          <div className="flex-1">
            <div className="flex flex-col mt-2 px-6">
              <span className="text-xs font-semibold text-secondary bg-beje font-bold rounded-full p-2">{news.category}</span>
              <span className="text-sm text-beje mt-2">{news.date}</span>
            </div>
          </div>
        </div>

        {/* Title and description */}
        <h2 className="text-xl font-bold mb-2">{news.title}</h2>
      </div>
    </div>
  );
};

export default NewsCard;