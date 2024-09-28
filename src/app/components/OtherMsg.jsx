export default function OtherMsg({ msg }) {
  return (
    <div className="bg-gray-500 shadow-sm mb-4 h-auto w-1/2 px-4 py-2 rounded-xl relative">
      <h1 className="">{msg}?</h1>
      <h1 className="text-xs bottom-2 right-2 absolute text-white/50">20:08</h1>
    </div>
  );
}
