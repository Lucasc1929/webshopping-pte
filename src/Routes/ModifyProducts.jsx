import React from "react";
import { useParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

const REACT_APP_BACKENDAPI = process.env.REACT_APP_BACKENDAPI;

function ModifyProducts() {
  const schema = yup.object().shape({
    name: yup.string().required("Este campo é obrigatório"),
    price: yup.number().required("Este campo é obrigatório"),
    image: yup.string().required("Este campo é obrigatório"),
    description: yup
      .string()
      .min(10, "Mínimo de 10 caractéres")
      .required("Este campo é obrigatório"),
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitProduct = async (data) => {
    const { name, price, image, description } = data;

    let fetchData;
    try {
      fetchData = await fetch(REACT_APP_BACKENDAPI + `/products/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: name,
          Price: price,
          Image: image,
          Description: description,
        }),
      });
    } catch (err) {
    }
    const result = await fetchData.json();
    alert(result);
    navigate("/webshopping-pte");

  };
  return (
    <>
      {/* Configs do produto vem aqui */}
      <div></div>

      <form onSubmit={handleSubmit(submitProduct)} className='ProductForm'>
        <input
          type='text'
          placeholder='Nome do produto'
          {...register("name")}
        />
        <p className='errorMessage'>{errors.name?.message}</p>
        <input
          type='text'
          placeholder='Preço do produto'
          {...register("price")}
        />
        <p className='errorMessage'>{errors.price?.message}</p>
        <input
          type='text'
          placeholder='Imagem do produto'
          {...register("image")}
        />
        <p className='errorMessage'>{errors.image?.message}</p>
        <input
          type='text'
          placeholder='Descrição do produto'
          {...register("description")}
        />
        <p className='errorMessage'>{errors.description?.message}</p>
        <button type='submit' className='submit__Button'>
          Enviar
        </button>
      </form>
    </>
  );
}

export default ModifyProducts;
