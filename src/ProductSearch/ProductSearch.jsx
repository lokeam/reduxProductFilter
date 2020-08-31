import React from 'react';
import ProductSearchItem from './ProductSearchItem';
import { useDispatch, useSelector } from 'react-redux';
import './productSearch.css';

const ProductSearch = () => {
  
  return (
    <>
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
          <ProductSearchItem />
          <ProductSearchItem />
        </ul>
      </div>
  </>
  )
}

export default ProductSearch;