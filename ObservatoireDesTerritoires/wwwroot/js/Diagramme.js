﻿window.onload = function () {
    var table = document.getElementById("tableau");
    var libel = table.rows[1].cells[0].innerHTML;;
    var datas = [];
    var villes = [];
    for (var i = 1; i < table.rows.length; i++) {
        var value = parseFloat(table.rows[i].cells[1].innerHTML);
        var ville = table.rows[i].cells[2].innerHTML;
        datas.push(value);
        villes.push(ville);
    }
    console.log("Nombre de villes: " + villes.length);
    var batonCtx = document.getElementById("myBaton").getContext('2d');
    var myBarChart = new Chart(batonCtx, {
        type: 'bar',
        data: {
            labels: villes,
            datasets: [{
                label: libel,
                data: datas,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ],
                x: {
                    ticks: {
                        display: villes.length > 15 ? false : true
                    }
                }
            },
        }
    });
    var camembertCtx = document.getElementById("myCamembert").getContext('2d');
    var myCamembertChart = new Chart(camembertCtx, {
        type: 'pie',
        data: {
            labels: villes,
            datasets: [{
                label: libel,
                data: datas,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
            plugins: {
                legend: {
                    display: villes.length > 15 ? false : true
                }
            }
        }

    });
}