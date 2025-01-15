import { Category, Location, Rent } from "@/types";
import { useEffect, useState } from "react";
import { ChartData } from "chart.js";

const BarChart = ({
  rents,
  categories,
  classname,
}: {
  rents: Rent[];
  categories: Category[];
  classname?: string;
}) => {
  const [chartData, setChartData] = useState<ChartData<"bar"> | null>(null);

  useEffect(() => {
    const filterCategories = categories.filter((category) => rents);
  }, [rents]);
  return <div>BarChart</div>;
};

export default BarChart;
