import './styles.css'

export default function Card(props){
    
     
    return (
        <div className="div-card">
            <img className='img-card' src={props.imagem} alt= {props.produto}/>
            <p className='p-card'>{props.produto}</p>
        </div>
    )
}