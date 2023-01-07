import { HiPause, HiPlay } from "react-icons/hi";
import { BsPlayFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const Backsound = () => {
  const audioEl = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  function playSong() {
    setIsPlaying(true);

    audioEl.current.play();
  }
  function stopSong() {
    setIsPlaying(false);
    audioEl.current.pause();
  }

  const [showAudio, setShowAudio] = useState(false);
  const [latestScrollY, setLatestScrollY] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const audioControl = () => {
    const scrollY = window.scrollY;
    if (typeof window !== "undefined") {
      if (scrollY > latestScrollY) {
        setShowAudio(false);
      } else {
        setShowAudio(true);
      }
    }
    setLatestScrollY(scrollY);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", audioControl);

      return () => {
        window.removeEventListener("scroll", audioControl);
      };
    }
  }, [audioControl]);
  return (
    <>
      <div
        className={` ${
          !showAudio
            ? "fixed  -top-20 z-50 right-0 transition-all duration-300 ease-linear"
            : "fixed top-5 right-5 z-50 transition-all duration-300 ease-linear"
        }  duration-300 ease-linear`}
      >
        <button
          onClick={isPlaying ? stopSong : playSong}
          className=" border-none outline-none bg-gradient-to-br shadow-lg from-black/90 via-transparent to-black/80  cursor-pointer text-white  p-1 lg:p-2 rounded-full"
        >
          {!isPlaying ? (
            <HiPlay className="bg-green-900/50  text-4xl lg:text-4xl hover:scale-95 shadow-md shadow-black/50 rounded-full" />
          ) : (
            <>
              <HiPause className="bg-green-900/50  text-4xl lg:text-4xl animate-spin hover:animate-none origin-center hover:scale-95 shadow-md shadow-black/50 rounded-full" />
              <div className="overflow-hidden bg-black/20 top-0 transition-all duration-300 ease-linear left-0  fixed w-full   -z-50 backdrop-blur-md">
                <div className="animates  gap-2 p-[0.2em]  overflow-x-hidden w-full flex flex-nowrap items-center justify-center text-right">
                  <BsPlayFill className=" border rounded-full" />
                  <p className="text-white tracking-widest flexflex-nowrap text-xs">
                    Songs - Glimpse Of Us.mp3
                  </p>
                </div>
              </div>
            </>
          )}
          <audio ref={audioEl} src="/audio/audio.mp3" autoPlay loop />
        </button>
      </div>
    </>
  );
};

export default Backsound;
