
import { PiUsers, PiInfo } from "react-icons/pi";
import { IconType } from "react-icons";

interface ListItem {
    Title: string;
    Icon: IconType; 
    LinkName: string;
}

const menuList: ListItem[] = [
    {
        Title: "Users",
        Icon: PiUsers,
        LinkName: "/users"
    },
    {
        Title: "About",
        Icon: PiInfo,
        LinkName: "/about",
    },
    // Add more items as needed
];

export default menuList;
