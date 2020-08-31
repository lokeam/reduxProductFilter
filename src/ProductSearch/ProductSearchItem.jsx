import React from 'react';

const ProductSearchItem = ({product}) => {
  //console.log('ProductSearchItem, testing product: ', product);
  const { id, collection, image: {url}, name } = product;

  // console.log('ProductSearchItem, testing id: ', id);
  // console.log('ProductSearchItem, testing collection: ', collection);
  // console.log('ProductSearchItem, testing url: ', url);
  // console.log('ProductSearchItem, testing name: ', name);
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