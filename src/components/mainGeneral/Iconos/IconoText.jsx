import "./IconoText.css"
function IconoText({icono,text}){
    return(
        <main>
            <div className="iconoText">
                {icono}
                <h2>{text}</h2>
            </div>
        </main>
    )
}
export default IconoText