export default function Button({ title, handleFunction }){
    return(
        <button onClick={handleFunction} style={{background : "red"}}>{title}</button>
    )
}