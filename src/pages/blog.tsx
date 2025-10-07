import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  MessageCircle, 
  Calendar, 
  Clock, 
  User,
  ArrowRight,
  Tag,
  Search,
  X
} from 'lucide-react';
import { useState } from 'react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consulta com a Dra. Bruna.');
    window.open(`https://wa.me/5515992836336?text=${message}`, '_blank');
  };

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const articles = [
    {
      id: 1,
      title: 'Tratamento de Canal Dói? Descubra Mitos e Verdades',
      excerpt: 'O tratamento de canal é um dos procedimentos mais temidos pelos pacientes. Mas será que ele realmente dói? Graças aos avanços na endodontia e à anestesia moderna, o canal deixou de ser sinônimo de dor.',
      content: 'O tratamento de canal é cercado por muitos mitos, e um dos mais comuns é a ideia de que ele sempre causa dor. A realidade é que, com as técnicas modernas, o procedimento é feito de forma segura e confortável...',
      author: 'Dra. Bruna Torelli Soares',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'Para Pacientes',
      image: '/images/blog/tratamento-canal-dor.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Quando Procurar um Endodontista?',
      excerpt: 'Muitos pacientes não sabem quando é hora de procurar o especialista em canais. O endodontista é o dentista responsável por tratar a polpa do dente e os canais radiculares.',
      content: 'Nem sempre o dentista clínico geral consegue tratar casos mais complexos. Nessas situações, o endodontista é o especialista indicado para garantir o melhor tratamento...',
      author: 'Dra. Bruna Torelli Soares',
      date: '2024-01-10',
      readTime: '4 min',
      category: 'Para Pacientes',
      image: '/images/blog/endodontista.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'O que é um Tratamento de Canal?',
      excerpt: 'O tratamento de canal é um procedimento odontológico que visa salvar dentes com inflamação ou infecção na polpa dental. Entenda como funciona e seus benefícios.',
      content: 'O tratamento de canal é um procedimento odontológico que tem como objetivo salvar um dente com inflamação ou infecção na polpa. Entenda como funciona...',
      author: 'Dra. Bruna Torelli Soares',
      date: '2024-01-05',
      readTime: '6 min',
      category: 'Para Pacientes',
      image: '/images/blog/o-que-e-canal.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Por que Salvar o Dente é Melhor do que Extrair?',
      excerpt: 'Muitos pacientes acreditam que extrair um dente com problema é mais fácil, mas a extração pode trazer consequências sérias. Descubra as vantagens de preservar o dente natural.',
      content: 'Sempre que possível, manter o dente natural é a melhor escolha. A extração pode levar a perda óssea, alteração na mordida e necessidade de próteses...',
      author: 'Dra. Bruna Torelli Soares',
      date: '2023-12-28',
      readTime: '4 min',
      category: 'Para Pacientes',
      image: '/images/blog/salvar-dente.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Avanços em Tratamentos de Canais com Instrumentação Mecanizada',
      excerpt: 'A instrumentação mecanizada transformou a prática endodôntica, revolucionando a forma como os canais radiculares são preparados. Conheça os benefícios e impactos clínicos.',
      content: 'O uso de instrumentação mecanizada trouxe grandes benefícios para a endodontia moderna, incluindo redução significativa no tempo clínico e maior padronização...',
      author: 'Dra. Bruna Torelli Soares',
      date: '2023-12-20',
      readTime: '7 min',
      category: 'Para Profissionais',
      image: '/images/blog/instrumentacao-mecanizada.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Uso da Tecnologia no Dia a Dia da Endodontia',
      excerpt: 'A tecnologia ampliou a precisão e previsibilidade dos tratamentos endodônticos. Descubra como radiografia digital e CBCT revolucionaram o diagnóstico e planejamento.',
      content: 'A incorporação de tecnologias como radiografia digital e tomografia computadorizada (CBCT) aumenta a previsibilidade e segurança dos tratamentos endodônticos...',
      author: 'Dra. Bruna Torelli Soares',
      date: '2023-12-15',
      readTime: '6 min',
      category: 'Para Profissionais',
      image: '/images/blog/tecnologia-endodontia.jpg',
      featured: false
    },
    {
      id: 7,
      title: 'Cuidados Após o Tratamento de Canal',
      excerpt: 'Após o tratamento de canal, alguns cuidados simples garantem a cicatrização e a durabilidade do procedimento. Saiba como cuidar adequadamente do seu dente.',
      content: 'Após o tratamento de canal, é fundamental seguir alguns cuidados para garantir o sucesso do procedimento e a saúde do dente tratado...',
      author: 'Dra. Bruna Torelli Soares',
      date: '2023-12-10',
      readTime: '4 min',
      category: 'Para Pacientes',
      image: '/images/blog/cuidados-pos-canal.jpg',
      featured: false
    },
    {
      id: 8,
      title: 'Comparação entre Técnicas Manuais e Rotatórias/Reciprocantes',
      excerpt: 'Apesar do avanço tecnológico, as técnicas manuais ainda têm indicações específicas na endodontia moderna. Compare as vantagens de cada abordagem.',
      content: 'As técnicas manuais ainda têm sua importância em alguns casos específicos, mas os sistemas rotatórios e reciprocantes apresentam vantagens claras...',
      author: 'Dra. Bruna Torelli Soares',
      date: '2023-12-05',
      readTime: '8 min',
      category: 'Para Profissionais',
      image: '/images/blog/tecnicas-manuais-rotatorias.jpg',
      featured: false
    }
  ];

  const categories = ['Todos', 'Para Pacientes', 'Para Profissionais', 'Tecnologia'];
  const featuredArticle = articles.find(article => article.featured);
  
  const filteredArticles = selectedCategory === 'Todos' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  return (
    <Layout
      title="Blog - Artigos sobre Endodontia e Saúde Bucal"
      description="Acompanhe artigos especializados sobre endodontia, tratamentos de canal e saúde bucal. Conteúdo educativo da Dra. Bruna Torelli Soares, especialista em endodontia."
    >
      {/* Hero Section */}
      <section className="h-[400px] sm:h-[500px] bg-cover bg-no-repeat relative" style={{backgroundImage: 'url(/images/banner.png)', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center text-center">
              
              {/* Título principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-2 sm:mb-3">
                Blog e Artigos
              </h1>
              
              {/* Subtítulo */}
              <p className="text-lg sm:text-xl text-white mb-2 sm:mb-3 font-serif">
                Conteúdo Educativo • Endodontia e Saúde Bucal
              </p>
              
              {/* Descrição */}
              <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-2xl">
                Acompanhe artigos educativos sobre tratamentos endodônticos, cuidados com a saúde bucal 
                e dicas de saúde.
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
                  onClick={() => document.getElementById('artigos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-gold text-gold hover:bg-gold/10 py-4 sm:py-6 px-6 sm:px-8 rounded flex items-center space-x-2"
                >
                  <span>Ver Artigos</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-center mb-3 sm:mb-4 text-black">
                Artigo em Destaque
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gold mx-auto mb-8 sm:mb-12"></div>
            </div>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="bg-gray-100 h-64 lg:h-auto flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gold/20 rounded-lg mx-auto mb-4"></div>
                    <div className="text-sm text-gray-600">Imagem do artigo</div>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="w-4 h-4 text-gold" />
                    <span className="text-sm font-medium text-gold">
                      {featuredArticle.category}
                    </span>
                  </div>
                  
                  <h3 className="font-serif font-bold text-2xl mb-4 text-black">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredArticle.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleArticleClick(featuredArticle)}
                    className="flex items-center space-x-2 bg-gold text-black hover:bg-gold/90"
                  >
                    <span>Ler Artigo Completo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center space-x-2 ${
                  selectedCategory === category 
                    ? 'bg-gold text-black hover:bg-gold/90' 
                    : 'border-gold text-gold hover:bg-gold hover:text-black'
                }`}
              >
                <Tag className="w-4 h-4" />
                <span>{category}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.filter(article => !article.featured).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gold/20 rounded-lg mx-auto mb-2"></div>
                    <div className="text-xs text-gray-600">Imagem do artigo</div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Tag className="w-4 h-4 text-gold" />
                    <span className="text-sm font-medium text-gold">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="font-serif font-semibold text-lg mb-3 line-clamp-2 text-black">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.date).toLocaleDateString('pt-BR')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleArticleClick(article)}
                    className="w-full border-gold text-gold hover:bg-gold hover:text-black"
                  >
                    Ler Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal do Artigo */}
      {isModalOpen && selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-serif font-bold text-black">
                {selectedArticle.title}
          </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{selectedArticle.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(selectedArticle.date).toLocaleDateString('pt-BR')}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{selectedArticle.readTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Tag className="w-4 h-4" />
                  <span className="text-gold font-medium">{selectedArticle.category}</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">
                  {selectedArticle.excerpt}
                </p>
                
                <div className="text-gray-800 leading-relaxed">
                  {selectedArticle.id === 1 && (
                    <div>
                      <p className="mb-6 text-lg text-gray-700">
                        O <strong>tratamento de canal</strong> é um dos procedimentos mais temidos pelos pacientes. Mas será que ele realmente dói? Graças aos avanços na endodontia e à anestesia moderna, o canal deixou de ser sinônimo de dor e passou a ser uma solução segura para salvar dentes comprometidos.
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Mitos e Verdades</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Mito:</strong> O canal sempre causa dor.</li>
                        <li><strong>Verdade:</strong> A dor é provocada pela infecção, não pelo tratamento. Com anestesia adequada, o procedimento é indolor.</li>
                        <li><strong>Mito:</strong> É melhor extrair o dente.</li>
                        <li><strong>Verdade:</strong> Sempre que possível, salvar o dente natural é a melhor escolha.</li>
                        <li><strong>Mito:</strong> O dente fica fraco após o canal.</li>
                        <li><strong>Verdade:</strong> Com restauração definitiva, o dente pode durar por muitos anos.</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Como a anestesia moderna garante conforto</h3>
                      <p className="mb-6">A anestesia local, associada a técnicas complementares, garante que o paciente não sinta dor. Muitos pacientes relatam que o tratamento de canal foi mais tranquilo do que imaginavam.</p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">O que esperar antes, durante e depois</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Antes:</strong> Exames de imagem e avaliação clínica.</li>
                        <li><strong>Durante:</strong> Remoção da polpa inflamada, limpeza e preenchimento dos canais.</li>
                        <li><strong>Depois:</strong> Sensibilidade leve pode ocorrer, mas é passageira e controlada com analgésicos simples.</li>
                      </ul>
                      
                      <div className="bg-gold/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Conclusão</h4>
                        <p className="text-gray-800">Hoje, o <strong>tratamento de canal é seguro, rápido e indolor</strong>, devolvendo saúde ao dente e qualidade de vida ao paciente.</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedArticle.id === 2 && (
                    <div>
                      <p className="mb-6 text-lg text-gray-700">
                        Muitos pacientes não sabem quando é hora de procurar o especialista em canais. O <strong>endodontista</strong> é o dentista responsável por tratar a polpa do dente e os canais radiculares.
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Diferença entre clínico geral e endodontista</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Clínico geral:</strong> Atua em todas as áreas, mas pode encaminhar casos complexos.</li>
                        <li><strong>Endodontista:</strong> Especialista em salvar dentes através do tratamento de canal.</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Principais sintomas que exigem atenção</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Dor persistente que não melhora com analgésicos.</li>
                        <li>Sensibilidade prolongada ao frio e ao calor.</li>
                        <li>Inchaço próximo ao dente ou na gengiva.</li>
                        <li>Escurecimento do dente.</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Importância do diagnóstico precoce</h3>
                      <p className="mb-6">Quanto mais cedo o tratamento, maior a chance de salvar o dente sem complicações.</p>
                      
                      <div className="bg-gold/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Conclusão</h4>
                        <p className="text-gray-800">Se você apresenta esses sintomas, procure um endodontista. O diagnóstico precoce evita dor e procedimentos mais complexos.</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedArticle.id === 3 && (
                    <div>
                      <p className="mb-6 text-lg text-gray-700">
                        O <strong>tratamento de canal</strong> é um procedimento odontológico que visa salvar dentes com inflamação ou infecção na polpa dental.
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">O que acontece dentro do dente</h3>
                      <p className="mb-6">A polpa é o tecido vivo do dente. Quando está comprometida, precisa ser removida para evitar a perda do dente e o avanço da infecção.</p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Como o procedimento funciona</h3>
                      <ol className="list-decimal pl-6 mb-6 space-y-2">
                        <li>A anestesia é aplicada.</li>
                        <li>O dentista remove a polpa inflamada.</li>
                        <li>Os canais são limpos e preenchidos com material adequado.</li>
                        <li>O dente recebe uma restauração ou coroa para proteção.</li>
                      </ol>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Benefícios</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Mantém o dente natural.</li>
                        <li>Elimina a dor e a infecção.</li>
                        <li>Recupera a função mastigatória.</li>
                      </ul>
                      
                      <div className="bg-gold/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Conclusão</h4>
                        <p className="text-gray-800">O tratamento de canal é essencial para preservar dentes que, no passado, seriam extraídos.</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedArticle.id === 4 && (
                    <div>
                      <p className="mb-6 text-lg text-gray-700">
                        Muitos pacientes acreditam que extrair um dente com problema é mais fácil, mas a extração pode trazer consequências sérias.
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Vantagens de manter o dente natural</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Preserva a estética do sorriso.</li>
                        <li>Mantém a função mastigatória.</li>
                        <li>Evita movimentação dos dentes vizinhos.</li>
                        <li>Reduz custos com próteses e implantes.</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Impactos da extração</h3>
                      <p className="mb-6">A extração pode gerar perda óssea, alteração da mordida e necessidade de reabilitação protética.</p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Como o tratamento de canal ajuda</h3>
                      <p className="mb-6">O canal permite manter o dente saudável e funcional, sendo a opção preferencial quando há possibilidade.</p>
                      
                      <div className="bg-gold/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Conclusão</h4>
                        <p className="text-gray-800">Salvar é sempre melhor que extrair. O tratamento de canal devolve saúde e longevidade ao dente.</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedArticle.id === 5 && (
                    <div>
                      <p className="mb-6 text-lg text-gray-700">
                        A <strong>instrumentação mecanizada</strong> transformou a prática endodôntica, revolucionando a forma como os canais radiculares são preparados.
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Principais benefícios</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Redução significativa do tempo clínico.</li>
                        <li>Maior padronização e segurança no preparo.</li>
                        <li>Menor risco de falha e maior previsibilidade.</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Impacto clínico</h3>
                      <p className="mb-6">Combinada com técnicas modernas de irrigação e obturação, a instrumentação mecanizada aumenta as taxas de sucesso em tratamentos primários e retratamentos.</p>
                      
                      <div className="bg-gold/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Conclusão</h4>
                        <p className="text-gray-800">A adoção dos sistemas mecanizados é hoje considerada <strong>padrão-ouro na endodontia moderna</strong>.</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedArticle.id === 6 && (
                    <div>
                      <p className="mb-6 text-lg text-gray-700">
                        A <strong>tecnologia ampliou a precisão e previsibilidade</strong> dos tratamentos endodônticos, revolucionando o diagnóstico e planejamento.
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Radiografia Digital</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Imagens rápidas e de alta qualidade.</li>
                        <li>Redução da dose de radiação.</li>
                        <li>Armazenamento e compartilhamento digital.</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Tomografia Computadorizada (CBCT)</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Avaliação tridimensional da anatomia radicular.</li>
                        <li>Diagnóstico de fraturas e reabsorções.</li>
                        <li>Planejamento de casos complexos.</li>
                      </ul>
                      
                      <div className="bg-gold/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Conclusão</h4>
                        <p className="text-gray-800">A integração de <strong>radiografia digital e CBCT</strong> tornou-se indispensável na endodontia moderna, melhorando diagnóstico, planejamento e resultados.</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedArticle.id === 7 && (
                    <div>
                      <p className="mb-6 text-lg text-gray-700">
                        Após o <strong>tratamento de canal</strong>, alguns cuidados simples garantem a cicatrização e a durabilidade do procedimento.
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Alimentação adequada</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Prefira alimentos macios nos primeiros dias.</li>
                        <li>Evite mastigar diretamente no dente tratado até a restauração final.</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Uso de medicamentos</h3>
                      <p className="mb-6">O dentista pode prescrever analgésicos ou anti-inflamatórios para controlar a sensibilidade inicial.</p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Retorno ao dentista</h3>
                      <p className="mb-6">É fundamental realizar a restauração definitiva do dente e agendar consultas periódicas para acompanhamento.</p>
                      
                      <div className="bg-gold/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Conclusão</h4>
                        <p className="text-gray-800">Com os cuidados corretos, o dente tratado pode durar muitos anos, mantendo sua função e estética.</p>
                      </div>
                    </div>
                  )}
                  
                  {selectedArticle.id === 8 && (
                    <div>
                      <p className="mb-6 text-lg text-gray-700">
                        Apesar do avanço tecnológico, as <strong>técnicas manuais</strong> ainda têm indicações específicas na endodontia moderna.
                      </p>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Técnicas manuais</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Úteis em canais muito curvos ou estreitos.</li>
                        <li>Custos reduzidos.</li>
                        <li>Maior controle em casos complexos.</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Técnicas rotatórias e reciprocantes</h3>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Melhor eficiência.</li>
                        <li>Maior conforto para o paciente.</li>
                        <li>Menor fadiga do profissional.</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold mb-4 text-black">Evidências científicas</h3>
                      <p className="mb-6">Estudos mostram taxas de sucesso semelhantes, mas com clara vantagem operacional para os sistemas mecanizados.</p>
                      
                      <div className="bg-gold/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-black mb-2">Conclusão</h4>
                        <p className="text-gray-800">A escolha deve ser individualizada, mas os <strong>sistemas mecanizados</strong> oferecem maior praticidade na rotina clínica.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </Layout>
  );
}

