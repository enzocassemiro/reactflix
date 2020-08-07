import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageRoot from '../../../components/PageRoot';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
// eslint-disable-next-line import/no-named-as-default-member
import useForm from '../../../hooks/useForms';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://enzoflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (responseServer) => {
        const response = await responseServer.json();
        setCategorias([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageRoot>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(infoEvent) {
        infoEvent.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor da Categoria"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageRoot>
  );
}

export default CadastroCategoria;
