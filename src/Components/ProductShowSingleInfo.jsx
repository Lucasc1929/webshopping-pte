import React from "react";
import "../Styles/SingleProductInfo.css";

function ProductShowSingleInfo(productData) {
  return (
    <>
      
      {productData.productData.current === undefined ? null : (
        <div
          className='productSingleInfo'
          key={productData.productData.current._id}>
          <img
            src={productData.productData.current.Image}
            alt={productData.productData.current.Name}
            className='productSingleImage'
          />
          <h2 className='product__Name'>
            {productData.productData.current.Name}
          </h2>
          <h3 className='product__Price'>
            {productData.productData.current.Price}
          </h3>
          <p className='product__Description'>
            {productData.productData.current.Description}
          </p>
          <button className="buy__product">Comprar</button>
        </div>
      )}
    </>
  );
}

export default ProductShowSingleInfo;
