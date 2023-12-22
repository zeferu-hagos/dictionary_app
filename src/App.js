// src/App.js
import React from 'react';
import './App.css';

function App() {
  const leftSideMenuItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "About Us", link: "/about" },
    { id: 3, label: "Services", link: "/services" },
    { id: 4, label: "Contact", link: "/contact" },
    { id: 5, label: "Blog", link: "/blog" }
  ];

  return (
    <div className="app-container">
      <div className="left-side">
        <h2>Menu</h2>
        <ul>
          {leftSideMenuItems.map(item => (
            <li key={item.id}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="middle">Middle</div>
      <div className="right-side">Right Side</div>
    </div>
  );
}

export default App;
