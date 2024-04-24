import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import { getAllWorkSpaceService } from "@/app/service/workspace.service";
import Link from "next/link";

export default async function SidebarComponent() {
  const workspaceData = await getAllWorkSpaceService();

  return (
    <div className="pl-10 mt-6 h-screen">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>
      {workspaceData?.data?.map((data) => (
        <div key={data?.workSpaceId} className="flex items-center mt-5 w-full">
          <div
            className={
              data?.workSpaceId % 2 == 0
                ? "rounded-full w-4 h-4 bg-green-500 "
                : "rounded-full w-4 h-4 bg-blue-500 "
            }
          ></div>
          <div className="flex justify-between w-full pl-3">
            <Link href={`/todo-list/${data?.workspaceName}`}>
              <p>{data?.workspaceName}</p>
            </Link>
            <EditDeleteDropDownComponent workSpaceId={data.workSpaceId} />
          </div>
        </div>
      ))}
      {/* each workspace */}

      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} />
      </div>

      {/* each favorite workspace */}
      <div className="flex items-center mt-5 w-full">
        <div className="rounded-full w-4 h-4 bg-workingOn"></div>
        <div className="flex justify-between w-full pl-3">
          <p>GKS Scholarship</p>
        </div>
      </div>
    </div>
  );
}
