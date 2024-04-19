import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "./ui/sheet";
import { RootState } from "@/store/store";
import { Switch } from "./ui/switch";
import { toggleTheme } from "@/store/slices/settingsSlice";

type Props = {};

export default function Settings({}: Props) {
    const theme = useSelector((state: RootState) => state.settings.theme);
    const dispatch = useDispatch();
  return (
    <SheetContent className={`bg-popover text-card-foreground border-none ${theme ? 'dark' : ''}`}>
      <SheetHeader>
        <SheetTitle>Sozlamalar</SheetTitle>
        {/* <SheetDescription></SheetDescription> */}
      </SheetHeader>
        <div className="py-5 flex justify-between">
            <p>Tun / Kun</p>
            <Switch 
                checked={!theme}
                onCheckedChange={() => dispatch(toggleTheme())}
                className="outline-none"
            />
        </div>
      <SheetFooter>
        <SheetClose asChild>
          {/* <Button type="submit">Save changes</Button> */}
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
