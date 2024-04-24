'use server'
import { postWorkspace } from "@/app/service/workspaces.service";
import { revalidateTag } from "next/cache";


// define handle login
async function createWorkspace(userInfo) {
   'use server'
  // define structure object
  const newUserInfo = {
    workspaceName: userInfo.get("workspaceName"),
  };
  
  console.log("newuserinfor",newUserInfo)
  // call Registerservice
   await postWorkspace(newUserInfo);


  revalidateTag("workspaceName")


}
export default addWorkspace;