"use client";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { styled, useTheme } from "@mui/material/styles";

import Chart, { useChart } from "@/components/charts";
import { ApexOptions } from "apexcharts";

// ----------------------------------------------------------------------

const CHART_HEIGHT = 400;

const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ theme }) => ({
  height: CHART_HEIGHT,
  "& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject": {
    height: `100% !important`,
  },
  "& .apexcharts-legend": {
    height: LEGEND_HEIGHT,
    borderTop: `dashed 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

// ----------------------------------------------------------------------
interface AppCurrentVisitsProps {
  title: string;
  subheader: string;
  chart: {
    colors: string[];
    series: any[];
    options: any;
  };
}

export default function AppCurrentVisits({
  title,
  subheader,
  chart,
  ...other
}: AppCurrentVisitsProps) {
  const theme = useTheme();

  const { colors, series, options } = chart;

  const chartSeries = series.map((i) => i.value);

  interface ChartOptions {
    chart: {
      sparkline: {
        enabled: boolean;
      };
    };
    colors: string[];
    labels: string[];
    stroke: {
      colors: string[];
    };
    legend: {
      floating: boolean;
      position: string;
      horizontalAlign: string;
    };
    dataLabels: {
      enabled: boolean;
      dropShadow: {
        enabled: boolean;
      };
    };
    tooltip: {
      fillSeriesColor: boolean;
      y: {
        title: {
          formatter: (seriesName: string) => string;
        };
      };
    };
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: boolean;
          };
        };
      };
    };
  }

  interface ChartData {
    value: number[];
    label: string;
  }

  interface AppCurrentVisitsProps {
    title: string;
    subheader: string;
    chart: {
      colors: string[];
      series: ChartData[];
      options: Partial<ChartOptions>;
    };
  }

  const chartOptions: ChartOptions = useChart({
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    colors,
    labels: series.map((i) => i.label),
    stroke: {
      colors: [theme.palette.background.paper],
    },
    legend: {
      floating: true,
      position: "bottom",
      horizontalAlign: "center",
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
    },
    tooltip: {
      fillSeriesColor: false,
      y: {
        title: {
          formatter: (seriesName: string) => `${seriesName}`,
        },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} />

      <StyledChart
        dir="ltr"
        type="pie"
        series={chartSeries}
        options={chartOptions as ApexOptions}
        width="100%"
        height={280}
      />
    </Card>
  );
}

AppCurrentVisits.propTypes = {
  chart: PropTypes.object,
  subheader: PropTypes.string,
  title: PropTypes.string,
};
