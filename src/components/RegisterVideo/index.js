import React from "react";
import react from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues)

  return{
    values,
    handleChange: (evento) => {
      const value = evento.target.value;
      const name = evento.target.name;
      console.log(evento.target ); 
      setValues({
      ...values,
      [name]: value
      })
   },
   clearForm() {
    setValues({}); 
   }
  };

}

export default function RegisterVideo () {
  const formCadastro= useForm({
    initialValues: { titulo: "Frost punk", url: "http://youtube.."}
  });
  const [formVisivel, setFormVisivel] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() =>  setFormVisivel(true) }>
        +
      </button>
      {formVisivel 
        ?(
      <form onSubmit={(evento) => {
        evento.preventDefault();
        setFormVisivel(false);
        formCadastro.clearForm();
      }}>
        <div>
          <button type="button" className="close-modal" onClick={() => setFormVisivel(false )}>
            X
          </button>
           <input 
            placeholder="Título do vídeo" 
            name="titulo"
            value={formCadastro. values.titulo} 
            onChange={formCadastro.handleChange}
          />
           <input 
            placeholder="URL"
            name="url"
            value={formCadastro.values.url} 
            onChange={formCadastro.handleChange}
          />
           <button type="submit">
            Cadastrar
           </button>
        </div>
      </form>
        )
        : false
      }
    </StyledRegisterVideo>
  )
}