import { createBrowserRouter } from "react-router-dom";

import { paths } from "@/constants/paths";
import HomePage from "@/pages/(business)/home";
import RootLayout from "@/components/shared/RootLayout";
import { RentListPage } from "@/pages/(business)/list";
import RentDetailPage from "@/pages/(business)/detail";
import PaymentPage from "@/pages/(business)/payment";
import DashboardMainPage from "@/pages/(dashboard)/main";
import DashboardLayout from "@/components/shared/DashboardLayout";

import DashboardRentListPage from "@/pages/(dashboard)/rent/list";
import DashboardRentCreatePage from "@/pages/(dashboard)/rent/create";
import DashboardRentEditPage from "@/pages/(dashboard)/rent/edit";
import DashboardCategoryListPage from "@/pages/(dashboard)/category/list";
import DashboardCategoryCreatePage from "@/pages/(dashboard)/category/create";
import DashboardCategoryEditPage from "@/pages/(dashboard)/category/edit";
import DashboardCategoryDeletePage from "@/pages/(dashboard)/category/delete";
import DashboardLocationListPage from "@/pages/(dashboard)/location/list";
import DashboardLocationCreatePage from "@/pages/(dashboard)/location/create";
import DashboardLocationEditPage from "@/pages/(dashboard)/location/edit";
import DashboardLocationDeletePage from "@/pages/(dashboard)/location/delete";
import AuthLayout from "@/components/shared/AuthLayout";
import ReservationsPage from "@/pages/(business)/reservations";
import DashboardReservationListPage from "@/pages/(dashboard)/reservation/list";
import DashboardReviewListPage from "@/pages/(dashboard)/review/list";
import ChatPage from "@/pages/(dashboard)/chat";
import ProfilePage from "@/pages/(business)/profile";
import ProfileEditPage from "@/pages/(business)/profile/edit";
import ProfileLayout from "@/components/shared/ProfileLayout";
import ProfileDeletePage from "@/pages/(business)/profile/delete";

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: paths.HOME,
        element: <HomePage />,
      },

      {
        path: paths.LIST,
        element: <RentListPage />,
      },
      {
        path: paths.DETAIL(),
        element: <RentDetailPage />,
      },
      {
        path: "",
        element: <AuthLayout />,
        children: [
          {
            path: paths.PAYMENT(),
            element: <PaymentPage />,
          },
          {
            path: paths.RESERVATIONS,
            element: <ReservationsPage />,
          },
          {
            path: "",
            element: <ProfileLayout />,
            children: [
              {
                path: paths.PROFILE.MAIN,
                element: <ProfilePage />,
              },
              {
                path: paths.PROFILE.EDIT,
                element: <ProfileEditPage />,
              },
              {
                path: paths.PROFILE.DELETE,
                element: <ProfileDeletePage />,
              },
            ],
          },
        ],
      },

      {
        path: "",
        element: <DashboardLayout />,
        children: [
          {
            path: paths.DASHBOARD.MAIN,
            element: <DashboardMainPage />,
          },
          {
            path: paths.DASHBOARD.RENTS.LIST,
            element: <DashboardRentListPage />,
          },
          {
            path: paths.DASHBOARD.RENTS.CREATE,
            element: <DashboardRentCreatePage />,
          },
          {
            path: paths.DASHBOARD.RENTS.EDIT(),
            element: <DashboardRentEditPage />,
          },

          {
            path: paths.DASHBOARD.CATEGORY.LIST,
            element: <DashboardCategoryListPage />,
          },
          {
            path: paths.DASHBOARD.CATEGORY.CREATE,
            element: <DashboardCategoryCreatePage />,
          },
          {
            path: paths.DASHBOARD.CATEGORY.EDIT(),
            element: <DashboardCategoryEditPage />,
          },
          {
            path: paths.DASHBOARD.CATEGORY.DELETE(),
            element: <DashboardCategoryDeletePage />,
          },

          {
            path: paths.DASHBOARD.LOCATION.LIST,
            element: <DashboardLocationListPage />,
          },
          {
            path: paths.DASHBOARD.LOCATION.CREATE,
            element: <DashboardLocationCreatePage />,
          },
          {
            path: paths.DASHBOARD.LOCATION.EDIT(),
            element: <DashboardLocationEditPage />,
          },
          {
            path: paths.DASHBOARD.LOCATION.DELETE(),
            element: <DashboardLocationDeletePage />,
          },

          {
            path: paths.DASHBOARD.RESERVATIONS.LIST,
            element: <DashboardReservationListPage />,
          },
          {
            path: paths.DASHBOARD.REVIEWS.LIST,
            element: <DashboardReviewListPage />,
          },
          {
            path: paths.DASHBOARD.CHAT.VIEW,
            element: <ChatPage />,
          },
          {
            path: paths.DASHBOARD.CHAT.USER(),
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);
