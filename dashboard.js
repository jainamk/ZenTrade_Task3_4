google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const chartData1 = google.visualization.arrayToDataTable([
    ["Country", "$"],
    ["Everett", 58000],
    ["Seattle", 55000],
    ["Lynnwood", 49500],
    ["Bothell", 42000],
    ["Mukilteo", 39000],
    ["Edmonds", 22000],
  ]);

  const chartData2 = google.visualization.arrayToDataTable([
    ["Job Type", "$"],
    ["Service Plumbing", 140000],
    ["Bid Work HVAC", 115000],
    ["Service HVAC", 79000],
    ["Bid Work Plumbing", 77000],
    ["HWT Replacement", 39000],
    ["Maintenance", 37000],
    ["Material Sale", 1000]
  ]);

  // Set Options
  const options = {
    colors: ['#007958'],
    hAxis: {
      title: "Revenue For November 2019 ($)",
      minValue: 0,
      maxValue: 60000,
      gridlines: {
        count: 9,
        color: '#e0e0e0'
      }
    }
  };

  const options2 = {
    colors: ['#007958'],
    hAxis: {
      title: "Revenue For November 2019 ($)",
      minValue: 0,
      maxValue: 140000,
      gridlines: {
        count: 7,
        color: '#e0e0e0'
      }
    }
  };


  const chart1 = new google.visualization.BarChart(
    document.getElementById("chart1")
  );
  const chart2 = new google.visualization.BarChart(
    document.getElementById("chart2")
  );

  chart1.draw(chartData1, options);
  chart2.draw(chartData2, options2);
}
