import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Book from './components/Book/Book';
import UploadImg from './components/UploadImg/UploadImg';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/book/:id" component={Book}/>
        <Route path="/uploadImg" component={UploadImg}/>

    </BrowserRouter>
  );
}

export default App;
