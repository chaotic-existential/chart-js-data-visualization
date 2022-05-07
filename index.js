let chart1990 = $("#chart1990");
let chart2000 = $("#chart2000");
let chart2010 = $("#chart2010");
let chart2020 = $("#chart2020");

let pies = [chart1990, chart2000, chart2010, chart2020]

pies.forEach((name, i) => new Chart(name, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [
            {
                data: [
                    values[0][i],
                    values[1][i],
                    values[2][i]],
                cutout: '60%',
                spacing: 4,
                rotation: 90,
                backgroundColor: ['#bc5290', '#58508d', '#ffa600'],
                borderColor: ['#971d65', '#38335a', '#724900'],
                borderWidth: 3,
                borderRadius: 10,
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
                text: `${1990+i*10} год`,
                display: true
            },
            legend: {
                display: true
            }
        }
    }
}));

