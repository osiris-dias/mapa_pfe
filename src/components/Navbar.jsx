import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Início',
    path: '/'
  }, {
    name: 'Notícias',
    path: '/noticias'
  }, {
    name: 'Sobre',
    path: '/sobre'
  }, {
    name: 'Contato',
    path: '/contato'
  }];
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'navbar-blur shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Newspaper className="h-8 w-8 text-amber-800" />
            <span className="text-xl font-bold gradient-text">Central de Notícias</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.path} to={item.path} className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${location.pathname === item.path ? 'text-amber-800' : 'text-gray-700 hover:text-amber-800'}`}>
                {item.name}
                {location.pathname === item.path && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-800" initial={false} transition={{
              type: "spring",
              stiffness: 500,
              damping: 30
            }} />}
              </Link>)}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${location.pathname === item.path ? 'text-amber-800 bg-amber-50' : 'text-gray-700 hover:text-amber-800 hover:bg-gray-50'}`}>
                  {item.name}
                </Link>)}
            </div>
          </motion.div>}
      </div>
    </motion.nav>;
};
export default Navbar;