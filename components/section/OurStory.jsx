import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";

const OurStory = () => {
  const router = useRouter();
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1525584681959-6689239c35bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1616020594277-bb158f763f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1615993975783-284ad063a643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    },

    {
      id: 5,
      url: "https://images.unsplash.com/photo-1556792271-139040704623?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1556792286-691111cc60e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1616481410066-6d2084d8d8d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1559557660-b4c4b5387626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1559557660-27c745ec21ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    },
  ];

  return (
    <>
      <section>
        <div className="w-full bg-white/20 h-full py-10 lg:py-20">
          <div className="my-2">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="title text-center text-4xl md:text-5xl lg:text-6xl antialiased tracking-widest"
            >
              Prewedding Collections
            </motion.h1>
          </div>
          <div className="w-full h-full " id="gallery">
            <div className="w-full  p-12 pt-12 h-full grid grid-cols-1 grid-rows-none lg:grid-cols-4 lg:grid-rows-4 lg:grid-flow-col gap-4">
              {images.map((image, i) => (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1.05 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  key={i}
                  className="w-full row-span-none lg:row-span-2 overflow-hidden"
                >
                  <LightGallery mode="lg-fade" key={image.id}>
                    <a
                      className="gallery-item cursor-pointer overflow-hidden"
                      data-src={image.url}
                      data-sub-html="<h4>Jasa Web Murah - kunjungi <a href='https://ryza.inkara.id'>ryza.inkara.id</a></p>"
                    >
                      <Image
                        src={image.url}
                        alt=""
                        width={700}
                        height={400}
                        style={{ width: "auto", height: "auto" }}
                        className="hover:scale-105 brightness-100 lg:brightness-50 hover:brightness-100 transition-all duration-300 ease-linear"
                      />
                    </a>
                  </LightGallery>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;
