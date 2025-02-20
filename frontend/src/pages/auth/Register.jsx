import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleInputChange = e => {
  const {name, value} = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
  
  const handleSubmit = e =>{
    e.preventDefault();
    console.log(formData);
    
  }
  
   
  }
  return (
    <div>
      <form onSubmit={handleInputChange}>
        <h1>Register</h1>
        <label>
          <span>First Name</span>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your First name"
          />
        </label>
        <label>
          <span>Last Name</span>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your Last name"
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </label>

        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
          />
        </label>
        <button>REGISTER</button>
      </form>
    </div>
  );
}

export default Register;
