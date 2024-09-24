"use client"
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import PropTypes from 'prop-types';

const GraphChart = ({ apidata ,timeRange} :any) => {
    const [series, setSeries] = useState([{ name: "Interactions", data: [] }]);
    const [options, setOptions] = useState({
        chart: {
            height: 350,
            type: "line",
        },
        stroke: {
            width: 5,
            curve: "smooth",
        },
        xaxis: {
            categories: [],
            labels: {
                rotate: -45,
                style: {
                    colors: "#666",
                    fontSize: "12px",
                },
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                gradientToColors: ["#FDD835"],
                shadeIntensity: 1,
                type: "horizontal",
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
        dataLabels: {
            enabled: true,
        },
        tooltip: {
            shared: false,
            intersect: true,
        },
        zoom: {
            enabled: true,
        },
    });

    useEffect(() => {
      let interactionsData = [];
      let categories = [];
  
      if (timeRange === 'weekly' && apidata.interactionsByPeriod) {
          interactionsData = apidata.interactionsByPeriod.map(item => item.count);
          categories = apidata.interactionsByPeriod.map(item => `Day ${item.day}`);
      }else if (timeRange === 'monthly' && apidata.interactionsByPeriod){
        interactionsData = apidata.interactionsByPeriod.map(item => item.count);
        categories = apidata.interactionsByPeriod.map(item => `Day ${item.week}`);
      }else if (timeRange === 'yearly' && apidata.interactionsByPeriod){
        interactionsData = apidata.interactionsByPeriod.map(item => item.count);
        categories = apidata.interactionsByPeriod.map(item => `Day ${item.month}`);
      }
       else if (apidata?.weeklyInteractions) {
          interactionsData = apidata.weeklyInteractions.map(item => item.count);
          categories = apidata.weeklyInteractions.map(item => `Day ${item.day}`);
      } else {
          interactionsData = [0]; 
          // Default or fallback data
          categories = ['No Data'];
      }
  
      setSeries([{ name: "Interactions", data: interactionsData }]);
      setOptions(prevOptions => ({
          ...prevOptions,
          xaxis: {
              ...prevOptions.xaxis,
              categories: categories.length > 0 ? categories : ['No Data'],
          },
      }));
  }, [apidata, timeRange]);

    return (
        <div>
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    );
};

GraphChart.propTypes = {
    apidata: PropTypes.object.isRequired,
};

export default GraphChart;
