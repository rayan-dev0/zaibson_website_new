import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../lib/constants";
import Carousel from "./Carousel";

const ProductDetail = () => {
  const [product, setProduct] = useState({});

  const params = useParams();
  const { productId } = params;

  useEffect(() => {
    if (productId) {
      const selectedProduct = PRODUCTS.find(
        (product) => productId === product.link
      );
      setProduct(selectedProduct);
    }
  }, [productId]);

  return (
    <main className="mt-32 bg-white">
      <header>
        <h3 className="font-medium text-center text-2xl">{product.name}</h3>
      </header>
      <div className="w-full md:w-[50rem] mt-[100px] mx-auto">
        <Carousel imgs={product.imgs} />
      </div>

      <section className="px-4 md:px-16 max-w-[900px] mx-auto mt-14">
        {product.colors && (
          <div className="flex gap-3 items-center px-4">
            {product.colors?.map((color, index) => (
              <div
                key={index}
                style={{ backgroundColor: color }}
                className="h-[30px] w-[30px] rounded-full border-[3px] border-[white] shadow-lg"
              />
            ))}
            {product.colors && <p>Any color</p>}
          </div>
        )}
        {product.sizes && (
          <article className="my-8">
            <h4 className="font-semibold text-lg">Sizes:</h4>
            <ul className="list-inside mt-2 text-gray-700 flex gap-5 flex-wrap items-center w-[250px]">
              {product.sizes.map((size, index) => (
                <li key={index}>{size}</li>
              ))}
            </ul>
          </article>
        )}
        <article className="my-8">
          <h4 className="font-semibold text-lg">Description:</h4>
          <p className="text-gray-700 mt-2">{product.description}</p>
        </article>
        {product.details && (
          <>
            <article className="my-8">
              <h4 className="font-semibold text-lg">Key Features:</h4>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {product.details.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </article>
            <article className="my-8">
              <h4 className="font-semibold text-lg">Benefits:</h4>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                {product.details.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </article>
          </>
        )}
      </section>
    </main>
  );
};

export default ProductDetail;
