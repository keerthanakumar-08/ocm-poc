import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto">
        <div className="my-8">
          <p>Welcome to the dashboard!</p>
          <Link
            href="/Dashboard"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded "
          >
            {/* <a className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded"> */}
            Go to Dashboard
            {/* </a> */}
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Dashboard Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
