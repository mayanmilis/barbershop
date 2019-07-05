import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Book from './components/Book/Book';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/book/:id" component={Book}/>
    </BrowserRouter>
  );
}

export default App;
