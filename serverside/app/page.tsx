import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getUserDetails() {
  // artificial route
  // await new Promise((r)=>setTimeout(r, 5000))
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details");
  // const response = await axios.get("http://localhost:3002/api/user"); bad practice 
  return response.data;
}

export default async function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const userData = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {userData?.name}
            </div>
            
            Email: {userData?.email}
        </div>
    </div>
</div>
  );
}
