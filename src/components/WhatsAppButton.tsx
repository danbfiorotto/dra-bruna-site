import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';
import { trackWhatsAppClick } from '@/lib/analytics';

interface WhatsAppButtonProps {
  message?: string;
  phone?: string;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  children?: React.ReactNode;
  source?: string; // Para tracking
}

export default function WhatsAppButton({
  message = 'Olá! Gostaria de agendar uma consulta com a Dra. Bruna.',
  phone = '5515992836336',
  variant = 'default',
  size = 'default',
  className = '',
  children,
  source = 'whatsapp_button'
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Track WhatsApp click
    trackWhatsAppClick(source);
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      className={`flex items-center space-x-2 ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      {children || <span>WhatsApp</span>}
    </Button>
  );
}

