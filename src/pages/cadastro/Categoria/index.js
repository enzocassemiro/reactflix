import React from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
      <PageRoot>
        <h1>
        Cadastro de Categoria</h1>

        <form>
          <label>
            Nome da Categoria:
            <input type="text"/>
          </label>
          <button>
            Cadastrar
          </button>
        </form>

        <Link to="/">
            Ir para home
        </Link>
      </PageRoot>
    )
}

export default CadastroCategoria;