import Header from "../components/Header";
import * as prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic';
import styles from '../styles/Home.module.scss';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from "react";

import Image from "next/image";

export default function Home({postsPagination}) {
  
  const [nextPage, setNextPage] = useState(postsPagination.next_page)
  const [posts, setPosts] = useState(postsPagination?.results);
  const { ref: homeSection, inView: homeSectionVisible} = useInView();
  const { ref: subSection, inView: subSectionVisible} = useInView();

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


 
  return (
    <>
    
    <main className={`container ${styles.container}`}>
      
      <section className={styles.section1} ref={section1}>
          <Header />
          <Image 
            src={`/images/section1.png`} 
            fill={true}
            />
          <div className={styles.content} ref={homeSection}>
            <div className={styles.title}>
              <h2>Apoiando você, <span>sempre</span></h2>
            </div>
            <div className={styles.subtitle}>
              <p >Soluções <br />completas em seguros para pesquisas clínicas</p>
            <button
              className={styles.downarrow}
              onClick={() => scrollTo(section2)}></button>
            </div>

          </div>
            
      </section>

      <section className={styles.section2} ref={section2}>
          <Image 
            src={`/images/section2.png`} 
            fill={true}
            />
          <div className={styles.content} ref={subSection}>
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
          
          <button
          className={styles.downarrow}
          onClick={() => scrollTo(section3)}
        ></button>
      </section>

      <section className={styles.section3} ref={section3}>
          <div className={styles.copy}>
            <h2>Lorem ipsum</h2>
          </div>
          <Image 
            src={`/images/michael-olsen--djS1aPrSr4-unsplash.jpg`} 
            fill={true}
            />
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