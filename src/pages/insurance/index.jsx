import styles from "./styles.module.scss";
import Link from "next/link";
import TitleInsurance from "../../components/TitleInsurance";
import InsuranceContent from "../../components/InsuranceContent";
import { useState } from "react";
import Image from "next/image";


export default function insurance() {
  const [contentS1, setContentS1] = useState([
    {
        name: "card1",
        title: "Conheça os principais problemas que o seguro resolve: ",
        description1: "✓ Cobre automaticamente todos os ensaios clínicos liderados por você",
        description2: "✓ Blinda seu relacionamento com seus patrocinadores",
        description3: "✓ Previne interrupções ou cancelamentos de seus projetos de pesquisa",
        description4: ""
                    
    },
    {
        name: "card2",
        title: "",
        description1: "✓ Protege falhas na execução dos ensaios clínicos, como desvios ao protocolo e falha no recrutamento;",
        description2: "✓ Segura danos causados ao participante e seu acompanhante no centro",
        description3: "✓ Custeia legais e honorários de advogados em processos litigiosos"
    },
    {
        name: "card3",
        title: "As nossas principais soluções para você, investigador:",
        description1: "✓ Estruturação de seguros para projetos de pesquisas locais e globais",
        description2: "✓ Seguro para qualquer tipo de pesquisa clínica, das menos até as mais invasivas e severas",
        description3: "✓ Análise de riscos financeiros com foco em proteção patrimonial"
    },
    {
        name: "card4",
        title: "",
        description1: "✓ Auditoria de apólices existentes",
        description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
        description3: "✓ Networking com industry-leaders e key opinion leaders"
    },
    {
        name: "card5",
        title: "",
        description1: "✓ Auditoria de apólices existentes",
        description2: "✓ Gestão do programa de seguros para pesquisas clínicas",
        description3: "✓ Networking com industry-leaders e key opinion leaders"
    },
    {
        name: "card6",
        title: "",
        description1: "✓ Indenizações por danos corporais e materiais ao participante associados à pesquisa clínica",
        description2: "✓ Indenizações por danos corporais e materiais ao participante por falhas profissionais",
        description3: "✓ Prejuízos financeiros ao patrocinador por falhas profissionais"
    },
    {
        name: "card7",
        title: "",
        description1: "✓ Gestão de imagem e quebra de propriedade intelectual",
        description2: "✓ Despesas legais e custas advocatícias",
        description3: "✓ Uso compassivo, acesso expandido e fornecimento de medicamento pós-estudo"
    }
]);
  return (
    <section className={styles.container}>
      <Image src="/images/s1_insurance.png" fill={true}/>
      <div className={styles.title_main}>
        <h2>Como nossas soluções apoiam você</h2>
      </div>
      <section className={styles.container_s1}>
        <InsuranceContent content={contentS1}/> 
      </section>
    </section>
  );
}
