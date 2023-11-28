import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmpList from "@/constants/EmployeeList";
import { Button } from "@/components/ui/button";

const EmpTable = () => {
  return (
    <Table className="border border-gray-400 rounded-t-lg">
      <TableHeader className="rounded-t-lg">
        <TableRow className="rounded-t-lg">
          <TableHead className="w-fit rounded-t-lg">Employee ID</TableHead>
          <TableHead>Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {EmpList.map((employee) => (
          <TableRow key={employee.empId}>
            <TableCell className="font-medium">{employee.empId}</TableCell>
            <TableCell className="font-medium">{employee.name}</TableCell>
            <TableCell>
              <Button
                className="hover:bg-zinc-900 rounded-md"
                onClick={() => console.log(employee)}
              >
                View Details
              </Button>
            </TableCell>
            <TableCell>
              <Button className="bg-zinc-700 hover:bg-zinc-900 rounded-md">
                Update
              </Button>
            </TableCell>
            <TableCell className="text-right">
              <Button className="bg-zinc-700 hover:bg-zinc-900 rounded-md">
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default EmpTable;
