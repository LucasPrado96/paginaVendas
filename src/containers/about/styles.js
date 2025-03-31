import Styled from 'styled-components';
import { colorsTheme } from '../../constants';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from "@mui/icons-material/LocationOn";


export const Container = Styled.div`
background: rgb(99,99,130);
background: linear-gradient(180deg, rgba(99,99,130,1) 7%, rgba(254,253,255,0.7343312324929971) 100%);
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

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
    background: linear-gradient(180deg, rgba(8,8,9,1) 0%, rgba(117,0,241,0.7343312324929971) 78%);
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
color: ${colorsTheme.fontPrimaria};
margin-top: 20px;


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