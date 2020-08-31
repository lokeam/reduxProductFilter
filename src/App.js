import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="app">
      <input className="content__search"
             type="text"
             placeholder="search for something, will ya?"/>
      <div className="content">
        <ul className="content__left">
          <li className="content__left-item">
            <p>ingredient name</p>
          </li>
          <li className="content__left-item">
            <p>ingredient name</p>
          </li>
        </ul>
        <ul className="content__right">
          <li className="content__right-item">
            <p>product name</p>
          </li>
          <li className="content__right-item">
            <p>product name</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
