import { SectionContact, H1Title, WhatsAppIconStyled, EmailIconStyled, PhoneIconStyled } from './styles';


export default function Contact(){


      return(
        <SectionContact id="contato">
    
        <H1Title>CONTATO</H1Title>
        <h4>Entre em contato conosco! Nossa equipe irá te responder o mais breve possível.</h4>

        <div className="infoContact">
            <div>
              <WhatsAppIconStyled fontSize="large" />
              <strong>WhatsApp</strong>
              <p>(19)99868-3300</p>
            </div>

            <div>
              <EmailIconStyled fontSize="large"/>
              <strong>Email</strong>
              <p>petshop@gmail.com.br</p>
            </div>

            <div>
              <PhoneIconStyled fontSize="large"/>
              <strong>Telefone</strong>
              <p>(19)3268-3300</p>
            </div>
        </div>

      </SectionContact>
      )
}