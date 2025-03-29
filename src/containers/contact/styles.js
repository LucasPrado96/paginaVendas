import Styled from "styled-components";
import { colorsTheme } from "../../constants";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const SectionContact = Styled.div`
width: 100%;
background-color: ${colorsTheme.fontTerciaria};
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px;

@media (max-width: 375px){
       h4{
        font-size: 16px;
        text-align: center;
       }
    }


    @media (max-width: 414px){
       h4{
        font-size: 16px;
        text-align: center;
       }
    }

    @media (max-width: 430px){
       h4{
        font-size: 18px;
        text-align: center;
       }
    }

    @media (max-width: 540px){
       h4{
        font-size: 18px;
        text-align: center;
       }
    }
    



.infoContact{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 100px;
    padding: 20px;

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
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

    @media (max-width: 430px){
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

    @media (max-width: 540px){
      width: 100%;
      display: flex;    
        gap: 40px;
        flex-direction: column;
    }


    div{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;


        @media (max-width: 375px){
        
            p{
                font-size: 18px;
            }

            strong{
                font-size: 20px;
            }
        }
    }

    
}

`;

export const H1Title = Styled.h1`
font-size: 48px;
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

@media (max-width: 375px){
    width: 90%;
    font-size: 30px;
    text-align: center;
    margin-left: 0;
    }

    @media (max-width: 414px){
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

export const EmailIconStyled = Styled(EmailIcon)`

`;

export const PhoneIconStyled = Styled(PhoneIcon)`

`;
