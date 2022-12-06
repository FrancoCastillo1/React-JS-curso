import datos from "./MOCK_DATA";
export function promesaDemorar(index) {
    return new Promise((resolve, reject) => {
        const encontrar = datos.find((data) => data.index == index);
        encontrar == undefined && reject("Item no encontardo")
        setTimeout(()=> {
            resolve(encontrar)
        },200)
    });
}
export function CapturarCategoria(cat){
    let filtrar = datos.filter((data)=> data.categoria == cat )
    console.log("estos son los datos" , filtrar)
    return new Promise((resolve ,reject)=>{
        filtrar == undefined && reject("ItemCategory no encontardo")
        setTimeout(()=> {
            resolve(filtrar)
        },10)
    }  )
}
export default {promesaDemorar ,CapturarCategoria} 