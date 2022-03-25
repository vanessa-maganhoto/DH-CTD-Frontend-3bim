import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";

const lista = [
  {
    id: "1",
    produto: "feijão preto",
    imagem: "https://www.belacerealista.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/f/e/feijao-preto-granel-bela-cerealista_1.jpg"
  },

  {
    id: "2",
    produto: "pó de café",
    imagem: "https://www.mexidodeideias.com.br/wp-content/uploads/2021/12/O-que-fazer-com-o-po-de-cafe-usado.jpg"
  },

  {
    id: "3",
    produto: "aveia em flocos",
    imagem: "https://www.jasminealimentos.com/wp-content/uploads/2020/05/aveia.jpg"
  },

  {
    id: "4",
    produto: "macarrão",
    imagem: "https://minhasaude.proteste.org.br/wp-content/uploads/2020/11/tipos-de-macarrao.jpg"
  },

  {
    id: "5",
    produto: "açúcar",
    imagem: "https://content.paodeacucar.com/wp-content/uploads/2018/10/tipos-de-a%C3%A7%C3%BAcar-capa.jpg"
  },

  {
    id: "6",
    produto: "manteiga",
    imagem: "https://veja.abril.com.br/wp-content/uploads/2016/05/manteiga-20130523-original2.jpeg?quality=70&strip=info&w=620&h=349&crop=1"
  },


]


export default function App() {
  
  const [produtos, setProdutos] = useState(lista)
  
  function removeItem(id){
    const temp = produtos.filter((item) => item.id !== id)
    setProdutos(temp)
    console.log(temp)
  }

  function retornaListaOriginal(){
    return setProdutos(lista)
  }

  return (
    <>
      <Button apertar={retornaListaOriginal} /> {/*funcão para voltar ao estado original passando o array lista como parâmetro*/}
      
      {
        produtos.map((item) => (
          <Card
            id={item.id} 
            key={item.id}
            imagem={item.imagem}
            produto={item.produto}
            funcaoApagar={removeItem}
            //inserir o onlcik no componente CARD
          />))
      }
      
    </>
  );
}

 
