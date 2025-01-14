import { paths } from "@/constants/paths";
import {
  CalendarIcon,
  CarIcon,
  MapPin,
  MessageCircleIcon,
  MessageSquareMoreIcon,
  SquareMenuIcon,
  User2Icon,
} from "lucide-react";
import { Link } from "react-router-dom";

const DashboardMainPage = () => {
  return (
    <div className="pt-7">
      <h1 className="text-2xl font-bold text-primary mb-10">Dashboard Page</h1>
      <div className="flex items-center justify-center gap-6 mb-10">
        <Link
          to={paths.DASHBOARD.CATEGORY.LIST}
          className="flex flex-col items-center justify-center !text-blue-500"
        >
          <SquareMenuIcon className="w-6 h-6" />
          <p className="text-sm text-blue-500">Categories</p>
        </Link>
        <Link
          to={paths.DASHBOARD.LOCATION.LIST}
          className="flex flex-col items-center justify-center !text-blue-500 "
        >
          <MapPin className="w-6 h-6" />
          <p className="text-sm text-blue-500">Locations</p>
        </Link>
        <Link
          to={paths.DASHBOARD.RENTS.LIST}
          className="flex flex-col items-center justify-center !text-blue-500"
        >
          <CarIcon className="w-6 h-6" />
          <p className="text-sm text-blue-500">Car Rents</p>
        </Link>
        <Link
          to={paths.DASHBOARD.RESERVATIONS.LIST}
          className="flex flex-col items-center justify-center !text-blue-500"
        >
          <CalendarIcon className="w-6 h-6" />
          <p className="text-sm text-blue-500">Reservations</p>
        </Link>
        <Link
          to={paths.DASHBOARD.REVIEWS.LIST}
          className="flex flex-col items-center justify-center !text-blue-500"
        >
          <MessageSquareMoreIcon className="w-6 h-6" />
          <p className="text-sm text-blue-500">Reviews</p>
        </Link>
        <Link
          to={paths.DASHBOARD.USERS.LIST}
          className="flex flex-col items-center justify-center !text-blue-500"
        >
          <User2Icon className="w-6 h-6" />
          <p className="text-sm text-blue-500">Users</p>
        </Link>
        <Link
          to={paths.DASHBOARD.CHAT.VIEW}
          className="flex flex-col items-center justify-center !text-blue-500"
        >
          <MessageCircleIcon className="w-6 h-6" />
          <p className="text-sm text-blue-500">Chat</p>
        </Link>
      </div>
    </div>
  );
};

export default DashboardMainPage;
