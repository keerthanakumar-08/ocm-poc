"use client";
import { Button, Modal } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditModal({ isModalOpen, handleOk, editValues }: any) {
  const [username, setUserName] = useState(editValues[0].Username);
  const [email, setEmail] = useState(editValues[0].email);

  const router: any = useRouter();
  const handleCancel = () => {
    router.push("/Dashboard");
  };

  console.log(editValues, "editValues");

  const handleUpdate = async () => {
    console.log("handleUpdate");
    const loginPayload = {
      Username: username,
      email: email,
    };

    try {
      const response = axios.patch(
        `http://192.168.29.233:8055/items/User_details/${editValues[0].id}`,
        loginPayload,
      );
      // Handle response
      console.log(response, "response");
    } catch (error) {
      // Handle error
    }

    // const response = await fetch(
    //   `http://192.168.29.233:8055/items/User_details/${editValues[0].id}`,
    //   {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(loginPayload),
    //   }
    // );
    // console.log(response, "response");
  };

  return (
    <div>
      <Modal
        title="Edit User"
        footer={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
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
        <div className="w-full">
          <button
            className="bg-green-500 w-full mt-2 text-white font-bold px-4 py-2 rounded"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </Modal>
    </div>
  );
}
