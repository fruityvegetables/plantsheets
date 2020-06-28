import React from 'react';
//import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
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
        </ul>
    </aside>
    <main className= "main"/>
        <div className="content"/>
        <ul className="products"/>
            <li/>
                <div className="product">
                    <img className="product-image" src="./images/bonsaiSample1.jpg" alt="testProduct"/>
                    <div className="product-name">
                        <a href="product.html">Plant Name</a>
                    </div>
                    <div className="product-brand">Plant brand</div>
                    <div className="price">$20</div>
                    <div className="product-rating">4.5 stars</div>
                </div>
            <li/>
            <li>
                <div className="product">
                    <img className="product-image" src="./images/bonsaiSample1.jpg" alt="testProduct"/>
                    <div className="product-name">
                        <a href="product.html">Plant Name</a>
                    </div>
                    <div className="product-brand">Plant brand</div>
                    <div className="price">$20</div>
                    <div className="product-rating">4.5 stars</div>
                </div>
            </li>
            <li>
                <div className="product">
                    <img className="product-image" src="./images/bonsaiSample1.jpg" alt="testProduct"/>
                    <div className="product-name">
                        <a href="product.html">Plant Name</a>
                    </div>
                    <div className="product-brand">Plant brand</div>
                    <div className="price">$20</div>
                    <div className="product-rating">4.5 stars</div>
                </div>
            </li>
            <li>
                <div className="product">
                    <img className="product-image" src="./images/bonsaiSample1.jpg" alt="testProduct"/>
                    <div className="product-name">
                        <a href="product.html">Plant Name</a>
                    </div>
                    <div className="product-brand">Plant brand</div>
                    <div className="price">$20</div>
                    <div className="product-rating">4.5 stars</div>
                </div>
            </li>
            <li>
                <div className="product">
                    <img className="product-image" src="./images/bonsaiSample1.jpg" alt="testProduct"/>
                    <div className="product-name">
                        <a href="product.html">Plant Name</a>
                    </div>
                    <div className="product-brand">Plant brand</div>
                    <div className="price">$20</div>
                    <div className="product-rating">4.5 stars</div>
                </div>
            </li>
        <ul/>
    <div/>
    <main/>
    <footer className = "footer">
        MIT license, open source project!
    </footer>
<div/>
</div>
  );
}

export default App;
