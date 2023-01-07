/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import { MongoClient } from "mongodb";
import Image from "next/image";
import {
  Slider,
  CommentsForm,
  Introduce,
  SaveTheDate,
  OurStory,
  Backsound,
} from "../components";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import AnimatedLetters from "../components/animate/AnimatedLetters";
import Swal from "sweetalert2";
import axios from "axios";

const Invitation = (props) => {
  async function addHandler(enteredMeetupData) {
    const response = await fetch(
      "https://sample-wedding.vercel.app/api/comments",
      {
        method: "POST",
        body: JSON.stringify(enteredMeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(
      Swal.fire({
        title: "Thanks for comments",
        icon: "success",
      })
    );
    const data = await response;

    return data;
  }

  const [status, setStatus] = useState("");

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/users", {
          status,
        })
        .then(
          Swal.fire({
            title: "Thanks for comments",
            icon: "success",
          })
        );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full h-full py-10 lg:py-20 flex flex-col relative items-center justify-center "
      >
        <Backsound />
        <div className="fixed top-0 -z-50 left-0  bg-[url('/bg-ornamen2.png')] bg-no-repeat bg-cover bg-center w-full h-full"></div>
        <div className="leading-relaxed">
          <Image
            src="/ornament2.png"
            alt=""
            width={200}
            height={100}
            priority
            layout="responsive"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="border-b border-black/60 rounded-3xl ">
          <AnimatedLetters title="Wedding Invitation" />
        </div>
        <Slider />
        <div className="flex flex-col items-center justify-center text-[#8a8787]">
          <p className="">Scroll Down</p>
          <IoIosArrowDown className="animate-bounce mt-3" />
        </div>
      </motion.div>
      <Introduce />
      <SaveTheDate />
      <OurStory />
      <form onSubmit={saveUser}>
        <div className="w-4/6 px-20 space-y-4">
          <div>
            <label className="block mb-2 text-lg font-medium ">Hadir</label>
            <select
              type="select"
              className="bg-gray-100 border-2 border-gray-300  text-md rounded-lg w-3/6 p-4 focus:border-green-800 focus:border-2  focus:outline-none"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Going" className="p-4">
                Hadir
              </option>
              <option value="Not Going" className="p-4">
                Tidak Hadir
              </option>
            </select>
          </div>
          <button
            className="my-6 px-6 py-2 rounded-md text-md lg:text-lg bg-green-600 text-white/80 hover:bg-green-700 hover:text-white transition-all duration-300 ease-linear"
            type="submit"
          >
            Simpan
          </button>
        </div>
      </form>
      <CommentsForm addHandler={addHandler} meetups={props.meetups} />
    </>
  );
};

export default Invitation;

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_API);
  const db = client.db();

  const dpCollection = db.collection("dpproject");

  const meetups = await dpCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        name: meetup.name,
        desc: meetup.desc,
        date: meetup.date,
        time: meetup.time,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
