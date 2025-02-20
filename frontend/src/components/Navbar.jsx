function Navbar() {
  return (
    <>
      <div className="flex justify-between px-6 py-3 bg-[#c2c4c3]">
         <a className="text-2xl font-bold" href="/">Alight Coding School</a>
        <div className="flex gap-x-5">
          <a className="font-bold px-6 py-2 border border-blue-800 
               text-blue-800 rounded-sm hover:bg-blue-800 hover:text-white"
          
             href="/login">Login</a>
         
          <a className="font-bold px-6 py-2 border border-blue-800 
             text-white bg-blue-800 hover:bg-white hover:text-blue-800 rounded-sm"
          
             href="/register">Register</a>
          
            
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
