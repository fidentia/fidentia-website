import Header from "../components/Header";
import * as prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic';
import styles from '../styles/Home.module.css';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from "react";

export default function Home({postsPagination}) {
  
  const [nextPage, setNextPage] = useState(postsPagination.next_page)
  const [posts, setPosts] = useState(postsPagination?.results);

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
  // const handlePagination = () => {
  //   fetch(nextPage)
  //     .then(res => res.json())
  //     .then(data => {
  //       data.results.map(post =>{
  //         console.log(post.data.title)
  //       })
  //     })
  // }
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.container_posts}>
          {posts.map(post => (
            <div key={post.uid} className={styles.post}>
              <div>
                  <h3>{post.data.title}</h3>
                  <p>{post.first_publication_date}</p>
              </div>
              <div>
                  <button>Ver artigo</button>
              </div>
            </div>
          ))}
          <button onClick={()=>handlePagination()}>Ver mais</button>
        </section>
      </main>
      {/* <Posts /> */}
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
    }
  }
} 