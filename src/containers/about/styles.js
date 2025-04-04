import Styled from 'styled-components';
import { colorsTheme } from '../../constants';

import Bg from '../../assets/caderno.jpg';


export const Container = Styled.div`
background: rgb(99,99,130);
background: linear-gradient(180deg, rgba(99,99,130,1) 7%, rgba(254,253,255,0.7343312324929971) 100%);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-image: url(${Bg});
padding: 30px;

p{
        font-size: 15px;
        color: ${colorsTheme.fontPrimaria};
        padding-bottom: 10px;
    }
`

export const SectionAbout = Styled.section`
border: 1px solid ${colorsTheme.fontPrimaria};
background-color: ${colorsTheme.fontSecundaria};
padding: 20px;
border-radius: 15px;







.texto{
    max-width: 100%;
    flex: 1;
  
    border: 1px solid ${colorsTheme.fontPrimaria};
    background: rgb(8,8,9);
    background: linear-gradient(180deg, rgba(8,8,9,1) 0%, rgba(16, 0, 241, 0.74) 78%);
    border-radius: 15px;
    padding: 30px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    
    ul{
    text-align: justify;
    font-size: 14px;
    line-height: 1.5;
    list-style-position: inside;
  
   
    }

    li{
        font-size: 18px;
        color: ${colorsTheme.fontPrimaria};
        font-family: "Bebas Neue", sans-serif;
    }

    @media (max-width: 680px){
width: 90%;
font-size: 15px;
text-align: center;
margin-left: 0;
}

    h3{
       font-size: 25px;
       color: ${colorsTheme.fontPrimaria};
       font-family: "Bebas Neue", sans-serif;
    }

  

}

.aboutUs{
    display: flex;
    gap: 20px;
    margin-top: 10px;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    

    @media (max-width: 680px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    }
 
    

  
}

`;


export const H1Title = Styled.h1`
font-size: 40px;
font-weight: 400;

color: ${colorsTheme.fontPrimaria};
margin-top: 20px;
font-family: "Bebas Neue", sans-serif;


@media (max-width: 680px){
width: 90%;
font-size: 30px;
text-align: center;
margin-left: 0;
}

`;

export const SectionBook = Styled.section`

width: 100%;



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
        font-family: "Bebas Neue", sans-serif;
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
        font-family: "Bebas Neue", sans-serif;
    }

`;
