import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup =()=>{

  const [fv, setFv] = useState({ fName: "", lName: "", UserID: "", Mobile: "", Email: "", LicenseNumber: "", Specialization: "", Password: "" });
  const handleInput = (e) => {
    setFv({ ...fv, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fv);
    const formData = {
      fName: fv.fName,
      lName: fv.lName,
      UserID: fv.UserID,
      Mobile: fv.Mobile,
      Email: fv.Email,
      LicenseNumber: fv.LicenseNumber,
      Specialization: fv.Specialization,
      Password: fv.Password
    };

  try {
    const res = await axios.post("http://localhost/doctorlogin/Doctor_Info.php", formData);
    if (res.data.success) {
      console.log("Success");
    } else {
      console.log("Request was successful, but the server responded with an error.");
    }
  } catch (error) {
    console.error("An error occurred while making the request:", error);
  }
};


    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name="fName" required id="" placeholder="Enter First Name" onChange={handleInput}/> <br />
            <input type="text" name="lName" id="" required placeholder="Enter Last Name" onChange={handleInput}/> <br />
            <input type="text" name="UserID" id="" required placeholder="Enter User ID" onChange={handleInput}/> <br />
            <input type="number" name="Mobile" id="" required placeholder="Enter Mobile Number" onChange={handleInput}/> <br />
            <input type="email" name="Email" id="" required placeholder="Enter Email Address" onChange={handleInput}/> <br />
            <input type="number" name="LicenseNumber" id="" required placeholder="Enter License Number"  onChange={handleInput}/> <br />
            <input type="text" name="Specialization" id="" required  placeholder="Enter Your Specialization" onChange={handleInput}/> <br />
            <input type="password" name="Password" id="" required  placeholder="Enter Password" onChange={handleInput}/> <br />
            <input type="submit" value="Sign UP" />
           
            <Link to="/Home"></Link>
            or        
            <Link to="/Login">Log In</Link>
          </form>
        </div>
    )
}
export default Signup;