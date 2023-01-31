import Header from "../components/Header";
import * as prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic';
import styles from '../styles/Home.module.scss';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import CountUp from 'react-countup';
import { motion } from 'framer-motion';




import Image from "next/image";
import Carrousel from "../components/Carrousel";
import CarrouselArticles from "../components/CarrouselArticles";

export default function Home({ postsPagination }) {

  const [nextPage, setNextPage] = useState(postsPagination.next_page)
  const [posts, setPosts] = useState(postsPagination?.results);

  const [mobileWidth, setMobileWidth] = useState(false);

  const [countFinish, setCountFinish] = useState(false);

  const { ref: sectionOne, inView: sectionOneVisible } = useInView();
  const { ref: sectionTwo, inView: sectionTwoVisible } = useInView();
  const { ref: sectionTree, inView: sectionTreeVisible } = useInView();
  const { ref: sectionFour, inView: sectionFourVisible } = useInView();

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();

  function scrollTo(section) {
    section.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  const updatePosts = (postsChildren) =>{
    setPosts([...posts, ...postsChildren]);
  }

  const handlePagination = () => {
    if(nextPage){
      fetch(nextPage)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const formattedData = data.results.map(post => {
          return {
            uid: post.uid,
            first_publication_date: format(new Date(post.first_publication_date), "dd MMM, yyyy", {
              locale: ptBR
            }),
            data: {
              title: post.data.title
            },
          };
        });
        setPosts([...posts, ...formattedData]);
        setNextPage(data.next_page);
      })
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 630) {
        setMobileWidth(true);
      } else {
        setMobileWidth(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (sectionTreeVisible) {
      setCountFinish(true);
    }
  }, [sectionTreeVisible])


  return (
    <>

      <main className={`container ${styles.container}`}>

        <section className={styles.section1} ref={section1}>
          <Header />
          <Image
            src={`${mobileWidth ? '/images/section1_mobile.png' : '/images/section1.png'}`}
            fill={true}
            alt="background image"
          />
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>Apoiando você, <span>sempre</span></h2>
            </div>

            <div className={styles.subtitle}>
              <p>Soluções <br />completas em seguros para pesquisas clínicas</p>
            </div>

            <div className={styles.downarrow}>
              <button
                onClick={() => scrollTo(section2)}
              ></button>
            </div>


          </div>

        </section>

        <section className={styles.section2} ref={section2}>
          <Image
            src={`${mobileWidth ? '/images/section2_mobile.png' : '/images/section2.png'}`}
            fill={true}
            alt="background image"
          />
          <div className={`${styles.content}`}>
            <div className={styles.title}>
              <div>
                <h2>Conheça nossas soluções exclusivas</h2>
              </div>
              <p>Oferecemos uma suíte completa de soluções e serviços com tudo o que você precisa sobre seguro para o mundo das pesquisas clínicas.</p>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3>Seguros para</h3>
                <p>Pesquisas Clínicas</p>
                <p>Profissionais de pesquisas clínicas</p>
                <p>Transportes de materiais para o estabelecimento</p>
                <p>Seguro de vida para pacientes</p>
                <div className={styles.button}>
                  <button>Saiba mais</button>
                </div>
              </div>

              <div className={styles.card}>
                <h3>Cursos</h3>
                <p>Seguros para pesquisas clínicas</p>
                <p>Venda de seguros</p>
                <p>Palestras</p>
                <p>Cursos de curta duração</p>
                <p>Cursos in-company</p>
                <div className={styles.button}>
                  <button>Saiba mais</button>
                </div>
              </div>

              <div className={styles.card}>
                <h3>Consultoria</h3>
                <p>Para corretores, seguradoras e brokers</p>
                <p>Análise e gestão de riscos</p>
                <p>Subscroção de riscos</p>
                <p>Suporte técnico e comercial completo</p>
                <div className={styles.button}>
                  <button>Saiba mais</button>
                </div>
              </div>
            </div>
          </div>


        </section>

        <section className={styles.section3} ref={section3}>
          <Image
            src={`${mobileWidth ? '/images/section3_mobile.png' : '/images/section3.png'}`}
            fill={true}
          />
          <div className={styles.content} ref={sectionTree}>
            <div className={styles.title}>
              <h2>Porque somos especialistas em <br />seguros para pesquisas clínicas?</h2>
            </div>
            <div className={styles.numbers}>
              <div>
                <h2 className={`${sectionTreeVisible ? styles.count_animation : null}`}>
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
                <h2 className={`${sectionTreeVisible ? styles.count_animation : null}`}>
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
                <h2 className={`${sectionTreeVisible ? styles.count_animation : null}`}>
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
                <h2 className={`${sectionTreeVisible ? styles.count_animation : null}`}>
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

        <section className={styles.section4} ref={sectionFour}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>Como o seguro apoiará você?</h2>
            </div>
            <Carrousel />
          </div>
        </section>

        <section className={styles.section5}>
           <Image
            src={`${mobileWidth ? '/images/section5_mobile.png' : '/images/section5.png'}`}
            fill={true}
          />
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>Faça sua cotação online conosco</h2>
            </div>
            <div className={styles.button}>
                <button>Cote agora</button>
            </div>
          </div>
        </section>

        <section className={styles.section6}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>Ajudar pessoas a desenvolver o seu melhor é o que nos move.</h2>
              
                <h2>Leia os depoimentos de alguns de nossos parceiros</h2>

            </div>
    
            <div className={styles.deposition}>
                <div className={styles.photo}>
                  <Image
                    src={'/images/photo_profile.svg'}
                    width={168}
                    height={168}
                  />
                </div>
                <div className={styles.info}>
                    <h3>Dr. Augusto F. Rodrigues</h3>
                    <p>Hospital Albert Einstein</p>
                </div>
                <article className={styles.text}>
                    <p>“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.”</p>
                </article>
            </div>

            <div className={styles.deposition}>
                <div className={styles.photo}>
                  <Image
                    src={'/images/photo_profile2.svg'}
                    width={168}
                    height={168}
                  />
                </div>
              
                <div className={styles.info}>
                    <h3>Brenda A. C. Real</h3>
                    <p>Instituto Butantan</p>
                </div>
                <article className={styles.text}>
                    <p>“Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.”</p>
                </article>
            </div>

          </div>
        </section>

        <section className={styles.section7}>
          <div className={styles.content}>
            <div className={styles.title}>
              <h2>Artigos</h2>
            </div>
            <CarrouselArticles 
              posts={posts} 
              nextPage={handlePagination}
            />
          </div>
        </section>

      </main>
    </>
  )
}

export async function getStaticProps() {
  const client = getPrismicClient();

  const postsResponse = await client.get([
    prismic.predicate.at('document.type', 'posts')
  ], {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'asc'
    },
    fetchLinks: ['posts.title', 'posts.subtitle', 'posts.author'],
  });

  const posts = postsResponse.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: format(new Date(post.first_publication_date), "dd MM yyyy", {
        locale: ptBR
      }),
      data: {
        title: post.data.title,
        banner: post.data.banner
      },
      next_page: postsResponse.next_page
    }
  })

  const postsPagination = {
    next_page: postsResponse.next_page,
    results: posts
  }

  return {
    props: {
      postsPagination
    },
    revalidate: 60 * 30,
  }
} 