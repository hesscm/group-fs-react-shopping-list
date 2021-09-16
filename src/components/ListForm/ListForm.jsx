
function ListForm(props) {
    return(
        <>
        <h2>Add an Item</h2>
        <form onSubmit={props.addItem}>
            <input id="item" onChange={
                (event) => setNewItemName(event.target.value)}
            />
            <input id="quantity" onChange={
                (event) => props.setNewItemQuantity(event.target.value)}
            />
             <input id="unit" onChange={
                (event) => props.setNewItemUnit(event.target.value)}
            />
            <button type="submit">Save</button>
        </form>
        </>
    )
}

export default ListForm;