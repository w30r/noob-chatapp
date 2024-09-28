import { motion } from "framer-motion";

export default function ChatPreviews({ chats }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, staggerChildren: 0.2 }}
      className=""
    >
      {chats.map((x) => (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-white/10 shadow-purple-600 hover:bg-black/30 duration-150 shadow-sm p-4 max-h-24 rounded-md mb-4 flex items-center justify-start"
          key={x.id}
        >
          <div className="bg-gray-500 size-8 mr-4 min-h-8 min-w-8 rounded-full" />
          <div>
            <h1 className="text-xl">{x.name}</h1>
            <h1 className="text-sm text-white/50 font-medium">
              {x.lastMessage}
            </h1>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
