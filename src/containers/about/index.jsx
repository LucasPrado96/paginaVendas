import { Container, SectionAbout, H1Title,  } from "./styles";



export default function About() {
  return (
    <Container>

    <H1Title>O QUE VOCÊ VAI APRENDER NO CURSO?</H1Title> 
          <p>
            Nosso curso é estruturado em 4 módulos práticos para você organizar
            suas finanças e começar a multiplicar seu dinheiro de forma segura.
          </p>

      <SectionAbout>
         
        <div className="aboutUs">
          <div className="texto">
            <h3>Módulo 1: Organização Financeira</h3>

            <ul>
              <li>
                Como sair do ciclo das dívidas e criar um planejamento
                financeiro eficiente.
              </li>
              <li>
                Técnicas simples para controlar seus gastos e sobrar dinheiro
                no fim do mês.
              </li>
              <li>
                Passo a passo para montar sua planilha de controle
                financeiro.
              </li>
            </ul>
          </div>

          <div className="texto">
            <h3>Módulo 2: Como Economizar de Forma Inteligente</h3>

            <ul>
              <li>
                Descubra onde seu dinheiro está indo e corte gastos sem
                afetar sua qualidade de vida.
              </li>
              <li>
                Estratégias práticas para economizar em compras, contas e
                lazer.
              </li>
              <li>Como negociar dívidas e reduzir juros abusivos.</li>
            </ul>
          </div>

          <div className="texto">
            <h3>Módulo 3: Introdução aos Investimentos</h3>

            <ul>
              <li>
                Onde investir seu dinheiro para fazê-lo crescer com
                segurança.
              </li>
              <li>
                Tipos de investimentos: Renda fixa, ações, fundos
                imobiliários e muito mais!
              </li>
              <li>
                Erros que fazem as pessoas perder dinheiro e como evitá-los.
              </li>
            </ul>
          </div>

          <div className="texto">
            <h3>Módulo 4: Construção de Riqueza</h3>

            <ul>
              <li>
                Como criar múltiplas fontes de renda e alcançar a liberdade
                financeira.
              </li>
              <li>
                Estratégias de longo prazo para você construir patrimônio e
                viver de renda.
              </li>
              <li>
                Como planejar sua aposentadoria sem depender do governo.
              </li>
            </ul>
          </div>

          <div className="texto">
            <h3>Bônus Exclusivo:</h3>

            <ul>
              <li>
              Planilha de Controle Financeiro Profissional para você organizar seu dinheiro de forma automática.
              </li>
              <li>
              Acesso ao Grupo VIP no WhatsApp para tirar dúvidas e trocar experiências.
              </li>
              <li>
              Acesso Vitalício - Com atualizações gratuitas para sempre!
              </li>
            </ul>
          </div>

          

          
        </div>
      </SectionAbout>

      

  
    </Container>
  );
}
