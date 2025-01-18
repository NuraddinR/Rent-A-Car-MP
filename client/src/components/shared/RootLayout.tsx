import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";

import { Dialogs } from "./dialogs";
import { useAppDispatch } from "@/hooks/redux";
import { useEffect } from "react";
import { getCurrentUserAsync } from "@/store/auth";
import { Footer } from "./footer";

const RootLayout = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUserAsync());
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Dialogs />
      <Footer />
    </div>
  );
};

export default RootLayout;
