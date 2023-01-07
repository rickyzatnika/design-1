import { Animations } from "../../variants/animations";
import { motion } from "framer-motion";

function AnimatedLetters({ title }) {
  const splitWords = title.split(" ");

  const words = splitWords.map((word) => {
    return word.split(" ");
  });

  words.map((word) => {
    return word.push("\u00A0");
  });
  return (
    <div className="overflow-hidden py-5 ">
      {words.flat().map((element, index) => {
        return (
          <motion.span
            className="inline-block text-3xl md:text-5xl tracking-wider font-[Fasthand] mt-3 text-green-900/70 mix-blend-multiply transition duration-500"
            variants={Animations.letter}
            key={index}
          >
            {element}
          </motion.span>
        );
      })}
    </div>
  );
}
export default AnimatedLetters;
