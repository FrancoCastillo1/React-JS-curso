import "./carrousel.css"
import CarrouselItem from "./CarrouselItem";
/* import Carousel from 'react-bootstrap/Carousel'; */
function Carrousel(){
    return (
      <section className="sectionCarrousel">
        <h2>Que dicen nuestros clientes🚀🚀</h2>
        <CarrouselItem
          person="Tobey Maguire"
          palabras="La idea de esta plataforma de vender toda la indumentaria en una es una joya"
          img="./img/tobeyclientes.jfif"
        />
        <CarrouselItem
          person="Jordi Wild"
          palabras={<p><span className="spanShop">The One Shop</span> no solo tiene una lindplataforma, si no también buena atención al cliente</p>}
          img="./img/jordiClientes.jfif"
        />
       {/*  <CarrouselItem
          person="Luis Fernando Flores"
          palabras="Como creador de contendo, me encanto que esta tienda me distribuyera mi marca de forma tan profecional"
          img="./img/fernanflooCarrousel.webp"
        /> */}
        {/*   <CarrouselItem/>
        <CarrouselItem/>
        <CarrouselItem/> */}
      </section>
    );
}
export default Carrousel 