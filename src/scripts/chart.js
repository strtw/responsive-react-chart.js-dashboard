var chart = {
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            data: [50, 50, 60, 40, 55, 38, 30],
            backgroundColor: ['rgba(144,217,202,.6)'],
            borderColor: ['#64b9a2'],
            borderWidth: 2
        }, {
            data: [65, 60, 40, 50, 37, 25, 40],
            backgroundColor: ['rgba(238,238,238,.6)'],
            borderColor: ['#E1E1E1'],
            borderWidth: 2
        }]
    },
    options: {
        maintainAspectRatio: true,
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false,
                    min: 20,
                    steps: 1,
                    stepValue: 10,
                    max: 70,
                    maxTicksLimit: 5
                }
            }]
        }
    }
};
export default chart;