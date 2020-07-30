import React, { useState } from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


function CadastroCategoria(){
  const initialValues = {
    name:'',
    description:'',
    color:'', 
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);
 
 

  function setValue(key, value){

    setValues({
      ...values,
      [key]: value,
    })
  }
  function handleChange(infoEvent){
    const { getAttribute, value} = infoEvent.target;
    const getTheAttribute = getTheAttribute.bind(infoEvent.target);
    setValue(
      getTheAttribute('name'),
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

          <FormField 
            label="Nome da Categoria"
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />

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

          <FormField 
            label="Cor da Categoria"
            type="color"
            name="color"
            value={values.color}
            onChange={handleChange}
          />

          {/*<div>
          <label>
            Cor:
            <input 
              type="color"
              value={values.color}
              onChange={handleChange}
              name="color"
            />
          </label>
          </div>*/}

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