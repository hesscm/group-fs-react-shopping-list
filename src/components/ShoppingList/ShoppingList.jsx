const list = [
  {name :'flour', quantity: 1, unit: 'lbs', isPurchased: FALSE},
  {name :'cake', quantity: 2, unit: 'lbs', isPurchased: FALSE},
  {name :'pudding', quantity: 5, unit: 'cups', isPurchased: FALSE},
];

function ShoppingList(props) {
    return(
        <>
            <div class="shopping-list-box">
                {/* <p>apples</p> 
                <p>5 lbs</p> */}
                {props.list.map(item => 
                    (<p>{item.name} {item.quantity} {item.unit} {item.isPurchased}</p>)
                )}
                 
                
                <button class="buy-item-button">Buy</button>
                <button class="remove-item-button">Remove</button>

            </div>
        </>
    )
}

export default ShoppingList;

// display Item names, quantity, and unit to DOM with .map
// ‘Buy’ button that changes isPurchased to true
// ‘Remove’ button that deletes the individual item from the page and the database