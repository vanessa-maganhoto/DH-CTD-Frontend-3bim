import Box from './Box'

function App() {
  
  const frutas = ["Cachorro", "Gato", "Macaco"]
  
  return (
    <>
    {
      frutas.map((item, index)=>{
        return(
          <Box item={item} key={index.toString()}/>
        )
      })
    }

 
    </>
  );
}

export default App;
