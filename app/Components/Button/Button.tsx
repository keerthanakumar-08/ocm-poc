"use client";
import { MdOutlineDeleteOutline } from "react-icons/md";
import getData from "../../actions/getUserData";

export default function Button({ id }: any) {
  const handleDelete = async () => {
    const res = await fetch(
      `http://192.168.29.233:8055/items/User_details/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    getData();
    console.log(res, "res");
  };
  return (
    <div className="">
      <button className="mx-6" onClick={handleDelete}>
        <MdOutlineDeleteOutline className="text-2xl" />
      </button>
    </div>
  );
}
