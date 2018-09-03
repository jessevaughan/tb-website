var ctx = document.getElementById("chart01");
var myChart01 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [36, 64],
      backgroundColor: [
        "#9293CC",
        "#E1E2E3"
      ]
    }]
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    cutoutPercentage: 70,
  },
});

var ctx = document.getElementById("chart02");
var myChart02 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [62, 38],
      backgroundColor: [
        "#9293CC",
        "#E1E2E3"
      ]
    }]
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    cutoutPercentage: 70,
  },
});

var ctx = document.getElementById("chart03");
var myChart03 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [79, 21],
      backgroundColor: [
        "#9293CC",
        "#E1E2E3"
      ]
    }]
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    cutoutPercentage: 70,
  },
});

var ctx = document.getElementById("chart04");
var myChart04 = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [39, 39, 16, 4, 2],
      backgroundColor: [
        "#00A3DA",
        "#71B1DD",
        "#9293CC",
        "#58595B",
        "#939598",
        "#BDBEC0"
      ]
    }]
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    }
  },
});

var ctx = document.getElementById("chart05");
var myChart05 = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [74, 26],
      backgroundColor: [
        "#00A3DA",
        "#939598"
      ]
    }]
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    }
  },
});

var ctx = document.getElementById("chart06");
var myChart06 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [81, 19],
      backgroundColor: [
        "#9293CC",
        "#E1E2E3"
      ]
    }]
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    cutoutPercentage: 80,
  },
});

var ctx = document.getElementById("chart07");
var myChart07 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [4, 96],
      backgroundColor: [
        "#9293CC",
        "#E1E2E3"
      ]
    }]
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    cutoutPercentage: 80,
  },
});

var ctx = document.getElementById("chart08");
var myChart08 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["0 Clicks", "1 Click", "2 Clicks", "3 Clicks", "4 Clicks", "5 Clicks", "6 Clicks", "7 Clicks", "8 Clicks", "9 Clicks", "10+ Clicks"],
    datasets: [{
      label: "% of total cookied users",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0, 163, 218, 1.000)",
      borderColor: "rgba(0, 163, 218, 1.000)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(116,177,216,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(116,177,216,1)",
      pointHoverBorderColor: "rgba(116,177,216,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [96.40, 2.50, .60, .20, .10, .10, 0, 0, 0, 0, .10],
      spanGaps: false,
    }, {
      label: "% of total clicks",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(146, 147, 204, 1.000)",
      borderColor: "rgba(146, 147, 204, 1.000)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(144,149,218,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(144,149,218,1)",
      pointHoverBorderColor: "rgba(144,149,218,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [0, 34.30, 15.20, 8.90, 5.80, 4.10, 3.10, 2.40, 2, 1.60, 22.70],
      spanGaps: false,
    }]
  },
  options: {
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: true,
          max: 100
        }
      }]
    },
  }
});

var ctx = document.getElementById("chart10");
var myChart10 = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["Email", "Display Advertising", "Content Advertising", "Paid Search", "Social Media Marketing", "Affiliate Marketing", "Social Media Advertising", "SEO", "Mobile Apps", "Video", "Another Digital Channel"],
    datasets: [{
      label: "% of advertisers who use",
      backgroundColor: "rgba(144,149,218,1)",
      data: [71, 64, 58, 55, 54, 52, 42, 41, 25, 24, 2],
    }]
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          max: 100,
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }
});


var ctx = document.getElementById("chart11");
var myChart11 = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["Direct Mail", "Printed Media", "Television/Radio", "Point of Sale", "Loyalty Scheme", "Voucher Coupons", "Another Offline Channel"],
    datasets: [{
      label: "% of advertisers who use",
      backgroundColor: "rgba(144,149,218,1)",
      data: [56, 50, 43, 37, 36, 34, 8],
    }]
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          max: 100,
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  }
});

var ctx = document.getElementById("chart12");
var myChart12 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [46, 26, 28],
      backgroundColor: [
        "#9293CC",
        "#BDBEC0",
        "#71B1DD"
      ]
    }]
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    cutoutPercentage: 70,
  },
});

var ctx = document.getElementById("chart13");
var myChart13 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [96, 4],
      backgroundColor: [
        "#9293CC",
        "#E1E2E3"
      ]
    }]
  },
  options: {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    cutoutPercentage: 70,
  },
});