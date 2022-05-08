let chart1 = $("#chart1");

new Chart(chart1, {
    type: 'line',
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
                fill: true,
                backgroundColor: "rgba(100, 220, 10, 0.05)",
                // 0.25, если в браузере используется белый фон
                borderColor: "#5EB804",
                borderWidth: 2,
                pointRadius: 0,
                pointHitRadius: 100
            }
        ]
    },

    options: {
        layout: {
          padding: 20
        },
        plugins: {
            title: {
                text: `Данные за период с ${labels[0]} по ${labels.at(-1)}`,
                display: true
            },
            legend: {
                display: false
            }
        },
        scales: {
            yAxis: {
                suggestedMin: 70,
                suggestedMax: 80
            }
        }
    }
});

