import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import WorkspacePopupComponent from "@/components/WorkspacePopupComponent";

const TodoBoard = () => {
  return (
    <main>
      <main className="flex w-full">
        <div className="w-[20%]">
          <SidebarComponent />
          <WorkspacePopupComponent />
        </div>
        <div className="w-[80%] mx-5">
          <NavbarComponent />
          <ListBoardComponentHeader/>
          <TodoCardComponent/>
        </div>
      </main>
    </main>
  );
};

export default TodoBoard;
