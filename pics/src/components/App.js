import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
    onSearchSubmit(term){
        axios.get(
            'https://api.unsplash.com/search/photos', {
                params: {query: term},
                header: {
                    Authorization: 'Clint-ID 5b49c4eb764d18cc9aa6ffb44d63c8ba9492b20a9fa4e17fbfc66a5b7ba40f2e'
                }
            }
        );
    }

    render(){ 
        return (
            <div>
                <div className="ui container" style={{marginTop:'10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                </div>
                
            </div>
        );
    }
    
}

export default App;