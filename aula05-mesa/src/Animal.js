import "./styles.css"

export default function Animal(props){
    return(
    
            <ul >
                <h2>Nome:{props.item.nome}</h2>
                <li>Idade: {props.item.idade}</li>
                <li>Sexo: {props.item.sexo}</li>
                <li>Tamanho: {props.item.tamanho}</li>
            </ul>
       
    )
}