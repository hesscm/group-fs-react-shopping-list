function ShoppingList(props) {
    return(
        <>
            <div class="shopping-list-box">
                {/* <p>apples</p> 
                <p>5 lbs</p> */}
                {props.list.map(item => 
                    (<p>{item.name}</p>)
                )}
                 
                
                <button class="item-button">Buy</button>
                <button class="item-button">Remove</button>
            </div>
        </>
    )
}

export default ShoppingList;

// display Item names, quantity, and unit to DOM with .map
// ‘Buy’ button that changes isPurchased to true
// ‘Remove’ button that deletes the individual item from the page and the database