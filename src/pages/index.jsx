import Header from "../components/Header";
import * as prismic from "@prismicio/client";
import { getPrismicClient } from "../services/prismic";
import styles from "../styles/Home.module.scss";
import { format } from "date-fns";
import Link from "next/link";
import ptBR from "date-fns/locale/pt-BR";
import { useInView } from "react-intersection-observer";
import { use, useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { ToastContainer, toast } from 'react-toastify';

import Image from "next/image";
import Carrousel from "../components/Carrousel";
import CarrouselArticles from "../components/CarrouselArticles";
import { useForm } from "react-hook-form";
import Head from "next/head";

const iconsFooter = [
  {
    src: "/images/instagranIcon.svg",
    alt: "instagran do ícone",
    link: "https://www.instagram.com/fidentiaseguros/",
  },
  {
    src: "/images/facebookIcon.svg",
    alt: "facebook do ícone",
    link: "https://www.facebook.com/Fidentia-Insurance-Group-102406679286320",
  },
  {
    src: "/images/linkedinIcon.svg",
    alt: "linkedin do ícone",
    link: "https://www.linkedin.com/company/fidentiainsurance/",
  },
];

const politics = [{uid: "politica-de-privacidade", title: "A"}, ]

export default function Home({ postsPagination }) {
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [posts, setPosts] = useState(postsPagination?.results);

  const [mobileWidth, setMobileWidth] = useState(false);
  const [countFinish, setCountFinish] = useState(false);
  const [loadingSubmitForm, setLoadingSubmitForm] = useState(false);

  const { ref: sectionOne, inView: sectionOneVisible } = useInView();
  const { ref: sectionTwo, inView: sectionTwoVisible } = useInView();
  const { ref: sectionThree, inView: sectionThreeVisible } = useInView();
  const { ref: sectionFour, inView: sectionFourVisible } = useInView();
  const { ref: sectionFive, inView: sectionFiveVisible } = useInView();
  const { ref: sectionSix, inView: sectionSixVisible } = useInView();
  const { ref: sectionSeven, inView: sectionSevenVisible } = useInView();
  const { ref: sectionEight, inView: sectionEightVisible } = useInView();
  const { ref: sectionFooter, inView: sectionFooterVisible } = useInView();

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const section5 = useRef();
  const section6 = useRef();
  const section7 = useRef();

  const notifySuccess = () => toast("Mensagem enviada com sucesso! Aguarde nosso contato.", {
    type: "success"
  });

  const notifyError = () => toast("Ocorreu um erro inesperado ao realizar envio da mensagem.", {
    type: "error"
  });

  const notifyInfo = (nameInput) => toast(`Campo *${nameInput}* é obrigatório`, {
    type: "info"
  });


  const { register, handleSubmit } = useForm();
  const onSubmit = async data => {
    try {

      if(!data.name){
        notifyInfo('qual o seu nome?');
        return;
      }
      if(!data.phone){
        notifyInfo('qual o seu telefone?');
        return;
      }
      if(!data.company){
        notifyInfo('qual o nome da empresa?');
        return;
      }
      if(!data.subject){
        notifyInfo('sobre o que quer falar?');
        return;
      }

      setLoadingSubmitForm(true);
      const res = await fetch(`api/contact`, {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if(res.status == 200){
        setLoadingSubmitForm(false);
        notifySuccess();
      }
      const { error } = await res.json()
      if(error){
        setLoadingSubmitForm(false);
        notifyError();
      }
    } catch (error) {
      setLoadingSubmitForm(false);
      notifyError();
    }
  };


  function scrollTo(section) {
    section.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  const handlePagination = () => {
    if (nextPage) {
      fetch(nextPage)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const formattedData = data.results.map((post) => {
            return {
              uid: post.uid,
              first_publication_date: format(
                new Date(post.first_publication_date),
                "dd MMM, yyyy",
                {
                  locale: ptBR,
                }
              ),
              data: {
                title: post.data.title,
              },
            };
          });
          setPosts([...posts, ...formattedData]);
          setNextPage(data.next_page);
        });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 630) {
        setMobileWidth(true);
      } else {
        setMobileWidth(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (sectionThreeVisible) {
      setCountFinish(true);
    }
  }, [sectionThreeVisible]);


  return (
    <>
    <Head>
      <title>Fidentia</title>
        <meta name="description" content="Soluções completas em seguros para pesquisas clínicas. Oferecemos uma suíte completa de soluções e serviços com tudo o que você precisa sobre seguro para o mundo das pesquisas clínicas." />
        <meta property="og:title" content="Fidentia soluções completas em seguros para pesquisas clínicas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fidentia.com.br/" />
        <meta property="og:description" content="Soluções completas em seguros para pesquisas clínicas. Oferecemos uma suíte completa de soluções e serviços com tudo o que você precisa sobre seguro para o mundo das pesquisas clínicas." />
        <meta property="og:site_name" content="Fidentia" />
    </Head>
      <main className={`container ${styles.container}`}>
        <section className={styles.section1} id="home" ref={section1}>
          <Header />
          <Image
            src={`${
              mobileWidth
                ? "/images/section1_mobile.png"
                : "/images/section1.png"
            }`}
            fill={true}
            priority={true}
            alt="Imagem ilustrativa de fundo para primeira seção"
          />
          <div
            className={`${styles.content} ${styles.fade}`}
            ref={sectionOne}
          >
            <div className={styles.title}>
              <h2>
                Apoiando você, <span>sempre</span>
              </h2>
            </div>

            <div className={styles.subtitle}>
              <p>
                Soluções <br />
                completas em seguros para pesquisas clínicas
              </p>
            </div>

            <div className={styles.downarrow}>
              <button onClick={() => scrollTo(section2)}></button>
            </div>
          </div>
        </section>

        <section className={styles.section2} id="solucoes" ref={section2}>
          <Image
            src={`${
              mobileWidth
                ? "/images/section2_mobile.png"
                : "/images/section2.png"
            }`}
            fill={true}
            priority={true}
            alt="Imagem ilustrativa de fundo para segunda seção"
          />
          <div
            className={`${styles.content} ${sectionTwoVisible && styles.fade}`}
            ref={sectionTwo}
          >
            <div className={styles.title}>
              <div>
                <h2>Conheça nossas soluções exclusivas</h2>
              </div>
              <p>
                Oferecemos uma suíte completa de soluções e serviços com tudo o
                que você precisa sobre seguro para o mundo das pesquisas
                clínicas.
              </p>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <div>
                  <h3>Seguros para</h3>
                  <p>Pesquisas Clínicas</p>
                  <p>Profissionais de pesquisas clínicas</p>
                  <p>Transportes de materiais para o estabelecimento</p>
                  <p>Seguro de vida para pacientes</p>
                </div>
                <div className={styles.button}>
                  <button>Saiba mais</button>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  <h3>Cursos</h3>
                  <p>Seguros para pesquisas clínicas</p>
                  <p>Venda de seguros</p>
                  <p>Palestras</p>
                  <p>Cursos de curta duração</p>
                  <p>Cursos in-company</p>
                </div>
                <div className={styles.button}>
                  <button>Saiba mais</button>
                </div>
              </div>

              <div className={styles.card}>
                <div>
                  <h3>Consultoria</h3>
                  <p>Para corretores, seguradoras e brokers</p>
                  <p>Análise e gestão de riscos</p>
                  <p>Subscroção de riscos</p>
                  <p>Suporte técnico e comercial completo</p>
                </div>
                <div className={styles.button}>
                  <button>Saiba mais</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section3} ref={section3} id="especialidades">
          <Image
            src={`${
              mobileWidth
                ? "/images/section3_mobile.png"
                : "/images/section3.png"
            }`}
            priority={true}
            fill={true}
            alt="Imagem ilustrativa de fundo para segunda seção"
          />
          <div
            className={`${styles.content} ${
              sectionThreeVisible && styles.fade
            }`}
            ref={sectionThree}
          >
            <div className={styles.title}>
              <h2>
                Porque somos especialistas em <br />
                seguros para pesquisas clínicas?
              </h2>
            </div>
            <div className={styles.numbers}>
              <div>
                <h2
                  className={`${
                    sectionThreeVisible ? styles.count_animation : null
                  }`}
                >
                  {countFinish ? (
                    <>
                      <CountUp end={300000} duration={2.75} /> +
                    </>
                  ) : (
                    0
                  )}
                </h2>
                <p>Participantes cobertos</p>
              </div>
              <div>
                <h2
                  className={`${
                    sectionThreeVisible ? styles.count_animation : null
                  }`}
                >
                  {countFinish ? (
                    <>
                      <CountUp end={900} duration={2.75} /> +
                    </>
                  ) : (
                    0
                  )}
                </h2>
                <p>Pesquisas clínicas seguradas</p>
              </div>
              <div>
                <h2
                  className={`${
                    sectionThreeVisible ? styles.count_animation : null
                  }`}
                >
                  {countFinish ? (
                    <>
                      <CountUp end={300} duration={2.75} /> +
                    </>
                  ) : (
                    0
                  )}
                </h2>
                <p>Pesquisas seguradas ativas</p>
              </div>
              <div>
                <h2
                  className={`${
                    sectionThreeVisible ? styles.count_animation : null
                  }`}
                >
                  {countFinish ? (
                    <>
                      <CountUp end={200} duration={2.75} /> +
                    </>
                  ) : (
                    0
                  )}
                </h2>
                <p>Novas apólices por ano</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section4} ref={section4} id="apoio">
          <div
            className={`${styles.content} ${sectionFourVisible && styles.fade}`}
            ref={sectionFour}
          >
            <div className={styles.title}>
              <h2>Como o seguro apoiará você?</h2>
            </div>
            <Carrousel />
          </div>
        </section>

        <section className={styles.section5} ref={section5} id="cotacao">
          <Image
            src={`${
              mobileWidth
                ? "/images/section5_mobile.png"
                : "/images/section5.png"
            }`}
            priority={true}
            fill={true}
            alt="Imagem ilustrativa de fundo para quinta seção"
          />
          <div
            className={`${styles.content} ${sectionFiveVisible && styles.fade}`}
            ref={sectionFive}
          >
            <div className={styles.title}>
              <h2>Faça sua cotação online conosco</h2>
            </div>
            <div className={styles.button}>
              <button>Cote agora</button>
            </div>
          </div>
        </section>

        <section className={styles.section6} ref={section6} id="depoimentos">
          <div
            className={`${styles.content} ${sectionSixVisible && styles.fade}`}
            ref={sectionSix}
          >
            <div className={styles.title}>
              <h2>
                Ajudar pessoas a desenvolver o seu melhor é o que nos move.
              </h2>

              <h2>Leia os depoimentos de alguns de nossos parceiros</h2>
            </div>

            <div className={styles.deposition}>
              <div className={styles.photo}>
                <Image
                  src={"/images/photo_profile.svg"}
                  width={168}
                  height={168}
                  alt="Foto de perfil Rafael Abad"
                />
              </div>
              <div className={styles.info}>
                <h3>Rafael Abad</h3>
                <p>CFO at KNW Brokers</p>
              </div>
              <article className={styles.text}>
                <p>
                "Sou fã do trabalho da Fidentia, Felipe e equipe. Poderia citar o profissionalismo, qualidade de entrega, o quão correta é sua atuação,  mas acho que essas características já estão muito claras e talvez constantes em outros depoimentos. Gostaria de salientar a importância da Fidentia e equipe não ficarem “somente” no mundo do seguro e, sim se preocuparem, e muito, em entender e estar do lado do cliente final, investindo anos e anos de seu tempo e expertise em desenvolver um mercado tão importante e nobre quanto o de Testes Clínicos, utilizando o seguro como meio de fomentar a indústria como um todo.  Esse tipo de atuação e preocupação é um exemplo para minha atuação profissional e espero que também inspirem outros profissionais e empresas de nosso mercado. Falar sobre seguro, para o mercado de seguros é importante, mas de certa forma cômodo para nós. A grande beleza está em sair dessa bolha."
                </p>
              </article>
            </div>

            <div className={styles.deposition}>
              <div className={styles.photo}>
                <Image
                  src={"/images/photo_profile2.svg"}
                  width={168}
                  height={168}
                  alt="Foto de perfil Sofia Banuls Scatena"
                />
              </div>

              <div className={styles.info}>
                <h3>Sofia Banuls Scatena</h3>
                <p>Diretora Comercial - C.C.O</p>
              </div>
              <article className={styles.text}>
                <p>
                "A Fidentia é uma empresa com grande reconhecimento no mercado de clinical trial e através do Diretor Felipe, a Sanyuu pôde ter o privilégio de galgar uma comparticipação. Isso possibilitou que pudéssemos ter mais conhecimento sobre as capacitações do Felipe e a responsabilidade e dedicação que ele tem junto a Fidentia/HDI para com os seus clientes e parceiros. Com isso, fica muito claro o quão sólido e valoroso é o trabalho feito por eles."
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.section7} id="artigos" ref={section7}>
          <div
            className={`${styles.content} ${
              sectionSevenVisible && styles.fade
            }`}
            ref={sectionSeven}
          >
            <div className={styles.title}>
              <h2>Artigos</h2>
            </div>
            <CarrouselArticles posts={posts} nextPage={handlePagination} />
          </div>
        </section>

        <section className={styles.section8} id="contato">
          <div
            className={`${styles.content} ${
              sectionEightVisible && styles.fade
            }`}
            ref={sectionEight}
          >
            <div className={styles.title}>
              <h3>Vamos bater um papo?</h3>
              <p>
                Conte-nos mais sobre você e <br />
                como nós podemos auxiliá-lo
              </p>
            </div>
            <div>
              <form className={styles.forms} onSubmit={handleSubmit(onSubmit)}>
                <div >
                  <div className={styles.formsInputs}>
                    <div className={styles.inputContainer}>
                      <label>Qual o seu nome?</label>
                      <input type="text" placeholder="Digite seu nome" {...register("name")} />
                    </div>

                    <div className={styles.inputContainer}>
                      <label>Qual o seu telefone?</label>
                      <input type="text" placeholder="Digite seu telefone" {...register("phone")} />
                    </div>
                  </div>

                  <div className={styles.formsInputs}>
                    
                  <div className={styles.inputContainer}>
                      <label>Qual o nome da empresa?</label>
                      <input
                        type="text"
                        placeholder="Digite o nome da empresa"
                        {...register("company")}
                      />
                    </div>

                    <div className={styles.inputContainer}>
                      <label>Qual o seu e-mail?</label>
                      <input type="text" placeholder="Digite seu e-mail" {...register("email")}/>
                    </div>
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <label>Sobre o que quer falar</label>
                  <textarea
                    width="200"
                    height="300"
                    placeholder="Digite um assunto"
                    {...register("subject")}
                  ></textarea>
                </div>
                <div className={styles.container_submit_form}>
                  <button type="submit" disabled={loadingSubmitForm} className={`${loadingSubmitForm ? styles.disabled : null}`}>Enviar mensagem</button>
                </div>
                <ToastContainer autoClose={8000} />
              </form>
              
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div
            className={`${styles.content} ${
              sectionFooterVisible && styles.fade
            }`}
            ref={sectionFooter}
          >
            <div>
              <h2>A Fidentia</h2>
              <div className={styles.border}></div>
              <Link href="/#solucoes" onClick={() => scrollTo(section2)}>
                Soluções
              </Link>
              <Link href="/#fidentia" onClick={() => scrollTo(section6)}>
                A Fidentia
              </Link>
              <Link href="/#cotacao" onClick={() => scrollTo(section5)}>
                Cote agora
              </Link>
              <Link href="#artigos" onClick={() => scrollTo(section7)}>
                Artigos
              </Link>
            </div>

            <div>
              <h2>Contato</h2>
              <div className={styles.border}></div>
              <p>Rua Wanderley, 929</p>
              <p>Perdizes, São Paulo/SP,</p>
              <p>Brasil, 05011-011</p>
              <p>+55 11 3164 4031</p>
              <p>contato@fidentia.com.br</p>
            </div>

            <div>
              <h2>Redes sociais</h2>
              <div className={styles.border}></div>
              <div className={styles.iconsWrapper}>
                {iconsFooter.map((icon) => (
                  <button key={icon.src}>
                    <Link href={icon.link} target="_blank">
                      <Image
                        src={icon.src}
                        width={45}
                        height={45}
                        alt={icon.alt}
                      />
                    </Link>
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.copyrightWrapper}>
            <div>
              <span className={styles.copyContent}>
                Copyright @ 2023 Fidentia. Todos os direitos reservados.
              </span>
              <div className={styles.copyImageContent}>
                <div className={styles.copyContent}>
                  <Link href={`politics/#email-mensagem`}>Política de privacidade</Link>
                  <Link href={`politics/#politica-privacidade`}>Política de Cookies</Link>
                  <Link href={`politics/#etica-compliance`}>Ética e Compliance</Link>
                </div>
                <figure>
                  <Link href="/#home" onClick={() => scrollTo(section1)}>
                    <Image
                      src="/images/logo.svg"
                      width={85}
                      height={85}
                      alt="logo fidentia"
                    />
                  </Link>
                </figure>
              </div>
            </div>
          </div>
          </div>
          
        </footer>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const client = getPrismicClient();

  const postsResponse = await client.get(
    [prismic.predicate.at("document.type", "posts")],
    {
      orderings: {
        field: "document.first_publication_date",
        direction: "asc",
      },
      fetchLinks: ["posts.title", "posts.subtitle", "posts.author"],
    }
  );

  const posts = postsResponse.results.map((post) => {
    return {
      uid: post.uid,
      first_publication_date: format(
        new Date(post.first_publication_date),
        "dd MM yyyy",
        {
          locale: ptBR,
        }
      ),
      data: {
        title: post.data.title,
        banner: post.data.banner,
      },
      next_page: postsResponse.next_page,
    };
  });

  const postsPagination = {
    next_page: postsResponse.next_page,
    results: posts,
  };

  return {
    props: {
      postsPagination,
    },
  };
}
