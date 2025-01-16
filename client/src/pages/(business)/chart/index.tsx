import { QUERY_KEYS } from "@/constants/query-keys";
import categoryService from "@/services/category";
import locationService from "@/services/location";
import { Category, Location, Rent } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import BarChart from "./components/BarChart";
import rentService from "@/services/rent";
import PickUpChart from "./components/PickUpChart";
import DropOffChart from "./components/DropOffChart";

const ChartHomePage = () => {
  const [rents, setRents] = useState<Rent[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);


  const { data: rentData } = useQuery({
    queryKey: [QUERY_KEYS.RENT_LIST],
    queryFn: () => rentService.getAll(),
  });

  const { data: categoryData } = useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: () => categoryService.getAll(),
  });

  const { data: locationData } = useQuery({
    queryKey: [QUERY_KEYS.LOCATIONS],
    queryFn: () => locationService.getAll(),
  });

  useEffect(() => {
    setRents(rentData?.data?.items || []);
    setCategories(categoryData?.data?.items || []);
    setLocations(locationData?.data?.items || []);
  }, [rentData, categoryData]);

  return (
    <div className="container pt-4 lg:pt-8 pb-8 lg:pb-16 flex flex-col gap-y-6 lg:gap-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 gap-y-6">
        <BarChart rents={rents} categories={categories} classname="h-max" />
        <PickUpChart rents={rents} locations={locations} />
        <DropOffChart rents={rents} locations={locations} />
      </div>
    </div>
  );
};

export default ChartHomePage;
