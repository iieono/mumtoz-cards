import menuList from "@/lib/menu";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { FaChevronRight } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/store/slices/settingsSlice";
import { RootState } from "@/store/store";
import { RxExit } from "react-icons/rx";
import { ScrollArea } from "./ui/scroll-area";

type Props = {};

export default function Sidebar({}: Props) {
    const sidebar = useSelector((state: RootState) => state.settings.sidebar)
    const dispatch = useDispatch()

  return (
    <div
      className={`sidebar absolute flex sm:relative ${
        sidebar ? "" : "hidden sm:flex collapsed"
      }`}
    >
      <div className="absolute top-8 -right-2">
        <Button
          variant="outline"
          size="icon"
          className="w-min h-min p-2"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaChevronRight
            className={`h-3 w-3 ${sidebar ? "rotate-180" : ""} sidebar-button`}
          />
        </Button>
      </div>

      <div className="sidebar-up h-full w-full flex flex-col gap-3 overflow-hidden">
        <div className="logo flex items-center px-4 pt-4 py-2">
          <div className="w-8 h-8 rounded-full">
            <img
              src="https://cdn.pixabay.com/photo/2014/04/02/10/16/fire-303309_960_720.png"
              alt="logo image"
              className="max-w-full rounded-full logo-image"
            />
          </div>
          <p className="text-lg pl-3 font-bold logo-text">Mumtoz</p>
        </div>
        <Separator />
        <ScrollArea className="menu">
          {menuList.map((item, index) => (
            <Link to={item.LinkName} key={index} className="menu-link">
              <item.Icon className="text-xl" />
              <p className="menu-text">{item.Title}</p>
            </Link>
          ))}

        </ScrollArea>
        {/* <div className="menu">
        </div> */}
      </div>
      <Separator />
      <div className="sidebar-down self-end w-full flex flex-col">
        <div className="menu">
            <Link to='settings' className="menu-link">
                <CiSettings className="text-xl" />
                <p className="menu-text">Settings</p>
            </Link>
        </div>
        <div className="user flex justify-between p-2 px-4 bg-blue-50">
            <div className="flex flex-col avatar"> 
                <p className="text-lg font-bold">John Doe</p>
                <p className="text-xs -mt-1 text-foreground">Admin</p>
                
            </div>
            <div>
                <Button variant="ghost">
                    <RxExit className="text-xl hover:text-primary"/>
                </Button>
            </div>

        </div>

        
      </div>
    </div>
  );
}
