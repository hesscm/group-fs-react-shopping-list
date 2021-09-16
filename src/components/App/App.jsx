import React from 'react';

import ListForm from '../ListForm/ListForm.jsx';
import Header from '../Header/Header.jsx'
import './App.css';

//vars to be used in ListForm
const [newItemName, setNewItemName] = useState('');
const [newItemQuantity, setNewItemQuantity] = useState(0);
const [newItemUnit, setNewItemUnit] = useState('');

function App() {

    {/* // AXIOS GET HERE */ }




    {/* // AXIOS POST HERE */ }




    {/* // AXIOS PUT HERE */ }




    {/* // AXIOS PUT/item HERE */ }




    {/* // AXIOS DELETE HERE */ }




    {/* // AXIOS DELETE/item HERE */ }


    
    return (
        <div className="App">
            <Header />
            <main>
            <ListForm addItem={addItem}
            setNewItemName={setNewItemName}
            setNewItemQuantity={setNewItemQuantity}
            setNewItemUnit={setNewItemUnit}
            />
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;
