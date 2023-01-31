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


      const breakPoints = [
        {width: 500, itemsToShow: 1},
        {width: 500, itemsToShow: 1},
        {width: 1200, itemsToShow: 1},
        {width: 1500, itemsToShow: 1},
        {width: 1800, itemsToShow: 1}
      ]

    return(
        <Carousel 
          itemsToShow={itemsPerPage} 
          breakPoints={breakPoints}
          onChange={(currentItem, pageIndex) =>
            nextPost(currentItem.index)
          }>

          {posts.map((article =>{
            return(
              <S.Card key={article.uid}>
                <S.ImageBanner src={article.data?.banner?.url ?? ""}/>
                <h3>{article.data.title}</h3>
                <button>Leia mais</button>
              </S.Card>
            )
          }))}
                
        </Carousel>
    )
}