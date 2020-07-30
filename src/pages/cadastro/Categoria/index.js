import React, { useState } from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';



function CadastroCategoria(){
  const [categorias, setCategorias] = useState(['Teste']);
 
  const initialValues = {
    name:'Categorial Inicial',
    description:'Descrição Inicial',
    color:'#000',
    
  }
 
  const [values, setValues] = useState(initialValues);

  function setValue(key, value){
    setValues({
      ...values,
      [key]: value,
    })
  }
  function handleChange(infoEvent){
    setValue(
      infoEvent.target.getAttribute('name'),
      infoEvent.target.value
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
                {categoria}
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