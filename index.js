let chart1 = $("#chart1");

new Chart(chart1, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [
            {
                data: [
                    values[0],
                    values[1],
                    values[2],
                    values[3],
                    values[4],
                    values[5],
                    values[6],
                    values[7],
                    values[8],
                    values[9]],
                cutout: '60%',
                spacing: 2,
                backgroundColor:
                    ['#29427a', '#225282', '#1d6188', '#20718b', '#2c7e8c',
                        '#3b8c8e' , '#4a9a8f', '#5ca890', '#72b490', '#8bc191'],
                borderColor:
                    ['#172647', '#14314e', '#123c55', '#144757', '#1b5059',
                        '#25595b' , '#31665f', '#407564', '#518167', '#668e6a'],
                borderWidth: 2,
                borderRadius: 5,
                hoverOffset: 10
            }
        ]
    },

    options: {
        layout: {
            padding: 20
        },
        plugins: {
            title: {
                text: `По данным Counterpoint за февраль 2021`,
                display: true
            },
            legend: {
                display: true,
                position: 'right',
                rtl: true
            }
        }
    }
});

