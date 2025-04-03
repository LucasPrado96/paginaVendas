import Styled from "styled-components";
import { colorsTheme } from "../../constants";


export const SectionTestimony = Styled.section`
background-color: ${colorsTheme.black};
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px 0;

p{
    
@media (max-width: 680px){
width: 90%;
font-size: 15px;
text-align: center;
margin-left: 0;
}
}

`;


export const H1Title = Styled.h1`
font-size: 40px;
font-weight: 400;
font-family: "Bebas Neue", sans-serif;
color: ${colorsTheme.fontPrimaria};
margin-left: 20px;


@media (max-width: 680px){
width: 90%;
font-size: 30px;
text-align: center;
margin-left: 0;
}

`;

export const Testimony = Styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 90%;
gap: 50px;
margin-top: 20px;




@media (max-width: 680px){
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

}

`;

export const TestimonyBox = Styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

h1{
    font-family: "Bebas Neue", sans-serif;
    color: ${colorsTheme.fontPrimaria};
}

p{
    font-size: 14px;
 
    color: ${colorsTheme.fontPrimaria};
}

img{
    width: 60%;
    max-width: 100px;
    border-radius: 50px;
}



`;