import './styles.css'
import logo from'../../imagens/logo.png'


export default function Header(){
    return(
        <header className='header-home'>
            <img src={logo} alt='Logo' className='logo-header'/>
            <h1 className="titulo_header">Projeto Limpo</h1>
        </header>
    )
}