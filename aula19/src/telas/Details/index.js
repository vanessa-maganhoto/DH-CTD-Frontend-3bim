import "./styles.css"
import { useParams } from "react-router-dom"
import api from "../../services/api"
import { useEffect, useState } from "react"

export default function Details() {
    const parametros = useParams()

    const [endereco, setEndereco] = useState({})
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        getDataCep()
    }, [])


    async function getDataCep(){
        try {
            const { data } = await api.get(`/${parametros.code}/json`)
            setEndereco(data)
            console.log(data)

        } catch (error) {
            alert("Erro ao buscar CEP" + error)
        }
        setLoading(false)
    }

    if(loading){
        return <h3>Carregando</h3>
    }

    if(!endereco.localidade && !loading){
        return <h3>CEP inválido</h3>
    }

    return (
        <>
            <h1>Tela de Details - {parametros.code}</h1>
            <h2>RUA: {endereco.logradouro ? endereco.logradouro : "Rua não encontrada"}</h2>
            <h2>BAIRRO: {endereco.bairro ? endereco.bairro : "Bairro não encontrada"}</h2>
            <h2>LOCALIDADE: {endereco.localidade ? endereco.localidade : "localidade não encontrada"}</h2>
            {/* <button onClick={getDataCep}>Buscar</button> */}
        </>
    )
}