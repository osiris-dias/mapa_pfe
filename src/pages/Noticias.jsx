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

  const categories = ['Todas', 'Economia', 'Tecnologia', 'Entretenimento', 'Meio Ambiente', 'Carreira'];

  useEffect(() => {
    const mockNews = [
      {
        id: 1,
        title: "Tecnologia revoluciona o mercado brasileiro em 2025",
        excerpt: "Novas tecnologias estão transformando diversos setores da economia nacional, criando oportunidades e desafios para empresas e trabalhadores.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
        category: "Tecnologia",
        author: "Ana Silva",
        date: "15 Jun 2025"
      },
      {
        id: 2,
        title: "Economia brasileira mostra sinais de recuperação em 2025",
        excerpt: "Indicadores econômicos apontam para uma melhora gradual no cenário nacional, com destaque para o setor de serviços e indústria.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
        category: "Economia",
        author: "Carlos Santos",
        date: "14 Jun 2025"
      },
      {
        id: 3,
        title: "Sustentabilidade ganha força no país em 2025",
        excerpt: "Empresas e governo investem em projetos sustentáveis, buscando reduzir o impacto ambiental e promover o desenvolvimento verde.",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
        category: "Meio Ambiente",
        author: "Maria Oliveira",
        date: "13 Jun 2025"
      },
      {
        id: 4,
        title: "Inovações em Inteligência Artificial para 2025",
        excerpt: "Especialistas preveem grandes avanços na IA, impactando desde a medicina até o entretenimento.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop",
        category: "Tecnologia",
        author: "Dr. Ricardo Alves",
        date: "12 Jun 2025"
      },
      {
        id: 5,
        title: "Desafios do mercado de trabalho em 2025",
        excerpt: "Adaptação às novas tecnologias e requalificação profissional são temas centrais para o próximo ano.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=300&fit=crop",
        category: "Carreira",
        author: "Juliana Costa",
        date: "11 Jun 2025"
      },
      {
        id: 6,
        title: "Cultura pop em 2025: O que esperar?",
        excerpt: "Grandes lançamentos no cinema, música e games prometem agitar o cenário cultural no próximo ano.",
        image: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=300&fit=crop",
        category: "Entretenimento",
        author: "Fernando Lima",
        date: "10 Jun 2025"
      }
    ];
    
    setNews(mockNews);
  }, []);

  const handleSearch = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
    });
  };

  const handleFilter = (category) => {
    setSelectedCategory(category);
    // A notificação de funcionalidade em desenvolvimento será removida daqui
    // pois o filtro já está funcional.
    // Se quiser adicionar uma notificação de sucesso, pode ser aqui.
    // Ex: toast({ title: `Filtrando por: ${category}` });
  };

  const filteredNews = selectedCategory === 'Todas' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
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

      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
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
                  {category === 'Entretenimento' ? 'Cultura' : category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

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