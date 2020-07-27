var ctx = document.getElementById('canvas').getContext('2d');
new Chart(ctx, {
        type: 'line',
        data:{
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: 'حداقل قیمت',
                    fill: false,
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: 'green',
                    borderColor: 'cyan',
                    borderWidth: 3,
                },
                {
                    label: 'حداکثر قیمت',
                    fill: false,
                    data: [10, 29, 13, 6, 12, 7],
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 4,
                },
            ],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
);



