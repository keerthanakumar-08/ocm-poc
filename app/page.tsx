import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="min-h-[100vh]">
        <header className="bg-gray-800 text-white py-4 min-h-[8vh]">
          <div className="container mx-auto cursor-pointer">
            <h1 className="text-2xl font-bold">DirectUs Dashboard</h1>
          </div>
        </header>
        <main className="flex justify-center items-center min-h-[83.7vh]">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="">
              <img
                src="https://media.istockphoto.com/id/1187559295/vector/young-man-at-computer-leaned-back-in-his-chair.jpg?s=612x612&w=0&k=20&c=xsbCbThW_wfYWwAOTOhlXBt3ORI2WqOhxSYn6X7COF4="
                className="h-full"
              />
            </div>
            <div className="p-4 w-full flex justify-center items-center flex-col">
              <h1 className="text-4xl font-bold">
                The open source headless CMS
              </h1>

              <button className="mt-5 bg-indigo-500 text-white rounded px-6 py-3">
                <Link href="/userLogin"> Getting Started </Link>
              </button>
            </div>
          </div>
        </main>
        <footer className="bg-gray-800 text-white py-4 w-full 8">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Dashboard Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
