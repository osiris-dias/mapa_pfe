import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const NoticiaDetalhe = () => {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const { toast } = useToast();

  const mockNewsData = {
    1: {
      id: 1,
      title: "Tecnologia revoluciona o mercado brasileiro em 2025",
      excerpt: "Novas tecnologias estão transformando diversos setores da economia nacional, criando oportunidades e desafios para empresas e trabalhadores.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop",
      category: "Tecnologia",
      author: "Ana Silva",
      date: "15 Jun 2025",
      content: `
        <p>A revolução tecnológica em 2025 atingiu um novo patamar no Brasil, com inovações disruptivas transformando fundamentalmente o mercado de trabalho e a economia. A inteligência artificial (IA) e a automação estão cada vez mais presentes em setores como indústria, agronegócio e serviços, otimizando processos e gerando novas demandas por profissionais qualificados.</p>
        <p>Empresas que adotaram soluções baseadas em IA relataram um aumento médio de 30% na produtividade e uma redução significativa nos custos operacionais. No entanto, essa transformação também impõe desafios, como a necessidade de requalificação da mão de obra e a criação de políticas públicas que incentivem a inclusão digital e a formação em novas competências.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Impacto no Emprego</h3>
        <p>Enquanto algumas funções tradicionais estão sendo automatizadas, novas oportunidades de carreira surgem em áreas como análise de dados, cibersegurança, desenvolvimento de IA e robótica. O governo lançou programas de incentivo para capacitação tecnológica, visando preparar a população para as demandas do futuro do trabalho.</p>
        <p>Especialistas alertam que a adaptação precisa ser rápida e contínua, com foco no aprendizado ao longo da vida (lifelong learning). A colaboração entre universidades, empresas e governo é crucial para garantir que o Brasil aproveite ao máximo o potencial da revolução tecnológica, minimizando os impactos sociais negativos.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">O Futuro é Agora</h3>
        <p>A expectativa é que, nos próximos anos, a integração de tecnologias como 5G, Internet das Coisas (IoT) e blockchain acelere ainda mais essas mudanças, consolidando o Brasil como um polo de inovação na América Latina. A transformação digital não é mais uma tendência, mas uma realidade que molda o presente e o futuro da nação.</p>
      `
    },
    2: {
      id: 2,
      title: "Economia brasileira mostra sinais de recuperação em 2025",
      excerpt: "Indicadores econômicos apontam para uma melhora gradual no cenário nacional, com destaque para o setor de serviços e indústria.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=500&fit=crop",
      category: "Economia",
      author: "Carlos Santos",
      date: "14 Jun 2025",
      content: "<p>Conteúdo detalhado sobre a recuperação da economia brasileira em 2025...</p>"
    },
    3: {
      id: 3,
      title: "Sustentabilidade ganha força no país em 2025",
      excerpt: "Empresas e governo investem em projetos sustentáveis, buscando reduzir o impacto ambiental e promover o desenvolvimento verde.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
      category: "Meio Ambiente",
      author: "Maria Oliveira",
      date: "13 Jun 2025",
      content: "<p>Conteúdo detalhado sobre sustentabilidade no Brasil em 2025...</p>"
    },
    4: {
      id: 4,
      title: "Inovações em Inteligência Artificial para 2025",
      excerpt: "Especialistas preveem grandes avanços na IA, impactando desde a medicina até o entretenimento.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop",
      category: "Tecnologia",
      author: "Dr. Ricardo Alves",
      date: "12 Jun 2025",
      content: "<p>Conteúdo detalhado sobre inovações em IA em 2025...</p>"
    },
    5: {
      id: 5,
      title: "Desafios do mercado de trabalho em 2025",
      excerpt: "Adaptação às novas tecnologias e requalificação profissional são temas centrais para o próximo ano.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop",
      category: "Carreira",
      author: "Juliana Costa",
      date: "11 Jun 2025",
      content: "<p>Conteúdo detalhado sobre os desafios do mercado de trabalho em 2025...</p>"
    },
    6: {
      id: 6,
      title: "Cultura pop em 2025: O que esperar?",
      excerpt: "Grandes lançamentos no cinema, música e games prometem agitar o cenário cultural no próximo ano.",
      image: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=800&h=500&fit=crop",
      category: "Entretenimento",
      author: "Fernando Lima",
      date: "10 Jun 2025",
      content: "<p>Conteúdo detalhado sobre cultura pop em 2025...</p>"
    }
  };


  useEffect(() => {
    // Simular busca de dados da notícia
    const noticiaEncontrada = mockNewsData[id] || Object.values(mockNewsData).find(news => news.id === parseInt(id));
    
    if (noticiaEncontrada) {
      setNoticia(noticiaEncontrada);
    } else {
      // Tratar caso de notícia não encontrada, talvez redirecionar ou mostrar mensagem
      console.error("Notícia não encontrada");
    }
  }, [id]);

  const handleShare = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "O compartilhamento ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
    });
  };

  const handleComment = () => {
     toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "A seção de comentários ainda não foi implementada—mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
    });
  };

  if (!noticia) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
          ></motion.div>
          <p className="text-xl text-gray-700">Carregando notícia...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-100">
      {/* Header da Notícia */}
      <section className="relative py-12 md:py-20 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="absolute inset-0">
          <img
            src={noticia.image}
            alt={noticia.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <Link to="/noticias" className="inline-flex items-center text-blue-300 hover:text-blue-100 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Voltar para Notícias
            </Link>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-shadow-lg"
          >
            {noticia.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm md:text-base text-gray-300"
          >
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{noticia.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{noticia.date}</span>
            </div>
            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {noticia.category}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Conteúdo da Notícia */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white shadow-xl rounded-lg">
          <article className="prose prose-lg lg:prose-xl max-w-none py-8 md:py-12 text-gray-700">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              dangerouslySetInnerHTML={{ __html: noticia.content }}
            />
          </article>

          {/* Ações */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="py-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4"
          >
            <Button onClick={handleShare} variant="outline" className="flex items-center gap-2 text-gray-700 hover:bg-gray-50">
              <Share2 className="h-5 w-5" />
              Compartilhar
            </Button>
            <Button onClick={handleComment} className="btn-primary flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Deixar um Comentário
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Notícias Relacionadas (Sugestão) */}
      <section className="py-12 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Outras Notícias que Você Pode Gostar
          </motion.h2>
          <div className="text-center">
            <Button onClick={() => toast({ title: "🚧 Em breve!", description: "Notícias relacionadas serão implementadas aqui."})} className="btn-secondary">
              Ver Mais Sugestões (Em Breve)
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticiaDetalhe;