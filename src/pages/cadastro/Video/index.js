import React from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';

function CadastroVideo(){
    return (
      <PageRoot>
        <h1>
        Cadastro de Vídeo
        </h1>

        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
      </PageRoot>
    )
}

export default CadastroVideo;