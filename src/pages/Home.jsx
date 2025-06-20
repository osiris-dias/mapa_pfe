import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Globe } from 'lucide-react';
import NewsCard from '@/components/NewsCard';
const Home = () => {
  const [featuredNews, setFeaturedNews] = useState([]);
  useEffect(() => {
    const mockNews = [{
      id: 1,
      title: "Tecnologia revoluciona o mercado brasileiro em 2025",
      excerpt: "Novas tecnologias estão transformando diversos setores da economia nacional, criando oportunidades e desafios para empresas e trabalhadores.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      category: "Tecnologia",
      author: "Ana Silva",
      date: "15 Jun 2025"
    }, {
      id: 2,
      title: "Economia brasileira mostra sinais de recuperação em 2025",
      excerpt: "Indicadores econômicos apontam para uma melhora gradual no cenário nacional, com destaque para o setor de serviços e indústria.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      category: "Economia",
      author: "Carlos Santos",
      date: "14 Jun 2025"
    }, {
      id: 3,
      title: "Sustentabilidade ganha força no país em 2025",
      excerpt: "Empresas e governo investem em projetos sustentáveis, buscando reduzir o impacto ambiental e promover o desenvolvimento verde.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
      category: "Meio Ambiente",
      author: "Maria Oliveira",
      date: "13 Jun 2025"
    }, {
      id: 4,
      title: "Inovações em Inteligência Artificial para 2025",
      excerpt: "Especialistas preveem grandes avanços na IA, impactando desde a medicina até o entretenimento.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&h=300&fit=crop",
      category: "Tecnologia",
      author: "Dr. Ricardo Alves",
      date: "12 Jun 2025"
    }, {
      id: 5,
      title: "Desafios do mercado de trabalho em 2025",
      excerpt: "Adaptação às novas tecnologias e requalificação profissional são temas centrais para o próximo ano.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=300&fit=crop",
      category: "Carreira",
      author: "Juliana Costa",
      date: "11 Jun 2025"
    }, {
      id: 6,
      title: "Cultura pop em 2025: O que esperar?",
      excerpt: "Grandes lançamentos no cinema, música e games prometem agitar o cenário cultural no próximo ano.",
      image: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=300&fit=crop",
      category: "Entretenimento",
      author: "Fernando Lima",
      date: "10 Jun 2025"
    }];
    setFeaturedNews(mockNews);
  }, []);
  return <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center hero-pattern overflow-hidden">
        <div className="absolute inset-0">
           <img  alt="Fundo de notícias abstrato" className="absolute inset-0 w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1665624223976-b18dbd0fe817" />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-700/70 via-indigo-600/70 to-blue-500/70"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="hero-title text-4xl md:text-6xl font-bold mb-6 text-shadow">Central de Notícias</motion.h1>
          
          <motion.p initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="hero-subtitle text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow">Fique por dentro das últimas notícias do Brasil e do mundo. </motion.p>
          
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 glassmorphism px-4 py-2 rounded-full">
              <TrendingUp className="h-5 w-5" />
              <span className="text-sm font-medium">Trending</span>
            </div>
            <div className="flex items-center space-x-2 glassmorphism px-4 py-2 rounded-full">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">Atualizado agora</span>
            </div>
            <div className="flex items-center space-x-2 glassmorphism px-4 py-2 rounded-full">
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium">Global</span>
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 left-5 floating-animation md:top-20 md:left-10">
          <div className="w-10 h-10 md:w-20 md:h-20 bg-white bg-opacity-10 rounded-full"></div>
        </div>
        <div className="absolute bottom-10 right-5 floating-animation md:bottom-20 md:right-10" style={{
        animationDelay: '2s'
      }}>
          <div className="w-8 h-8 md:w-16 md:h-16 bg-white bg-opacity-10 rounded-full"></div>
        </div>
        <div className="absolute top-1/3 right-10 floating-animation md:top-1/2 md:right-20" style={{
        animationDelay: '4s'
      }}>
          <div className="w-6 h-6 md:w-12 md:h-12 bg-white bg-opacity-10 rounded-full"></div>
        </div>
      </section>

      {/* Featured News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notícias em Destaque
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As principais notícias selecionadas pela nossa equipe editorial
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredNews.map((news, index) => <NewsCard key={news.id} news={news} index={index} />)}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6
          }} className="glassmorphism p-8 rounded-xl">
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-lg">Leitores mensais</div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="glassmorphism p-8 rounded-xl">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg">Notícias por mês</div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="glassmorphism p-8 rounded-xl">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg">Cobertura contínua</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;