/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { motion } from "framer-motion";

const Introduce = () => {
  return (
    <>
      <section className="p-0 m-0 w-full h-full py-10 lg:py-40 ">
        <div className="text-center leading-relaxed pb-20">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl lg:text-4xl mb-4 island text-transparent bg-clip-text bg-gradient-to-tr from-[#7c3212] to-[#fcda1b] "
          >
            Assalamu'alaikum Wr. Wb.
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-md px-1 lg:text-xl italic text-gray-800/50 font-semibold"
          >
            Dengan menyebut nama Allah SWT yang Maha Pengasih dan Maha
            Penyayang, kami dengan senang hati ingin mengundang
            Bapak/Ibu/Saudara/Saudari dan berbagi kegembiraan pada pernikahan
            kami
          </motion.p>
        </div>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 overflow-hidden">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-1 lg:col-span-5 "
          >
            <div className="flex flex-col items-center justify-center">
              <div className="w-3/6 flex items-center justify-center">
                <Image
                  src="/mans.png"
                  alt="asep"
                  width={1200}
                  height={1200}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  layout="responsive"
                  priority
                  className="rounded-full shadow-lg shadow-gray-400"
                />
              </div>
              <div className="text-center ">
                <h2 className="my-6 text-xl island text-[#854d36] font-semibold  lg:text-2xl">
                  Drs.Asep Drajat Triyadi
                </h2>
                <p className="text-md lg:text-xl  text-[#6b6b6b]">
                  Putra Pertama dari Bapak H.Djafar & Ibu Hj.Aminah
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1.2 }}
            transition={{ duration: 0.8 }}
            className="col-span-1 lg:col-span-2 flex justify-center my-6 lg:my-20"
          >
            <span className="title p-2 text-center text-5xl font-semibold  text-transparent bg-clip-text opacity-80 bg-gradient-to-br from-[#7c3212] to-[#fcda1b] lg:text-6xl">
              &
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-1 lg:col-span-5 "
          >
            <div className="flex flex-col items-center justify-center">
              <div className="w-3/6 flex items-center justify-center">
                <Image
                  src="/womans.jpg"
                  alt="nia"
                  width={1200}
                  height={1200}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  priority
                  className="rounded-full shadow-lg shadow-gray-400"
                />
              </div>
              <div className="text-center ">
                <h2 className="my-6 text-xl island text-[#854d36] font-semibold  lg:text-2xl">
                  Tania Widjaya, MH.
                </h2>
                <p className="text-md lg:text-xl  text-[#6b6b6b]">
                  Putra Kedua dari Bapak Ibnu Djamil Widjaya & Ibu Siska Prawita
                  Widjaya
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Introduce;
