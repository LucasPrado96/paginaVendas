import Styled from "styled-components";
import { colorsTheme } from "../../constants";

export const Container = Styled.div`
width: 100vw;

`;

export const SectionBook = Styled.section`
background-color: ${colorsTheme.black};
width: 100%;
padding: 50px;

display: flex;
flex-direction: column;
align-items: center;


@media (max-width: 375px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

    @media (max-width: 414px){
        display: flex;
        align-items: center;
       
        flex-direction: column;
        width: 100%;
    }

    @media (max-width: 430px){
        display: flex;
        align-items: center;
       
        flex-direction: column;
        width: 100%;
    }

    @media (max-width: 768px){
        display: flex;
        align-items: center;
       
        flex-direction: column;
        width: 100%;
    }

    @media (max-width: 820px){
        display: flex;
        align-items: center;
       
        flex-direction: column;
        width: 100%;
    }

    @media (max-width: 1024px){
        display: flex;
        align-items: center;
       
        flex-direction: column;
        width: 100%;
    }


    button{
        padding: 35px;
        border-radius: 10px;
        border: none;   
        
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        background: rgb(184,182,215);
        background: linear-gradient(180deg, rgba(184,182,215,1) 0%, rgba(170,37,246,1) 0%, rgba(171,45,244,1) 39%, rgba(79,0,255,1) 94%, rgba(34,0,255,1) 100%);

        color: ${colorsTheme.fontPrimaria};
        font-size: 28px;
    }

    &:hover button{
        filter: brightness(1.3);
        box-shadow: 0 0 15px rgba(98, 35, 245, 0.8);
        transition: 0.3s ease;
    }

    &:active button{
        background: rgb(184,182,215);
        background: linear-gradient(180deg, rgba(184,182,215,1) 0%, rgba(170,37,246,1) 0%, rgba(171,45,244,1) 39%, rgba(79,0,255,1) 94%, rgba(34,0,255,1) 100%);
        transition: all 0.3s ease;
        transform: scale(0.95);
    }


    p{
        color: ${colorsTheme.fontPrimaria};
        font-size: 15px;
        margin-top: 10px;
    }

`;
