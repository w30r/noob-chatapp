import MyMsg from "./MyMsg";
import OtherMsg from "./OtherMsg";
import { useRef, useEffect } from "react";

export default function BubbleContainer({}) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div
      className="bg-red-500/0 rounded-xl my-4 p-8 h-full flex flex-col overflow-y-auto scroll-smooth"
    >
      <OtherMsg msg={"Hello whats up brotgher"} />
      <MyMsg
        message={
          "Im good, just gto back from the gym.Im good, just gto back from the gym.Im good, just gto back from the gym.Im good, just gto back from the gym.Im good, just gto back from the gym."
        }
      />
      <MyMsg
        message={
          "Im good, just gto back from the gym.Im good, just gto back from the gym.Im good, just gto back from the gym.Im good, just gto back from the gym.Im good, just gto back from the gym."
        }
      />
      <MyMsg
        message={
          "Im good, just gto back from the gym.Im good, just gto back from the gym.Im good, just gto back from the gym.Im good, just gto back from the gym.Im good, just gto back from the gym."
        }
      />
      <OtherMsg msg={"gto back from the gym.Im good, just gto ba"} />
      <OtherMsg msg={"gto back from the gym.Im good, just gto ba"} />
      <OtherMsg msg={"gto back from the gym.Im good, just gto ba"} />
      <OtherMsg msg={"gto back from the gym.Im good, just gto ba"} />
      <div ref={bottomRef} />
    </div>
  );
}


