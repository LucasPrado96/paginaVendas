import Styled from "styled-components";
import Bg from "../../assets/bgpredio.jpg";
import { colorsTheme } from "../../constants";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";



export const Container = Styled.div`
width: 100%;
height: 100vh;
scroll-behavior: smooth;
overflow-x: hidden;


`;

export const Main = Styled.main`
width: 100%;
height: 100vh;
background-image: url(${Bg});
background-position: center;
background-color: black;
background-size: cover;



@media (max-width: 680px){
    display: flex;
    flex-direction: column;
   
    align-items: center;
}

p{
   
    text-align: center;
    padding: 0 20px;
    font-size: 15px;
    line-height: 1.5;
    font-weight: 500;
    color: ${colorsTheme.fontTerciaria};

    @media (max-width: 680px){
    width: 95%;
    font-size: 19px;
    text-align: center;
   

    }

    @media (max-width: 580px){
    width: 95%;
    font-size: 18px;
    text-align: center;
  
    }

    @media (max-width: 471px){
    width: 95%;
    font-size: 18px;
    text-align: center;
    margin-left: 0;
    }

    @media (max-width: 375px){
    width: 90%;
    font-size: 18px;
    text-align: center;
    margin-left: 0;
 
    }
}

.prevEstrutura{
    
    margin-top: 35px;
    font-size: 18px;
    color: ${colorsTheme.fontSecundaria};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;

    a{
        width: 95%;
    font-size: 19px;
    text-align: center;
    margin-left: 20px;

    @media (max-width: 680px){

    margin-left: 0px;
    }
    }

    @media (max-width: 1024){
    width: 100%;
    text-align: center;
    }

    @media (max-width: 680px){
    width: 95%;
    text-align: center;
    }
}
`;




export const PlayCircleStyled = Styled(PlayCircleFilledWhiteIcon)`
    color:rgb(186, 240, 39);
    

    &:hover{
        color:rgb(106, 139, 15);
    }
`;

export const H1 = Styled.h1`
font-size: 40px;
font-weight: 400;
font-family: "Bebas Neue", sans-serif;
color: ${colorsTheme.fontPrimaria};
text-align: center;
padding: 10px;


@media (max-width: 680px){
width: 100%;
font-size: 40px;
text-align: center;
margin-left: 0;
}
`;
