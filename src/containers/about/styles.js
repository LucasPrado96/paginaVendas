import Styled from 'styled-components';
import { colorsTheme } from '../../constants';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from "@mui/icons-material/LocationOn";


export const Container = Styled.div`
background-color: ${colorsTheme.fontTerciaria};
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const SectionAbout = Styled.section`
background-color: ${colorsTheme.fontTerciaria};
padding: 20px;






.texto{
    max-width: 100%;
    flex: 1;
    background-color: ${colorsTheme.destaqueAmarelo};
    border-radius: 20px;
    padding: 15px;


    ul{
    text-align: justify;
    font-size: 14px;
    line-height: 1.5;
    list-style-position: inside;
    padding-left: 20px;
   
    }

    li{
       
    }

    @media (max-width: 680px){
width: 90%;
font-size: 15px;
text-align: center;
margin-left: 0;
}

    h3{
        margin-top: 18px;
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
font-family: "Delius Unicase", serif;
color: black;
margin-left: 20px;


@media (max-width: 680px){
width: 90%;
font-size: 30px;
text-align: center;
margin-left: 0;
}

`;

export const WhatsAppIconStyled = Styled(WhatsAppIcon)`
cursor: pointer;
color: #25D366;
`;


export const LocationIconStyled = Styled(LocationOnIcon)`
cursor: pointer;
`;