import React, { useEffect, useRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import ProductDetails from "../Components/ProductDetails";
import LoadingAnimation from "../Animations/Loading";

const REACT_APP_BACKENDAPI = process.env.REACT_APP_BACKENDAPI;

function Products() {
  const [productData, setProductData] = useState([]);
  const navigate = useNavigate();
  const [isFetched, setIsFetched] = useState(false);

  const fetchData = async () => {
    const data = await fetch(REACT_APP_BACKENDAPI + "/products");
    const responseData = await data.json();
    setProductData(responseData);
    setIsFetched(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteProduct = async (_id) => {
    let delProduct;

    try {
      delProduct = await fetch(REACT_APP_BACKENDAPI + `/products/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Produto deletado");
    } catch (err) {
    }
    fetchData();
    navigate("/");
    const result = delProduct.json();
    return;
  };

  return (
    <>
      <h1 className='Webpage__title'>Produtos</h1>
      <div className='products__section'>
        {isFetched ? (
          <ProductDetails
            productData={productData}
            deleteProduct={deleteProduct}
          />
        ) : (
          <LoadingAnimation />
        )}
      </div>
    </>
  );
}

export default Products;
