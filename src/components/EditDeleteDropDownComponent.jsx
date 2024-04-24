import { getWorkSpaceId } from "@/actions/workspce";
import Image from "next/image";
import React from "react";
import DeleteWorkSpaceComponent from "./DeleteWorkspaceComponent";

// const deleteFetcher = async (url) => {
//   const res = await fetch(url, {
//     method: "DELETE",
//   });
//   if (!res.ok) {
//     throw new Error("An error occurred while deleting the data");
//   }
//   return res.json();
// };

export default function EditDeleteDropDownComponent({ workSpaceId }) {
  // const { data, error, isLoading } = useSWR(
  //   "http://110.74.194.123:8989/api/todo/v1/workspaces/${workspaceId}",
  //   fetcher
  // );
  // const { mutate } = useSWRConfig();
  // const { data, error } = useSWR(
  //   `http://110.74.194.123:8989/api/todo/v1/workspaces/${workSpaceId}`,
  //   deleteFetcher
  // );

  // function handleDelete(workspaceId) {
  //   mutate(
  //     `http://110.74.194.123:8989/api/todo/v1/workspaces/${workspaceId}`,
  //     null,
  //     { optimisticData: null, rollbackOnError: false }
  //   );
  // }

  return (
    <details className="dropdown">
      <summary className=" btn bg-white shadow-none border-0 p-0 h-0 min-h-0">
        <Image
          src={"/assets/icons/tabler_dots.svg"}
          width={20}
          height={20}
          alt={"edit delete card"}
        />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <a>Edit</a>
        </li>
        <li>
          <DeleteWorkSpaceComponent workspaceId={workSpaceId} />
        </li>
      </ul>
    </details>
  );
}
