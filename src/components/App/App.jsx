import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import ListForm from '../ListForm/ListForm.jsx';
import Header from '../Header/Header.jsx'
import './App.css';
import ResetList from '../ResetList/ResetList';

//vars to be used in ListForm
const [newItemName, setNewItemName] = useState('');
const [newItemQuantity, setNewItemQuantity] = useState(0);
const [newItemUnit, setNewItemUnit] = useState('');

function App() {

    {/* // AXIOS GET HERE */ }




    {/* // AXIOS POST HERE */ }




    {/* // AXIOS PUT HERE */ }
    // Clear list deletes all objects from database
    const clearList = () => {
        axios({
            method: 'DELETE',
            url: '/'
        }).then(response => {
            console.log('cleared list', response);
        }).catch(error => {
            console.log('error clearing list', error);
        })
    }


    {/* // AXIOS PUT/item HERE */ }
    const resetList = () => {
        axios({
            method: 'PUT',
            url: '/'
           }.then((response) => {
        console.log('list was reset');
    }).catch((error) => {
        console.log('there was an error resetting list', error);
    })
        )}

    // update status to purchased

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
                <ResetList clearList={clearList}
                    resetList={resetList} />
            </main>
        </div>
    );
}

export default App;
