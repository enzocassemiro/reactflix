import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
// eslint-disable-next-lineimport dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';
import PageRoot from '../../components/PageRoot';
import Footer from '../../components/Footer';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosInicias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos);
        setDadosInicias(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },[]);
  // http://localhost:8080/categorias?_embed=videos

  return (
    <PageRoot>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.length >=1 && (
        <>  
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription={"Se você quer ser bem sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si - 'Ayrton Senna'"}
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />
        </>
      )}
      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Se você quer ser bem sucedido, precisa ter dedicação total, buscar seu último limite e dar o melhor de si - 'Ayrton Senna'"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> */}

    </PageRoot>
  );
}

export default Home;
