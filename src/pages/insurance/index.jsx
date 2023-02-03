import styles from "./styles.module.scss";
import Link from "next/link";

export default function insurance() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Como o seguro apoiará você?</h1>
      <div className={styles.container_arrow_back}>
        <button>
          <Link href="/#apoio">
            <img
              src={"/images/closeArrow.png"}
              alt="ícone para sair da seção de artigos"
              loading="lazy"
              title="Voltar para página principal"
            />
          </Link>
        </button>
      </div>
      <div className={styles.subContainer}>
        <div id="#email-mensagem">
          <h3 className={styles.marginBottom}>Investigador Principal</h3>
          <p className={styles.marginBottom}>
            Você está na fronte do desenvolvimento científico e é responsável,
            dentre muitas outras atribuições, por todo o projeto, pela segurança
            e bem-estar dos participantes de suas pesquisas clínicas.
          </p>
          <p className={styles.marginBottom}>
            O seguro é um instrumento chave para garantir um atendimento
            adequado aos participantes, prevenir interrupções ou cancelamentos
            de projeto e blindar seu patrimônio pessoal.
          </p>
          <p className={styles.marginBottom}>
            Conheça os principais problemas que o seguro resolve: 
            <p>✓ Cobre
            automaticamente todos os ensaios clínicos liderados por você</p> <p>✓
            Blinda seu relacionamento com seus patrocinadores</p>  <p>✓ Previne
            interrupções ou cancelamentos de seus projetos de pesquisa</p> <p>✓ Protege
            falhas na execução dos ensaios clínicos, como desvios ao protocolo e
            falha no recrutamento;</p>  <p>✓ Segura danos causados ao participante e seu
            acompanhante no centro</p> <p>✓ Custeia legais e honorários de advogados em
            processos litigiosos</p> <p>✓ Garante danos em eventos adversos graves,
            sejam eles previstos ou não</p> <p>✓ Indeniza os prejuízos por danos
            físicos, financeiros, morais e estéticos aos participantes</p>
          </p>
          <p className={styles.marginBottom}>
            As nossas principais soluções para você, investigador: <p>✓
            Estruturação de seguros para projetos de pesquisas locais e globais</p>
            <p>✓ Seguro para qualquer tipo de pesquisa clínica, das menos até as
            mais invasivas e severas</p> <p>✓ Análise de riscos financeiros com foco em
            proteção patrimonial</p> <p>✓ Auditoria de apólices existentes</p> <p>✓ Gestão do
            programa de seguros para pesquisas clínicas</p> <p>✓ Networking com
            industry-leaders e key opinion leaders</p> <p>✓ Treinamento, palestras e
            cursos com foco em gestão de riscos</p>
          </p>
          <p className={styles.marginBottom}>
            Principais coberturas disponíveis para investigadores: <p>✓
            Indenizações por danos corporais e materiais ao participante
            associados à pesquisa clínica</p> <p>✓ Indenizações por danos corporais e
            materiais ao participante por falhas profissionais</p> <p>✓ Prejuízos
            financeiros ao patrocinador por falhas profissionais</p> <p>✓ Gestão de
            imagem e quebra de propriedade intelectual</p> <p>✓ Despesas legais e
            custas advocatícias</p> <p>✓ Uso compassivo, acesso expandido e
            fornecimento de medicamento pós-estudo</p> <p>✓ Seguro de vida para os
            participantes de suas pesquisas</p>
          </p>
          <p className={styles.marginBottom}>
            Não encontrou o que precisava? Desenhamos, também, soluções
            personalizadas para anteder às suas necessidades. Fale conosco e
            deixe-nos saber como podemos apoiá-lo melhor.
          </p>
        </div>

        <div id="#politica-privacidade">
          <h3 className={styles.marginBottom}>Centros de Pesquisa</h3>
          <p className={styles.marginBottom}>
            Você é o elo entre o paciente e seus médicos. O meio para viabilizar
            o atendimento adequado ao paciente e garantir que os melhores e mais
            promissores tratamentos cheguem aos pacientes e participantes de
            pesquisa clínica.
          </p>
          <p className={styles.marginBottom}>
            Descubra como o seguro auxiliará no atendimento ao seu paciente e
            participantes de pesquisas em seu centro além de como ele ampliará o
            relacionamento com os patrocinadores.
          </p>
          <p className={styles.marginBottom}>
            Conheça os principais problemas que o seguro resolve: <p>✓ Indeniza
            participantes e seus acompanhamentos por danos ocorridos dentro do
            centro</p> <p>✓ Reduz a exposição financeira de cada projeto de pesquisa
            clínica</p><p>✓ Cobre lacunas nos MSAs e CTAs por falhas profissionais</p> <p>✓
            Cobre automaticamente todos os ensaios clínicos realizados no centro
            </p><p>✓ Custeia a assistência integral e imediata ao participante</p> <p>✓
            Previne interrupções ou cancelamentos de projetos de pesquisa
            clínica</p> <p>✓ Amplia a oferta de serviços para os patrocinadores</p> <p>✓
            Blinda o relacionamento com seus patrocinadores</p>
          </p>
          <p className={styles.marginBottom}>
            As nossas principais soluções centros de pesquisa: <p>✓ Estruturação de
            seguros para projetos de pesquisas locais e globais</p> <p>✓ Auditoria de
            apólices existentes</p> <p>✓ Gestão do programa de seguros para pesquisas
            clínicas</p> <p>✓ Análise de riscos financeiros com foco em proteção
            patrimonial</p> <p>✓ Networking com industry-leaders e key opinion leaders
            </p><p>✓ Treinamento, palestras e cursos com foco em gestão de riscos</p>
          </p>
          <p className={styles.marginBottom}>
            Principais coberturas disponíveis para centros de pesquisa: <p>✓
            Indenização por danos corporais e materiais por falhas profissionais
            – como desvio de protocolo e falha no recrutamento</p> <p>✓ Indenização por
            danos corporais e materiais sofridos nas dependências do centro</p> <p>✓
            Indenização por danos associados ao objeto sob estudo</p> <p>✓ Quebra de
            sigilo profissional</p> <p>✓ Despesas legais e custas advocatícias</p> <p>✓ Gestão
            de imagem</p> <p>✓ Uso compassivo, acesso expandido e fornecimento de
            medicamento pós-estudo</p> <p>✓ Danos de causa externa aos bens móveis e
            imóveis do centro</p> <p>✓ Seguro de vida para os participantes de suas
            pesquisas</p>
          </p>
          <p className={styles.marginBottom}>
            Não encontrou o que precisava? Desenhamos, também, soluções
            personalizadas para anteder às suas necessidades. Fale conosco e
            deixe-nos saber como podemos apoiá-lo melhor.
          </p>
        </div>

        <div>
          <h3 className={styles.marginBottom}>Patrocinador</h3>
          <p className={styles.marginBottom}>
            Você é quem viabiliza as pesquisas clínicas e garante a oferta dos
            melhores tratamentos às pessoas, responsável pela segurança e
            bem-estar dos participantes de pesquisa clínica.
          </p>
          <p className={styles.marginBottom}>
            Saiba que o seguro se faz um instrumento financeiro imprescindível,
            custeando a assistência médica necessária aos participantes de suas
            pesquisas, reduzindo as exposições financeiras de seus projetos e
            ampliando a previsibilidade dos resultados.
          </p>

          <p className={styles.marginBottom}>
            Conheça os principais problemas que o seguro resolve: <p>✓ Cobre
            automaticamente todos os ensaios clínicos promovidos por você
            globalmente</p> <p>✓ Blinda a imagem e reputação do patrocinador</p> <p>✓ Reduz as
            exposições a risco de seus projetos</p> <p>✓ Proporciona maior estabilidade
            financeira</p> <p>✓ Auxilia nos resultados financeiros</p> <p>✓ Custeia a
            assistência integral e imediata aos participantes</p> <p>✓ Reembolsa
            honorários advocatícios e custas legais</p> <p>✓ Previne interrupções ou
            cancelamentos de seus projetos de pesquisa</p> <p>✓ Cobre eventos adversos
            graves, sejam previstos ou não</p>
          </p>

          <p className={styles.marginBottom}>
            As nossas principais soluções para patrocinadores: <p>✓ Estruturação de
            seguros para projetos de pesquisas locais e globais</p> <p>✓ Auditoria de
            apólices existentes</p> <p>✓ Gestão do programa de seguros para pesquisas
            clínicas</p> <p>✓ Análise de riscos financeiros com foco em proteção
            patrimonial</p> <p>✓ Acesso a parceiros estratégicos locais</p> <p>✓ Treinamento,
            palestras e cursos com foco em gestão de riscos</p> <p>✓ Soluções em
            seguros para logística de insumos</p>
          </p>

          <p className={styles.marginBottom}>
            Principais coberturas disponíveis para patrocinadores: <p>✓
            Indenizações por danos associados à pesquisa clínica</p> <p>✓ Desvios de
            protocolo e demais falhas profissionais</p> <p>✓ Despesas médicas para
            assistência ao participante</p> <p>✓ Despesas legais e custas advocatícias</p>
            <p>✓ Crise de imagem</p> <p>✓ Ataques cibernéticos</p> <p>✓ Danos Genéticos para
            fetos e lactantes</p> <p>✓ Uso compassivo, acesso expandido e fornecimento
            de medicamento pós-estudo</p> <p>✓ Danos de causa externa aos bens móveis e
            imóveis do patrocinador</p> <p>✓ Transporte nacional e internacional de
            insumos</p> <p>✓ Seguro de vida para os participantes de suas pesquisas</p>
          </p>

          <p className={styles.marginBottom}>
            Não encontrou o que precisava? Desenhamos, também, soluções
            personalizadas para anteder às suas necessidades. Fale conosco e
            deixe-nos saber como podemos apoiá-lo melhor.
          </p>
        </div>

        <div>
          <h3 className={styles.marginBottom}>ORPC</h3>
          <p className={styles.marginBottom}>
            Você é a ponte que permite o Brasil a acessar os tratamentos mais
            promissores em desenvolvimento globalmente.
          </p>
          <p className={styles.marginBottom}>
            Saiba como o seguro apoia suas atividades, cobrindo todas as áreas
            de atuação da ORPC.
          </p>

          <p className={styles.marginBottom}>
            Conheça os principais problemas que o seguro resolve: <p>✓ Cobre
            automaticamente todos os ensaios clínicos geridos pela ORPC</p> <p>✓ Blinda
            o relacionamento com seus patrocinadores</p> <p>✓ Amplia adequação de
            exigência de patrocinadores internacionais</p> <p>✓ Protege prejuízos por
            erros ou falhas profissionais, tais como perda de prazos
            regulatórios ou redação e tradução de protocolos</p> <p>✓ Previne
            interrupções ou cancelamentos de projetos de pesquisa clínica</p>
          </p>

          <p className={styles.marginBottom}>
            As nossas principais soluções para ORPCs: <p>✓ Estruturação de seguros
            para projetos de pesquisas locais e globais</p> <p>✓ Auditoria de apólices
            existentes</p> <p>✓ Gestão do programa de seguros para pesquisas clínicas</p> <p>✓
            Análise de riscos financeiros com foco em proteção patrimonial</p> <p>✓
            Acesso a parceiros estratégicos locais</p> <p>✓ Treinamento, palestras e
            cursos com foco em gestão de riscos</p>
          </p>
          <p className={styles.marginBottom}>
            Principais coberturas disponíveis para ORPCs: <p>✓ Indenizações por
            danos associados à pesquisa clínica</p> <p>✓ Desvios de protocolo e demais
            falhas profissionais</p><p>✓ Despesas médicas para assistência ao
            participante</p> <p>✓ Despesas legais e custas advocatícias</p> <p>✓ Crise de
            imagem</p> <p>✓ Ataques cibernéticos</p> <p>✓ Danos Genéticos, para fetos e
            lactantes</p> <p>✓ Uso compassivo, acesso expandido e fornecimento de
            medicamento pós-estudo</p> <p>✓ Danos de causa externa aos bens móveis e
            imóveis da ORPC</p> <p>✓ Transporte nacional e internacional de insumos</p>
          </p>

          <p className={styles.marginBottom}>
            Não encontrou o que precisava? Desenhamos, também, soluções
            personalizadas para anteder às suas necessidades. Fale conosco e
            deixe-nos saber como podemos apoiá-lo melhor.
          </p>
        </div>

        <div>
          <h3 className={styles.marginBottom}>Intermediadores de Seguro</h3>
          <p className={styles.marginBottom}>
            O setor de pesquisas clínicas está em constante expansão e o
            contrato de seguro é um instrumento que apoia seu crescimento de
            maneira sustentável.
          </p>

          <p className={styles.marginBottom}>
            O Brasil já é uma potência em pesquisas clínicas no cenário global.
            Esse setor representa uma grande oportunidade de investimento para o
            profissional de seguro que deseja crescer e se estabelecer num
            segmento sólido.
          </p>

          <p className={styles.marginBottom}>
            Saiba o que esse segmento te proporcionará: <p>✓ Sólida carteira de
            clientes com compras recorrentes e de grandes importâncias</p> <p>✓
            Ampliação dos resultados financeiros da corretora</p> <p>✓ Oportunidades de
            expansão de negócios para o exterior</p> <p>✓ Acesso ao maior mercado do
            setor da américa e 7º maior do mundo</p> <p>✓ Excelentes oportunidades de
            expansão com cross e upsellings</p>
          </p>

          <p className={styles.marginBottom}>
            As nossas principais soluções para intermediadores de seguros: <p>✓
            Know-how e papelaria white lable para vender com qualidade
            internacional desde o primeiro dia</p> <p>✓ Acesso a leads e prospects
            locais e internacionais</p> <p>✓ Consultoria e todo assessoramento e apoio
            para fechamento de negócios, desde o primeiro contato com o cliente</p>
            <p>✓ Treinamento, palestras e cursos com foco em gestão de riscos</p> <p>✓
            Estruturação de seguros para projetos de pesquisas locais e globais</p>
            <p>✓ Auditoria de apólices existentes</p> <p>✓ Treinamento, palestras e cursos
            com foco no setor de pesquisas clínicas</p>
          </p>

          <p className={styles.marginBottom}>
            Principais coberturas disponíveis para você vencer, corretor: <p>✓
            Responsabilidade Civil – Testes Clínicos</p><p>✓ Responsabilidade Civil –
            Profissional (E&O)</p> <p>✓ Programas de seguro de vida</p> <p>✓ Programas de
            seguro de saúde</p> <p>✓ Seguro de riscos de propriedade</p> <p>✓ Programas de
            transporte</p>
          </p>

          <p className={styles.marginBottom}>
            Não encontrou o que precisava? Desenhamos, também, soluções
            personalizadas para anteder às suas necessidades, corretor. Fale
            conosco e deixe-nos saber como podemos apoiá-lo melhor.
          </p>
        </div>

        <div>
          <h3 className={styles.marginBottom}>Cias Seguradoras & Resseguradoras</h3>
          <p className={styles.marginBottom}>
            A Fidentia é o maior player do setor do mercado segurador brasileiro
            de pesquisas clínicas. Conte com a nossa expertise em análise de
            risco e underwriting para ampliar os resultados da carteira de
            Responsabilidade Civil.
          </p>
          <p className={styles.marginBottom}>
            Saiba o que a Fidentia te proporcionará: <p>✓ Acesso a uma sólida
            carteira de clientes com compras recorrentes em constante
            crescimento</p><p>✓ Ampliação dos undewriting results da carteira de RC</p> <p>✓
            Acesso a leads e prospects locais e internacionais</p>
          </p>
          <p className={styles.marginBottom}>
            As nossas principais soluções para cias seguradoras e
            resseguradoras: <p>✓ Confecção e revisão de insurance wording</p> <p>✓
            Underwriting especicializada à prática de pesquisas clínicas com
            full underwriting report, conta-a-conta</p> <p>✓ Full underwriting reports
            com rationale e pricing tool</p> <p>✓ Paperwork whitelable completa,
            conta-a-conta</p> <p>✓ Ambiente de cotação e contratação online via APIs
            plug-and-play</p> <p>✓ Reports mensais com prestação de contas e resultados
            de carteira</p> <p>✓ Assessoria e atendimento técnico comercial completo
            para corretores e área comercial</p> <p>✓ Treinamento, palestras e cursos
            com foco em gestão de riscos</p> <p>✓ Estruturação de programa de
            resseguros e retro</p> <p>✓ Treinamento, palestras e cursos com foco no
            setor de pesquisas clínicas</p>
          </p>

          <p className={styles.marginBottom}>
            Produtos disponíveis para seguradoras e resseguradoras: 
            <p>✓
            Responsabilidade Civil – Testes Clínicos</p> <p>✓ Responsabilidade Civil –
            Profissional (E&O)</p> <p>✓ Seguro de vida em grupo</p> <p>✓ Seguro saúde</p> <p>✓
            Property</p> <p>✓ Marine</p>
          </p>

          <p className={styles.marginBottom}>
            Não encontrou o que precisava? Desenhamos, também, soluções
            personalizadas para anteder às suas necessidades, corretor. Fale
            conosco e deixe-nos saber como podemos apoiá-lo melhor.
          </p>
        </div>
      </div>
    </section>
  );
}
