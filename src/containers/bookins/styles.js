import Styled from 'styled-components';
import { colorsTheme } from '../../constants';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Bg2 from "../../assets/bg2.jpg";


export const Container = Styled.div``;



export const SectionBook = Styled.section`
background-image: url(${Bg2});
background-position: center;
background-size: cover;
width: 100%;
height: 100vh;
padding: 15px;
display: flex;
flex-direction: column;
align-items: start;


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

`;


export const ContentHorarios = Styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 680px){
    width: 90%;
    font-size: 30px;
    text-align: center;
    

   
    }



.textContent{

h1{
    font-size: 48px;
    font-weight: 400;
    font-family: "Delius Unicase", serif;
    color: ${colorsTheme.fontPrimaria};
    margin-left: 20px;

    @media (max-width: 680px){
        width: 100%;
        font-size: 30px;
        text-align: center;
        margin-left: 0;
        }

    @media (max-width: 375px){
        width: 100%;
        font-size: 30px;
        text-align: center;
        margin-left: 0;
    }



 }
}

.table{
   margin-top: 45px;


   

    ul{
        list-style: none;
        width: 100%;
        gap: 15px;
        display: flex;
        flex-direction: column;
        
    }

    li{
        font-size: 25px;
        color: ${colorsTheme.fontPrimaria};
        display: flex;
        justify-content: space-between;
        gap: 120px;
        border-bottom: 1px dotted;
        color: ${colorsTheme.black};

        strong{
            @media (max-width: 375px){
          font-size: 18px;
            }
        }
    }
}

.cta{

    display: flex;
    flex-direction: column;
    margin-top: 25px;

    @media (max-width: 680px){
       align-items: center;
    }

    @media (max-width: 375px){
       align-items: center;
    }



    p{
        color: ${colorsTheme.fontPrimaria};


        @media (max-width: 680px){
        width: 90%;
        font-size: 16px;
        text-align: center;
        margin-left: 0;
        }

        @media (max-width: 375px){
            width: 90%;
            font-size: 16px;
            text-align: center;
            margin-left: 0;
            }

            @media (max-width: 414px){
            width: 90%;
            font-size: 25px;
            text-align: center;
            margin-left: 0;
            margin-top: 50px;
            }

            @media (max-width: 430px){
            width: 90%;
            font-size: 25px;
            text-align: center;
            margin-left: 0;
            margin-top: 50px;
            }

            @media (max-width: 768px){
            width: 90%;
            font-size: 25px;
            text-align: center;
            margin-left: 0;
            margin-top: 50px;
            }

            @media (max-width: 820px){
            width: 90%;
            font-size: 25px;
            text-align: center;
            margin-left: 0;
            margin-top: 50px;
            }

            @media (max-width: 1024px){
            width: 90%;
            font-size: 20px;
            text-align: center;
            margin-left: 0;
            
            }
        }

    a{
            font-size: 20px;
            text-decoration: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: ${colorsTheme.fontPrimaria};
            font-weight: 500;
            margin-top: 15px;

            @media (max-width: 680px){
                width: 90%;
                font-size: 16px;
                text-align: center;
                margin-left: 0;
            }

        @media (max-width: 375px){
            width: 90%;
            font-size: 16px;
            text-align: center;
            margin-left: 0;
            }
        }
            
           

            &:hover{
                opacity: 0.5;
                color: ${colorsTheme.contrasteAmarelo};
            }
    }


`;

export const WhatsAppIconStyled = Styled(WhatsAppIcon)`
cursor: pointer;
color: #25D366;
`;