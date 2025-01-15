import { RentList } from "@/components/shared/RentList";
import { QUERY_KEYS } from "@/constants/query-keys";
import categoryService from "@/services/category";
import locationService from "@/services/location";
import rentService from "@/services/rent";
import { Category, Location, Rent } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const ChartHomePage = () => {
  const [rents, setRents] = useState<Rent[]>([]);
  const [category, setCategory] = useState<Category[]>([]);
  const [location, setLocation] = useState<Location[]>([]);
  const { data: rentData, isLoading } = useQuery({
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
    setCategory(categoryData?.data?.items || []);
    setLocation(locationData?.data?.items || []);
  }, [rentData, categoryData, locationData]);

  return (
    <div>
      <RentList heading="Chart" isLoading={isLoading} rents={rents} />
    </div>
  );
};

export default ChartHomePage;
