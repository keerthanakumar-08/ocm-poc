"use client";
import Image from "next/image";
import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import getData from "../actions/getUserData";
import Navbar from "../Components/Navbar/Navbar";
import EditModal from "../Components/EditModal/EditModal";

export default function Dashboard({ searchParams }: any) {
  const [data, setData] = useState<any>([]);
  // const data = await getData();
  const show: any = searchParams?.show;
  const idIndex = show && show?.indexOf("id=");
  const id = idIndex !== -1 ? show && show.substring(idIndex + 3) : null;

  let editValues;
  if (id) {
    editValues = data.data.filter((item: any) => item.id == id);
  }

  const getUser = async () => {
    const userData = await getData();
    setData(userData);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleDelete = async (id: any) => {
    const res = await fetch(
      `http://192.168.29.233:8055/items/User_details/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    getUser();
    console.log(res, "res");
  };

  return (
    <main className="">
      <Navbar />
      <div className="container mx-auto mt-20">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">User Data</h2>
          <button className="bg-indigo-400 text-white px-6 rounded py-3">
            Add
          </button>
        </div>
        <div className="overflow-x-auto h-[80vh] mt-2">
          <table className="w-full border-collapse rounded">
            <thead className="bg-indigo-400 sticky top-0">
              <tr>
                <th className="px-4 py-4 text-white rounded-tl-xl">sNo</th>
                <th className="px-4 py-4 text-white">Username</th>
                <th className="px-4 py-4 text-white">Email</th>
                <th className="px-4 py-6 text-white">Status</th>
                <th className="px-4 py-6 text-white rounded-tr-xl">Action</th>
              </tr>
            </thead>
            <tbody className="overflow-y-scroll">
              {data.data &&
                data.data.length > 0 &&
                data.data.map((item: any, index: any) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-100"
                    }  text-center`}
                  >
                    <td className="px-4 py-6">{item.id}</td>
                    <td className="px-4 py-6">{item.Username}</td>
                    <td className="px-4 py-6">{item.email}</td>
                    <td className="px-4 py-6 text-center">
                      {item.status ? (
                        <div className="inline-block border py-2 rounded-xl px-6 bg-green-300 text-white">
                          <p>Active</p>
                        </div>
                      ) : (
                        <div className="inline-block border py-2 rounded-xl px-6 bg-red-400 text-white">
                          <p>Inactive</p>
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-6">
                      <div className="flex justify-center">
                        <Link href={`Dashboard/?show=true/` + `?id=${item.id}`}>
                          <MdEdit className="text-2xl" />
                        </Link>

                        {/* <Button id={item.id} /> */}

                        <button className="mx-6">
                          <MdOutlineDeleteOutline
                            className="text-2xl"
                            onClick={() => handleDelete(item.id)}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          {show && <EditModal isModalOpen={show} editValues={editValues} />}
        </div>
      </div>
    </main>
  );
}
