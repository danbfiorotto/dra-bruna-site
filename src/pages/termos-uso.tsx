import Layout from '../components/Layout';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

export default function TermosUso() {

  return (
    <Layout
      title="Termos de Uso"
      description="Conheça os termos e condições de uso dos serviços da Dra. Bruna. Transparência e clareza em nossos serviços."
    >
      {/* Hero Section */}
      <section className="h-[400px] sm:h-[500px] bg-cover bg-no-repeat relative" style={{backgroundImage: 'url(/images/banner.png)', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center text-center">
              
              {/* Título principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-2 sm:mb-3">
                Termos de Uso
              </h1>
              
              {/* Subtítulo */}
              <p className="text-lg sm:text-xl text-white mb-2 sm:mb-3 font-serif">
                Condições de Uso • Transparência e Clareza
              </p>
              
              {/* Descrição */}
              <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-2xl">
                Estes termos estabelecem as condições de uso dos nossos serviços. 
                Leia atentamente antes de utilizar nossos serviços.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4 flex items-center space-x-2">
                <Scale className="w-6 h-6 text-primary" />
                <span>1. Aceitação dos Termos</span>
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Ao acessar e utilizar os serviços da Dra. Bruna, você concorda em cumprir 
                  e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer 
                  parte destes termos, não deve utilizar nossos serviços.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4 flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <span>2. Descrição dos Serviços</span>
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Este site é de caráter informativo e institucional. A Dra. Bruna Torelli Soares oferece:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Informações sobre tratamentos endodônticos</li>
                  <li>Orientações sobre saúde bucal e endodontia</li>
                  <li>Conteúdo educativo sobre tratamentos de canal</li>
                  <li>Canal de contato via WhatsApp para esclarecimentos</li>
                  <li>Informações sobre localização e horários de atendimento</li>
                </ul>
                <p className="font-semibold text-foreground">
                  ⚠️ Importante: Este site não substitui consulta presencial. Diagnósticos e tratamentos 
                  só podem ser realizados em consulta odontológica presencial.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4 flex items-center space-x-2">
                <AlertTriangle className="w-6 h-6 text-primary" />
                <span>3. Limitações e Responsabilidades</span>
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  É importante entender que:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>As informações do site são de caráter geral e educativo</li>
                  <li>Não substituem avaliação clínica e radiográfica presencial</li>
                  <li>Cada caso deve ser avaliado individualmente</li>
                  <li>Os resultados dos tratamentos podem variar conforme cada paciente</li>
                  <li>É obrigatória consulta presencial para diagnóstico e tratamento</li>
                  <li>O contato via WhatsApp é apenas para esclarecimentos gerais</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                4. Contato e Comunicação
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Para contato e comunicação:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>O WhatsApp é utilizado apenas para esclarecimentos gerais</li>
                  <li>Informações de saúde via WhatsApp são limitadas e não substituem consulta</li>
                  <li>Horário de atendimento: Segunda a Sexta, 09:00 às 18:00</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                5. Uso do Site
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Ao utilizar este site, você concorda em:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Não utilizar o site para fins ilegais ou não autorizados</li>
                  <li>Não tentar acessar áreas restritas do site</li>
                  <li>Não interferir no funcionamento normal do site</li>
                  <li>Respeitar os direitos de propriedade intelectual</li>
                  <li>Fornecer informações verdadeiras quando solicitado</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                6. Confidencialidade Odontológica
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Respeitamos rigorosamente o sigilo odontológico:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Todas as informações odontológicas são confidenciais</li>
                  <li>Dados são compartilhados apenas com seu consentimento</li>
                  <li>Prontuários odontológicos são mantidos em segurança</li>
                  <li>Exames radiográficos são utilizados apenas com autorização expressa</li>
                  <li>Informações via WhatsApp são tratadas com confidencialidade</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                7. Limitações do Conteúdo
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  É importante entender as limitações do conteúdo do site:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>As informações são de caráter geral e educativo</li>
                  <li>Não constituem diagnóstico ou prescrição de tratamento</li>
                  <li>Cada caso clínico é único e requer avaliação individual</li>
                  <li>Exames radiográficos são essenciais para diagnóstico preciso</li>
                  <li>Histórico médico completo deve ser avaliado presencialmente</li>
                </ul>
                <p>
                  É fundamental buscar avaliação odontológica presencial para qualquer problema de saúde bucal.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                8. Propriedade Intelectual
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Todo o conteúdo do site e materiais são protegidos por direitos autorais:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Textos, imagens e vídeos são de nossa propriedade</li>
                  <li>Não é permitida reprodução sem autorização</li>
                  <li>Marca e logotipo são registrados</li>
                  <li>Materiais educativos são para uso pessoal</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                9. Modificações dos Termos
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                  As alterações entrarão em vigor imediatamente após a publicação no site. 
                  É sua responsabilidade revisar periodicamente estes termos.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                10. Lei Aplicável
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa será 
                  resolvida nos tribunais competentes de Sorocaba, SP.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                11. Contato
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Para dúvidas sobre estes termos, entre em contato:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>E-mail: dra.brunatorellisoares@hotmail.com</li>
                  <li>Telefone: (15) 99283-6336</li>
                  <li>Endereço: Rua Bernardo Guimarães 105, Edifício Boulevar Alavanca - Sorocaba, SP - 18030-030</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

    </Layout>
  );
}

