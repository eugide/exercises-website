function Navbar() {
  return (
    <>
      <div className="flex justify-between px-6 py-3 bg-[#c4c2c1]">
        <h1 className="text-2xl font-bold">Alight Coding School</h1>
        <div className="flex gap-x-5">
          <button className="font-bold px-6 py-2 border border-blue-800 
               text-blue-800 rounded-sm hover:bg-blue-800 hover:text-white">Login</button>
          <button className="font-bold px-6 py-2 border border-blue-800 
             text-white bg-blue-800 hover:bg-white hover:text-blue-800 rounded-sm">Register</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
