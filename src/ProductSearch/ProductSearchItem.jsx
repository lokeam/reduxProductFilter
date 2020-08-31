import React from 'react';

const ProductSearchItem = ({product}) => {
  const { id, collection, image: {url}, name } = product;

  return (
    <li className="content__right--item product__item" key={`${id}-${collection}`}>
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