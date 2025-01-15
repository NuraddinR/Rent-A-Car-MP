export const paths = {
  HOME: "/",
  CHART: "/chart",
  PROFILE: {
    MAIN: "/profile",
    EDIT: "/profile/edit",
    DELETE: "/profile/delete",
  },
  LIST: "/list",
  FAVORITES: "/favorites",
  DETAIL: (id = ":id") => `/detail/${id}`,
  PAYMENT: (id = ":id") => `/payment/${id}`,
  RESERVATIONS: "/reservations",
  DASHBOARD: {
    MAIN: "/dashboard",
    RENTS: {
      LIST: "/dashboard/rents",
      CREATE: "/dashboard/rents/create",
      EDIT: (id = ":id") => `/dashboard/rent/edit/${id}`,
    },
    CATEGORY: {
      LIST: "/dashboard/category",
      CREATE: "/dashboard/category/create",
      EDIT: (id = ":id") => `/dashboard/category/edit/${id}`,
      DELETE: (id = ":id") => `/dashboard/category/delete/${id}`,
    },
    LOCATION: {
      LIST: "/dashboard/location",
      CREATE: "/dashboard/location/create",
      EDIT: (id = ":id") => `/dashboard/location/edit/${id}`,
      DELETE: (id = ":id") => `/dashboard/location/delete/${id}`,
    },
    RESERVATIONS: {
      LIST: "/dashboard/reservations",
    },
    REVIEWS: {
      LIST: "/dashboard/reviews",
    },
    USERS: {
      LIST: "/dashboard/users",
    },
    CHAT: {
      VIEW: "/dashboard/chat",
      USER: (id = ":id") => `/dashboard/chat/${id}`,
    },
  },
};
