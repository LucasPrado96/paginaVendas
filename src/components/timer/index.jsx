
import { Container } from "./styles";
import Countdown from "react-countdown";

const ExpireOffer = () => {
    const finishTime = Date.now() + 5000 * 60 * 60 * 24;

    
  return (
    <Container>
        <div>
            <h2>NÃO PERCA A OPORTUNIDADE DE ATINGIR SUA LIBERDADE FINANCEIRA!</h2>
            <p>ESSA PROMOÇÃO SE ENCERRA EM POUCO TEMPO</p>
        </div>

        <Countdown
            date={finishTime}
            renderer={({hours, minutes, seconds, completed}) => {
                if(completed) {
                    return <span>Tempo esgotado</span>
                } else {
                   return <span style={{ fontSize: "3rem", fontWeight: "bold", color: "white"}}>
                  {hours}h {minutes}m {seconds}s
                  </span>
                }
            }}
        />

       


    
    </Container>
  );
};

export default ExpireOffer;
