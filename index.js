let chart2019 = $("#chart2019");
let chart2020 = $("#chart2020");

let pies = [chart2019, chart2020]

pies.forEach((name, i) => new Chart(name, {
    type: 'doughnut',
    data: {
        labels: labels,
        datasets: [
            {
                data: [
                    values[i][0],
                    values[i][1],
                    values[i][2],
                    values[i][3],
                    values[i][4],
                    values[i][5],
                    values[i][6],
                    values[i][7],
                    values[i][8],
                    values[i][9]],
                cutout: '60%',
                spacing: 2,
                rotation: 90,
                backgroundColor:
                    ['#602969', '#752d6f', '#8b3271', '#a1386f', '#b73d6b',
                        '#cc4664' , '#db565d', '#e46c5d', '#e88366', '#eb9973'],
                borderColor:
                    ['#311535', '#41193e', '#571f47', '#6d264b', '#832c4d',
                        '#99344a' , '#a74147', '#b15348', '#b4664f', '#b7775a'],
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
                text: `${2019+i} год`,
                display: true
            },
            legend: {
                display: true,
                reverse: true,
                position: 'right',
                rtl: true,
            }
        }
    }
}));

