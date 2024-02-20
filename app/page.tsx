import Image from "next/image";
import Footer from "./Components/Footer/Footer";

async function getData() {
  const res = await fetch(`${process.env.DIRECT_US_URL}items/User_details`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data, "data");
  return (
    <main className="mt-20">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">User Data</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse rounded">
            <thead className="bg-indigo-400">
              <tr>
                <th className="px-4 py-4 text-white rounded-tl-xl">sNo</th>
                <th className="px-4 py-4 text-white">Username</th>
                <th className="px-4 py-4 text-white">Email</th>
                <th className="px-4 py-6 text-white rounded-tr-xl">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.data.length > 0 &&
                data.data.map((item: any, index: any) => (
                  <tr
                    key={index}
                    className="border border-gray-300 text-center"
                  >
                    <td className="px-4 py-6 border border-gray-300">
                      {item.id}
                    </td>
                    <td className="px-4 py-6 border border-gray-300">
                      {item.Username}
                    </td>
                    <td className="px-4 py-6 border border-gray-300">
                      {item.email}
                    </td>
                    <td className="px-4 py-6 border border-gray-300 text-center">
                      {item.status ? (
                        <div className="inline-block border py-2 rounded px-6 bg-green-400 text-white">
                          <p>{item.status.toString()}</p>
                        </div>
                      ) : (
                        <div className="inline-block border py-2 rounded px-6 bg-red-400 text-white">
                          <p>{item.status.toString()}</p>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
