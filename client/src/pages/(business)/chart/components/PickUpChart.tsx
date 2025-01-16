import { Location, Rent } from "@/types";
import { useEffect, useState } from "react";
import { ChartData } from "chart.js";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const PickUpChart = ({
  rents,
  locations,
  classname,
}: {
  rents: Rent[];
  locations: Location[];
  classname?: string;
}) => {
  const [chartData, setChartData] = useState<ChartData<"bar"> | null>(null);

  useEffect(() => {
    const filterLocations = locations.filter((location) =>
      rents.some((rent) =>
        rent.pickUpLocations.map((loc) => loc._id).includes(location._id)
      )
    );

    const labels = filterLocations.map((location) => location.title);
    const prices = filterLocations.map((location) => {
      const locationRents = rents.filter((rent) =>
        rent.pickUpLocations.map((loc) => loc._id).includes(location._id)
      );
      const total = locationRents.reduce(
        (sum, rent) => sum + (rent.discountPrice || rent.price),
        0
      );
      return locationRents.length ? total / locationRents.length : 0;
    });

    const colors = filterLocations.map(
      () =>
        `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
          Math.random() * 255
        )}, ${Math.floor(Math.random() * 255)}, 0.6)`
    );

    setChartData({
      labels,
      datasets: [
        {
          label: "Average Rent Price by PickUp Location",
          data: prices,
          backgroundColor: colors,
          borderColor: colors.map((color) => color.replace("0.6", "1")),
          borderWidth: 1,
        },
      ],
    });
  }, [rents, locations]);

  return (
    <div className={`${classname} `}>
      {chartData ? (
        <Bar
          data={chartData}
          options={{
            indexAxis: "y",
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
              },
            },
          }}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default PickUpChart;
