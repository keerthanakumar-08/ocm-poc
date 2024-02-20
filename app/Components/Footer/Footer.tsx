import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#FFE5D8] py-5">
      <div className="flex justify-around">
        <div className="">
          <Link href="/userLogin" className="text-2xl font-bold">
            Customer Login
          </Link>
        </div>

        <div className="">
          <Link href="/supplierLogin" className="text-2xl font-bold">
            Supplier Login
          </Link>
        </div>

        <div className="">
          <Link href="/adminLogin" className="text-2xl font-bold">
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
}
