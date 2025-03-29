import {
  Container,
  Main,
  H1,


 
 
  
} from "./styles";

import ServicesBox from "../services/index";
import About from "../about/index";
import Bookings from "../bookins/index";
import Contact from "../contact/index";

export function Home() {
  return (
    <Container>
      <Main id="inicio">
      
        <H1>APRENDA ESSE MÉTODO PASSO A PASSO PARA CONTROLAR SUAS FINANÇAS E MULTIPLICAR SEU DINHEIRO!</H1>

        <p>
        Mesmo que você não saiba nada sobre investimentos e esteja cheio de dívidas, este curso vai te ajudar a organizar seu dinheiro e alcançar a liberdade financeira!  
        </p>

     

        <div className="prevEstrutura">
          <a>CONHEÇA MEU TRABALHO</a>
          <iframe width='840' height='420' 
          src="https://www.youtube.com/embed/Ep65y-eQxgE" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          style={{border: 'none'}}
          > 
          </iframe>
          
        </div>
      </Main>

      <ServicesBox></ServicesBox>
      <About></About>
      <Bookings></Bookings>
      <Contact></Contact>

     
    </Container>
  );
}
