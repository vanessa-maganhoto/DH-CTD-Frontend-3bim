
import { Formik } from 'formik'


export default function App() {


   /* function submitForm(e){
    e.preventDefault
    
 } */

   /* function submitForm(event){
      event.defaultValue
   } */

   return (
      <Formik
      //valores iniciais do form
      initialValues={{ email: "" }}
      //função de submissao do formulario
      onSubmit={(values) => alert(values.email)}
      //validar campos
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = "Colé, digite um email";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email invalido";
        }

        return errors;
      }}
    >
      {({ handleSubmit, handleChange, errors }) => (
        <form onSubmit={handleSubmit}>
          <input name="email" placeholder="Email" onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}

          <button type="submit">Sumit</button>
        </form>
      )}
    </Formik>
   )
}
   /* <form /* onSubmit={submitForm} >
   
   {<input placeholder="Email" type="email"/> }
   <h1>{nome} - {curso}</h1>
   <input 
      value={nome}
      placeholder="Nome" 
      onChange={(event)=> setNome(event.target.value)}/>

      <select onChange={(evento)=> setCurso(evento.target.value)}
         defaultValue={curso}
      >
         <option></option>
         <option value="front">Front end</option>
         <option value="back"> Back end</option>
         <option value="devops"> Devops</option>
      </select>

   <input type="submit"/>
</form> }*/


