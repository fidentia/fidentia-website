import Header from "../components/Header";
import Posts from "../components/Posts";
import * as prismic from '@prismicio/client'
import { getPrismicClient } from '../services/prismic';



export default function Home(products) {
  
  return (
    <>
      <Header />
      <Posts />
    </>
  )
}

export async function getStaticProps(context) {
  const client = getPrismicClient();
  
  const documents = await client.get({
    predicates: prismic.predicate.at('document.type', 'posts')
  })
  console.log(documents.results[0].data);

  return {
    props: {},
  }
} 