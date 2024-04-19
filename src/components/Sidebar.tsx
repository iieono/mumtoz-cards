import menuList from "@/lib/menu";
import { Link, useLocation } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { FaChevronRight } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/store/slices/settingsSlice";
import { RootState } from "@/store/store";
import { RxExit } from "react-icons/rx";
import { ScrollArea } from "./ui/scroll-area";
import MumtozLogo from "@/assets/mumtoz-logo-no-bg.png";
import {
  Sheet,

  SheetTrigger,
} from "./ui/sheet";
import Settings from "./Settings";

type Props = {};

export default function Sidebar({}: Props) {
  const sidebar = useSelector((state: RootState) => state.settings.sidebar);
  const admin = useSelector((state: RootState) => state.auth.isAdmin)
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <div
      className={`sidebar absolute flex sm:relative ${
        sidebar ? "" : "hidden sm:flex collapsed"
      }`}
    >
      <div className="absolute top-12 -right-2">
        <Button
          variant="outline"
          size="icon"
          className="w-min h-min p-2 text-foreground"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FaChevronRight
            className={`h-3 w-3 ${sidebar ? "rotate-180" : ""} sidebar-button`}
          />
        </Button>
      </div>

      <div className="sidebar-up h-full w-full flex flex-col gap-3 overflow-hidden">
        <div
          className={`logo flex items-center pt-4 py-2 ${
            sidebar ? "px-4" : "justify-center"
          }`}
        >
          <div className="w-8 h-8 rounded-full">
            <img
              src={MumtozLogo}
              alt="logo image"
              className="max-w-full rounded-full logo-image dark:invert"
            />
          </div>
          <p className="text-lg pl-3 text-foreground logo-text permanent-marker-regular">
            Mumtoz Cards
          </p>
        </div>
        <Separator />
        <ScrollArea className={`menu ${sidebar && "sm:px-2"}`}>
          {menuList.map((item, index) => {
            if(item.AdminPage && !admin) return
            const isActive = location.pathname === `${item.AdminPage ? '/admin' : ''}${item.LinkName}`;
            const activeClassName = isActive ? 'active' : '';
            return (
              <Link
                to={`${item.AdminPage ? '/admin' : ''}${item.LinkName}`}
                key={index}
                className={`menu-link ${sidebar ? "" : "rounded-none"} ${activeClassName}`}
              >
                <item.Icon className="text-2xl" />
                <p className="menu-text">{item.Title}</p>
              </Link>
            );
          })}
        </ScrollArea>
        {/* <div className="menu">
        </div> */}
      </div>
      <Separator />
      <div className="sidebar-down self-end w-full flex flex-col">
        <div className={`menu ${sidebar && "sm:p-2"}`}>
          <Sheet>
            <SheetTrigger asChild>
              <div className="menu-link bottom">
                <CiSettings className="text-2xl" />
                <p className="menu-text">Sozlamalar</p>
              </div>
            </SheetTrigger>
            <Settings />
          </Sheet>
        </div>
        <div className="user flex justify-between p-2 px-4 bg-muted-background">
          <div className="flex flex-col avatar">
            <p className="text-lg font-bold text-foreground">John Doe</p>
            <p className="text-xs -mt-1 text-muted-foreground">Admin</p>
          </div>
          <div>
            <Button variant="ghost" className="">
              <RxExit className="text-xl hover:text-primary text-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
