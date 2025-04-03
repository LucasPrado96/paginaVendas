import {
  Container,
  Main,
  H1,


 
 
  
} from "./styles";

import SectionTestimony from "../testimony/index";
import About from "../about/index";



export function Home() {
  return (
    <Container>
      <Main id="inicio">
      
        <H1>APRENDA ESSE MÉTODO PASSO A PASSO PARA CONTROLAR SUAS FINANÇAS E MULTIPLICAR SEU DINHEIRO!</H1>

        <p>
        Mesmo que você não saiba nada sobre investimentos e esteja cheio de dívidas, este curso vai te ajudar a organizar seu dinheiro e alcançar a liberdade financeira!  
        </p>

     

        <div className="prevEstrutura">
         
          <iframe width='840' height='420' 
          src="https://www.youtube.com/embed/Ep65y-eQxgE" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          style={{border: 'none'}}
          > 
          </iframe>
          
        </div>
      </Main>

      <SectionTestimony></SectionTestimony>
      <About></About>
      
    

     
    </Container>
  );
}
