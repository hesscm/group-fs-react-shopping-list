import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import ListForm from '../ListForm/ListForm.jsx';
import Header from '../Header/Header.jsx'
import ShoppingList from '../ShoppingList/ShoppingList.jsx'
import './App.css';
import ResetList from '../ResetList/ResetList';



function App() {
    // Destructuring
    const [itemList, setItemList] = useState([]);

    //vars to be used in ListForm
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState(0);
    const [newItemUnit, setNewItemUnit] = useState('');

    {/* // AXIOS GET HERE */ }
    const fetchItems = () => {
        axios({
            method: 'GET',
            url: '/list',
        }).then((response) => {
            console.log(response.data);
            setItemList(response.data);
        }).catch((error) => {
            console.log(error);
            alert('Error making GET request.');
        })
    }

    useEffect(() => {
        fetchItems();
    }, []);



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



    {/* // AXIOS DELETE HERE */ }
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


    {/* // AXIOS PUT HERE */ }
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

    {/* // AXIOS PUT/item HERE */ }




    {/* // AXIOS DELETE/item HERE */ }
    
    
    const removeItem = (itemId) => {
        axios({
            method: 'DELETE',
            url: `/list/item/${itemId}`
        }).then(response => {
            console.log('cleared list item', response);
        }).catch(error => {
            console.log('error clearing list item', error);
        })
    }


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
                <ShoppingList itemList={itemList}/>
                <ResetList clearList={clearList}
                    resetList={resetList} />
            </main>
        </div>
    );
}

export default App;
