import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-2 ">
        <SidebarComponent />
      </div>
      <div className="mx-10 col-span-10">
        <NavbarComponent />
        <ListBoardComponentHeader />
        {children}
      </div>
    </div>
  );
};

export default layout;
