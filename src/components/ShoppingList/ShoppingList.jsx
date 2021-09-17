// const list = [
//   {name :'flour', quantity: 1, unit: 'lbs', isPurchased: FALSE},
//   {name :'cake', quantity: 2, unit: 'lbs', isPurchased: FALSE},
//   {name :'pudding', quantity: 5, unit: 'cups', isPurchased: FALSE},
// ];

const list = [
    {name :'flour', quantity: 1, unit: 'lbs'},
    {name :'cake', quantity: 2, unit: 'lbs'},
    {name :'pudding', quantity: 5, unit: 'cups'},
  ];

function ShoppingList(props) {
    return(
        <>
            <div className="shopping-list-box">
                {/* <p>apples</p> 
                <p>5 lbs</p> */}
                {props.itemList.map(item => 
                    (<p key={item.id}>{item.name} {item.quantity} {item.unit}</p>)
                )}
                 
                
                <button className="buy-item-button">Buy</button>
                <button className="remove-item-button">Remove</button>

            </div>
        </>
    )
}

export default ShoppingList;

// display Item names, quantity, and unit to DOM with .map
// ‘Buy’ button that changes isPurchased to true
// ‘Remove’ button that deletes the individual item from the page and the database