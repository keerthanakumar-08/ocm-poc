"use client";
import { Button, Modal } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import getData from "@/app/actions/getUserData";

export default function AddModal({
  isModal,
  handleOk,
  handleModalOpen,
  getUser,
}: any) {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = async () => {
    const loginPayload = {
      Username: username,
      email: email,
      password: password,
    };

    const response = await fetch(
      `http://192.168.29.233:8055/items/User_details`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginPayload),
      }
    );
    console.log(response, "response");
    if (response.status === 200) {
      handleModalOpen();
      getUser();
    }
  };

  return (
    <div>
      <Modal
        title="Add User"
        footer={false}
        open={isModal}
        onOk={handleOk}
        onCancel={handleModalOpen}
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            className="border border-gray-300 mt-3 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            onChange={(e: any) => setUserName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            className="border border-gray-300 mt-3 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            className="border border-gray-300 mt-3 rounded-md p-2 w-full focus:outline-none focus:ring focus:border-blue-500"
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full">
          <button
            className="bg-indigo-500 w-full mt-2 text-white font-bold px-4 py-2 rounded"
            onClick={handleUpdate}
          >
            Create User
          </button>
        </div>
      </Modal>
    </div>
  );
}
