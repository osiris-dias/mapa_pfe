
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import NewsCard from '@/components/NewsCard';

const Noticias = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const { toast } = useToast();

  const categories = ['Todas', 'Política', 'Economia', 'Tecnologia', 'Esportes', 'Cultura', 'Meio Ambiente'];

  useEffect(() => {
    // Simular carregamento de notícias
    const mockNews = [
      {
        id: 1,
        title: "Inteligência Artificial revoluciona diagnósticos médicos",
        excerpt: "Novos algoritmos de IA estão sendo implementados em hospitais brasileiros, aumentando a precisão dos diagnósticos em até 40%.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
        category: "Tecnologia",
        author: "Dr. Pedro Lima",
        date: "16 Jun 2024"
      },
      {
        id: 2,
        title: "Nova lei de proteção de dados entra em vigor",
        excerpt: "Empresas têm prazo até dezembro para se adequar às novas regras de proteção de dados pessoais dos consumidores.",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=300&fit=crop",
        category: "Política",
        author: "Fernanda Costa",
        date: "16 Jun 2024"
      },
      {
        id: 3,
        title: "Mercado financeiro registra alta histórica",
        excerpt: "Bolsa de valores atinge novo recorde, impulsionada pelo setor de tecnologia e commodities agrícolas.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
        category: "Economia",
        author: "Roberto Silva",
        date: "15 Jun 2024"
      },
      {
        id: 4,
        title: "Seleção brasileira se prepara para próxima competição",
        excerpt: "Técnico convoca novos talentos para fortalecer o time nacional em preparação para os próximos jogos internacionais.",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&h=300&fit=crop",
        category: "Esportes",
        author: "Lucas Martins",
        date: "15 Jun 2024"
      },
      {
        id: 5,
        title: "Festival de arte contemporânea movimenta São Paulo",
        excerpt: "Evento reúne artistas nacionais e internacionais, apresentando as mais recentes tendências da arte contemporânea.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
        category: "Cultura",
        author: "Marina Santos",
        date: "14 Jun 2024"
      },
      {
        id: 6,
        title: "Projeto de reflorestamento ganha apoio internacional",
        excerpt: "Iniciativa brasileira de preservação da Amazônia recebe investimento de organizações ambientais globais.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
        category: "Meio Ambiente",
        author: "João Oliveira",
        date: "14 Jun 2024"
      }
    ];
    
    setNews(mockNews);
  }, []);

  const handleSearch = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "A busca ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    toast({
      title: "🚧 Funcionalidade em desenvolvimento", 
      description: "O filtro ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  const filteredNews = selectedCategory === 'Todas' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="gradient-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-shadow"
          >
            Todas as Notícias
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-shadow"
          >
            Mantenha-se informado com nossa cobertura completa dos acontecimentos
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar notícias..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-input w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none"
                />
                <Button
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 btn-primary px-4 py-1 text-sm"
                >
                  Buscar
                </Button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => handleFilter(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`${
                    selectedCategory === category 
                      ? 'btn-primary text-white' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((newsItem, index) => (
              <NewsCard key={newsItem.id} news={newsItem} index={index} />
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Nenhuma notícia encontrada
              </h3>
              <p className="text-gray-500">
                Tente ajustar os filtros ou buscar por outros termos.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Noticias;
