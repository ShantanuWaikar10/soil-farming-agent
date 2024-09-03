"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const PostSoilData = () => {
  const [soilname, setSoilname] = useState("");
  const [description, setDescription] = useState("");
  const [distributorName, setDistributorName] = useState("");
  const [distributorContact, setDistributorContact] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!soilname || !description || !distributorName || !distributorContact) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const res = await fetch("api/soildata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          soilname,
          description,
          distributorName,
          distributorContact
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/soildata");
      } else {
        console.log("Data post failed.");
      }
    } catch (error) {
      console.log("Error during posting: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-[90vh]">
      <div className="shadow-2xl p-5 rounded-lg border-t-4 bg-white border-green-400">
        <h1 className="text-xl font-bold my-4">Post Soil Data</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setSoilname(e.target.value)}
            type="text"
            placeholder="Soil Name"
          />
          <input
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Soil Description"
          />
          <input
            onChange={(e) => setDistributorName(e.target.value)}
            type="text"
            placeholder="Distributor Name"
          />
          <input
            onChange={(e) => setDistributorContact(e.target.value)}
            type="text"
            placeholder="Distributor Contact"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Post
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostSoilData;
