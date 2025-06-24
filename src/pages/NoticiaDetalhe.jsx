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
        <p class="text-justify">A revolução tecnológica em 2025 atingiu um novo patamar no Brasil, com inovações disruptivas transformando fundamentalmente o mercado de trabalho e a economia. A inteligência artificial (IA) e a automação estão cada vez mais presentes em setores como indústria, agronegócio e serviços, otimizando processos e gerando novas demandas por profissionais qualificados.</p>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Gráfico de crescimento tecnológico" src="https://images.unsplash.com/photo-1700941019917-731dc64ce685" />
        <p class="text-justify">Empresas que adotaram soluções baseadas em IA relataram um aumento médio de 30% na produtividade e uma redução significativa nos custos operacionais. No entanto, essa transformação também impõe desafios, como a necessidade de requalificação da mão de obra e a criação de políticas públicas que incentivem a inclusão digital e a formação em novas competências.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Impacto no Emprego</h3>
        <p class="text-justify">Enquanto algumas funções tradicionais estão sendo automatizadas, novas oportunidades de carreira surgem em áreas como análise de dados, cibersegurança, desenvolvimento de IA e robótica. O governo lançou programas de incentivo para capacitação tecnológica, visando preparar a população para as demandas do futuro do trabalho.</p>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Pessoas em treinamento tecnológico" src="https://images.unsplash.com/photo-1565841327798-694bc2074762" />
        <p class="text-justify">Especialistas alertam que a adaptação precisa ser rápida e contínua, com foco no aprendizado ao longo da vida (lifelong learning). A colaboração entre universidades, empresas e governo é crucial para garantir que o Brasil aproveite ao máximo o potencial da revolução tecnológica, minimizando os impactos sociais negativos.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">O Futuro é Agora</h3>
        <p class="text-justify">A expectativa é que, nos próximos anos, a integração de tecnologias como 5G, Internet das Coisas (IoT) e blockchain acelere ainda mais essas mudanças, consolidando o Brasil como um polo de inovação na América Latina. A transformação digital não é mais uma tendência, mas uma realidade que molda o presente e o futuro da nação.</p>
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
      content: `
        <p class="text-justify">Após um período de desafios, a economia brasileira começa a demonstrar sinais consistentes de recuperação em 2025. Dados recentes do Instituto Brasileiro de Geografia e Estatística (IBGE) indicam um crescimento de 0.8% no Produto Interno Bruto (PIB) no primeiro trimestre, superando as expectativas do mercado.</p>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Gráfico de crescimento do PIB" src="https://images.unsplash.com/photo-1586448354773-30706da80a04" />
        <p class="text-justify">O setor de serviços, que representa a maior parcela da economia, foi o principal motor desse crescimento, com destaque para as áreas de turismo, tecnologia da informação e comércio varejista. A indústria também apresentou um desempenho positivo, impulsionada pela retomada da produção em setores chave como o automobilístico e o de bens de consumo duráveis.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Fatores da Recuperação</h3>
        <p class="text-justify">Analistas apontam uma combinação de fatores para essa melhora, incluindo a estabilização da inflação, a queda gradual da taxa de juros e o aumento da confiança dos investidores e consumidores. As reformas estruturais implementadas nos últimos anos também começam a surtir efeito, criando um ambiente de negócios mais favorável.</p>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Mãos apertando em acordo comercial" src="https://images.unsplash.com/photo-1582578598774-a377d4b32223" />
        <p class="text-justify">Apesar dos sinais positivos, especialistas alertam para a necessidade de cautela. Desafios como o endividamento público e a volatilidade do cenário internacional ainda persistem. Manter o ritmo de crescimento exigirá a continuidade das políticas de ajuste fiscal e o fomento a investimentos em infraestrutura e inovação.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Perspectivas Futuras</h3>
        <p class="text-justify">As projeções para o restante do ano são otimistas, com expectativa de um crescimento acumulado do PIB entre 2% e 2.5%. A geração de empregos também tem mostrado uma tendência de alta, embora a recuperação do mercado de trabalho ainda seja gradual. O governo federal reafirmou seu compromisso com a responsabilidade fiscal e a atração de investimentos estrangeiros para consolidar a trajetória de crescimento sustentável.</p>
      `
    },
    3: {
      id: 3,
      title: "Sustentabilidade ganha força no país em 2025",
      excerpt: "Empresas e governo investem em projetos sustentáveis, buscando reduzir o impacto ambiental e promover o desenvolvimento verde.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop",
      category: "Meio Ambiente",
      author: "Maria Oliveira",
      date: "13 Jun 2025",
      content: `
        <p class="text-justify">A pauta da sustentabilidade nunca esteve tão em evidência no Brasil como em 2025. Empresas de diversos setores e o governo federal têm intensificado investimentos em projetos que visam não apenas reduzir o impacto ambiental, mas também promover um modelo de desenvolvimento mais verde e inclusivo.</p>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Painéis solares em um campo verde" src="https://images.unsplash.com/photo-1697869162556-ab57db502c09" />
        <p class="text-justify">Um dos destaques é o aumento significativo no uso de energias renováveis. A capacidade instalada de energia solar e eólica cresceu mais de 40% no último ano, impulsionada por incentivos fiscais e pela crescente conscientização sobre a importância da transição energética. Grandes corporações também estão adotando metas ambiciosas de neutralidade de carbono e investindo em tecnologias limpas.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Iniciativas Governamentais e Empresariais</h3>
        <p class="text-justify">O governo lançou o "Plano Nacional de Economia Circular", que incentiva a redução do desperdício, a reutilização de materiais e a reciclagem em larga escala. Além disso, programas de conservação de biomas como a Amazônia e o Cerrado foram fortalecidos, com maior fiscalização contra o desmatamento ilegal e incentivos para práticas agrícolas sustentáveis.</p>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Mãos segurando um broto de planta" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" />
        <p class="text-justify">No setor privado, observa-se um movimento crescente de empresas buscando certificações ambientais e integrando critérios ESG (Ambiental, Social e de Governança) em suas estratégias de negócio. O mercado de crédito de carbono também está em expansão, oferecendo novas oportunidades para projetos de reflorestamento e conservação.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Conscientização e Desafios</h3>
        <p class="text-justify">A conscientização da população sobre a importância da sustentabilidade também tem aumentado, refletindo-se em mudanças nos hábitos de consumo e maior pressão por práticas responsáveis. No entanto, o Brasil ainda enfrenta desafios significativos, como a necessidade de universalizar o saneamento básico e combater a exploração ilegal de recursos naturais. A transição para uma economia verdadeiramente sustentável é um processo contínuo que exige o engajamento de todos os setores da sociedade.</p>
      `
    },
    4: {
      id: 4,
      title: "Inovações em Inteligência Artificial para 2025",
      excerpt: "Especialistas preveem grandes avanços na IA, impactando desde a medicina até o entretenimento.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop",
      category: "Tecnologia",
      author: "Dr. Ricardo Alves",
      date: "12 Jun 2025",
      content: `
        <p class="text-justify">O ano de 2025 promete ser um marco para as inovações em Inteligência Artificial (IA), com avanços que devem impactar profundamente diversas áreas, desde a medicina e indústria até o entretenimento e a vida cotidiana. Especialistas do setor preveem uma aceleração na adoção de soluções baseadas em IA, impulsionada pela maior capacidade de processamento, algoritmos mais sofisticados e um volume crescente de dados disponíveis.</p>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Cérebro digital com conexões neurais" src="https://images.unsplash.com/photo-1549925245-f20a1bac6454" />
        <p class="text-justify">Na área da saúde, espera-se que a IA generativa auxilie na descoberta de novos medicamentos e tratamentos personalizados. Ferramentas de diagnóstico assistido por IA devem se tornar mais precisas e acessíveis, contribuindo para a detecção precoce de doenças. A robótica cirúrgica, guiada por IA, também tende a evoluir, permitindo procedimentos menos invasivos e com recuperação mais rápida.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">IA no Cotidiano e na Indústria</h3>
        <p class="text-justify">No cotidiano, assistentes virtuais se tornarão ainda mais inteligentes e proativos, antecipando necessidades e facilitando tarefas. A personalização de conteúdo em plataformas de streaming e redes sociais atingirá novos níveis, com algoritmos capazes de entender gostos e preferências de forma mais granular. A IA também será crucial para o desenvolvimento de cidades inteligentes, otimizando o tráfego, o consumo de energia e a segurança pública.</p>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Robô industrial trabalhando em uma fábrica" src="https://images.unsplash.com/photo-1639392655825-05c867f6a9a4" />
        <p class="text-justify">Na indústria, a IA continuará a impulsionar a automação de processos, desde a manufatura até a logística. A manutenção preditiva, baseada em sensores e algoritmos de IA, permitirá reduzir custos e evitar falhas em equipamentos. A criação de "gêmeos digitais" (digital twins) de fábricas e produtos facilitará simulações e otimizações antes da implementação física.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Ética e Regulamentação</h3>
        <p class="text-justify">Com o avanço da IA, cresce também a discussão sobre questões éticas e a necessidade de regulamentação. Temas como privacidade de dados, vieses algorítmicos e o impacto da IA no mercado de trabalho estarão no centro dos debates. A criação de diretrizes e leis para garantir o uso responsável e ético da Inteligência Artificial será fundamental para que seus benefícios sejam amplamente distribuídos pela sociedade.</p>
      `
    },
    5: {
      id: 5,
      title: "Desafios do mercado de trabalho em 2025",
      excerpt: "Adaptação às novas tecnologias e requalificação profissional são temas centrais para o próximo ano.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=500&fit=crop",
      category: "Carreira",
      author: "Juliana Costa",
      date: "11 Jun 2025",
      content: `
        <p class="text-justify">O mercado de trabalho em 2025 continua sua trajetória de transformação acelerada, impulsionado principalmente pelos avanços tecnológicos e pelas mudanças nas dinâmicas econômicas globais. A adaptação a essas novas realidades e a requalificação profissional emergem como temas centrais para trabalhadores e empresas que buscam prosperar neste cenário dinâmico.</p>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Pessoa trabalhando em um laptop com gráficos" src="https://images.unsplash.com/photo-1598737129494-69cb30f96a73" />
        <p class="text-justify">A demanda por habilidades digitais segue em alta, abrangendo desde competências básicas em ferramentas de produtividade até conhecimentos avançados em áreas como análise de dados, inteligência artificial, cibersegurança e desenvolvimento de software. Profissionais que investem no desenvolvimento contínuo dessas habilidades (upskilling e reskilling) tendem a ter mais oportunidades e maior valorização no mercado.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Impacto da Automação e Novas Profissões</h3>
        <p class="text-justify">A automação de tarefas rotineiras, tanto em setores industriais quanto de serviços, continua a redefinir funções e a exigir que os trabalhadores se concentrem em atividades que demandam criatividade, pensamento crítico, resolução de problemas complexos e habilidades interpessoais. Ao mesmo tempo, novas profissões e especializações surgem, muitas delas na interseção entre tecnologia e áreas tradicionais.</p>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Equipe colaborando em um projeto" src="https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd" />
        <p class="text-justify">O trabalho remoto e híbrido consolidou-se como uma modalidade importante, trazendo flexibilidade, mas também desafios relacionados à gestão de equipes distribuídas, cultura organizacional e bem-estar dos colaboradores. Empresas que conseguem equilibrar as vantagens do trabalho flexível com a manutenção do engajamento e da produtividade se destacam.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Foco em Soft Skills e Aprendizado Contínuo</h3>
        <p class="text-justify">Além das competências técnicas (hard skills), as chamadas soft skills – como comunicação eficaz, colaboração, adaptabilidade, inteligência emocional e liderança – são cada vez mais valorizadas. A capacidade de aprender continuamente (lifelong learning) torna-se essencial, dado o ritmo acelerado das mudanças. Iniciativas de educação corporativa, plataformas de aprendizado online e programas de mentoria ganham relevância para apoiar os profissionais nessa jornada de desenvolvimento constante. O mercado de trabalho de 2025 exige proatividade, resiliência e uma mentalidade voltada para o crescimento e a inovação.</p>
      `
    },
    6: {
      id: 6,
      title: "Cultura pop em 2025: O que esperar?",
      excerpt: "Grandes lançamentos no cinema, música e games prometem agitar o cenário cultural no próximo ano.",
      image: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=800&h=500&fit=crop",
      category: "Entretenimento",
      author: "Fernando Lima",
      date: "10 Jun 2025",
      content: `
        <p class="text-justify">O ano de 2025 promete ser eletrizante para os fãs da cultura pop, com uma avalanche de grandes lançamentos programados para o cinema, música, games e streaming. As indústrias do entretenimento estão a todo vapor, preparando experiências imersivas e narrativas cativantes para um público cada vez mais exigente e conectado.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Cinema: Blockbusters e Obras Autorais</h3>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Sala de cinema lotada antes de uma estreia" src="https://images.unsplash.com/photo-1485095329183-d0797cdc5676" />
        <p class="text-justify">Nas telonas, espera-se o retorno de franquias consagradas com novas sequências e reboots, além de filmes de super-heróis que prometem expandir seus universos cinematográficos. O cinema autoral também ganhará destaque, com diretores renomados apresentando obras originais em festivais internacionais e buscando espaço no circuito comercial. A tecnologia de projeção e som continuará evoluindo, oferecendo experiências cada vez mais imersivas nas salas de cinema.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Música: Novos Álbuns e Turnês Globais</h3>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Show de música com multidão e luzes coloridas" src="https://images.unsplash.com/photo-1506450212929-b83bfd1d419f" />
        <p class="text-justify">No cenário musical, grandes artistas internacionais e nacionais devem lançar álbuns aguardados, explorando novas sonoridades e colaborações. As turnês globais devem retornar com força total, levando shows espetaculares para estádios e arenas ao redor do mundo. O streaming continuará sendo a principal forma de consumo de música, com plataformas investindo em conteúdo exclusivo e ferramentas de descoberta personalizadas.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Games: Realismo e Mundos Virtuais</h3>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Pessoa jogando videogame com headset VR" src="https://images.unsplash.com/photo-1639931874947-889b556b306e" />
        <p class="text-justify">A indústria de games não fica para trás, com o lançamento de títulos AAA (jogos de grande orçamento) que prometem gráficos ultrarrealistas, narrativas complexas e mundos virtuais expansivos. A realidade virtual (VR) e a realidade aumentada (AR) devem ganhar mais espaço, oferecendo novas formas de interação e imersão. Os eSports continuarão crescendo em popularidade, com campeonatos milionários e uma base de fãs cada vez maior.</p>
        <h3 class="text-2xl font-semibold my-4 text-gray-800">Streaming: Séries Originais e Competição Acirrada</h3>
        <img  class="my-6 rounded-lg shadow-md w-full h-auto object-cover" alt="Interface de uma plataforma de streaming na TV" src="https://images.unsplash.com/photo-1610534005634-c469a3bacad5" />
        <p class="text-justify">As plataformas de streaming seguirão investindo pesado na produção de séries originais, minisséries e documentários, buscando atrair e reter assinantes em um mercado cada vez mais competitivo. A nostalgia continuará sendo uma forte tendência, com o resgate de clássicos e a produção de conteúdo baseado em propriedades intelectuais conhecidas. Em resumo, 2025 será um ano de muita diversão e entretenimento para todos os gostos.</p>
      `
    }
  };


  useEffect(() => {
    const noticiaEncontrada = mockNewsData[id] || Object.values(mockNewsData).find(news => news.id === parseInt(id));
    
    if (noticiaEncontrada) {
      setNoticia(noticiaEncontrada);
    } else {
      console.error("Notícia não encontrada");
    }
  }, [id]);

  const handleShare = () => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
    });
  };

  const handleComment = () => {
     toast({
      title: "🚧 Funcionalidade em desenvolvimento",
    });
  };

  if (!noticia) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full mx-auto mb-4"
          ></motion.div>
          <p className="text-xl text-gray-700">Carregando notícia...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-100">
      <section className="relative py-12 md:py-20 bg-gradient-to-r from-stone-800 to-stone-900">
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
            <Link to="/noticias" className="inline-flex items-center text-amber-300 hover:text-amber-100 transition-colors">
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
            <span className="bg-amber-700 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {noticia.category}
            </span>
          </motion.div>
        </div>
      </section>

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
            <Button onClick={() => toast({ title: "🚧 Funcionalidade em desenvolvimento"})} className="btn-secondary">
              Ver Mais Sugestões
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoticiaDetalhe;