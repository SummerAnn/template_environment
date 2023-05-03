import React from 'react';
import './App.css';
import treeIcon from './assets/tree.svg';
import plantIcon from './assets/plant.svg';
import forestVideo from './assets/forest.mp4';

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <h1>Green Oasis</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <video autoPlay muted loop className="video-background">
        <source src={forestVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h2>Welcome to Green Oasis</h2>
        <p>We are dedicated to bringing the beauty of nature into your home and workplace.</p>
        <div className="icon-section">
          <div className="icon">
            <img src={treeIcon} alt="tree" />
            <h3>Trees</h3>
            <p>We offer a variety of tree species to fit your needs.</p>
          </div>
          <div className="icon">
            <img src={plantIcon} alt="plant" />
            <h3>Plants</h3>
            <p>Our selection of plants will add life to any space.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
