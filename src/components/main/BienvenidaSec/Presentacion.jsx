import Anchor from "../anchor/Anchor"
import "./presentacion.css"
function SectionBienvenida({ texth2 , textP , img}){
    return(
        <section className="sectionBienvenida">
            <div className="divInfo">
                <h2>{texth2}</h2>
                <p>{textP}</p>
                <Anchor text="Registrate!"/>
            </div>
            <div className="divImg">
                <img src={img} alt={texth2}/>
            </div>
        </section>
    )
}
function SectionsWelcome(){
    return (
        <>
          <SectionBienvenida
            texth2="Bienvenido al mejor eComerse del mund@ 😎"
            img="/img/imgPublicidad1.png"
            textP="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non tempora repudiandae distinctio necessitatibus. Saepe quas, repellat assumenda a quibusdam molestias distinctio corrupti voluptas quod cupiditate. Blanditiis ipsum unde quaerat exercitationem?"
          />
          <SectionBienvenida
            texth2="Con los mejores envios del pais"
            img="/img/img2Bienvenida.gif"
            textP="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non tempora repudiandae distinctio necessitatibus. Saepe quas, repellat assumenda a quibusdam molestias distinctio corrupti voluptas quod cupiditate. Blanditiis ipsum unde quaerat exercitationem?"
          />
        </>
      );
}
export default SectionsWelcome 