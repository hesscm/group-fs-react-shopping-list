

function resetList(props) {

    return (
        <>
            <h2>Shopping List</h2>
            <br />
            <button onClick={}>Reset</button>
            <button onClck={props.clearList}>Clear</button>
        </>
    )
}

export default resetList;

// reset button should clear purchased status (update ispurchased status)
// clear deletes everything from the database 
