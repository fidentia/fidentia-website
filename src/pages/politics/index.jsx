import styles from "./styles.module.scss";
import Link from "next/link";

export default function politics() {
  return (
    <section className={styles.container}>
      <div className={styles.container_button_back}>
        <h1 className={styles.title}>
          Políticas de privacidade, cookies, E-mail e demais
        </h1>

        <Link href="/#footer">
          <img
            src="/images/logo.svg"
            alt="ícone para sair da seção de artigos"
            loading="lazy"
            title="Voltar para página principal"
          />
        </Link>
      </div>
      <div className={styles.subContainer}>
        <div className={styles.flexrows}>
          <div id="email-mensagem" className={styles.marginBottom}>
            <h3 className={styles.titlePrincipal}>Email e mensagem</h3>
            <p>
              Nossos e-mails e mensagens são dirigidos apenas ao destinatário e
              contém informações de caráter privado, confidencial e sigiloso.
              Notificamos previamente que qualquer distribuição, uso ou cópia de
              nossos e-mails ou mensagens e das informações neles contidas por
              outrem que não seu(s) destinatário(s) correto(s) está sujeito à
              prévia autorização do emissor estando o infrator sujeito às
              sanções aplicáveis sob os termos da legislação vigente. Se recebeu
              nosso e-mail ou mensagem por engano, por favor, notifique
              imediatamente o remetente, elimine a mensagem original e todo seu
              conteúdo de seus registros, sistemas de dados e controles bem como
              eventuais cópias físicas.
            </p>
          </div>

          <div className={styles.italicFont}>
            <h3 className={`${styles.margin} ${styles.titlePrincipal}`}>
              Email and messages
            </h3>
            <p>
              Our e-mails and messages are addressed only to the addressee and
              contain information of a private, confidential, and secret nature.
              We notify you in advance that any distribution, use or copy of our
              e-mails or messages and the information contained therein by
              anyone other than its correct recipient(s) is subject to the prior
              authorization of the sender being the violator subject to
              applicable sanctions under the terms of current legislation. If
              you have received our e-mail or message by mistake, please notify
              the sender immediately, delete the original message and all its
              contents from your records, data systems and controls as well as
              any physical copies.
            </p>
          </div>
        </div>

        <div id="politica-privacidade">
          <h4 className={styles.titlePrincipal}>
            Política de Privacidade e Cookies
          </h4>
          <div className={styles.marginBottom}>
            <p className={styles.margin}>
              FIDENTIA CAPITAL CONSULTORIA E ASSESSORIA EM SEGUROS E RESSEGUROS
              LTDA. (“Fidentia” ou nós) entendemos as preocupações sobre
              privacidade e trabalhamos duro para cumprir as leis de proteção de
              dados relevantes.
            </p>

            <p className={styles.margin}>
              Este aviso de privacidade do site é fornecido para explicar:
            </p>
            <ul>
              <li>
                Os tipos de informação pessoal que são coletados sobre
                indivíduos em nosso site;
              </li>
              <li>Como podemos usar e compartilhar essas informações;</li>
              <li>
                As opções disponíveis para você em relação ao uso de suas
                informações pessoais;
              </li>
              <li>
                As medidas que tomamos para proteger suas informações pessoais;
              </li>
              <li>Por quanto tempo retemos suas informações e;</li>
              <li>
                Como entrar em contato conosco sobre as nossas práticas de
                privacidade e exercer seus direitos de privacidade de dados;
              </li>
              <li>
                Informações que obtemos;
                <li>Coleta automatizada de dados;</li>
                <li>Cookies</li>
                <li>Serviços de análise da web de terceiros.</li>
              </li>
              <li>
                Rastreamento on-line e publicidade com base em interesses;
              </li>
              <li>Como usamos as informações pessoais;</li>
              <li>Compartilhamento de informações;</li>
              <li>Transferência de dados;</li>
              <li>Seus direitos e escolhas;</li>
              <li>Outros serviços online e recursos de terceiros;</li>
              <li>Retenção de informações pessoais;</li>
              <li>Informações pessoais de crianças;</li>
              <li>Atualizações para este aviso de privacidade do site;</li>
              <li>
                E-Recrutamento;
                <li>Como usamos os dados fornecidos pelo trabalho;</li>
                <li>
                  Compartilhamento de dados pessoais de candidatos a emprego;
                </li>
                <li>Links para outros sites relacionados a recrutamento;</li>
                <li>
                  Por quanto tempo retemos o pessoal dos candidatos a emprego;
                </li>
              </li>
              <li>Como entrar em contato conosco;</li>
              <li>Política de cookies.</li>
            </ul>
          </div>

          <div className={styles.marginBottom}>
            <h4>INFORMAÇÕES QUE OBTEMOS</h4>
            <p className={styles.margin}>
              Podemos coletar e armazenar informações pessoais que você nos
              fornece por meio do uso do nosso site, incluindo os seguintes
              tipos de informações:
            </p>

            <ul>
              <li>
                Informações de contato, como seu nome e endereço de e-mail;
              </li>
              <li>
                Informações de emprego, como sua empresa, cargo e localização e;
              </li>
              <li>Outras informações pessoais que você nos fornece.</li>
            </ul>
          </div>

          <div className={styles.marginBottom}>
            <h4>COLETA AUTOMATIZADA DE DADOS</h4>
            <p>
              Quando você usa nosso site, certas informações pessoais podem ser
              obtidas por meios automatizados, como cookies de navegador, web
              beacons, identificadores de dispositivo, logs de servidor e outras
              tecnologias.
            </p>

            <p>O que são cookies e web beacons?</p>
            <p className={styles.margin}>
              “Cookies” são arquivos de texto de computador que os sites enviam
              para o computador de um visitante ou outro dispositivo para:
            </p>

            <ul>
              <li>
                Identificar exclusivamente o navegador desse visitante ou;
              </li>
              <li>
                Armazenar informações ou configurações no navegador desse
                visitante.
              </li>
            </ul>

            <p className={styles.margin}>
              “Web beacons”, também conhecidos como tags de internet, pixel tags
              ou clear GIFs, ligam páginas da web a servidores da web e seus
              cookies podem ser usados para transmitir informações coletadas por
              meio de cookies de volta a um servidor da web.
            </p>

            <p>Que tipo de dados pessoais são coletados usando cookies?</p>

            <p className={styles.margin}>
              As informações que coletamos usando cookies podem incluir o
              endereço de IP do seu dispositivo, nome de domínio,
              identificadores associados aos seus dispositivos, tipo e
              características do dispositivo e do sistema operacional,
              características do navegador da web, preferências de idioma, dados
              de fluxo de cliques, suas interações com nosso site – como as
              páginas que você visita, links que você clica, vídeos que você
              assiste e recursos que você usa – as páginas que o levaram ou
              encaminharam ao nosso site, datas e horários de acesso ao nosso
              site, informações de geolocalização e outras informações sobre o
              uso do nossos site.
            </p>

            <p>Por que usamos cookies e web beacons e o que eles fazem?</p>

            <p>
              Podemos usar cookies e web beacons para nos ajudar com qualquer um
              dos seguintes:
            </p>
            <ul className={styles.margin}>
              <li>
                Lembre-se de suas informações pessoais para que você não precise
                digitá-las novamente;
              </li>
              <li>
                Rastrear e entender como você usa e interage com nosso site;
              </li>
              <li>Personalizar nosso site de acordo com suas preferências;</li>
              <li>Medir a usabilidade do nosso site;</li>
              <li>Fornecer a você publicidade com base em interesses e;</li>
              <li>Gerenciar e aprimorar a funcionalidade do nosso site.</li>
            </ul>
          </div>

          <div className={styles.marginBottom}>
            <h4>COOKIES - SUAS ESCOLHAS</h4>
            <p>
              Na medida exigida pela lei aplicável, obteremos seu consentimento
              antes de colocar cookies ou tecnologias semelhantes em seu
              computador. Você pode ajustar suas configurações de cookies a
              qualquer momento enviando um e-mail para contato@fidentia.com.br.
              Além disso, você pode impedir que certos tipos de cookies sejam
              baixados em seu computador selecionando as configurações
              apropriadas em seu navegador da web. A maioria dos navegadores da
              web lhe dirá como parar de aceitar novos cookies do navegador,
              como ser notificado quando você receber um novo cookie do
              navegador e como desativar os cookies existentes. Você pode
              descobrir como fazer isso para seu navegador específico clicando
              em ajuda no menu do seu navegador ou visitando
              http://www.allaboutcookies.org.
            </p>

            <p>
              O site não foi projetado para responder a sinais de “não rastrear”
              recebidos de navegadores ou nosso site pode não ser projetado para
              responder a sinais de “não rastrear” recebidos de navegadores.
              Observe que, sem cookies ou outras ferramentas automatizadas,
              talvez você não consiga usar todos os recursos do nosso site.
            </p>

            <p>
              Para obter mais detalhes sobre os cookies que usamos consulte o
              “Aviso de Cookies” abaixo.
            </p>

            <p>
              Podemos obter informações pessoais sobre suas atividades online ao
              longo do tempo e em sites, dispositivos e outros serviços online
              de terceiros. Além disso, nosso site pode usar serviços de análise
              online de terceiros, com os do Google Analytics e Hubspot. Os
              provedores de serviços que administram esses serviços de análise
              usam tecnologias automatizadas para coletar dados – como endereço
              de email, endereço de IP, cookies e outros identificadores de
              dispositivo – para avaliar, por exemplo o uso do nosso site e
              diagnosticar problemas técnicos. Para saber mais sobre o Google
              Analytics, visite
              http://www.google.com/analytics/learn/privacy.html. Você pode
              desativar o Google Analytics visitando
              http://tools.google.com/dlpage/gaoptout?hl+en=GB. Para saber mais
              sobre o Hubspot visite
              http://www.legal.hubspot.com/privacypolitica.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>RASTREAMENTO ON-LINE E PUBLICIDADE COM BASE EM INTERESSES</h4>
            <p>
              Por meio de nosso site, nós e alguns terceiros podemos coletar
              informações sobre suas atividades online para fornecer publicidade
              sobre produtos e serviços adaptados aos seus interesses
              individuais. Quando exigido pela lei aplicável, obteremos seu
              consentimento para o processamento de suas informações pessoais
              para fins de marketing direto. Ocasionalmente, você pode ver
              anúncios de nossa agência em outros sites ou aplicativos móveis –
              isso seria quando participamos de redes de publicidade. As redes
              de publicidade nos permitem transmitir publicidade para grupos de
              usuários da Internet selecionados com base em dados demográficos,
              interesses inferidos dos usuários, localização e contexto de
              navegação. Essas redes rastreiam as atividades online dos usuários
              ao longo do tempo coletando informações por meio automatizados,
              incluindo o uso de cookies do navegador, web beacons,
              identificadores de dispositivo, logs de servidor e outras
              tecnologias semelhantes. As redes de publicidade usam essas
              informações para mostrar anúncios que podem ser adaptados aos
              interesses dos indivíduos, para rastrear os navegadores ou
              dispositivos dos usuários em vários sites e aplicativos e para
              criar um perfil das atividades de navegação on-line e de uso de
              aplicativo dos usuários. As informações que nossas redes de
              publicidade podem coletar incluem dados sobre as visitas dos
              usuários a sites e aplicativos que participam das redes de
              publicidade relevantes, como as páginas ou anúncios visualizados e
              as ações realizadas nos sites ou aplicativos. Essa coleta de dados
              ocorre em sites e aplicativos de terceiros que participam das
              redes de publicidade. As redes de publicidade usam essas
              informações para mostrar anúncios que podem ser adaptados aos
              interesses dos indivíduos, para rastrear os navegadores ou
              dispositivos dos usuários em vários sites e aplicativos e para
              criar um perfil das atividades de navegação on-line e de uso de
              aplicativos dos usuários. As informações que nossas redes de
              publicidade podem coletar incluem dados sobre as visitas dos
              usuários a sites e aplicativos que participam das redes de
              publicidade relevantes, como as páginas ou anúncios visualizados e
              as ações realizadas nos sites ou aplicativos.
            </p>

            <p>
              Para saber como desativar a publicidade baseada em interesses da
              rede de publicidade na União Europeia, visite
              www.youronlinechoices.eu.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>COMO USAMOS AS INFORMAÇÕES PESSOAIS</h4>
            <p>
              Podemos usar as informações pessoais que obtemos através do nosso
              site para:
            </p>
            <ul>
              <li>Personalizar sua experiência em nosso site;</li>
              <li>Fornecer nossos serviços para você;</li>
              <li>Responder às suas solicitações e dúvidas;</li>
              <li>
                Operar, avaliar e melhorar nossos negócios – incluindo
                desenvolver novos serviços, aprimorar e melhorar nossos
                serviços, analisar nossos serviços, gerenciar nossas
                comunicações, realizar análises de dados e pesquisas de mercado
                e realizar contabilidade, auditoria e outras funções internas;
              </li>
              <li>
                Proteger contra roubo de identidade e prevenir fraudes e outras
                atividades criminosas indesejáveis;
              </li>
              <li>Comercializar nossos serviços para você ou sua empresa e;</li>
              <li>
                Cumprir e fazer cumprir os requisitos legais aplicáveis, os
                padrões relevantes do setor e nossas políticas, incluindo este
                aviso de privacidade do site.
              </li>
            </ul>

            <p>
              Se suas informações pessoais forem usadas de outras maneiras
              forneceremos a você um aviso específico disso no momento da coleta
              e garantiremos que tenhamos seu consentimento.
            </p>

            <p>
              Podemos combinar informações que obtemos sobre você – de nosso
              site ou de terceiros – para os fins descritos acima.
            </p>

            <p>
              Como nosso site pode fornecer acesso a material publicados por
              editores on-line independentes de nós, você também deve consultar
              a seção “Outros serviços on-line e recursos de terceiros”, que
              fornece informações sobre como suas informações pessoais podem ser
              adquiridas e usadas por esses editores.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>COMPARTILHAMENTO DE INFORMAÇÕES</h4>
            <p>
              Não divulgamos informações pessoais que obtemos sobre você, exceto
              conforme descrito neste aviso de privacidade do site.
            </p>
            <p>
              Podemos compartilhar suas informações pessoais com outras agências
              em nossa rede, nossas afiliadas e provedores de serviços que
              realizam serviços em nosso nome – como hospedagem de nosso site,
              gerenciamento de relacionamento ou análise de dados. Isso é feito
              apenas para fins descritos neste aviso de privacidade do site. Não
              autorizamos nossos provedores de serviços a usar ou divulgar as
              informações que coletamos, exceto conforme necessário para
              realizar serviços em nosso nome ou cumprir requisitos legais. Mas,
              como sito acima, como nosso site pode fornecer acesso a material
              publicado por editores on-line independentes de nós, você também
              deve consultar a seção “Outros serviços online e recursos de
              terceiros”, que fornece informações sobre como suas informações
              pessoais podem ser adquiridas e usados por esses editores.
            </p>

            <p>Também podemos divulgar informações sobre você:</p>
            <ul>
              <li>
                Se formos obrigados a fazê-lo por lei ou processo legal – como
                uma ordem judicial ou intimação;
              </li>
              <li>
                Em resposta a solicitação agências governamentais como
                autoridades policiais;
              </li>
              <li>Estabelecer, exercer ou defender nossos direitos legais;</li>
              <li>
                Quando acreditarmos que a divulgação é necessária ou apropriada
                para evitar danos físicos ou outros danos ou perdas financeiras;
              </li>
              <li>
                Em conexão com uma investigação de atividade ilegal suspeita ou
                real;
              </li>
              <li>
                No caso de vendermos ou transferirmos todo ou parte de nossos
                negócios ativos – inclusive no caso de reorganização, dissolução
                ou liquidação;
              </li>
              <li>
                Onde temos um interesse legítimo em fazê-lo e seus direitos como
                titular de dados não são afetados negativamente, ou;
              </li>
              <li>Caso contrário com o seu consentimento.</li>
            </ul>
          </div>

          <div className={styles.marginBottom}>
            <h4>TRANSFERÊNCIA DE DADOS</h4>
            <p>
              Apenas compartilharemos ou transferiremos dados pessoais para
              entidades localizadas fora do país em que as informações foram
              originalmente coletadas de acordo com a lei para garantir que seus
              direitos sejam protegidos adequadamente.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>SEUS DIREITOS E ESCOLHAS</h4>
            <p>
              Ofereceremos a você certas opções em relação às informações
              pessoais que obteremos sobre você. Para atualizar suas
              preferências, atualizar ou corrigir suas informações, limitar as
              comunicações que você recebe de nós ou enviar solicitação, entre
              em contato conosco diretamente – consulte a seção “Como entrar em
              contato conosco”.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>OUTROS SERVIÇOS ON-LINE E RECURSOS DE TERCEIROS</h4>
            <p>
              Nosso site pode fornecer links para outros serviços e sites online
              para sua conveniência e informação e, pode incluir recursos de
              terceiros, como aplicativos, ferramentas, widgets e plug-ins – por
              exemplo botões do Facebook, Instagram, LinkedIn, Twitter e
              Behance. Esses serviços, sites e recursos de terceiros podem
              operar independentemente de nós. As práticas de privacidade desses
              terceiros, incluindo detalhes sobre as informações que eles podem
              coletar sobre você, estão sujeitas às declarações de privacidade
              desses terceiros, que sugerimos que você revise. Na medida em que
              quaisquer serviços online vinculados ou recursos de terceiros não
              sejam de nossa propriedade ou controlados por nós, não somos
              responsáveis pelas práticas de informações pessoais desses
              terceiros.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>RETENÇÃO DE INFORMAÇÕES PESSOAIS</h4>
            <p>
              Na medida do permitido pela lei aplicável, mantemos as informações
              pessoais desde que:
            </p>
            <ul>
              <li>
                É necessário para os propósitos para os quais obtivemos ou;
              </li>
              <li>
                Temos uma base legal separada e clara para reter os dados
                pessoais.
              </li>
            </ul>
            <p>
              Nosso objetivo é sempre cumprir as leis aplicáveis, o que
              significa necessariamente que apenas mantemos os dados pessoais de
              que precisamos e pelo tempo que precisarmos ou pudermos justificar
              razoavelmente mantê-los.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>COMO PROTEGEMOS AS INFORMAÇÕES PESSOAIS</h4>
            <p>
              Mantemos salvaguardas administrativas, técnicas e físicas
              projetadas para proteger as informações pessoais que obtemos por
              meio do nosso site contra destruição, perda, alteração, acesso,
              divulgação e uso acidental, ilegal ou não autorizado.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>INFORMAÇÕES PESSOAIS DE CRIANÇAS</h4>
            <p>
              Nosso site foi projetado para um público geral – e principalmente
              um público empresarial. Não é dirigido a crianças. Não coletamos
              ou solicitamos intencionalmente informações pessoais de crianças –
              ou seja, indivíduos menores de 16 anos – através do nosso site. Se
              soubermos que coletamos informações pessoais de uma criança,
              excluiremos imediatamente essas informações de nossos registros.
              Se você acredita que uma criança pode ter nos fornecido
              informações pessoais, entre em contato conosco conforme
              especificado na seção “Como entrar em contato conosco” deste aviso
              de privacidade do site.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>ATUALIZAÇÕES PARA ESTE AVISO DE PRIVACIDADE DO SITE</h4>
            <p>
              Este aviso de privacidade do site pode ser atualizado
              periodicamente e sem aviso prévio para refletir mudanças em nossas
              práticas de informações pessoais, indicaremos na parte superior do
              aviso quando ele foi atualizado mais recentemente.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>RECRUTAMENTO ELETRÔNICO ATRAVÉS DO NOSSO SITE</h4>
            <p>
              E-Recruitment – Como usamos dados fornecidos por candidatos a
              emprego?
            </p>
            <p>
              Se você se candidatar a uma vaga conosco por meio de nosso site,
              podemos solicitar que você forneça cartas de apresentação,
              currículos e referências que contenham uma série de informações
              pessoais relacionadas a você, incluindo seu nome e informações de
              contato, seu histórico de educação e emprego, suas habilidades de
              trabalho, seu local de trabalho desejado e status de autorização
              de trabalho. Além disso, para nos ajudar no monitoramento da
              diversidade e igualdade, a seu critério, você pode nos fornecer
              detalhes de gênero, raça, etnia ou deficiência.
            </p>

            <p>
              Este aviso de privacidade e política de cookies aplica
              integralmente às nossas atividades de recrutamento eletrônico.
              Além disso, podemos usar informações pessoais obtidas de
              candidatos a emprego para:
            </p>
            <ul>
              <li>
                Avaliar sua experiência e qualificações no que se refere aos
                requisitos específicos para o cargo para o qual você se
                candidatou e, possivelmente, para determinar se você seria
                adequado para outros cargos conosco;
              </li>
              <li>
                Informá-lo sobre futuras vagas em outras posições semelhantes;
              </li>
              <li>Criar e gerenciar sua conta e;</li>
              <li>
                Responder e comunica com você sobre solicitações, perguntas e
                comentários.
              </li>
            </ul>
            <p>
              E-Recruitment – Compartilhamento de dados pessoais de candidatos a
              emprego
            </p>
            <p>
              Podemos compartilhar informações pessoais de candidatos a empregos
              com outras agências do grupo com o objetivo de avaliar sua
              experiência e qualificações relacionadas a requisitos específicos
              para o cargo e possivelmente para determinar se você seria
              adequado para outras posições dentro do grupo. Além disso, podemos
              usar suas informações pessoais para fins de relatório, conforme
              exigido por lei.
            </p>
            <p>
              Também podemos fornecer suas informações pessoais a terceiros que
              prestam serviços em nosso nome. Por exemplo, podemos compartilhar
              as informações que você nos fornece com prestadores de serviço,
              como agências de recrutamento e avaliadores de salários que nos
              ajudam a avaliar candidatos para oportunidades de emprego e
              prestadores de serviço de recrutamento online. Sempre exigiremos
              que esses terceiros protejam adequadamente suas informações
              pessoais e não as usem para qualquer finalidade não autorizada.
            </p>

            <p>
              Além disso, se você fornecer referências para apoias sua
              solicitação de emprego, poderemos entrar em contato com
              referências para nos ajudar a avalia-lo para a oportunidades de
              emprego conosco. Fazer isso necessariamente envolverá uma
              divulgação limitada de informações pessoais a esses indivíduos
              como o seu nome, o fato de você ter nos apresentado uma
              solicitação de emprego e estar interessado em um determinado tipo
              de cargo conosco.
            </p>

            <p>
              Não forneceremos suas informações pessoais a terceiros para fins
              próprios desses terceiros sem o seu consentimento prévio
            </p>

            <p>
              E-Recruitment – Links para outros sites relacionados a
              recrutamento
            </p>
            <p>
              Nosso site pode fornecer links para outros sites para sua
              conveniência e informação. Esses sites podem operar
              independentemente de nós. Os sites vinculados podem ter seus
              próprios avisos de privacidade, que recomendamos que você revise
              para entender melhor seus procedimentos de coleta, uso e
              divulgação de informações pessoais. Não somos responsáveis pelo
              conteúdo de sites vinculados, por quaisquer usos desses sites ou
              pelas práticas de privacidade desses sites.
            </p>
            <p>
              E-Recruitment – Por quanto tempo retemos as informações pessoais
              dos candidatos a emprego?
            </p>
            <p>
              Armazenaremos as informações pessoais que você nos enviar por meio
              deste site pelo tempo que for razoavelmente necessário para sua
              solicitação de emprego, levando em consideração nossa necessidade
              de responder a perguntas ou resolver problemas e cumprir os
              requisitos legais de acordo com as leis aplicáveis. Também podemos
              reter suas informações pessoais por um período razoável para poder
              entrar em contato com você caso uma vaga de emprego adequada
              ocorra no futuro. Se você não deseja ser considerado para futuras
              oportunidades de emprego, excluiremos suas informações pessoais a
              seu pedido. Os candidatos que recebem vagas de emprego conosco
              terão suas informações armazenadas por períodos mais longos, de
              acordo com a necessidade de emprego e legislação local.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>COMO ENTRAR EM CONTATO CONOSCO?</h4>
            <p>
              Você pode entrar em contato conosco em relação a qualquer assunto
              de privacidade, incluindo o uso de seus dados pessoais ou para
              exercer seus direitos, usando os seguintes detalhes de contato e
              fornecendo detalhes de sua solicitação:
            </p>

            <div>
              <p>Por e-mail</p>
              <p>contato@fidentia.com.br</p>
            </div>
          </div>

          <h4 className={styles.marginBottom}>POLÍTICA DE COOKIES</h4>

          <div className={styles.marginBottom}>
            <h4>O QUE SÃO COOKIES?</h4>
            <p>
              Um “Cookie” é um arquivo de texto de letras e números que os sites
              enviam para o computador de um visitante ou outro dispositivo
              conectado à Internet para identificar exclusivamente o navegador
              do visitante ou para armazenar informações ou configurações do
              navegador. Um web beacon, também conhecido como Internet Tag,
              Pixel Tag ou Clear GIF, vincula páginas da web a servidores da web
              e seus cookies e pode ser usado para transmitir informações
              coletadas por meio de cookies de volta a um servidor da web. Nós e
              nossos provedores de serviços terceirizados podemos usar beacons
              para nos ajudar a rastrear as taxas de resposta, identificar
              quando as páginas da web são acessadas ou outros tipos de
              interações – como encaminhamento – e para outros fins listados
              abaixo.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>O TERMO "COOKIES" INCLUI COOKIES, TAGS E PIXELS</h4>
            <p>
              Ao soltar um cookie no dispositivo de internet de um usuário do
              site – por exemplo, seu computador, laptop ou smartphone – o site
              pode reconhecer o dispositivo desse usuário e armazenar
              informações sobre suas preferências ou ações anteriores. Os
              cookies também podem permitir que o site reconheça o usuário
              quando o usuário retornar ao site.
            </p>
          </div>

          <div className={styles.marginBottom}>
            <h4>NOSSO USO DE COOKIES</h4>
            <p>Nosso site pode usar cookies para:</p>
            <ul>
              <li>Melhorar o desempenho de nosso site;</li>
              <li>
                Nos permitir coletar informações sobre como os usuários usam
                nosso site;
              </li>
              <li>Melhorar a experiência dos usuários em nosso site;</li>
              <li>
                Entregar publicidade online relevante para você em nosso site e
                em outros lugares, e/ou;
              </li>
              <li>
                Medir a eficácia da nossa publicidade online e comunicações de
                marketing.
              </li>
            </ul>
          </div>

          <div className={styles.marginBottom}>
            <h4>RESUMO DOS DIFERENTES TIPOS DE COOKIES</h4>
            <p>Cookies estritamente necessários</p>
            <p>
              São cookies necessários para o funcionamento de um site. Eles são
              usados para garantir a segurança, proteção e integridade do nosso
              site, bem como para garantir que os usuários naveguem pelo site e
              usem seus recursos. Por exemplo, eles ajudam a suportar a
              estrutura das páginas que são exibidas aos usuários do site,
              ajudam a melhorar a navegação e permitem que os usuários do site
              retornem às páginas que visitaram anteriormente. Este tipo de
              cookie dura apenas o tempo que os usuários do site estiverem
              visitando-o. Quando um usuário sai do site, ele é excluído
              automaticamente. Os cookies categorizados como estritamente
              necessários não podem ser desativados e o consentimento do usuário
              do site não é legalmente exigido antes de seu uso – portanto, não
              solicitamos seu consentimento antes de usar cookies estritamente
              necessários.
            </p>

            <p>Cookies de desempenho ou cookies analíticos</p>
            <p>
              Esses cookies são usados para coletar informações sobre como os
              usuários usam um site, por exemplo, quais páginas os usuários
              acessam com mais frequência e se recebem mensagens de erro de
              páginas da web. Esses cookies não coletam informações que
              identificam um visitante. Os dados desses cookies são agregados e
              anônimos, o que significa que não podemos identificar um usuário
              como indivíduo. Pedimos seu consentimento antes que esses tipos de
              cookies sejam usados.
            </p>

            <p>Cookies funcionais</p>
            <p>
              São usados para reconhecer um usuário do site quando ele retorna a
              um site. Isso permite que o proprietário de um site personalize o
              conteúdo para esse usuário, por exemplo:
            </p>
            <ol>
              <li>Cumprimentando o usuário pelo nome;</li>
              <li>
                Lembrando as preferências do usuário – como escliha do idioma –
                ou alterações no tamanho da fonte;
              </li>
              <li>
                Fornecer aos usuários informações sobre eventos ou notícias
                locais armazenando sua localização regional;
              </li>
              <li>
                Fornecer serviços como assistir a um vídeo ou comentar um item.
              </li>
            </ol>

            <p>
              Esses cookies não podem rastrear a atividade de navegação em
              outros sites e as informações que eles coletam podem ser anônimas
              – mas poderão identificar o dispositivo de um usuário até que o
              usuário opte por limpá-los. Se um usuário optar por fazer isso,
              ele precisará inserir seus dados na próxima vez que visitar o
              site.
            </p>

            <p>Cookies de direcionamento</p>

            <p>
              Esses cookies coletam informações sobre os hábitos de navegação de
              um usuário e permitem que o proprietário do site mostre anúncios
              ao usuário enquanto navega no site ou em outros sites da Internet.
              Eles são definidos pelo proprietário do site ou por terceiros
              agindo em nome do proprietário do site e duram por um período de
              tempo variáveis.
            </p>

            <p>
              Eles podem ser usados para fornecer anúncios direcionados aos
              usuários do site ou para limitar o número de vezes que os
              visitantes verão um anúncio. Eles geralmente são colocados por
              redes de publicidade com permissão do operador do site. Eles
              lembram que um visitante visitou um site e essas informações são
              compartilhadas com outras organizações, como anunciantes.
            </p>

            <p>Bloquear ou restringir cookies</p>
            <p>
              Esses cookies podem ser usados para impedir que os cookies sejam
              usados no dispositivo de um usuário do site, ativando uma
              configuração no navegador do usuário do site que resulta no
              bloquei da implantação de todos os alguns cookies. Visite
              www.allaboutcookies.org para saber como.
            </p>
            <p>
              Se as configurações do navegador bloquearem os cookies, esse
              usuário da Internet pode não conseguir acessar todas as partes de
              determinado site.
            </p>
            <p>Cookies de mídia social</p>
            <p>
              Esses cookies são definidos por serviços de mídia social e são
              adicionados a um site para permitir que os usuários do site
              compartilhem conteúdo com seus amigos e conexões. Esses cookies
              podem rastrear o uso do negador em sites para criar um perfil de
              interesse de um visitante. Isso pode afetar o conteúdo e as
              mensagens vistas em outros sites.
            </p>
          </div>
        </div>

        <div id="etica-compliance" className={styles.marginBottom}>
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
        <div className={styles.marginBottom}>
          <h3>Créditos de imagens</h3>
          <p>
            <a href="https://www.freepik.com/free-photo/stylish-young-handsome-man-white-shirt-black-jacket-with-tablet-smiling-achieve-success-great-work-expressing-true-positive-emotions-businessman-smart-worker_10208782.htm#query=homem moreno com tablet&position=8&from_view=search&track=popular">
              Image by lookstudio
            </a>
            on Freepik
          </p>
          <p>
            <a href="https://www.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_5546285.htm#&position=3&from_view=undefined">
              Image by katemangostar
            </a>
            on Freepik
          </p>
          <p>
            Image by
            <a href="https://www.freepik.com/free-photo/front-view-female-scientist-with-test-tube-copy-space_11705976.htm#&position=11&from_view=undefined">
              Freepik
            </a>
          </p>
          <p>
            <a href="https://www.freepik.com/free-photo/young-tender-curly-girl-holding-documents_7514317.htm#&position=15&from_view=undefined">
              Image by cookie_studio
            </a>
            on Freepik
          </p>
          <p>
            <a href="https://www.freepik.com/free-photo/smiling-man-white-shirt-typing-text-message-scrolling-feed-social-network-using-smartphone-gray_6514175.htm#&position=17&from_view=undefined">
              Image by drobotdean
            </a>
            on Freepik
          </p>
          <p>
            Image by
            <a href="https://www.freepik.com/free-photo/close-up-doctor-getting-ready-work_19867877.htm#&position=23&from_view=undefined">
              Freepik
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
