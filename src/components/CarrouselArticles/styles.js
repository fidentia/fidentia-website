import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 448px;
    height: 463px;
    border: 0.5px solid rgba(22, 5, 68, 0.15);
    border-radius: 25.7726px;
    padding: 2.2rem;
    cursor: grab;
    position: relative;
    h3{
        z-index: 1;
        color: #FFFFFF;
        font-weight: 500;
        line-height: 107.02%;
        font-size: 1.30rem;
      }
   
      button{
        position: absolute;
        bottom: 2rem;
        background: #FFFFFF;
        color: var(--purple-800);
        font-weight: 400;
        border-radius: 22.5644px;
        border: 0;
        line-height: 21px;
        width: 9.8rem;
        height: 3rem;

      }
         
      @media (max-width: 886px){
        button{
            bottom: 2rem;
        }
        h3{
            font-size: 1.5rem;
        }
        p{
            font-size: 1.2rem;
        }
      }
      @media (max-width: 640px){
        height: 450px;
        button{
            top: 25rem;
        }
      }

      @media (max-width: 380px){
        height: 30rem;
        width: 20rem;
      }

      @media (max-width: 370px){
        h3{
            font-size: 1.5rem;
        }
      }

      @media (max-width: 340px){
        width: 20rem;
      }

      @media (max-width: 320px){
        h3{
            font-size: 1.3rem;
        }
      }
      
`;

export const Paragraph = styled.div`
      width: 25rem;
      background: red;
`;

export const ContainerCard = styled.section`
      max-width: 800px;
`;

export const ImageBanner = styled.img`
      filter: brightness(55%);
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;

      user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-drag: none;
      border-radius: 25.7726px;

`;

