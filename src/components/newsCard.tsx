import React from 'react';
import { Article } from '@/types/article';
import { motion } from 'framer-motion';
import Link from 'next/link';

const NewsCard: React.FC<{ news: Article; delay: number }> = ({ news, delay }) => {

  return (
    <motion.div
      className="overflow-hidden w-full max-w-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }} // Delay for domino effect
    >
      <Link href={`/nieuws/${news.slug}`} className="block">
        <div className="relative aspect-video">
          <img
            src={news.image}
            alt={news.title}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img
                  src={news.authorImage}
                  alt={news.authorName}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-beje">{news.authorName}</span>
            </div>
            <span className="px-2 py-1 text-base text-beje font-semibold bg-primary rounded-full">
              {news.category}
            </span>
          </div>
          <h2 className="text-xl font-bold text-beje mb-2 line-clamp-2">{news.title}</h2>
          <time className="text-sm text-beje">{news.date}</time>
        </div>
      </Link>
    </motion.div>
  );
};

export default NewsCard;