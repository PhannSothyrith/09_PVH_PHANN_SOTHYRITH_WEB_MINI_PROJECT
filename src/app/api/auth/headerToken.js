import { getServerSession } from "next-auth";
import { authOption } from "./[...nextauth]/route";

export default async function headerToken() {
  const session = await getServerSession(authOption);
  return {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    authorization: `Bearer ${session?.user?.token}`,
  };
}
