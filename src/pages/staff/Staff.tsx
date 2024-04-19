import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoPersonAddOutline } from "react-icons/io5";

type Props = {};

function Staff({}: Props) {
  return (
    <div className="p-5 table-main">
      <div className="table-header">
        <div></div>
        <div>
          <Button variant="outline" className="flex items-center text-foreground justify-between gap-1">
            <IoPersonAddOutline className="text-md" />
            <p>
            Yangi
            </p>
            </Button>
        </div>
      </div>
      <div className="table-container">
        <Table>
          <TableCaption>Ushbu kompaniya ishchilari.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] font-medium">User ID</TableHead>
              <TableHead>Ismi</TableHead>
              <TableHead>Lavozimi</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">ID000111</TableCell>
              <TableCell>Alijon Valijon</TableCell>
              <TableCell>Sotuvchi</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Staff;
