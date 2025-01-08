import {
  CalendarIcon,
  CarIcon,
  Home,
  MapPin,
  MessageCircleIcon,
  MessageSquareMoreIcon,
  Square,
  User2Icon,
} from "lucide-react";

import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { paths } from "@/constants/paths";

const items = [
  {
    title: "Dashboard",
    url: paths.DASHBOARD.MAIN,
    icon: Home,
  },
  {
    title: "Categories",
    url: paths.DASHBOARD.CATEGORY.LIST,
    icon: Square,
  },
  {
    title: "Locations",
    url: paths.DASHBOARD.LOCATION.LIST,
    icon: MapPin,
  },
  {
    title: "Car Rents",
    url: paths.DASHBOARD.RENTS.LIST,
    icon: CarIcon,
  },
  {
    title: "Reservations",
    url: paths.DASHBOARD.RESERVATIONS.LIST,
    icon: CalendarIcon,
  },
  {
    title: "Reviews",
    url: paths.DASHBOARD.REVIEWS.LIST,
    icon: MessageSquareMoreIcon,
  },
  {
    title: "Users",
    url: paths.DASHBOARD.USERS.LIST,
    icon: User2Icon,
  },
  {
    title: "Chat",
    url: paths.DASHBOARD.CHAT.VIEW,
    icon: MessageCircleIcon,
  },
];
export const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarGroupContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarGroupContent>
    </Sidebar>
  );
};
