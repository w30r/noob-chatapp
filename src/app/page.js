"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UserNameInput from "./components/UserNameInput";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPw] = useState("");

  const handleStartChatting = () => {
    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }

    // call login api
    axios
      .post("http://127.0.0.1:8090/api/auth/login", {
        username: username,
        password: password,
      })
      .then(() => {
        // set cookie
        redirect("/chat");
      })
      .catch((err) => {
        console.error(err);
      });
    setUsername("");
    window.location.href = `/chat`;  };

  return (
    <AnimatePresence>
      <motion.div
        key="home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="h-screen w-screen  flex flex-col justify-center items-center"
      >
        <motion.h1 variants={childVariants} className="text-4xl select-none">
          SCHET APP
        </motion.h1>
        <motion.div variants={childVariants}>
          <form
            className="flex flex-col gap-4 mt-4"
            onSubmit={handleStartChatting}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleStartChatting();
              }
            }}
          >
            <input
              className="rounded-xl text-black px-4 py-2"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="rounded-xl text-purple-700 px-4 py-2"
              placeholder="password"
              value={password}
              type="password"
              onChange={(e) => setPw(e.target.value)}
            />
          </form>
          {/* <UserNameInput setUsername={setUsername} />
          <motion.div>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                placeholder="Password"
                className="block w-full rounded-md border-0 px-4 py-2 outline-none text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-purple-600 duration-200 transition-all sm:text-sm sm:leading-6"
                onChange={(e) => setPw(e.target.value)}
              />
            </div>
          </motion.div> */}
        </motion.div>
        <motion.button
          variants={childVariants}
          className="select-none rounded-lg hover:bg-purple-500/80 duration-150 bg-purple-500 mt-4  px-4 py-2 text-white"
          onClick={handleStartChatting}
        >
          Start chatting
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
