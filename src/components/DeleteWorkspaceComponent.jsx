"use client";
const { getWorkSpaceId } = require("@/actions/workspce");

export default function DeleteWorkSpaceComponent({ workspaceId }) {
  return (
    <form action={() => getWorkSpaceId(workspaceId)}>
      <button type="submit">
        <a>Delete</a>
      </button>
    </form>
  );
}
