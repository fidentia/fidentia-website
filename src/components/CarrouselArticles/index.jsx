import styles from "./styles.module.scss";
import * as S from "./styles";
import { useEffect, useState } from "react";
import Link from "next/link";
import Carousel, { consts } from 'react-elastic-carousel';



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

      const myArrow = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <img src="/images/arrowLeft.png" className={styles.arrowIcon} /> : <img src="/images/arrowRight.png" className={styles.arrowIcon} />
        return (
          <button onClick={onClick} disabled={isEdge} className={styles.button_pagination}>
            {pointer}
          </button>
        )
      }
  

    return(
        <Carousel 
          itemsToShow={itemsPerPage}
          itemPadding={[10, 1]}  
          renderArrow={myArrow}
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