import "../../App.css"
function ErrorURL({error,causa,img}){
    return(
        <main>
            <section className="error404">
                <div className="img">
                    <img src={img} alt={error}/> 
                </div>
                <div className="info">
                    <h2>{error}</h2>
                    <p>{causa}</p>
                    {/* <p>Tal vez la página no exista, asegurate de a ver indroducido bie la URL</p> */}
                </div>
            </section>
        </main>
    )
}
export default ErrorURL