import './styles.css'

export default function Card({id, imagem, funcaoApagar, produto}){
     
    return (
        <div onClick={()=>funcaoApagar(id)}className="div-card">
            <img className='img-card' src={imagem} alt= {produto}/>
            <p className='p-card'>{produto}</p>
        </div>
    )
}