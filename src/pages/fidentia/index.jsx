import styles from "./styles.module.scss";
import Link from "next/link";

export default function fidentia() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>A fidentia</h1>
      <div className={styles.container_arrow_back}>
        <button>
          <Link href="/">
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
        <div id="email-mensagem">
          <p>
          Somos a Fidentia, um agente de seguros dedicado à prática e ao incentivo às pesquisas clínicas. Apoiamos a todos que as desenvolvem ou contribuem, oferecendo uma extensa suíte de serviços em consultoria com foco em gestão de riscos, seguros, resseguros, subscrição, educação e pesquisa.
          </p>

          <p className={styles.mt30}>
          Acreditamos que podemos cuidar de pessoas ao mesmo tempo em que lutamos para unir o mercado segurador aos demais setores da economia. Neste caminho, buscamos contribuir para um melhor ambiente socioeconômico em prol do bem-estar das pessoas e desenvolvimento da ciência, oferecendo aos nossos clientes e parceiros o que há de melhor e mais inovador em gestão de riscos com soluções únicas em seguros, perseguindo os mais elevados padrões de qualidade técnica, ética, transparência, clareza, honestidade e empatia.
          </p>

          <p className={styles.mt30}>
          Atuando como um verdadeiro hub de novas oportunidades, almejamos a excelência e reconhecimento por oferecermos a melhor consultoria individualizada em seguros para aqueles que a buscam. 
          </p>

          <p className={styles.mt30}>Apoiamos você, sempre.</p>

          <p className={styles.mt30}>Na Fidentia oferecemos uma suíte com serviços de:</p>

        </div>

        <div>
          <h3>Consultoria</h3>
          <p>
          Consultoria é a alma de tudo que fazemos. Todos os nossos serviços foram concebidos de forma a prestar consultoria individualizada, garantindo aos nossos clientes e parceiros compreensão e gestão sobre seus riscos.
          </p>
        </div>

        <div>
          <h3>Assessoria</h3>
          <p>
          Prestamos assessoria completa em gestão de riscos e seguros para o segurado, intermediadores de seguros e resseguros e cias seguradoras e resseguradoras, nacionais ou internacionais.
          </p>
        </div>

        <div>
          <h3>Subscrição</h3>
          <p>
          Nossa especialidade. A subscrição de risco de pesquisas clínicas no Brasil e no mundo é a base técnica para todas as nossas soluções.
          </p>
        </div>

        <div>
          <h3>Resseguro</h3>
          <p>
          Oferecemos programas de resseguros, viabilizando a cobertura de seguro para qualquer tipo de pesquisa, em qualquer lugar do mundo.
          </p>
        </div>

        <div>
          <h3>Research</h3>
          <p>
          Realizamos continuamente pesquisas de mercado nos setores em que atuamos, fornecendo aos nossos clientes e parceiros dados confiáveis e precisos contribuindo em suas tomadas de decisão e atuação em seus setores.
          </p>
        </div>

        <div>
          <h3>Educação</h3>
          <p>
          Promovemos palestras, cursos, cursos in-company, estudos e artigos, além de gerarmos conteúdo oferecendo atualização contínua aos entusiastas de pesquisas clínicas.
          </p>
        </div>

        <div>
          <h3>Nossa missão</h3>
          <p>
          Cuidar de pessoas unindo o mercado segurador aos demais setores da economia, garantindo e apoiando o desenvolvimento socioeconômico através de soluções em seguros e perseguindo os mais elevados padrões de qualidade técnica, ética, transparência, clareza, honestidade, agilidade e empatia.
          </p>
        </div>

        <div>
          <h3>Nossa visão</h3>
          <p>
          Ser a melhor consultoria em seguros, veículo de conhecimento e hub de negócios para seus parceiros contribuindo continuamente para o desenvolvimento e o bem-estar da sociedade.
          </p>
        </div>

        <div>
          <h3>Nossa valores</h3>
          <ul>
            <li>Ética</li>
            <li>Honestidade</li>
            <li>Clareza</li>
            <li>Transparência</li>
            <li>Capacidade Técnica</li>
            <li>Agilidade</li>
            <li>Empatia</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
