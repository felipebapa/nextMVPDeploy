"use client";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import Chart, { useChart } from "@/components/charts";
import { ApexOptions } from "apexcharts";

// ----------------------------------------------------------------------
interface AppWebsiteVisitsProps {
  title: string;
  subheader: string;
  chart: {
    labels: string[];
    colors: string[];
    series: any[];
    options: any;
  };
}

export default function AppWebsiteVisits({
  title,
  subheader,
  chart,
  ...other
}: AppWebsiteVisitsProps) {
  const { labels, colors, series, options } = chart;

  const chartOptions: ChartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: "16%",
      },
    },
    fill: {
      type: series.map((i) => i.fill) as FillType[],
    },
    labels,
    xaxis: {
      type: "datetime",
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => {
          if (typeof value !== "undefined") {
            return `${value.toFixed(0)} visits`;
          }
          return value;
        },
      },
    },
    ...options,
  });

  interface ChartOptions {
    colors: string[];
    plotOptions: {
      bar: {
        columnWidth: string;
      };
    };
    fill: {
      type: FillType[];
    };
    labels: string[];
    xaxis: {
      type: string;
    };
    tooltip: {
      shared: boolean;
      intersect: boolean;
      y: {
        formatter: (value: number) => string | number;
      };
    };
  }

  type FillType = string;

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          dir="ltr"
          type="line"
          series={series}
          options={chartOptions as ApexOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}

AppWebsiteVisits.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
