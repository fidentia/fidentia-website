import styles from "./styles.module.scss";
import Link from "next/link";
import InsuranceContent from "../../components/InsuranceContent";

const contentSection1 = {
  title: "Investigador principal",
  contents: [
    "Você está na fronte do desenvolvimento científico e é responsável, dentre muitas outras atribuições, por todo o projeto, pela segurança e bem-estar dos participantes de suas pesquisas clínica.",
    "O seguro é um instrumento chave para garantir um atendimento adequado aos participantes, prevenir interrupções ou cancelamentos de projeto e blindar seu patrimônio pessoal.",
  ],
  contentCarousel: [
    {
      name: "card1",
      title: "Conheça os principais problemas que o seguro resolve: ",
      description1:
        "✓ Cobre automaticamente todos os ensaios clínicos liderados por você",
      description2: "✓ Blinda seu relacionamento com seus patrocinadores",
      description3:
        "✓ Previne interrupções ou cancelamentos de seus projetos de pesquisa",
      description4: "",
    },
    {
      name: "card2",
      title: "",
      description1:
        "✓ Protege falhas na execução dos ensaios clínicos, como desvios ao protocolo e falha no recrutamento;",
      description2:
        "✓ Segura danos causados ao participante e seu acompanhante no centro",
      description3:
        "✓ Custeia legais e honorários de advogados em processos litigiosos",
    },
    {
      name: "card3",
      title: "As nossas principais soluções para você, investigador:",
      description1:
        "✓ Estruturação de seguros para projetos de pesquisas locais e globais",
      description2:
        "✓ Seguro para qualquer tipo de pesquisa clínica, das menos até as mais invasivas e severas",
      description3:
        "✓ Análise de riscos financeiros com foco em proteção patrimonial",
    },
    {
      name: "card4",
      title: "",
      description1: "✓ Auditoria de apólices existentes",
      description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
      description3: "✓ Networking com industry-leaders e key opinion leaders",
    },
    {
      name: "card5",
      title: "",
      description1: "✓ Auditoria de apólices existentes",
      description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
      description3: "✓ Networking com industry-leaders e key opinion leaders",
    },
    {
      name: "card6",
      title: "",
      description1:
        "✓ Indenizações por danos corporais e materiais ao participante associados à pesquisa clínica",
      description2:
        "✓ Indenizações por danos corporais e materiais ao participante por falhas profissionais",
      description3:
        "✓ Prejuízos financeiros ao patrocinador por falhas profissionais",
    },
    {
      name: "card7",
      title: "",
      description1: "✓ Gestão de imagem e quebra de propriedade intelectual",
      description2: "✓ Despesas legais e custas advocatícias",
      description3:
        "✓ Uso compassivo, acesso expandido e fornecimento de medicamento pós-estudo",
    },
  ],
};
const contentSection2 = {
  title: "Investigador principal",
  contents: [
    "Você está na fronte do desenvolvimento científico e é responsável, dentre muitas outras atribuições, por todo o projeto, pela segurança e bem-estar dos participantes de suas pesquisas clínica.",
    "O seguro é um instrumento chave para garantir um atendimento adequado aos participantes, prevenir interrupções ou cancelamentos de projeto e blindar seu patrimônio pessoal.",
  ],
  contentCarousel: [
    {
      name: "card1",
      title: "Conheça os principais problemas que o seguro resolve: ",
      description1:
        "✓ Cobre automaticamente todos os ensaios clínicos liderados por você",
      description2: "✓ Blinda seu relacionamento com seus patrocinadores",
      description3:
        "✓ Previne interrupções ou cancelamentos de seus projetos de pesquisa",
      description4: "",
    },
    {
      name: "card2",
      title: "",
      description1:
        "✓ Protege falhas na execução dos ensaios clínicos, como desvios ao protocolo e falha no recrutamento;",
      description2:
        "✓ Segura danos causados ao participante e seu acompanhante no centro",
      description3:
        "✓ Custeia legais e honorários de advogados em processos litigiosos",
    },
    {
      name: "card3",
      title: "As nossas principais soluções para você, investigador:",
      description1:
        "✓ Estruturação de seguros para projetos de pesquisas locais e globais",
      description2:
        "✓ Seguro para qualquer tipo de pesquisa clínica, das menos até as mais invasivas e severas",
      description3:
        "✓ Análise de riscos financeiros com foco em proteção patrimonial",
    },
    {
      name: "card4",
      title: "",
      description1: "✓ Auditoria de apólices existentes",
      description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
      description3: "✓ Networking com industry-leaders e key opinion leaders",
    },
    {
      name: "card5",
      title: "",
      description1: "✓ Auditoria de apólices existentes",
      description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
      description3: "✓ Networking com industry-leaders e key opinion leaders",
    },
    {
      name: "card6",
      title: "",
      description1:
        "✓ Indenizações por danos corporais e materiais ao participante associados à pesquisa clínica",
      description2:
        "✓ Indenizações por danos corporais e materiais ao participante por falhas profissionais",
      description3:
        "✓ Prejuízos financeiros ao patrocinador por falhas profissionais",
    },
    {
      name: "card7",
      title: "",
      description1: "✓ Gestão de imagem e quebra de propriedade intelectual",
      description2: "✓ Despesas legais e custas advocatícias",
      description3:
        "✓ Uso compassivo, acesso expandido e fornecimento de medicamento pós-estudo",
    },
  ],
};
const contentSection3 = {
  title: "Investigador principal",
  contents: [
    "Você está na fronte do desenvolvimento científico e é responsável, dentre muitas outras atribuições, por todo o projeto, pela segurança e bem-estar dos participantes de suas pesquisas clínica.",
    "O seguro é um instrumento chave para garantir um atendimento adequado aos participantes, prevenir interrupções ou cancelamentos de projeto e blindar seu patrimônio pessoal.",
  ],
  contentCarousel: [
    {
      name: "card1",
      title: "Conheça os principais problemas que o seguro resolve: ",
      description1:
        "✓ Cobre automaticamente todos os ensaios clínicos liderados por você",
      description2: "✓ Blinda seu relacionamento com seus patrocinadores",
      description3:
        "✓ Previne interrupções ou cancelamentos de seus projetos de pesquisa",
      description4: "",
    },
    {
      name: "card2",
      title: "",
      description1:
        "✓ Protege falhas na execução dos ensaios clínicos, como desvios ao protocolo e falha no recrutamento;",
      description2:
        "✓ Segura danos causados ao participante e seu acompanhante no centro",
      description3:
        "✓ Custeia legais e honorários de advogados em processos litigiosos",
    },
    {
      name: "card3",
      title: "As nossas principais soluções para você, investigador:",
      description1:
        "✓ Estruturação de seguros para projetos de pesquisas locais e globais",
      description2:
        "✓ Seguro para qualquer tipo de pesquisa clínica, das menos até as mais invasivas e severas",
      description3:
        "✓ Análise de riscos financeiros com foco em proteção patrimonial",
    },
    {
      name: "card4",
      title: "",
      description1: "✓ Auditoria de apólices existentes",
      description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
      description3: "✓ Networking com industry-leaders e key opinion leaders",
    },
    {
      name: "card5",
      title: "",
      description1: "✓ Auditoria de apólices existentes",
      description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
      description3: "✓ Networking com industry-leaders e key opinion leaders",
    },
    {
      name: "card6",
      title: "",
      description1:
        "✓ Indenizações por danos corporais e materiais ao participante associados à pesquisa clínica",
      description2:
        "✓ Indenizações por danos corporais e materiais ao participante por falhas profissionais",
      description3:
        "✓ Prejuízos financeiros ao patrocinador por falhas profissionais",
    },
    {
      name: "card7",
      title: "",
      description1: "✓ Gestão de imagem e quebra de propriedade intelectual",
      description2: "✓ Despesas legais e custas advocatícias",
      description3:
        "✓ Uso compassivo, acesso expandido e fornecimento de medicamento pós-estudo",
    },
  ],
};
const contentSection4 = {
  title: "Investigador principal",
  contents: [
    "Você está na fronte do desenvolvimento científico e é responsável, dentre muitas outras atribuições, por todo o projeto, pela segurança e bem-estar dos participantes de suas pesquisas clínica.",
    "O seguro é um instrumento chave para garantir um atendimento adequado aos participantes, prevenir interrupções ou cancelamentos de projeto e blindar seu patrimônio pessoal.",
  ],
  contentCarousel: [
    {
      name: "card1",
      title: "Conheça os principais problemas que o seguro resolve: ",
      description1:
        "✓ Cobre automaticamente todos os ensaios clínicos liderados por você",
      description2: "✓ Blinda seu relacionamento com seus patrocinadores",
      description3:
        "✓ Previne interrupções ou cancelamentos de seus projetos de pesquisa",
      description4: "",
    },
    {
      name: "card2",
      title: "",
      description1:
        "✓ Protege falhas na execução dos ensaios clínicos, como desvios ao protocolo e falha no recrutamento;",
      description2:
        "✓ Segura danos causados ao participante e seu acompanhante no centro",
      description3:
        "✓ Custeia legais e honorários de advogados em processos litigiosos",
    },
    {
      name: "card3",
      title: "As nossas principais soluções para você, investigador:",
      description1:
        "✓ Estruturação de seguros para projetos de pesquisas locais e globais",
      description2:
        "✓ Seguro para qualquer tipo de pesquisa clínica, das menos até as mais invasivas e severas",
      description3:
        "✓ Análise de riscos financeiros com foco em proteção patrimonial",
    },
    {
      name: "card4",
      title: "",
      description1: "✓ Auditoria de apólices existentes",
      description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
      description3: "✓ Networking com industry-leaders e key opinion leaders",
    },
    {
      name: "card5",
      title: "",
      description1: "✓ Auditoria de apólices existentes",
      description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
      description3: "✓ Networking com industry-leaders e key opinion leaders",
    },
    {
      name: "card6",
      title: "",
      description1:
        "✓ Indenizações por danos corporais e materiais ao participante associados à pesquisa clínica",
      description2:
        "✓ Indenizações por danos corporais e materiais ao participante por falhas profissionais",
      description3:
        "✓ Prejuízos financeiros ao patrocinador por falhas profissionais",
    },
    {
      name: "card7",
      title: "",
      description1: "✓ Gestão de imagem e quebra de propriedade intelectual",
      description2: "✓ Despesas legais e custas advocatícias",
      description3:
        "✓ Uso compassivo, acesso expandido e fornecimento de medicamento pós-estudo",
    },
  ],
};
const sections = [contentSection1, contentSection2, contentSection3, contentSection4]

const mainTitle = "Como nossas soluções apoiam você";

export default function insurance() {
  return (
    <section>
     {sections.map((section) => (
       <section className={styles.container} key={section.title}>
       <div className={styles.header}>
          <div>
            <h2>{mainTitle}</h2>
          </div>
         <figure>
           <img src="/images/logo.svg" alt="ir para a pagina inicial" />
         </figure>
       </div>
       <section className={styles.container_content}>
         <InsuranceContent content={section} />
       </section>
     </section>
     ))}
    </section>
  );
}
