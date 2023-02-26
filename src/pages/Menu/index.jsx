import bannerImg from '/banner-img.png'

import { Container } from "./styles";

import { Header } from '../../components/Header';

export function Menu() {
  return( 
    <Container>
      <Header />

      <section className="banner">
        <div className="banner-back"></div>

        <div className='banner-presentation'>
          <img src={bannerImg} alt="" />
        
          <div className='banner-text'>
            <h2>Sabores inigualáveis</h2>
            <p>
              Sinta o cuidado do preparo com ingredientes selecionados
            </p>
          </div>
        </div>
      </section>
    </Container>
  )
}