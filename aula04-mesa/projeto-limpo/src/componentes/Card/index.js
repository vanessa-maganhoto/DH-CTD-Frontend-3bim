import homemDinheiro from '../../imagens/homem-feliz-dinheiro.jpg'
import './styles.css'

export default function Card(){


    return(
        <>
        
        <div className="div-card">
            <img src ={homemDinheiro} alt='homem feliz com dinheiro voando' className="img-card"/>
            <p>Pessoa feliz porque deixou o projeto limpo e só com os arquivos necessários.</p>

        </div>
        </>
    )
}