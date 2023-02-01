import styles from "./styles.module.scss";
import Carousel from 'react-elastic-carousel'
import * as S from "./styles";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function CarrouselArticles({posts, nextPage}){
    const [itemsPerPage, setItemsPerPage] = useState(2);    
    const [totalPosts, setTotalPosts] = useState();
  
    
      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 820) {
            setItemsPerPage(1);
          }else{
            setItemsPerPage(2);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        handleResize();
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

     useEffect(() =>{
        if(posts){
          setTotalPosts(Object.keys(posts).length);
        }
     }, [posts]);

      const nextPost = (index) => {
        let pageCard = index + 1;

        if(pageCard == totalPosts - 1){
          nextPage();
        }
      }


  

    return(
        <Carousel 
          itemsToShow={itemsPerPage}
          itemPadding={[10, 1]}  
          showArrows={false}
          showEmptySlots={false}
          onChange={(currentItem, pageIndex) =>
            nextPost(currentItem.index)
          }>

          {posts.map((post =>{

            return(

                <S.Card key={post.uid}>
                  <S.ImageBanner src={post.data?.banner?.url ?? ""} loading="lazy"/>
                  <h3>{post.data.title}</h3>
                  <Link href={`/post/${post.uid}`}>
                      <button>Leia mais</button>
                  </Link>
                </S.Card>
            )
          }))}
                
        </Carousel>
    )
}