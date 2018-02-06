import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAB2jW_LHqgJzcGzVVQpXWm3ARahcYExf8';

// Create new component. This component sould produce some HTML
const App = () => { 
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this compnent's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
