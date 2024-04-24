"use server";
import { deleteWorkspaceService } from "@/app/service/workspace.service";
import { revalidateTag } from "next/cache";

export const getWorkSpaceId = async (id) => {
  console.log("Id from workspace :", id);
  const res = await deleteWorkspaceService(id);
  console.log("res", res);
  revalidateTag("workspace");
  return id;
};
