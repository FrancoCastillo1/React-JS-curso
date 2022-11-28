import Item from "../mainGeneral/SectionProductos/Item";
function ItemList({recorrido}){
    return(
        <main className="sectionProducts">
        <section className="divContainerProductos">
        {recorrido.map((producto , i)=>{
            return(
                <Item key={i}
                id={producto.id}
                img={producto.img}
                name={producto.nombre}
                stock={producto.Stock}
                precio={producto.precio}
                />
            )
        })}
        </section>
    </main>
    )
}
export default ItemList