import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, productsSelector } from './slices/productSlice';
import { fetchIngredients, ingredientsSelector, selectFilteredIngredients } from './slices/ingredientSlice';

import ProductSearchItem from './ProductSearchItem';
import './productSearch.css';

const ProductSearch = () => {
  const [ ingredientFilter, setIngredientFilter ] = useState('');
  const { products, productsLoading, productsHaveErrors } = useSelector(productsSelector);
  const { ingredients, ingredientsLoading, ingredientsHaveErrors } = useSelector(ingredientsSelector);
  const dispatch = useDispatch();
  
  /* selectors for sorting through api data */
  const sortedIngredients = useSelector( state => selectFilteredIngredients(state, ingredientFilter) );

  /* fetchData for products + ingredients */
  useEffect(() => {
    dispatch( fetchProducts() )
    dispatch( fetchIngredients() )
  }, [dispatch]);

  return (
    <>
      <input className="content__search"
              type="text"
              placeholder="search for something, will ya?"
              value={ ingredientFilter }
              onChange={ event => setIngredientFilter(event.target.value) }/>
        <div className="content">
        <ul className="content__left">
          { ingredientsHaveErrors && <div>Sorry, we encountered a problem fetching ingredient data. Please try again later.</div> }

          { !ingredientsLoading &&
            sortedIngredients.map(( ingredient ) => (
              <li key={`${ingredient.name}-${ingredient.id}`} className='content__left--item'>
                <h2>{ingredient.name}</h2>
              </li>
            ))
          }
        </ul>
        <ul className="content__right">
          { productsHaveErrors && <div>Sorry, we encountered a problem fetching product data. Please try again later.</div> }

          { !productsLoading &&
            products.map((product) => <ProductSearchItem product={product}/>)
          }

        </ul>
      </div>
  </>
  )
}

export default ProductSearch;