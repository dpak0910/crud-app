import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import EmpList from "@/constants/EmployeeList";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";
// import useSWR from 'swr';

const fetcher = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const EmpTable:React.FC = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  function handleViewDetails(employee: any) {
    console.log(employee);
  }

  function handleUpdateEmployee(employee: any) {
    console.log(employee.empId, "clicked");
  }

  function handleDeleteEmployee(employee: any) {
    console.log(employee.empId, "clicked");
  }

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://f91a-2402-4cc0-2307-c3-94dd-604-2466-b58f.ngrok.io/rest/employee`
        );
        // setData(response);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
                onClick={() => handleViewDetails(employee)}
              >
                View Details
              </Button>
            </TableCell>
            <TableCell>
              <Button
                className="bg-zinc-700 hover:bg-zinc-900 rounded-md"
                onClick={() => handleUpdateEmployee(employee)}
              >
                Update
              </Button>
            </TableCell>
            <TableCell className="text-right">
              <Button
                onClick={() => handleDeleteEmployee(employee)}
                className="bg-zinc-700 hover:bg-zinc-900 rounded-md"
              >
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
