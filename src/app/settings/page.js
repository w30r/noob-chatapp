export default function Settings() {
  return (
    <div
      className="flex items-center justify-center sm:p-80 h-screen w-screen bg-fill "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div
        id="box"
        className="bg-black/20 outline outline-1 outline-white/50 shadow-xl backdrop-blur-lg p-9 w-1/2 rounded-2xl"
      >
        <h1 className="text-3xl">Settings</h1>
      </div>
    </div>
  );
}
