import React, { useState } from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';



function CadastroCategoria(){
  const initialValues = {
    name:'',
    description:'',
    color:'', 
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);
 
 

  function setValue(key, value){
    console.log(key);
    console.log(value);

    setValues({
      ...values,
      [key]: value,
    })
  }
  function handleChange(infoEvent){
    const { getAttribute, value} = infoEvent.target;
    setValue(
      getAttribute('name'),
      value
      );
  }

    return (
      <PageRoot>
        <h1>Cadastro de Categoria: {values.name}</h1>
        
        <form onSubmit={function handleSubmit(infoEvent){
          infoEvent.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          setValues(initialValues)
        }}>


          <div>
          <label>
            Nome da Categoria:
            <input 
              type="text"
              value={values['name']}
              onChange={handleChange}
              name="name"
            />
          </label>
          </div>
          <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.description}
              onChange={handleChange}
              name="description"
            />
          </label>
          </div>
          <div>
          <label>
            Cor:
            <input 
              type="color"
              value={values.color}
              onChange={handleChange}
              name="color"
            />
          </label>

          </div>
          <button>
            Cadastrar
          </button>
        </form>
        <ul>
          {categorias.map((categoria, index) => {
            return (
              <li key={`${categoria.id}${index}`}>
                {categoria.name}
              </li>
            )
          })}
        </ul>


        <Link to="/">
            Ir para home
        </Link>
      </PageRoot>
    )
}

export default CadastroCategoria;