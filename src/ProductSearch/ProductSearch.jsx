import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, productsSelector, filteredProductSelector } from './slices/productSlice';
import { fetchIngredients, ingredientsSelector, filteredIngredientSelector } from './slices/ingredientSlice';

import ProductSearchItem from './ProductSearchItem';
import './productSearch.css';

const ProductSearch = () => {
  const [ itemFilter, setItemFilter ] = useState('');
  const [ chosenIngredients, setChosenIngredients ] = useState([]);

  const { productsLoading, productsHaveErrors } = useSelector(productsSelector);
  const { ingredientsLoading, ingredientsHaveErrors } = useSelector(ingredientsSelector);

  const dispatch = useDispatch();
  
  /* selectors for sorting through api data */
  const sortedIngredients = useSelector( state => filteredIngredientSelector(state, itemFilter) );
  const sortedProducts = useSelector( state => filteredProductSelector(state, chosenIngredients) );

  /* fetchData for products + ingredients */
  useEffect(() => {
    dispatch( fetchProducts() )
    dispatch( fetchIngredients() )
  }, [dispatch]);

  /* grab ids used for sorting products, throw them back into state for product filtering */
	useEffect(() => {

    /* prevent sorting ingredients before data is ready */
    if (sortedIngredients !== undefined) {
      const sortedIDs = sortedIngredients.map(item => item.id);
      setChosenIngredients(sortedIDs);
    }

	}, [sortedIngredients]);

  return (
    <>
      <input className="content__search"
              type="text"
              placeholder="Filter products by ingredient"
              value={ itemFilter }
              onChange={ event => setItemFilter(event.target.value) }/>
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
            sortedProducts.map((product) => <ProductSearchItem product={product}/>)
          }

        </ul>
      </div>
  </>
  )
}

export default ProductSearch;