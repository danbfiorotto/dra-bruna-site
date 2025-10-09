import Layout from '../components/Layout';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

export default function PoliticaPrivacidade() {

  return (
    <Layout
      title="Política de Privacidade"
      description="Conheça nossa política de privacidade e como protegemos seus dados pessoais. Transparência e segurança em primeiro lugar."
      canonical="https://brunatorelli.com.br/politica-privacidade/"
    >
      {/* Hero Section */}
      <section className="h-[400px] sm:h-[500px] bg-cover bg-no-repeat relative" style={{backgroundImage: 'url(/images/banner.png)', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center text-center">
              
              {/* Título principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-2 sm:mb-3">
                Política de Privacidade
              </h1>
              
              {/* Subtítulo */}
              <p className="text-lg sm:text-xl text-white mb-2 sm:mb-3 font-serif">
                Transparência e Segurança • Proteção de Dados
              </p>
              
              {/* Descrição */}
              <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-2xl">
                Sua privacidade é fundamental para nós. Esta política explica como coletamos, 
                usamos e protegemos suas informações pessoais e dados de saúde.
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
                <Eye className="w-6 h-6 text-primary" />
                <span>1. Informações que Coletamos</span>
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Coletamos informações que você nos fornece diretamente, incluindo:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nome completo e dados de contato (e-mail, telefone)</li>
                  <li>Informações médicas e odontológicas relevantes para o tratamento endodôntico</li>
                  <li>Histórico de consultas e tratamentos de canal realizados</li>
                  <li>Exames radiográficos e documentação clínica</li>
                  <li>Informações de pagamento (processadas de forma segura)</li>
                  <li>Dados de anamnese e sintomas relatados</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4 flex items-center space-x-2">
                <Lock className="w-6 h-6 text-primary" />
                <span>2. Como Usamos suas Informações</span>
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Agendar e realizar consultas endodônticas</li>
                  <li>Fornecer tratamentos de canal e retratamentos endodônticos</li>
                  <li>Manter prontuário odontológico atualizado</li>
                  <li>Enviar lembretes de consultas e cuidados pós-tratamento</li>
                  <li>Processar pagamentos e emitir recibos</li>
                  <li>Realizar acompanhamento clínico e radiográfico</li>
                  <li>Melhorar nossos serviços e atendimento</li>
                  <li>Cumprir obrigações legais e regulamentares do CRO</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4 flex items-center space-x-2">
                <Shield className="w-6 h-6 text-primary" />
                <span>3. Proteção dos Dados</span>
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Criptografia de dados sensíveis</li>
                  <li>Acesso restrito apenas a profissionais autorizados</li>
                  <li>Backup seguro e regular dos dados</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4 flex items-center space-x-2">
                <UserCheck className="w-6 h-6 text-primary" />
                <span>4. Seus Direitos</span>
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>De acordo com a LGPD, você tem direito a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Confirmar a existência de tratamento de seus dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar anonimização, bloqueio ou eliminação de dados</li>
                  <li>Solicitar portabilidade dos dados</li>
                  <li>Revogar o consentimento a qualquer momento</li>
                  <li>Ser informado sobre o compartilhamento de dados</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                5. Compartilhamento de Informações
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                  exceto nas seguintes situações:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Com seu consentimento explícito</li>
                  <li>Para cumprir obrigações legais</li>
                  <li>Com prestadores de serviços que nos auxiliam (sempre com contratos de confidencialidade)</li>
                  <li>Em caso de emergência médica</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                6. Retenção de Dados
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Mantemos suas informações pelo tempo necessário para cumprir as finalidades 
                  descritas nesta política, respeitando os prazos legais:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prontuários odontológicos: 20 anos (conforme CRO)</li>
                  <li>Dados de contato: até solicitação de exclusão</li>
                  <li>Informações de pagamento: conforme legislação fiscal</li>
                  <li>Fotos de tratamento: até solicitação de exclusão</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                7. Cookies e Tecnologias Similares
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Nosso site pode usar cookies para melhorar sua experiência de navegação. 
                  Você pode configurar seu navegador para recusar cookies, mas isso pode 
                  afetar algumas funcionalidades do site.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                8. Alterações nesta Política
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Podemos atualizar esta política periodicamente. Notificaremos sobre 
                  mudanças significativas através do nosso site ou por e-mail.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4">
                9. Contato
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política, 
                  entre em contato conosco:
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

