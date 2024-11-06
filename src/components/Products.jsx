import React from 'react'
import { ANIMATIONS, PRODUCTS } from '../lib/constants'
import { motion } from 'framer-motion'
import Card from './card'

const Products = () => {
  return (
    <div id="products" className="my-10 md:px-32 px-4">
        <motion.center {...ANIMATIONS.up} className="animate__animated animate__fadeInDown mb-10 text-5xl ">
          Our Products
        </motion.center>
        <motion.aside {...ANIMATIONS.up} className="w-full flex flex-col md:flex-row gap-4 md:flex-wrap justify-center">
            {
              PRODUCTS.map((product, index) => (
                <Card key={index} name={product.name} description={product.description} img={product.img} colors={product.colors} link={product.link} />
              ))
            }
        </motion.aside>
      </div>
  )
}

export default Products