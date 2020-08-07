import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import './data';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
  <div>
    <div className="grid-container"/>
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <Link to="/">Plantsheets</Link>
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
            <br></br>
            <a href="signin.html">Sign In</a>
        </div>
    </header>
    <aside className="sidebar">
        <h3>Plant Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}> x </button>
        <ul>
            <li>
                <a href="index.html">Tropicals</a>
            </li>
            <li>
                <a href="index.html">Succulents</a>
            </li>
            <li>
                <a href="index.html">Deciduous</a>
            </li>
            <li>
                <a href="index.html">Conifers</a>
            </li>
            
        </ul>
    </aside>
    <main className= "main"/>
        <div className="content"/>
        <Route path="/product/:id" component={ProductScreen}/>
        <Route path="/" exact={true} component={HomeScreen}/>
    <div/>
    <main/>
    <footer className = "footer">
        MIT license, open source project!
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
