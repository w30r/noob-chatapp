"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import UserNameInput from "./components/UserNameInput";

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

  const handleStartChatting = () => {
    setUsername("");
    window.location.href = `/chat`;
  };

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
        <motion.h1 variants={childVariants} className="text-5xl select-none">
          SCHET APP
        </motion.h1>
        <motion.div variants={childVariants}>
          <UserNameInput setUsername={setUsername} />
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
