import { Inter } from "next/font/google";
import EmpTable from "@/components/EmployeeTable";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Employee Management Service -by Deepak Morya </title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <EmpTable />
      </main>
    </>
  );
}
