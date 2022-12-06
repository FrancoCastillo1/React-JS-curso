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
                </div>
            </section>
        </main>
    )
}
export default ErrorURL