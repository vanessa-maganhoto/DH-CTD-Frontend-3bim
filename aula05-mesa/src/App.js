import Animal from "./Animal";
import "./styles.css"

const pingo = {
  nome: "Pingo",
  idade: 11,
  sexo: "macho",
  tamanho: "grande"
}

const cristal = {
  nome: "Cristal",
  idade: 13,
  sexo: "fêmea",
  tamanho: "pequeno"
}

const bob = {
  nome: "Bob",
  idade: 5,
  sexo: "macho",
  tamanho: "mediano"
}

const nina = {
  nome: "Nina",
  idade: 2,
  sexo: "fêmea",
  tamanho: "pequeno"
}

export default function App() {
  return (
    <>
      <h1>Clientes caninos da veterinária</h1>
      <Animal item={pingo}/>
      <Animal item={cristal}/>
      <Animal item={bob}/>
      <Animal item={nina}/>
    </>
  );
}

 
