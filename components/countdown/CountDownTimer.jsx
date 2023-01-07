import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CountDownTimer({ ...props }) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("November 5 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  // componentDidmount
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="my-6 text-[#555] tracking-widest"
        >
          Sunday, November 5 2023
        </motion.div>
        <div className="w-full flex gap-4 items-center justify-center ">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=" flex gap-3 flex-col items-center "
          >
            <div className="p-3 shadow-md shadow-[#b3b3b3] rounded">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl rounded-bl-md rounded-br-md text-green-900/50 font-bold bottom flex items-end">
                {timerDays}
              </div>
            </div>{" "}
            <small className="text-[#555]">Day</small>{" "}
          </motion.div>
          <span className="text-2xl text-[#666]">:</span>
          <motion.div
            initial={{ x: 70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=" flex gap-3 flex-col items-center "
          >
            <div className="p-3  shadow-md shadow-[#b3b3b3] rounded">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl rounded-bl-md rounded-br-md text-green-900/50 font-bold bottom flex items-end">
                {timerHours}
              </div>
            </div>{" "}
            <p>
              {" "}
              <small className="text-[#555]">Hours</small>{" "}
            </p>
          </motion.div>

          <span className="text-2xl text-[#666]">:</span>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=" flex  gap-3 flex-col items-center"
          >
            <div className="p-3 shadow-md shadow-[#b3b3b3] rounded">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl rounded-bl-md rounded-br-md text-green-900/50 font-bold bottom flex items-end">
                {timerMinutes}
              </div>
            </div>{" "}
            <small className="text-[#555]">Minutes</small>{" "}
          </motion.div>
          <span className="text-2xl text-[#666]">:</span>
          <motion.div
            initial={{ x: -70, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className=" flex  gap-3 flex-col items-center"
          >
            <div className="p-3 shadow-md shadow-[#b3b3b3] rounded">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl rounded-bl-md rounded-br-md text-green-900/50 font-bold bottom flex items-end">
                {timerSeconds}
              </div>
            </div>{" "}
            <p>
              {" "}
              <small className="text-[#555]">Seconds</small>{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}
