import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import Book from './components/Book/Book';
import UploadImg from './components/UploadImg/UploadImg';
import Gallery from './components/Gallery/Gallery';
import Cart from './components/Cart/Cart';
import ItemDetails from './components/Gallery/ItemDetails';
import {BrowserRouter,Route} from 'react-router-dom';
import NavLinks from './components/NavLinks/Navlinks';


function App() {
  return (
    <BrowserRouter>
        <NavLinks/>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/book/:id" component={Book}/>
        <Route path="/uploadImg" component={UploadImg}/>
        <Route exact path="/gallery/:category" component={Gallery}/>
        <Route path="/gallery/:category/:id" component={ItemDetails}/>
        <Route path="/cart" component={Cart}/>

    </BrowserRouter>
  );
}

export default App;
