import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outComeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Sumary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entrada</p>
          <img src={incomeImg} alt="Entrada" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outComeImg} alt="saida" />
        </header>
        <strong> - R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total" />
        </header>
        <strong>R$500,00</strong>
      </div>
    </Container>
  )
}