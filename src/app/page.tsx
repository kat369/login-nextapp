"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";


export default function Home() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
 
  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      const isAdmin = response.data.user.isAdmin
      console.log(isAdmin);
      alert("Login success");
      localStorage.setItem('email', user.email);
      if(isAdmin){
        router.push("/adminpage");
      }else{
        router.push("/profile");
      }
    } catch (error: any) {
      console.log("Login failed", error.message);
      alert("Wrong Credientials");
    } finally {
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="p-5 text-2xl">Login Page</h2>
      <hr />
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
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        Login
      </button>
      <div> Don't have an Account?</div>
      <Link href="/signup">Click here to goto Signup Page!</Link>
    </div>
  );
}
