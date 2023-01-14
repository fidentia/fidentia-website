import Header from "../components/Header";
import * as prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic';
import styles from '../styles/Home.module.css';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from "react";

export default function Home({postsPagination}) {
  const [posts, setPosts] = useState(postsPagination?.results);

  return (
    <>
      <Header />
      <section className={styles.container}>
        {posts.map(post => (
          <div className={styles.post}>
            <div>
                <h3>{post.data.title}</h3>
                <p>{post.first_publication_date}</p>
            </div>
            <div>
                <button>Ver artigo</button>
            </div>
          </div>
        ))}
        </section>
      {/* <Posts /> */}
    </>
  )
}

export async function getStaticProps() {
  const client = getPrismicClient();
  
  const postsResponse = await client.get([
    prismic.predicate.at('document.type', 'posts')
  ], {
    fetch: ['posts.title', 'posts.subtitle', 'posts.author'],
    pageSize: 1,
    orderings: '[document.first_publication_date desc]'
  })
  
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