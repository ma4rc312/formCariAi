import ReactApexChart from 'react-apexcharts'
import { useEffect, useState } from 'react'

const CHART_CATEGORIES = ['HO', 'HED', 'HEN']
const CHART_SERIES_NAME = 'Horas trabajadas'

export default function ChartMain({ data }) {
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'bar',
    },
    xaxis: {
      categories: CHART_CATEGORIES,
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: CHART_SERIES_NAME,
      data: [0, 0, 0],
    },
  ]);

  useEffect(() => {
    if (data.length !== 0) {
      const categories = Object.keys(data);
      const seriesData = Object.values(data);

      setChartSeries([
        {
          name: CHART_SERIES_NAME,
          data: seriesData,
        },
      ]);

      setOptions({
        chart: {
          height: 350,
          type: 'bar',
        },
        xaxis: {
          categories,
        },
      })
    }
  }, [data])

  return (
    <>
      <ReactApexChart options={options} series={chartSeries} type="bar" width={500} />
    </>
  )
}
