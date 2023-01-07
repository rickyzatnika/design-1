import CountDownTimer from "../countdown/CountDownTimer";
import Button from "../button/Button";
import Link from "next/link";
import Image from "next/image";
import AnimatedLetters from "../animate/AnimatedLetters";
import { Animations } from "../../variants/animations";
import { motion } from "framer-motion";
import { useState } from "react";

const Intro = () => {
  const [showContent, setShowContent] = useState(false);
  const [showImage, setShowImage] = useState(true);
  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        className="bg-[url('/bg/background.jpg')] bg-cover w-full h-full lg:h-screen top-0 left-0 leading-relaxed"
      >
        <div className="w-full h-screen flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-white/10 p-2 backdrop-blur-md lg:backdrop-blur-sm w-full h-full">
            <div className="inline-flex flex-col items-center gap-2 ">
              <AnimatedLetters title="The Wedding Of" />
              {showImage && (
                <motion.div
                  variants={Animations.picture}
                  onAnimationComplete={() => setShowContent(true)}
                >
                  <Image
                    src="/bg1.png"
                    alt=""
                    width={280}
                    height={280}
                    layout="responsive"
                    priority
                    className="bg-transparent"
                    style={{ width: "auto", height: "auto" }}
                  />
                </motion.div>
              )}
              <h2 className="text-5xl md:text-5xl lg:text-6xl my-0 lg:my-4 antialiased text-green-900/80 tracking-widest title">
                Asep & Nia
              </h2>
            </div>

            <Link href="/invitation" passHref prefetch={false}>
              <Button>Invitation</Button>
            </Link>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Intro;
