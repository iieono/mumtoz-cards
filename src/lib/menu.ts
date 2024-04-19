
import { PiUsers, PiInfo } from "react-icons/pi";
import { IconType } from "react-icons";
import { FaRegListAlt } from "react-icons/fa";
import { TbExchange } from "react-icons/tb";
import { GrAnalytics } from "react-icons/gr";
import { RiFolderReceivedFill } from "react-icons/ri";
import { FaCashRegister } from "react-icons/fa6";
import { LuStore } from "react-icons/lu"

interface ListItem {
    Title: string;
    Icon: IconType; 
    LinkName: string;
    AdminPage: boolean
}

const menuList: ListItem[] = [
    {
        Title: "Ombor",
        Icon: LuStore,
        LinkName: "/storage",
        AdminPage: false,
    },
    {
        Title: "Sotuv bo'limi",
        Icon: FaCashRegister,
        LinkName: "/checkout",
        AdminPage: false,
    },
    {
        Title: "Xisobot",
        Icon: GrAnalytics,
        LinkName: "/report",
        AdminPage: false,
    },
    {
        Title: "Tovarlar kirimi",
        Icon: RiFolderReceivedFill,
        LinkName: "/intake",
        AdminPage: true,
    },
    {
        Title: "Xodimlar",
        Icon: PiUsers,
        LinkName: "/staff",
        AdminPage: true,
    },
    {
        Title: "Ombor o'tkazmalari",
        Icon: TbExchange,
        LinkName: "/transfer",
        AdminPage: true,
    },
    // Add more items as needed
];

export default menuList;
