import React from 'react';

const ProductSearchItem = () => {

  return (
    <li className="content__right--item product__item" >
      <picture>
        {/* <img className="product__item--img" src={} alt={}/> */}
      </picture>
      <div className="product__item--description">
        <div className="product__item--name">product name</div>
        <div className="product__item--type">product type</div>
      </div> 
    </li>
  )
}

export default ProductSearchItem;