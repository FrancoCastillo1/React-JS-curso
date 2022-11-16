import datos from "../mainGeneral/Json/MOCK_DATA"
import Item from "../mainGeneral/SectionProductos/Item";
function ItemListContainer(){
   return(
        <main className="sectionProducts">
            <section className="divContainerProductos">
            {datos.map((producto , i)=>{
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
export default ItemListContainer