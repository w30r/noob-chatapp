export default function UserNameInput({ setUsername }) {
  return (
    <div>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          placeholder="Username"
          className="block w-full rounded-md border-0 px-4 py-2 outline-none text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2  focus:ring-purple-600 duration-200 transition-all sm:text-sm sm:leading-6"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </div>
  );
}
