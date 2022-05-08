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
                    values[8]],
                fill: true,
                backgroundColor: "rgba(2, 130, 130, 0.05)",
                // 0.25, если в браузере используется белый фон
                borderColor: "#04b8b2",
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
                text: `Период с ${labels[0]} по ${labels.at(-1)} по данным IC Insights`,
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

