import './styles.css'

export default function Button(props){
    return(
        <button 
            onClick={props.onClick} 
            className={props.texto === "Adicionar" ? "button" : "button2"}
        >
            {props.texto}

        </button>
    )
}