import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock
} from 'lucide-react';

export default function Contato() {

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta com a Dra. Bruna.');
    window.open(`https://wa.me/5515992836336?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefone',
      content: '(15) 99283-6336',
      action: () => window.open('tel:+5515992836336'),
      description: 'Segunda a Sexta, 9h às 18h'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'WhatsApp',
      content: 'Clique para conversar',
      action: handleWhatsApp,
      
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-mail',
      content: 'dra.brunatorellisoares@hotmail.com',
      action: () => window.open('mailto:dra.brunatorellisoares@hotmail.com'),
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Endereço',
      content: 'Rua Bernardo Guimarães 105, Edifício Boulevar Alavanca',
      action: () => window.open('https://maps.app.goo.gl/oeAME2KfcfrDw8aN9'),
      description: 'Sorocaba - SP, 18030-030'
    }
  ];



  return (
    <Layout
      title="Contato - Agende sua Consulta"
      description="Entre em contato com a Dra. Bruna Torelli Soares para agendar sua consulta de endodontia. WhatsApp, telefone, e-mail ou visite nossa clínica em Sorocaba."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-center mb-6 text-black">
              Entre em{' '}
              <span className="text-gold">Contato</span>
            </h1>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-8 sm:mb-12"></div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Estamos aqui para ajudar você a resolver seus problemas dentários com tratamentos 
              endodônticos especializados. Entre em contato conosco e agende sua consulta.
            </p>
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="flex items-center space-x-2 mx-auto bg-gold text-black hover:bg-gold/90"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar no WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white" onClick={info.action}>
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                    {info.icon}
                  </div>
                  <h3 className="font-serif font-semibold text-lg mb-2 text-black">
                    {info.title}
                  </h3>
                  <p className="text-black font-medium mb-2">
                    {info.content}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Hours */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Interactive Map */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-3 sm:mb-4 text-black">
                Nossa Localização
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-8 sm:mb-12"></div>
              
              {/* Google Maps iframe */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.927003199682!2d-47.46077727502319!3d-23.507545259616553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a99ee963db1%3A0x28b34adcd4826ace!2sBoulevard%20Alavanca%20Business%20%26%20Care!5e1!3m2!1spt-BR!2sbr!4v1759169356192!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="450" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Clínica - Dra. Bruna Torelli Soares"
                ></iframe>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-3 sm:mb-4 text-black">
                Horário de Funcionamento
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-8 sm:mb-12"></div>
              
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-xl mb-4 flex items-center space-x-2 text-black">
                    <Clock className="w-5 h-5 text-gold" />
                    <span>Atendimento</span>
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-black">Segunda a Sexta</span>
                      <span className="font-medium text-gray-700">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">Sábado</span>
                      <span className="text-gray-600">Fechado</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-black">Domingo</span>
                      <span className="text-gray-600">Fechado</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-gray-700 mb-4">
                      Para agendamentos entre em contato via WhatsApp.
                    </p>
                    <Button
                      onClick={handleWhatsApp}
                      className="w-full flex items-center justify-center space-x-2 bg-gold text-black hover:bg-gold/90"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
