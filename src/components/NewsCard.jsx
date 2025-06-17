
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsCard = ({ news, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="news-card rounded-xl overflow-hidden shadow-lg flex flex-col"
    >
      <div className="relative overflow-hidden">
        <Link to={`/noticias/${news.id}`}>
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {news.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <Link to={`/noticias/${news.id}`}>
          <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
            {news.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {news.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 mt-auto">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{news.date}</span>
            </div>
          </div>
        </div>
        
        <Button 
          asChild
          className="w-full btn-primary text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-2"
        >
          <Link to={`/noticias/${news.id}`}>
            <span>Ler mais</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
};

export default NewsCard;