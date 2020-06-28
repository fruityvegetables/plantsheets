import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import data from './data';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';


function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <BrowserRouter>
  <div>
    <div className="grid-container"/>
    <header className="header">
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>
            <a href="index.html">PlantSheets</a>
        </div>
        <div className="header-links">
            <a href="cart.html">Cart</a>
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
        <Route path="products/:id" component={ProductScreen}/>
        <Route path="/" exact={true} component={HomeScreen}/>
        <ul className="products"/>
        {
          data.products.map(product => 
        
            <div className="product">
                <img className="product-image" src={product.image} alt="testProduct"/>
                <div className="product-name">
                    <a href="product.html">{product.name}</a>
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">{product.rating} Stars ({product.numReviews} Ratings)</div>
            </div>
        )
        }

        <ul/>
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
