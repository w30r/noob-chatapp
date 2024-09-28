import ArrowLeftOnRectangleIcon from "@heroicons/react/24/outline/ArrowLeftOnRectangleIcon";
import ChatPreviews from "../components/chatPreviews";

export default function SidebarContent() {
  const data = [
    {
      id: 1,
      name: "John",
      lastMessage: "Hello, how are you?",
      image: "https://placehold.co/50x50",
    },
    {
      id: 2,
      name: "Jane",
      lastMessage: "I'm good, thanks. How about you?",
      image: "https://placehold.co/50x50",
    },
    {
      id: 3,
      name: "Bob",
      lastMessage: "I'm good too, thanks.",
      image: "https://placehold.co/50x50",
    },
    {
      id: 4,
      name: "Alice",
      lastMessage: "I'm good, thanks.",
      image: "https://placehold.co/50x50",
    },
    {
      id: 5,
      name: "Charlie",
      lastMessage: "I'm good too, thanks.",
      image: "https://placehold.co/50x50",
    },
    {
      id: 6,
      name: "David",
      lastMessage: "I'm good, thanks.",
      image: "https://placehold.co/50x50",
    },
  ];
  return (
    <>
      <div>
        <h1 className="mb-8">CHATS</h1>
        <div className="">
          <ChatPreviews chats={data} />
        </div>
      </div>
      <div className="bg-white/0 flex h-auto items-center hover:scale-105 duration-150">
        <ArrowLeftOnRectangleIcon className="size-7" />
        <h1 className="text-xl px-2 py-2">Log out</h1>
      </div>
    </>
  );
}
