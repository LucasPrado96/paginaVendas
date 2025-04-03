
import Aluno from "../../assets/aluno1.jpg";
import Aluno2 from "../../assets/aluno2.jpeg";
import Aluno3 from "../../assets/aluno3.jpg";

import {
  
    H1Title,
    Testimony,
    TestimonyBox,
    SectionTestimony,
    
  } from "./styles";

export default function Testimonys(){
return(

<SectionTestimony id="servicos">
        <H1Title>O QUE OS ALUNOS ACHAM DO NOSSO CURSO</H1Title>
        

        <Testimony>
          <TestimonyBox>
            <img src={Aluno} />
            <h1>Marcello Henrique</h1>
            <p>
            Excelente curso! Didático, completo e muito bem explicado. Hoje consigo gerenciar melhor o fluxo de caixa da minha empresa e também cuidar das minhas finanças pessoais sem sufoco.
            </p>
          </TestimonyBox>

          <TestimonyBox>
            <img src={Aluno2} />
            <h1>Wagner Nascimento</h1>
            <p>
            Nunca pensei que aprender sobre finanças seria tão simples! As aulas são dinâmicas e fáceis de entender. Já comecei a investir e estou muito mais confiante sobre o meu futuro financeiro.
            </p>
          </TestimonyBox>

          <TestimonyBox>
            <img src={Aluno3} />
            <h1>Marina Rivelo</h1>
            <p>
            Antes do curso, eu vivia no vermelho e não sabia para onde meu dinheiro ia. Com as técnicas que aprendi, quitei minhas dívidas e já comecei a investir. Super recomendo!
            </p>
          </TestimonyBox>
          
        </Testimony>
      </SectionTestimony>

)

}