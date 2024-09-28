export default function MyMsg({ message }) {
  return (
    <div className="bg-sky-500 mb-4 h-auto w-1/2 px-4 py-2 rounded-xl relative self-end">
      <h1 className="">{message}</h1>
      <h1 className="text-xs bottom-2 right-2 absolute text-white/50">20:08</h1>
    </div>
  );
}
