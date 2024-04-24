"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function ListBoardComponentHeader() {
  const pathname = usePathname();
  return (
    <>
      <div className="text-gray flex text-lg gap-3 mb-5">
        <p>Workspace</p> / <p>{pathname.split("/")[2]}</p> / <p>List</p>
      </div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">{pathname.split("/")[2]}</h2>
        <div className="border border-gray rounded-lg p-2">
          <Image
            src="/assets/icons/star.svg"
            width={20}
            height={20}
            alt="black star"
          />
        </div>
      </div>
    </>
  );
}
