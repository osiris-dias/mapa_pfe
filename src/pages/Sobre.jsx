import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Globe, Heart } from 'lucide-react';
const Sobre = () => {
  const teamMembers = [{
    name: "Ana Silva",
    role: "Editora-Chefe",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    description: "15 anos de experiência em jornalismo investigativo"
  }, {
    name: "Carlos Santos",
    role: "Editor de Economia",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    description: "Especialista em mercado financeiro e economia brasileira"
  }, {
    name: "Maria Oliveira",
    role: "Repórter de Tecnologia",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    description: "Cobertura especializada em inovação e startups"
  }];
  const values = [{
    icon: Users,
    title: "Transparência",
    description: "Comprometidos com a verdade e transparência em todas as nossas reportagens."
  }, {
    icon: Award,
    title: "Qualidade",
    description: "Padrões jornalísticos rigorosos e verificação de fatos em todas as notícias."
  }, {
    icon: Globe,
    title: "Alcance Global",
    description: "Cobertura local com perspectiva global, conectando o Brasil ao mundo."
  }, {
    icon: Heart,
    title: "Compromisso Social",
    description: "Jornalismo que faz a diferença na sociedade e promove o bem comum."
  }];
  return <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-4xl md:text-5xl font-bold mb-6 text-shadow">
            Sobre Nós
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }} className="text-lg md:text-xl max-w-3xl mx-auto text-shadow">
            Somos um portal de notícias comprometido com a informação de qualidade, 
            transparência e o compromisso de manter nossos leitores sempre bem informados.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Democratizar o acesso à informação de qualidade, promovendo o jornalismo 
                ético e responsável que contribui para uma sociedade mais informada e consciente.
              </p>
              <p className="text-lg text-gray-600">
                Acreditamos que a informação é um direito fundamental e trabalhamos 
                incansavelmente para entregar conteúdo confiável, verificado e relevante 
                para nossos leitores.
              </p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }} className="slide-in-right">
              <img  alt="Equipe de jornalistas trabalhando" className="rounded-xl shadow-lg w-full" src="https://images.unsplash.com/photo-1598737129494-69cb30f96a73" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Os princípios que guiam nosso trabalho e definem nossa identidade jornalística
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <motion.div key={value.title} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
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
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Profissionais experientes e apaixonados por jornalismo de qualidade
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => <motion.div key={member.name} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} className="text-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }}>
              <img  alt="História do jornalismo" className="rounded-xl shadow-lg w-full" src="https://images.unsplash.com/photo-1598255900051-e3bf3d9ff1d4" />
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-shadow">
                Nossa História
              </h2>
              <p className="text-lg mb-6 text-shadow">Fundado em 2020, a Central de Notícias nasceu da necessidade de oferecer informação confiável e acessível em um mundo cada vez mais conectado.</p>
              <p className="text-lg mb-6 text-shadow">
                Desde então, crescemos constantemente, sempre mantendo nosso compromisso 
                com a qualidade jornalística e a responsabilidade social.
              </p>
              <p className="text-lg text-shadow">
                Hoje, somos uma referência em jornalismo digital, com milhões de 
                leitores que confiam em nosso trabalho diariamente.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>;
};
export default Sobre;