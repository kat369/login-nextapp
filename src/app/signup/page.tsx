"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  
// fetch syntax for signup
//   const response = await fetch("/api/users/signup", {
//     method: "POST",
//     body: JSON.stringify(user),
//     });
    
//     if(response.status === 400){
//     alert("UserName or Email Already Exists!");
//     }else{
//     alert("Signup success");
//     router.push("/");
//     }


  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      alert("Signup success");
      router.push("/");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      alert("UserName or Email Already Exists!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="p-5 text-2xl">Signup Page</h2>
      <hr />
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Create Account
      </button>
      <div> Already have an Account?</div>
      <Link href="/">Click here to goto Login Page!</Link>
    </div>
  );
}

export default SignupPage;
