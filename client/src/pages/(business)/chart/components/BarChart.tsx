import { Category, Rent } from "@/types";
import { useEffect, useState } from "react";
import { ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
    const filterCategories = categories.filter((category) =>
      rents.some((rent) => rent.category?._id === category?._id)
    );

    const labels = filterCategories?.map((category) => category.title);
    const prices = filterCategories?.map((category) => {
      const categoryRents = rents.filter(
        (rent) => rent.category?._id === category?._id
      );
      const total = categoryRents.reduce(
        (sum, rent) => sum + (rent.discountPrice || rent.price),
        0
      );
      return categoryRents?.length ? total / categoryRents?.length : 0;
    });

    const colors = rents?.map(
      () =>
        `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, 0.6)`
    );

    setChartData({
      labels,
      datasets: [
        {
          label: "Total Rent Price by Category",
          data: prices,
          backgroundColor: colors,
          borderColor: colors?.map((color) => color.replace("0.6", "1")),
          borderWidth: 1,
        },
      ],
    });
  }, [rents]);

  return (
    <div className={`${classname} h-full`}>
      {chartData ? (
        <Bar
          height={"150"}
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              legend: { display: true, position: "top" },
            },
            scales: {
              y: { beginAtZero: true },
            },
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default BarChart;
