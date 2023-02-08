import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 448px;
    height: 423px;
    border: 0.5px solid rgba(22, 5, 68, 0.15);
    border-radius: 30px;
    padding: 2.2rem;
    cursor: grab;
    h3{
        color: var(--purple-800);
        font-weight: 500;
        line-height: 107.02%;
        font-size: 1.7rem;
      }
      p{
        margin-top: 2.8rem;
        font-weight: 400;
        font-size: 1.375rem;
        line-height: 107.02%;
        letter-spacing: 0.055em;
      }

      button{
        position: absolute;
        bottom: 3rem;
        background: var(--purple-300);
        color: #FFFFFF;
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
      }

      @media (max-width: 370px){
        // background: red;
        h3{
            font-size: 1.5rem;
        }
        p{
            margin-top: 2rem;
            font-size: 1.2rem;
        }
      }
      
`;

export const Paragraph = styled.div`
      width: 25rem;
      background: red;
`;

