import React from "react";
import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductShowSingleInfo from "../Components/ProductShowSingleInfo";
const REACT_APP_BACKENDAPI = process.env.REACT_APP_BACKENDAPI;

function SpecificProducts() {
  const [isFetched, setIsFetched] = useState(false);
  const productData = useRef();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(REACT_APP_BACKENDAPI + `/products/${id}`);
      const responseData = await data.json();
      productData.current = responseData;
      setIsFetched(true);
    };
    fetchData();
  }, []);

  return (
    <>

      {isFetched && <ProductShowSingleInfo productData={productData} />}
    </>
  );
}
export default SpecificProducts;
