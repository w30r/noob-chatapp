import EllipsisVerticalIcon from "@heroicons/react/24/outline/EllipsisVerticalIcon";

export default function ChatHeader({}) {
  return (
    <div className="bg-black p-9 flex justify-between items-center rounded-2xl">
      <div className="flex justify-between items-center gap-4">
        <div className="size-12 rounded-full bg-gradient-to-tr from-black to-white shadow-md shadow-white/20" />
        <div>
          <h1 className="text-2xl">John</h1>
          <h1 className="text-md">Online</h1>
        </div>
      </div>
      <div>
        <EllipsisVerticalIcon className="size-8 hover:text-purple-500  shadow-xl duration-150 transition-all" />
      </div>
    </div>
  );
}
