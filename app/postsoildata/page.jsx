import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PostSoilData from "@/components/PostSoilData";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function RegisterForm() {
  const session = await getServerSession(authOptions);

  if (session?.user?.email !== "admin@gmail.com") redirect("/soildata");

  return (
    <>
      <PostSoilData />
    </>
  );
}
