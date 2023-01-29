import Header from "../components/Header";
import * as prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic';
import styles from '../styles/Home.module.scss';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";
import CountUp from 'react-countup';




import Image from "next/image";

export default function Home({postsPagination}) {
  
  const [nextPage, setNextPage] = useState(postsPagination.next_page)
  const [posts, setPosts] = useState(postsPagination?.results);

  const [mobileWidth, setMobileWidth] = useState(false);
  const { ref: sectionOne, inView: sectionOneVisible} = useInView();
  const { ref: sectionTwo, inView: sectionTwoVisible} = useInView();
  const { ref: sectionTree, inView: sectionTreeVisible} = useInView();

  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
 

  function scrollTo(section){
    section.current.scrollIntoView({
      behavior: "smooth"
    })
  }

  const handlePagination = () => {
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
            src={`${mobileWidth ? '/images/section2_mobile.png': '/images/section2.png'}`} 
            fill={true}
            alt="background image"
            />
          <div className={`${styles.content}` }>
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
              <h2>Porque somos especialistas em <br/>seguros para pesquisas clínicas?</h2>
            </div>
            <div className={styles.numbers}>
                <div>
                  <h2 className={`${sectionTreeVisible ? styles.count_animation : null}`}>
                    {sectionTreeVisible ? (
                      <>
                        <CountUp end={300000} duration={2.75} /> +
                      </>
                    ): (
                      0
                    )}
                    
                  </h2>
                  <p>Participantes cobertos</p>
                </div>
                <div>
                  <h2 className={`${sectionTreeVisible ? styles.count_animation : null}`}>
                    {sectionTreeVisible ?(
                      <>
                      <CountUp end={900}  duration={2.80} /> +
                      </>
                    ):(
                      0
                    )}
                    
                  </h2>
                  <p>Pesquisas clínicas seguradas</p>
                </div>
                <div>
                  <h2 className={`${sectionTreeVisible ? styles.count_animation : null}`}>
                    {sectionTreeVisible ? (
                      <>
                        <CountUp end={300} duration={3.20} /> +
                      </>
                    ) : (
                      0
                    )}
                    
                  </h2>
                  <p>Pesquisas seguradas ativas</p>
                </div>
                <div>
                  <h2 className={`${sectionTreeVisible ? styles.count_animation : null}`}>
                    {sectionTreeVisible ? (
                      <>
                        <CountUp end={200} duration={3.20} /> +
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

      <section className={styles.section4}>
          <div className={styles.content}>
				<div className={styles.title}>
					<h2>Como o seguro apoiará você?</h2>
				</div>							
				<div className={styles.cards}>
					<div className={styles.card}>
						<h3>Centros de pesquisa clínica</h3>
						<p>Além de blindar o relacionamento com seus patrocinadores, cobre automaticamente todos os ensaios clínicos realizados no seu centro</p>
						<button>Saiba mais</button>
					</div>
					<div className={styles.card}>
						<h3>Médicos e profissionais investigadores</h3>
						<p>Protege por erros de seu time na execução dos em saios clínicos </p>
						<button>Saiba mais</button>
					</div>
					<div className={styles.card}>
						<h3>Centros de pesquisa clínica</h3>
						<p>Protege por erros de seu time na execução dos em saios clínicos </p>
						<button>Saiba mais</button>
					</div>
				</div>						
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
    return{
      uid: post.uid,
      first_publication_date: format(new Date(post.first_publication_date), "dd MM yyyy", {
        locale: ptBR
      }),
      data: {
        title: post.data.title
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