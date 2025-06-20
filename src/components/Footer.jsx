import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
const Footer = () => {
  const socialLinks = [{
    icon: Facebook,
    href: 'https://facebook.com/centraldenoticiasficticio',
    label: 'Facebook'
  }, {
    icon: Twitter,
    href: 'https://twitter.com/centralnoticiasficticio',
    label: 'Twitter'
  }, {
    icon: Instagram,
    href: 'https://instagram.com/centraldenoticiasficticio',
    label: 'Instagram'
  }, {
    icon: Youtube,
    href: 'https://youtube.com/c/centraldenoticiasficticio',
    label: 'YouTube'
  }];
  return <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Newspaper className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Central de Notícias</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Seu portal de notícias confiável. Mantemos você informado sobre os acontecimentos 
              mais importantes do Brasil e do mundo com jornalismo de qualidade.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200" aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </motion.a>)}
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Links Rápidos</span>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Início</a></li>
              <li><a href="/noticias" className="text-gray-300 hover:text-white transition-colors">Notícias</a></li>
              <li><a href="/sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="/contato" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Categorias</span>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Política</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Economia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tecnologia</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Esportes</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Central de Notícias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;