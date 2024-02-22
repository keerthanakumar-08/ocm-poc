export default async function getData() {
  const res = await fetch(`http://192.168.29.233:8055/items/User_details`, {
    cache: "no-store",
    next: { tags: ['collection'] } 
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
