import styles from "./styles.module.scss";
import Carousel from 'react-elastic-carousel'
import * as S from "./styles";
import { useEffect, useState } from "react";


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
          onChange={(currentItem, pageIndex) =>
            nextPost(currentItem.index)
          }>

          {posts.map((article =>{
            return(
              <S.Card key={article.uid}>
                <S.ImageBanner src={article.data?.banner?.url ?? ""} loading="lazy"/>
                <h3>{article.data.title}</h3>
                <button>Leia mais</button>
              </S.Card>
            )
          }))}
                
        </Carousel>
    )
}