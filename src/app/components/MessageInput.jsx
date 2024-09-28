export default function MessageInput() {
  return (
    <div className="bg-black rounded-lg p-8">
      <input
        placeholder="Send message"
        type="text"
        className="bg-black/10 outline-none text-white placeholder-white/50 outline-black/30 px-4 py-2 rounded-lg w-full"
      />
    </div>
  );
}
