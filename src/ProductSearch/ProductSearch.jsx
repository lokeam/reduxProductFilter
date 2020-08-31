import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, productsSelector } from './slices/productSlice';
import { fetchIngredients, ingredientsSelector } from './slices/ingredientSlice';

import ProductSearchItem from './ProductSearchItem';
import './productSearch.css';

const ProductSearch = () => {
  const { products, productsLoading, productsHaveErrors } = useSelector(productsSelector);
  const { ingredients, ingredientsLoading, ingredientsHaveErrors } = useSelector(ingredientsSelector);
  const dispatch = useDispatch();

  /* fetchData for products + ingredients */
  useEffect(() => {
    dispatch( fetchProducts() )
    dispatch( fetchIngredients() )
  }, [dispatch]);

  /* testing */

  // console.log('Product search - areProductsLoading: ', productsLoading);
  // console.log('Product search - products: ', products);
  // console.log('Product search - areIncredientsLoading? ', ingredientsLoading);
  // console.log('Product search - ingredients: ', ingredients);
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