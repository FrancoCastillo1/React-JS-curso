function ItemForm({name,placeholder,nombre,type}){
    return(
        <div className="formItem">
            <label htmlFor={name}>{nombre}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}
export default ItemForm