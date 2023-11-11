import React from "react";
import './style.css';


const Navigation = () => {
    return (
      <div className="navbar">
        <nav className="nav">
    
          <ul className="ul">
          <li>
              <a href="/product">Product</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          
           
          
          </ul>
        </nav>
      </div>
    );
  };

  export default Navigation;