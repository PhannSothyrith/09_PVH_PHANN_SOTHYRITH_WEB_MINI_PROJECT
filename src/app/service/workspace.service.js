import headerToken from "../api/auth/headerToken";
//Get all workspace
export const getAllWorkSpaceService = async () => {
  const header = await headerToken();
  const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
    headers: header,
  });
  const data = await res.json();
  return data;
};

export const createWorkSpaceService = async (workspaceName) => {
  console.log("workspace name : ", workspaceName);
  const header = await headerToken();
  const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
    next: { data: { workspaceName } },
    method: "POST",
    body: JSON.stringify(workspaceName),
    headers: header,
  });
  const data = await res.json();
  console.log("DATA : ", data);
  return data;
};
