

function resetList(props) {

    return (
        <>
            <h2>Shopping List</h2>
            <br />
            <button onClick={props.resetList}>Reset</button>
            <button onClick={props.clearList}>Clear</button>
        </>
    )
}

export default resetList;

// reset button should clear purchased status (update ispurchased status)
// clear deletes everything from the database 
