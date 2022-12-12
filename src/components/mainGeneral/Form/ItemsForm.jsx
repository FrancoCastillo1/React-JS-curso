function ItemForm({name,placeholder,type,valor,event}){
    const nombre = name[0].toUpperCase() + name.substring(1)
    return(
        <div className="formItem">
            <label htmlFor={name}>{nombre}</label>
            <input type={type} placeholder={placeholder} value={valor} name={name} onChange={event}></input>
        </div>
    )
}
export default ItemForm