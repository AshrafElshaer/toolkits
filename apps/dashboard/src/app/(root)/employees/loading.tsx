import { FilterButtonsLoader } from "@/components/loaders/filter-buttons-loader";
import InputLoader from "@/components/loaders/input.loader";
import { PaginationLoader } from "@/components/loaders/pagination-loader";
import { TableLoader } from "@/components/loaders/table-loader";
import Main from "@/components/main";
import { Button } from "@toolkit/ui/button";
import { PlusCircle, PlusIcon, Search } from "lucide-react";
import { IoGrid, IoKeySharp } from "react-icons/io5";
import { MdSignalWifiStatusbarConnectedNoInternet2 } from "react-icons/md";

const columns = [
  <div className="min-w-24" key="name">
    Name
  </div>,
  <div className="min-w-40" key="email">
    Email
  </div>,
  <div className="min-w-60" key="department">
    Department
  </div>,
  <div className="min-w-32" key="job_title">
    Job Title
  </div>,
  <div className="min-w-14" key="role">
    Role
  </div>,
  <div className="min-w-16" key="status">
    Status
  </div>,
  <div className="min-w-24 text-center" key="type">
    Type
  </div>,
  <div className="w-8" key="actions" />,
];

export default function EmployeesLoading() {
  return (
    <Main className="flex flex-col gap-4" isMaxHeight>
      <section className="flex flex-col md:flex-row gap-4 items-center justify-start w-full">
        <div className="flex items-center md:max-w-52 w-full order-2 md:order-1">
          <InputLoader placeholder="Search by name..." startIcon={Search} />
        </div>
        <FilterButtonsLoader
          buttons={[
            { icon: IoGrid, label: "Department" },
            {
              icon: MdSignalWifiStatusbarConnectedNoInternet2,
              label: "Status",
            },
            { icon: IoKeySharp, label: "Role" },
            { icon: PlusCircle, label: "Type" },
          ]}
        />
        <Button
          className="ml-auto w-full md:w-fit min-w-fit order-1 md:order-3"
          disabled
        >
          Add Employee
          <PlusIcon className="size-4 ml-2" />
        </Button>
      </section>
      <TableLoader columns={columns} />
      {/* <PaginationLoader /> */}
    </Main>
  );
}
