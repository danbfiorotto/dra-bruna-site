import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Tratamentos', href: '/tratamentos' },
    { name: 'Casos', href: '/casos' },
    { name: 'Depoimentos', href: '/depoimentos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta com a Dra. Bruna.');
    window.open(`https://wa.me/5515992836336?text=${message}`, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image 
                src="/images/logo.png" 
                alt="Dra. Bruna Torelli Soares - Logo" 
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-gold text-xl sm:text-2xl font-serif font-bold">
              Dra. Bruna Torelli Soares
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gold transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 border-gold text-gold hover:bg-gold hover:text-black"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:text-gold hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-800">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-gold hover:bg-gray-800 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-800">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleWhatsApp}
                  className="w-full flex items-center justify-center space-x-2 border-gold text-gold hover:bg-gold hover:text-black"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

