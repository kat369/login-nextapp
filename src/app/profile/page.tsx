"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { request } from "http";
import { getCookie } from "cookies-next";


function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      alert("Logout successful");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };

 
 
  // const getUserDetails = async () => {
  //   const res = await axios.get("/api/users/data");
  //   console.log(res.data);
  //   setData(res.data.data.email);
  // };

  // useEffect(() => {
  //   getUserDetails();
  // });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="p-5 text-3xl">Profile Page</h2>
      <h2 className="p-5 text-2xl">User logedin succesfully</h2>
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default ProfilePage;
