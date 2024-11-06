import React from "react";
import { AuroraBackground } from "../ui/aurora-bg";
import { motion } from "framer-motion";
import { PRODUCTS, ANIMATIONS } from "../lib/constants";
import Card from "./card";
// import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <div className="home">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0,
              duration: 0,
              ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4"
          >
            <main className="flex h-screen items-center justify-center flex-col gap-5">
              <h1 className="text-6xl text-center">
                Zaibson Polymer Industries
              </h1>
              <p className="text-2xl italic font-light">"Quality for Life"</p>
              <p className="text-3xl bold">Our Sub-Brand</p>
                <img src="./kingston.png" alt="Kingston" className="h-[300px] w-[550px] pl-9" />
            </main>
          </motion.div>
        </AuroraBackground>
      </div>
      <div className="md:px-32 px-4 bg-[#000] py-40 text-[white]">
        <motion.center
          {...ANIMATIONS.up}
          className="animate__animated animate__fadeInDown mb-10 text-5xl "
        >
          Introduction
        </motion.center>
        <motion.p
          {...ANIMATIONS.up}
          className="text-center mb-10 px-10 md:text-[22px]"
        >
          Zaibson Polimer Industries, established on September 15, 2021, is a
          Private Limited Company with nearly 3 years of operation. The
          company's registered office is situated at 117/3A118/1A1a, Zaibson
          Polimer Industries, Pernambut, Bakkalapalli, C.D.Cheruvu, Vellore,
          Tamil Nadu. Specializing in the manufacturing sector, Zaibson Polimer
          Industries focuses on fabricated metal products, excluding machinery
          and equipment, and is primarily engaged in producing a variety of
          other fabricated metal items. Classified as a micro-enterprise for the
          financial year 2023-24, the company also operates a unit in Salem,
          Tamil Nadu.
        </motion.p>

        <motion.center
          {...ANIMATIONS.up}
          className="animate__animated animate__fadeInDown mb-10 text-5xl py-7"
        >
          What we do
        </motion.center>
        <aside className=" md:flex-row md:gap-20">
          <article className="md:w-[90%]">
            <motion.p {...ANIMATIONS.up} className="text-3xl list-disc my-7">
              Essential Infrastructure Solutions
            </motion.p>
            <motion.p {...ANIMATIONS.up} className="text-justify">
              At Zaibson Polymer Industries, we specialize in manufacturing
              essential infrastructure products. From durable manhole covers to
              reliable footsteps, and versatile pans (tagari) and buckets, our
              solutions are crafted to meet the demands of various industries.
              With a commitment to quality and innovation, we ensure reliable
              performance and safety in every product we deliver.
            </motion.p>
          </article>
          <article className="md:w-[90%]">
            <motion.p {...ANIMATIONS.up} className="text-3xl list-disc my-7">
              Our Expertise
            </motion.p>
            <motion.p {...ANIMATIONS.up} className=" text-justify">
              At Zaibson and Polymer Industries, we excel in producing top-tier
              polymer products, including durable manhole covers, sturdy steps,
              versatile pans (tagari), and reliable buckets. Our commitment to
              quality and innovation ensures that every product meets the
              highest industry standards, delivering exceptional performance and
              longevity. Experience the best in polymer manufacturing with
              Zaibson.
            </motion.p>
          </article>
        </aside>
      </div>
      <div id="products" className="my-10 md:px-32 px-4">
        <motion.center
          {...ANIMATIONS.up}
          className="animate__animated animate__fadeInDown mb-10 text-5xl "
        >
          Our Products
        </motion.center>
        <motion.aside
          {...ANIMATIONS.up}
          className="w-full flex flex-col md:flex-row gap-4 md:flex-wrap justify-center"
        >
          {PRODUCTS.map((product, index) => (
            <Card
              key={index}
              name={product.name}
              description={product.description}
              img={product.img}
              colors={product.colors}
              link={product.link}
            />
          ))}
        </motion.aside>
      </div>
      <div
        id="about"
        className="home_3 animate__animated animate__fadeInDown bg-black text-white text-center py-10 md:py-16"
      >
        <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <article className="text-lg md:text-xl max-w-lg">
            <motion.p {...ANIMATIONS.up} className="list-disc flex pl-6 ">
              <div className="flex flex-col justify-between gap-[20px] md:pl-[20px] pl-3">
                <p className="mt-6 md:text-[25px] font-semibold">FOUNDER</p>
                <p className="mt-5 md:text-[20px]">PK MOHAMMED ADIL</p>
              </div>
              <div className="flex flex-col justify-between gap-[20px] pl-[30px]">
                <p className="mt-6 md:text-[25px] font-semibold">CO-FOUNDER</p>
                <p className="mt-5 md:text-[20px]">PK MOHAMMED SAAD</p>
              </div>
            </motion.p>
            <p className="mt-10 text-[20px] mx-10">
              Email:{" "}
              <a
                href="mailto:zaibsonpolimerindustries@gmail.com"
                className="hover:text-blue-500"
              >
                zaibsonpolimerindustries@gmail.com
              </a>
            </p>
          </article>
          <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.035538013968!2d78.7190204!3d12.93925565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad74cf54486569%3A0x7ea8cac31ac7c380!2sPernambut%2C%20Tamil%20Nadu%20635810!5e0!3m2!1sen!2sin!4v1722104134720!5m2!1sen!2sin"
              width="300"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="md:w-72 md:h-60"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
