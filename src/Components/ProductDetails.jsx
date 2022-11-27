import React from "react";
import { Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faRefresh} from '@fortawesome/free-solid-svg-icons'
import "../Styles/Products.css";


function ProductDetails({productData, deleteProduct}) {
  return (
    <>
      {productData.map((item) => {
        const { _id, Name, Price, Image, Date, Description } = item;
        return (
          <div className='singleProduct__mapping' key={_id}>
            <Link to={`/products/${_id}`}>
              <img src={Image} alt={Name} className='product__image' />
              <abbr className='product_name' title={Name}>
                <h2>
                  {Name.substring(0, 10)}
                  {Name.length > 5 ? "..." : null}
                </h2>
              </abbr>
              <p className="ProductPrice">R$: {Price}</p>

              <p className='product_description'>
                {Description && (
                  <abbr title={Description}>
                    <>
                      {Description.substring(0, 15)}
                      {Description.length > 15 ? "..." : null}
                    </>
                  </abbr>
                )}
              </p>
            </Link>
            <p>{Date.substring(0, 4)}</p>
            <span className='icons__section'>
              <FontAwesomeIcon
                icon={faTrash}
                className='delete__button'
                onClick={() => deleteProduct(_id)}
              />
              <Link to={`edit/${_id}`}>
                <FontAwesomeIcon
                  icon={faRefresh}
                  className='update__button'
                />
              </Link>
            </span>
            <br />
          </div>
        );
      })}
    </>
  );
}

export default ProductDetails;
