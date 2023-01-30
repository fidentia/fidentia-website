import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 448px;
    height: 29rem;
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
        bottom: 7rem;
        background: var(--purple-300);
        color: #FFFFFF;
        border-radius: 22.5644px;
        border: 0;
        line-height: 21px;
        width: 9.8rem;
        height: 3rem;

      }
         
      @media (max-width: 430px){
        
      }
      @media (max-width: 640px){
        height: 35rem;
        button{
            top: 25rem;
        }
      }
      
`;

