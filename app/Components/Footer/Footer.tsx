import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-800 py-5">
      <div className="flex justify-around">
        <div className="">
          <Link href="/userLogin" className="text-xl text-white font-bold">
            Customer Login
          </Link>
        </div>

        <div className="">
          <Link href="/supplierLogin" className="text-xl text-white font-bold">
            Supplier Login
          </Link>
        </div>

        <div className="">
          <Link href="/adminLogin" className="text-xl text-white font-bold">
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
}
