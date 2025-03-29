import { Container, SectionBook, ContentHorarios, WhatsAppIconStyled } from "./styles";

export default function Bookings() {
  return (
    <Container>
      <SectionBook>
        <ContentHorarios>
          <div className="textContent">
            <h1>NOSSOS HORÁRIOS</h1>
          </div>

          <div className="table">
            <ul>
              <li>
                <strong>Segunda:</strong> 8h - 19h
              </li>
              <li>
                <strong>Terça:</strong> 8h - 19h
              </li>
              <li>
                <strong>Quarta:</strong> 8h - 19h
              </li>
              <li>
                <strong>Quinta:</strong> 8h - 19h
              </li>
              <li>
                <strong>Sexta:</strong> 8h - 19h
              </li>
              <li>
                <strong>Sábado:</strong> 8h - 18h
              </li>
              <li>
                <strong>Domingo:</strong> 8h - 12h
              </li>
            </ul>
          </div>

          <div className="cta">
            <p>Escolha o melhor horário para nós te atendermos</p>

            <a href="">
              <WhatsAppIconStyled fontSize="large" />
              MANDE UMA MENSAGEM
            </a>
          </div>
        </ContentHorarios>
      </SectionBook>
    </Container>
  );
}
