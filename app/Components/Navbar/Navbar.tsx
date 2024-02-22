"use client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side of the navbar */}
        <div className="flex items-center">
          <h1 className="text-white text-lg font-bold">YourApp</h1>
        </div>

        {/* Right side of the navbar */}
        <div className="flex items-center">
          {/* Sign In button */}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={() => router.push("/SignUp")}
          >
            Sign In
          </button>
          {/* Log In button */}
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/userLogin")}
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
}
