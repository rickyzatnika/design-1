import React, { useRef, useState, useEffect } from "react";
import Button from "../button/Button";
import { MdUpdate } from "react-icons/md";
import { motion } from "framer-motion";

const CommentsForm = (props) => {
  const nameInputRef = useRef();
  const descInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredDate = new Date().toDateString();
    const enteredTime = new Date().toLocaleTimeString();

    const meetUpData = {
      name: enteredName,
      desc: enteredDesc,
      date: enteredDate,
      time: enteredTime,
    };
    props.addHandler(meetUpData);

    (nameInputRef.current.value = ""), (descInputRef.current.value = "");
  }

  return (
    <>
      <div className="w-full h-full  p-2 lg:p-8 relative overflow-x-hidden">
        <motion.h3
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 50,
            duration: 0.8,
          }}
          className="text-xl mb-8 font-semibold border-b-2 border-black/10 pb-4 text-gray-700"
        >
          Tinggalkan Komentar ..
        </motion.h3>
        <div className="w-full h-full  grid grid-cols-1 gap-8 lg:grid-cols-12 rounded-lg  py-10 lg:py-40  mb-2">
          <div className="col-span1 lg:col-span-6">
            <form
              onSubmit={submitHandler}
              className="w-full rounded-lg bg-white flex flex-col gap-4 shadow-black/20 shadow-lg p-8 lg:p-12 "
            >
              <div className="w-full flex flex-col  gap-2">
                <label htmlFor="title">Nama</label>
                <input
                  ref={nameInputRef}
                  type="text"
                  minLength={3}
                  required
                  id="title"
                  className="border border-green-900/20 focus:border-green-900/80 focus:outline-none rounded-lg w-full p-2"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="description">Pesan</label>
                <textarea
                  ref={descInputRef}
                  type="text"
                  required
                  id="description"
                  minLength={5}
                  rows="5"
                  cols="50"
                  className="border w-full border-green-900/20 focus:border-green-900/80 focus:outline-none rounded-lg p-2"
                />
              </div>
              <div className="text-center">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>

          <div className="col-span-1 lg:col-span-6 w-full overflow-y-scroll scrollbar-hide">
            <div className="w-full flex flex-col space-y-6 h-96 ">
              {props.meetups.map((meetup) => (
                <div
                  key={meetup.id}
                  className="bg-green-900/10 py-4 px-8 leading-relaxed rounded-lg"
                >
                  <div className="mb-2">
                    <h2 className="text-xl antialiased flex items-center mb-2">
                      {meetup.name}
                    </h2>
                    <div className="flex items-center pb-1 gap-1">
                      <small>
                        <MdUpdate />
                      </small>
                      <small className="antialiased">
                        {meetup.date}, {meetup.time}
                      </small>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed antialiased">
                    {meetup.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsForm;
