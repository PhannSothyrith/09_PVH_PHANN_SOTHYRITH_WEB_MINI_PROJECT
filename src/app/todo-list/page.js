import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import WorkspacePopupComponent from "@/components/WorkspacePopupComponent";

const TodolistPage = () => {
    return ( 
        <main className="flex w-full">
            <div className="w-[20%]">
                <SidebarComponent/>
                <WorkspacePopupComponent/>
            </div>
            <div className="w-[80%] mx-5">
                <NavbarComponent/>
                <ListBoardComponentHeader/>
            </div>
        </main>
     );
}
 
export default TodolistPage;