import React from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import ResetList from '../ResetList/ResetList';


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
           )}.then(response => {
               console.log('list was reset');
           }).catch(error => {
               console.log('there was an error resetting list', error);
           })

        // update status to purchased

    {/* // AXIOS DELETE HERE */ }




    {/* // AXIOS DELETE/item HERE */ }


    
    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <ResetList clearList={clearList} />
            </main>
        </div>
    );
}

export default App;
