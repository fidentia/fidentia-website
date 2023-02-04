import styles from "./styles.module.scss";
import Link from "next/link";

export default function politics() {
  return (
    <section className={styles.container}>
            <h1 className={styles.title}>Políticas</h1>
      <div className={styles.container_arrow_back}>
        <button>
          <Link href="/#artigos">
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
          <h3>Email e mensagem</h3>
          <p>
            Nossos e-mails e mensagens são dirigidos apenas ao destinatário e
            contém informações de caráter privado, confidencial e sigiloso.
            Notificamos previamente que qualquer distribuição, uso ou cópia de
            nossos e-mails ou mensagens e das informações neles contidas por
            outrem que não seu(s) destinatário(s) correto(s) está sujeito à
            prévia autorização do emissor estando o infrator sujeito às sanções
            aplicáveis sob os termos da legislação vigente. Se recebeu nosso
            e-mail ou mensagem por engano, por favor, notifique imediatamente o
            remetente, elimine a mensagem original e todo seu conteúdo de seus
            registros, sistemas de dados e controles bem como eventuais cópias
            físicas.
          </p>
        </div>

        <div>
          <h3>Email and messages</h3>
          <p>
            Our e-mails and messages are addressed only to the addressee and
            contain information of a private, confidential, and secret nature.
            We notify you in advance that any distribution, use or copy of our
            e-mails or messages and the information contained therein by anyone
            other than its correct recipient(s) is subject to the prior
            authorization of the sender being the violator subject to applicable
            sanctions under the terms of current legislation. If you have
            received our e-mail or message by mistake, please notify the sender
            immediately, delete the original message and all its contents from
            your records, data systems and controls as well as any physical
            copies.
          </p>
        </div>

        <div id="politica-privacidade">
          <h3>Política de Privacidade e Cookies</h3>
          <p>Idem seu site.</p>
        </div>

        <div id="etica-compliance">
          <h3>Ética e Compliance</h3>
          <p>
            Levamos a sério nossos compromissos para com a sociedade, indivíduos
            e instituições com quem nos relacionamos. Respeito às crenças,
            opiniões, ideais, ideologias, modo de pensar, orientação sexual,
            características, etnia, gênero, religião, idade, nacionalidade ou
            naturalidade formam os princípios básicos de nossas atividades e
            pautam nossas ações cotidianas.
          </p>
          <p>
            Nós observamos e seguimos as leis e regras aplicáveis não só às
            nossas atividades em âmbito profissional e individual, mas também
            àquelas aplicáveis aos indivíduos e instituições a quem servimos,
            utilizando-os inclusive como material para prestação de serviço de
            excelência como perseguimos.
          </p>
          <p>
            Buscamos ser o elo entre o mercado segurador e demais setores da
            sociedade. Com isso, perseguimos os mais elevados padrões de
            qualidade técnica atuando com transparência, agilidade, ética,
            diligência, retidão, profissionalismo, empatia, espírito
            colaborativo e justiça.
          </p>
          <p>
            Nós não toleramos condutas inapropriadas, imorais, antiéticas e
            muito menos ilegais. Caso observemos ações que conflitem com nossos
            valores, com a ética ou com a lei, nós tomaremos as medidas cabíveis
            inclusive denunciando aos órgãos competentes. Igualmente,
            encorajamos aos nossos clientes, parceiros bem como a todos os
            indivíduos e instituições com quem nos relacionamos que, ao
            presenciarem práticas antiéticas ou ilegais com algo ou alguém que
            possa de alguma forma se relacionar com a Fidentia, nos comunique
            utilizando os canais disponíveis de contato.
          </p>
        </div>
      </div>
    </section>
  );
}
