var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var myChart = new Chart(ctx, {
   type: 'line',
   data: {
      labels: ["2010", "2011", "2012", "2013"],
      datasets: [{
         label: 'Dataset 1',
         data: [150, 200, 250, 150],
         color: "#878BB6",
      }, {
         label: 'Dataset 2',
         data: [250, 100, 150, 10],
         color: "#4ACAB4",
      }]
   }
});
