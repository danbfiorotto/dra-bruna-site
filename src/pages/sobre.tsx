import Image from 'next/image';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  GraduationCap, 
  Award, 
  Heart, 
  Users, 
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faTrophy, 
  faShield, 
  faHandsHelping, 
  faMicrochip, 
  faHandshake 
} from '@fortawesome/free-solid-svg-icons';

export default function Sobre() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta com a Dra. Bruna.');
    window.open(`https://wa.me/5515992836336?text=${message}`, '_blank');
  };

  const qualifications = [
    {
      title: 'Formação Odontológica',
      description: 'Graduação em Odontologia com especialização em Endodontia',
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: 'Especialização',
      description: 'Especialização em Endodontia pela Faculdade São Leopoldo Mandic',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Experiência',
      description: 'Mais de 5 anos de experiência em tratamentos endodônticos',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const values = [
    {
      title: 'Humanização',
      description: 'cada paciente é único e merece um atendimento personalizado',
      icon: <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
    },
    {
      title: 'Excelência',
      description: 'atualização constante em cursos e congressos',
      icon: <FontAwesomeIcon icon={faTrophy} className="w-6 h-6" />
    },
    {
      title: 'Segurança',
      description: 'protocolos rigorosos de higiene e biossegurança',
      icon: <FontAwesomeIcon icon={faShield} className="w-6 h-6" />
    },
    {
      title: 'Empatia',
      description: 'entender as dores e ansiedades de cada pessoa',
      icon: <FontAwesomeIcon icon={faHandsHelping} className="w-6 h-6" />
    },
    {
      title: 'Tecnologia',
      description: 'uso de radiografia digital, motor endodôntico, localizador apical e magnificação',
      icon: <FontAwesomeIcon icon={faMicrochip} className="w-6 h-6" />
    },
    {
      title: 'Compromisso',
      description: 'alívio da dor e qualidade de vida',
      icon: <FontAwesomeIcon icon={faHandshake} className="w-6 h-6" />
    }
  ];


  return (
    <Layout
      title="Sobre a Dra. Bruna Torelli Soares"
      description="Conheça a trajetória, formação e abordagem humanizada da Dra. Bruna Torelli Soares, especialista em endodontia em Sorocaba-SP."
      keywords="Dra. Bruna Torelli, endodontista Sorocaba, especialista em endodontia, formação São Leopoldo Mandic, dentista Sorocaba"
      canonical="https://brunatorelli.com.br/sobre/"
    >
      {/* Hero Section */}
      <section className="h-[400px] sm:h-[500px] bg-cover bg-no-repeat relative" style={{backgroundImage: 'url(/images/banner.png)', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center text-center">
              {/* Título principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-2 sm:mb-3">
                Sobre a Dra. Bruna Torelli Soares
              </h1>
              
              {/* Subtítulo */}
              <p className="text-lg sm:text-xl text-white mb-2 sm:mb-3 font-serif">
                Especialista em Endodontia • Formação São Leopoldo Mandic
              </p>
              
              {/* Descrição */}
              <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-2xl">
                Conheça a trajetória, as conquistas e a missão de proporcionar qualidade de vida aos seus pacientes.
              </p>
              
              {/* Botões de Ação */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  onClick={handleWhatsApp}
                  className="bg-gold hover:bg-opacity-80 text-black py-4 sm:py-6 px-6 sm:px-8 rounded flex items-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('formacao')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-gold text-gold hover:bg-gold/10 py-4 sm:py-6 px-6 sm:px-8 rounded flex items-center space-x-2"
                >
                  <span>Ver Formação</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-light-gray py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="w-full md:w-1/2">
              <Image 
                src="/images/dentist-profile.jpg" 
                alt="Dra. Bruna Torelli Soares" 
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black mb-4 sm:mb-6 border-l-4 border-gold pl-4">
                Formação e Trajetória
              </h2>
              <p className="text-gray-700 mb-6">
              A Dra. Bruna Torelli Soares é graduada em Odontologia. Desde criança seu sonho era ser dentista, e foi em 2018 que seu sonho se tornou realidade. Durante os anos da faculdade, ela se encantou em ajudar o próximo e teve mais afinidade com a área de endodontia - tratamento de canal. Em 2020, ela fez um curso de aperfeiçoamento em endodontia. Onde teve certeza da sua paixão. Sempre em busca de mais estudos e atualizações na área, em 2022 começou a especialização em Endodontia, na renomada São Leopoldo Mandic.
              </p>
              <p className="text-gray-700 mb-6">
              Ao longo da sua formação, Dra.Bruna participou de diversos congressos e cursos, buscando sempre aprimoramento das técnicas mais modernas e suas tecnologias. Seu objetivo é oferecer aos pacientes um atendimento humanizado, seguro e livre de dor, garantindo resultados incríveis.
              </p>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('valores')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-transparent border border-gold text-black hover:bg-gold hover:text-black py-2 sm:py-3 px-4 sm:px-6 rounded transition-colors"
              >
                Conheça os Valores
              </Button>
              
              {/* Logos de Credibilidade abaixo do texto */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6">
                  {/* Logo Mandic - Primeiro à esquerda */}
                  <Image 
                    src="/images/LogoMandic.png" 
                    alt="São Leopoldo Mandic" 
                    width={80}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                  
                  {/* Logo Orocentro */}
                  <Image 
                    src="/images/orocentroLogo.png" 
                    alt="Orocentro" 
                    width={50}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                  
                  {/* Logo FMU */}
                  <Image 
                    src="/images/LogoFMU.png" 
                    alt="FMU - Faculdades Metropolitanas Unidas" 
                    width={50}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                  
                  {/* Logo Por um Sorriso */}
                  <Image 
                    src="/images/porUmSorrisoLogo.png" 
                    alt="Por um Sorriso" 
                    width={50}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                  
                  {/* Logo CRO - Último à direita */}
                  <Image 
                    src="/images/LogoCRO.png" 
                    alt="Conselho Regional de Odontologia" 
                    width={50}
                    height={50}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão e Valores Section */}
      <section id="valores" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-3 sm:mb-4 text-black">
              Missão e Valores
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-8 sm:mb-12"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              A missão da Dra. Bruna é oferecer aos pacientes uma experiência acolhedora 
              e humanizada, unindo tecnologia de ponta, conhecimento científico e empatia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white rounded-lg shadow-lg p-5 sm:p-6 border-t-4 border-gold hover:shadow-xl transition-shadow flex flex-col h-full">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-black text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-center">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gold/10 rounded-lg p-8 max-w-4xl mx-auto">
              <div className="w-20 h-20 mx-auto mb-4">
                <Image 
                  src="/images/logo.png" 
                  alt="Dra. Bruna Torelli Soares - Logo" 
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-4">
                "Cuidar da dor do outro e salvar dentes"
              </h3>
              <p className="text-gray-700 text-lg">
                Esse é o lema que inspira a Dra. Bruna Torelli Soares em cada atendimento. 
                Seu objetivo é garantir que cada paciente se sinta acolhido e saia do consultório livre de dores e inseguranças.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-black py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gold mb-6">
            Agende sua Consulta
          </h2>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl mx-auto">
            Não deixe que problemas dentários afetem sua qualidade de vida. 
            Entre em contato hoje mesmo e agende uma avaliação com a Dra. Bruna Torelli Soares.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="inline-block bg-gold hover:bg-opacity-80 text-black py-4 sm:py-6 px-8 sm:px-10 text-base sm:text-lg rounded w-full sm:w-auto max-w-xs mx-auto flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Agendar Consulta</span>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

