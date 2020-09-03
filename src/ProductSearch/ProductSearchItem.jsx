import React from 'react';

const ProductSearchItem = ({product, errorImg}) => {
  const { id, collection, name } = product;
  let { image: {url} } = product; 
  let hasError = '';

  if (id === 'error') {
    hasError = 'hasError';
    url = errorImg;
  }

  return (
    <li className={`content__right--item product__item ${hasError}`} key={`${id}-${collection}`}>
      <picture>
        <img className="product__item--img" src={url} alt={`Product: ${collection}, Name: ${name}`}/>
      </picture>
      <div className="product__item--description">
        <div className="product__item--name">{name}</div>
        <div className="product__item--type">{collection}</div>
      </div> 
    </li>
  )
}

export default ProductSearchItem;