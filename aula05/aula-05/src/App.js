
import Button from "./Button";
import Container from "./Container";

const dadosBotao = {
  texto: "pressione",
  apelido: "aperte",
  valor: 10,
  estado: "MG"
} 



export default function App() {
  return (
    <>
      
      <Container>
        <Button item={dadosBotao}/>
      </Container>
     
    </>
  );
}


