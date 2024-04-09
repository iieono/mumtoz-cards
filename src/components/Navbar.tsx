import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/store/slices/settingsSlice";
import { RootState } from "@/store/store";
import { FiMenu } from "react-icons/fi";
import { Button } from "./ui/button";

type Props = {}

function Navbar({}: Props) {
    const dispatch = useDispatch()
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Button
          variant="ghost"
          size="icon"
          className="flex sm:hidden"
          onClick={() => dispatch(toggleSidebar())}
        >
          <FiMenu className="text-xl text-foreground" />
        </Button>
        <p className="navbar-title">Mumtoz</p>
      </div>
      <div className="navbar-right"></div>
    </div>
  );
}

export default Navbar