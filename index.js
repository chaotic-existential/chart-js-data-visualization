let chart1 = $("#chart1"); // Рынок по производству полупроводников
let chart2 = $("#chart2"); // Международные поставки микросхем
let chart3 = $("#chart3"); // Доходы компании TSMC

new Chart(chart1, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [
            {
                data: [
                    values1[0],
                    values1[1],
                    values1[2],
                    values1[3],
                    values1[4],
                    values1[5],
                    values1[6],
                    values1[7],
                    values1[8],
                    values1[9]],
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
        plugins: {
            title: {
                text: `Февраль 2021 по данным Counterpoint`,
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

new Chart(chart2, {
    type: 'line',
    data: {
        labels: labels2,
        datasets: [
            {
                data: [
                    values2[0],
                    values2[1],
                    values2[2],
                    values2[3],
                    values2[4],
                    values2[5],
                    values2[6],
                    values2[7],
                    values2[8]],
                fill: true,
                backgroundColor: "rgba(129, 179, 134, 0.05)",
                // 0.25, если в браузере используется белый фон
                borderColor: "#a6e7ad",
                borderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 100
            }
        ]
    },

    options: {
        layout: {
            padding: 10
        },
        plugins: {
            title: {
                text: `Период с ${labels2[0]} по ${labels2.at(-1)} по данным IC Insights`,
                display: true
            },
            legend: {
                display: false
            }
        },
        scales: {
            yAxis: {
                title: {
                    text: `миллиарды единиц поставок`,
                    display: true
                },
                suggestedMin: 70,
                suggestedMax: 450
            }
        }
    }
});

new Chart(chart3, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [
            {
                data: [
                    values[0][0],
                    values[0][1],
                    values[0][2],
                    values[0][3],
                    values[0][4],
                    values[0][5],
                    values[0][6],
                    values[0][7],
                    values[0][8],
                    values[0][9],
                    values[0][10]],
                fill: true,
                backgroundColor: "rgba(39, 65, 121, 0.05)",
                // 0.25, если в браузере используется белый фон
                borderColor: "#416ac6",
                borderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 100
            }
        ]
    },

    options: {

        plugins: {
            title: {
                text: `Период с ${labels[0]} по ${labels.at(-1)}`,
                display: true
            },
            legend: {
                display: false
            }
        },
        scales: {
            yAxis: {
                title: {
                    text: `млн.долларов`,
                    display: true
                }
            }
        }
    }
});