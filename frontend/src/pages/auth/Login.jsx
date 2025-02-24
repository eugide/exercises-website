import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
    };

  return (
    <div className="my-10">
      <form onSubmit={handleInputChange} className="w-1/2
          bg-gray-300 mx-auto rounded-sm p-4 shadow-sm flex flex-col gap-y-3">
        <h1 className="text-xl font-semibold">Login</h1>


        <label className="flex flex-col">
          <span>Email</span>
          <input className="border border-blue-800 rounded-md px-3 py-1.5 outline-none"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </label>

        <label className="flex flex-col">
          <span>Password</span>
          <input className="border border-blue-800 rounded-md px-3 py-1.5 outline-none"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </label>
        <button className="font-bold px-6 py-2 border border-blue-800 
        text-white bg-blue-800 hover:bg-white hover:text-blue-800 rounded-sm">LOGIN</button>
      </form>
    </div>
  );
}
};

export default Login;