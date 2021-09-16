import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import ListForm from '../ListForm/ListForm.jsx';
import Header from '../Header/Header.jsx'
import './App.css';
import ResetList from '../ResetList/ResetList';



function App() {

    //vars to be used in ListForm
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState(0);
    const [newItemUnit, setNewItemUnit] = useState('');

    {/* // AXIOS GET HERE */ }




    {/* // AXIOS POST HERE */ }
    const addItem = (event) => {
        //to stop page from refreshing
        event.preventDefault();
        console.log('Submitted form!', newItemName, newItemQuantity, newItemUnit);
        axios({
          method: 'POST',
          url: '/list',
          data: {
            name: newItemName,
            quantity: newItemQuantity,
            unit: newItemUnit,
          }
        }).then((response) => {
          fetchItems();
        }).catch((error) => {
            alert('Error in addItem');
            console.log(error);
        })
      }



    {/* // AXIOS PUT HERE */ }
    // Clear list deletes all objects from database
    const clearList = () => {
        axios({
            method: 'DELETE',
            url: '/list'
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
            url: '/list'
           }).then((response) => {
        console.log('list was reset');
    }).catch((error) => {
        console.log('there was an error resetting list', error);
    })
        }

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
