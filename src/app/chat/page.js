"use client";
import { motion } from "framer-motion";
import BubbleContainer from "../components/BubbleContainer";
import MessageInput from "../components/MessageInput";
import ChatHeader from "../components/ChatHeader";
import SidebarContent from "../components/SidebarContent";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

export default function Page() {
  return (
    // SIDE BAR 🌟🌟
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex"
    >
      <motion.div
        className="bg-black h-screen w-1/4 p-9 text-4xl font-bold hidden md:flex  md:flex-col md:justify-between"
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
      >
        <SidebarContent />
      </motion.div>
      {/*  THE RIGHT SIDE: CONVERSATION 🌟🌟 */}
      <motion.div
        className="bg-black/10 h-screen w-screen md:w-3/4 p-2 flex flex-col"
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
      >
        <ChatHeader />
        <BubbleContainer />
        <MessageInput />
      </motion.div>
    </motion.div>
  );
}
