import Header from "../components/Header";
import * as prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic';
import styles from '../styles/Home.module.scss';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { use, useCallback, useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';

export default function Home({postsPagination}) {
  
  const [nextPage, setNextPage] = useState(postsPagination.next_page)
  const [posts, setPosts] = useState(postsPagination?.results);
  
  const { ref: postsRef, inView: postsVisible} = useInView();


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

  // useEffect(()=>{
  //   const intersectionObserver = new IntersectionObserver((entries)=>{  
  //     entries.forEach(element => {
  //         if(element.target.id == 'sentinela' && element.isIntersecting){
  //           // isVisible.current = true;
            
  //           // setPostsVisible(() => postsRef.current = true);
  //           console.log(element, postsRef);
  //         }else{
  //           setPostsVisible(() => false);
  //         }
  //       });
  //   });

  //   // console.log(postsVisible);

  //   intersectionObserver.observe(document.querySelector('#sentinela'));
  //   return () => intersectionObserver.disconnect();
    
  // }, [])

  return (
    <>
      
      <Header />
      <main className={styles.container}>
        <article className={styles.container_main}>
            <div>
              <h1>Apoiando você, <b>sempre</b></h1>
            </div>
            
            <div>
              <h3>Soluções completas em seguros para pesquisas clínicas</h3>
              <p>Tudo que você precisa dominar seguros para o setor de pesquisas clínicas. <br/></p>
              <p>Destaque-se em ambientes competitivos, blindar seu negócio e   alavancar seu sucesso profissional.</p>
            </div>
        </article>

        <section className={styles.container_posts} ref={postsRef}>
            <h2 className={`${styles.title_articles} ${postsVisible ? styles.animation_posts : ''}`}>{postsVisible ? 'Artigos 🚀' : 'Artigos'}</h2>
          <article className={styles.posts}>
            {posts.map(post => (
              <article key={post.uid} className={styles.post}>
                <div>
                    <h3>{post.data.title}</h3>
                    <p>{post.first_publication_date}</p>
                </div>
                <div>
                    <button>Ver artigo</button>
                </div>
              </article>
            ))}
          </article>
          {nextPage && (
            <div className={styles.button_more_posts}>
              <button onClick={()=>handlePagination()}>Ver mais</button>
            </div>
          )}
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