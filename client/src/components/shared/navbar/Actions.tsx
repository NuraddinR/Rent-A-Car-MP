import SettingsIcon from "@/assets/icons/settings.svg";
import ChartIcon from "@/assets/icons/chart-icon.svg";
import HeartIcon from "@/assets/icons/heart.svg";
import SearchIcon from "@/assets/icons/searchIcon.svg";
import { LogOutIcon, User2Icon } from "lucide-react";

import { Link } from "react-router-dom";
import { DialogTypeEnum, useDialog } from "@/hooks/useDialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserRole } from "@/types";
import { paths } from "@/constants/paths";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { logoutAsync, selectAuth } from "@/store/auth";
import { RenderIf } from "../RenderIf";
import { Spinner } from "../Spinner";

export const NavbarActions = () => {
  const { openDialog } = useDialog();
  const { user, loading } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  

  function handleLogout() {
    dispatch(logoutAsync());
  }

  return (
    <div className="flex items-center gap-2 lg:gap-3 md:gap-2">
      <Link
        to="/list"
        className="rounded-full md:hidden border border-[#c3d4e966] opacity-80 hover:opacity-100 duration-75 p-2.5"
      >
        <img src={SearchIcon} alt="search icon" />
      </Link>
      <Link
        to="/chart"
        className="rounded-full border border-[#c3d4e966] opacity-80 hover:opacity-100 duration-75 p-2.5"
      >
        <img src={ChartIcon} alt="chart icon" />
      </Link>
      <Link
        to="/favorites"
        className="rounded-full border border-[#c3d4e966] opacity-80 hover:opacity-100 duration-75 p-2.5"
      >
        <img src={HeartIcon} alt="favorites icon" />
      </Link>
 
      <Link
        to="/profile"
        className="rounded-full border border-[#c3d4e966] opacity-80 hover:opacity-100 duration-75 p-2.5"
      >
        <img src={SettingsIcon} alt="settings icon" />
      </Link>
      <RenderIf condition={loading}>
        <Spinner />
      </RenderIf>

      <RenderIf condition={!loading}>
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full border border-[#c3d4e966] opacity-80 hover:opacity-100 duration-75 p-2.5">
                <User2Icon color="#596780" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {user.role === UserRole.Admin && (
                <DropdownMenuItem asChild>
                  <Link to={paths.DASHBOARD.MAIN}>Dashboard</Link>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem asChild>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/reservations">Reservations</Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer"
                onClick={handleLogout}
              >
                <LogOutIcon />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button className="!px-3" onClick={() => openDialog(DialogTypeEnum.LOGIN)}>
            Sign In
          </Button>
        )}
      </RenderIf>
    </div>
  );
};
