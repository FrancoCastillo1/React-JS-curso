import "./Anchor.css"
function AnchorJSX({text ,event}){
    return(
        <button className="buttonBlack" path="./productos/detalles/" onClick={event}>{text}</button> 
    )
}
export default AnchorJSX