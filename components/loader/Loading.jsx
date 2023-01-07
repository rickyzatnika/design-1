import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 800);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <div className="relative w-full h-screen z-[9999999] transition-all items-center justify-center duration-200 ease-linear grid grid-cols-12 bottom-0 left-0 bg-[url('/bg1.png')] bg-cover bg-center">
        <motion.h1
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl w-full h-screen flex items-center justify-center absolute left-0 top-0 right-0 text-center text-white"
        >
          Terima Kasih Atas Perhatiannya
        </motion.h1>
        <motion.div
          initial={{ width: "100%" }}
          whileInView={{ width: "0" }}
          transition={{ duration: 1 }}
          className="col-span-6 bg-green-800/90 w-full h-full absolute left-0 top-0 "
        ></motion.div>
        <motion.div
          initial={{ width: "100%" }}
          whileInView={{ width: "0" }}
          transition={{ duration: 1 }}
          className="col-span-6 bg-green-800/90 w-full h-full absolute top-0 right-0"
        ></motion.div>
      </div>
    )
  );
}

export default Loading;
