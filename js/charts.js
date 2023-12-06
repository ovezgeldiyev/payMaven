// doughnut chart
var ctx = document.getElementById("chart-doughnut").getContext("2d");

var myChart = new Chart(ctx, {
  type: "doughnut", // chart type
  data: {
    labels: ["Partner", "Kunden", "Free"],
    datasets: [
      {
        data: [20, 60, 20],
        label: "Status",
        backgroundColor: ["#154D70", "#6482A4", "#BDC1CA"],
        borderWidth: 0, // division line width. (default=1)
      },
    ],
  }, //data setting
  options: {
    rotation: 0,
    tooltips: {
      enabled: false,
    },
    legend: {
      title: {
        display: false,
      },
      display: false, // show legend (true/false)
      position: "right", //legend positon (top/bottom/left/right)
      labels: {
        usePointStyle: false, //choose legend shape.(true/false)
        boxWidth: 10, // width of coloured box(default=40). If you use {usePointStyle: true}, you can not this option.
        fontSize: 10,
        fontColor: "#000", // legend font color
        padding: 10, // Padding between labels.
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      tooltips: {
        enabled: false,
      },
    },
    aspectRatio: 1,
    responsive: true, // (true/false) responsive divice width
    tooltips: true, // (true/false) default=true
    cutout: "70%", // empty space percentage of doughnut's center
    layout: {
      padding: 0,
    },
  },
});

// line chart
var ctx = document.getElementById("myChart").getContext("2d");

var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Neue Kunden ",
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 10,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        fill: false,
        borderWidth: 4,
        data: [17, 58, 77, 86, 80, 71, 69, 75, 78, 67.5, 50, 14.4],
        borderColor: "#154D70",
        lineTension: 0.3,
      },
      {
        label: "Umsätze",
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 10,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        fill: false,
        borderWidth: 4,
        data: [29, 50, 62, 58.5, 35, 12, 6, 11, 22.4, 35, 50, 75.4],
        borderColor: "#B3CCE0",
        lineTension: 0.3,
      },
      {
        label: "Provisionen",
        borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 10,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        fill: false,
        borderWidth: 4,
        data: [95, 51, 22, 13, 22, 30, 28.8, 19, 9, 13, 25, 49],
        borderColor: "#6482A4",
        lineTension: 0.3,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          display: false,
          stepSize: 25,
        },
        grid: {
          tickColor: "transparent",
          drawBorder: false,
        },
      },
      x: {
        ticks: {
          color: [
            "#323743",
            "#323743",
            "#323743",
            "#323743",
            "#323743",
            "#323743",
            "#323743",
            "#323743",
            "#323743",
            "#154D70",
            "#323743",
            "#323743",
          ],
        },
        grid: {
          display: false,
        },
      },
    },
  },
});
