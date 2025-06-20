import { paths } from "@/constants/paths";
import { Rent } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { CheckIcon, Edit2Icon, XIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const columns: ColumnDef<Rent>[] = [
  {
    accessorKey: "imageUrls",
    header: "Image",
    cell: (data) => {
      return (
        <img
          src={data.row.original.imageUrls?.[0]}
          alt={"Rent Picture"}
          className="w-10 h-10 object-cover rounded-lg"
        />
      );
    },
  },
  {
    accessorKey: "category.title",
    header: "Category",
  },
  {
    accessorKey: "title",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: (data) => {
      return (
        <div className="truncate max-w-[200px]">
          {data.row.original.description}
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: (data) => {
      return (
        <div className="text-secondary-500">
          {data.row.original.price}{" "}
          <span className="text-secondary-300">
            {data.row.original.currency}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "discountPrice",
    header: "Discounted Price",
    cell: (data) => {
      return (
        <div className="text-secondary-500">
          {data.row.original.discountPrice || "No Discount"}
        </div>
      );
    },
  },
  {
    accessorKey: "capacity",
    header: "Capacity",
  },
  {
    accessorKey: "fuel",
    header: "Fuel",
  },
  {
    accessorKey: "gear",
    header: "Gear",
  },
  {
    accessorKey: "showInRecommendation",
    header: "Show in Recommendation",
    cell: (data) => {
      return (
        <div>
          {data.row.original.showInRecommendation ? (
            <CheckIcon className="text-green-600" />
          ) : (
            <XIcon className="text-red-500" />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "",
    header: "Actions",
    cell: (data) => {
      return (
        <div className="text-primary flex items-center justify-center">
          <Link to={paths.DASHBOARD.RENTS.EDIT(data.row.original?._id)}>
            <Edit2Icon className="w-4 h-4" />
          </Link>
        </div>
      );
    },
  },
];
