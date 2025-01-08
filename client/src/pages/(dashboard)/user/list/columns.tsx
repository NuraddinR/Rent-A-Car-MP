import { User } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: (data) => {
      return (
        <img
          src={data.row.original.avatar || ""}
          alt="Avatar"
          className="h-10 w-10 rounded-full object-cover"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (data) => {
      return data.row.original.role === "admin" ? "Admin" : "User";
    },
  },
];
