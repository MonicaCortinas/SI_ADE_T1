
    
$(function () {
      Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Montserrat'
        }
    }
});
  
 $('#gastototal').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: 'Evolución del gasto total en Investigación de mercados'
        },
        subtitle: {
            text: 'Elaboración propia a partir de datos de <a target="_blank" href="http://www.aneimo.com/">www.aneimo.com</a>'
        },
        xAxis: [{
            categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}M€',
                style: {
                    color: 'rgba(0,129,195,.9)'
                }
            },
            title: {
                text: 'Gasto en España',
                style: {
                    color:'rgba(0,129,195,.9)'
                }
            }
        }, { // Secondary yAxis
            title: {
                text: 'Gasto Mundial',
                style: {
                    color: 'rgba(96,192,48,.9)'
                }
            },
            labels: {
                format: '{value} M$',
                style: {
                    color: 'rgba(96,192,48,.9)'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Gasto Total',
            type: 'column',
            yAxis: 1,
                        data: [33119,29598, 34544, 39466, 39660, 43285, 43864],
            tooltip: {
                valueSuffix: ' M$'
            }

        }, {
            name: 'Gasto España',
            type: 'spline',
                        data: [537,495, 528, 505, 464, 438,441],
            tooltip: {
                valueSuffix: 'M€'
            }
        }],
       credits: {
      enabled: false
  },
    });

        
        

    $('#tipos').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        
        title: {
            text: 'Método',
            align: 'center',
            fontSize: '12px',
            verticalAlign: 'bottom',
            y: -120
        },
         subtitle: {
            text: 'Elaboración propia a partir de datos de <a target="_blank" href="http://www.aneimo.com/">www.aneimo.com</a>',
            x: -20
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        
                        color: 'white',
                        textShadow: '0px 1px 1px black'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%']
            }
        },
        series: [{
            type: 'pie',
            name: 'Cuota',
            innerSize: '50%',
            data: [
                ['Encuesta',   45],
                ['Cualitativo',      16],
                ['Desk Research', 11],
                ['Observación online y otros',    23],
                ['Otros',     5],
                
            ]
        }],
         credits: {
      enabled: false
  },
    });
    
    
        

    $('#metodo').highcharts({
        chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Métodos de Suministro de Encuesta, Importancia Mundial 2014'
            },
         subtitle: {
            text: 'Elaboración propia a partir de datos de <a target="_blank" href="http://www.aneimo.com/">www.aneimo.com</a>',
            x: -20
        },
         legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: "Porcentaje",
                colorByPoint: true,
                data: [{
                    name: "Online",
                    y: 51,
                    sliced: true,
                }, {
                    name: "Teléfono",
                    y: 20,
                    
                    selected: true
                }, {
                    name: "Cara a cara",
                    y: 10.38
                }, {
                    name: "Móvil",
                    y: 6.6
                }, {
                    name: "Postal",
                    y: 2
                }]
            }],
         credits: {
      enabled: false
  },
        });
    
    
    $('#cualitativo').highcharts({
        chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Importancia de métodos cualitativos,  2014'
            },
         subtitle: {
            text: 'Elaboración propia a partir de datos de <a target="_blank" href="http://www.aneimo.com/">www.aneimo.com</a>',
            x: -20
        },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
         legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
            series: [{
                name: "Porcentaje",
                colorByPoint: true,
                data: [{
                    name: "Reuniones en grupo",
                    y: 64.7,
                    sliced: true,
                    selected: true
                }, {
                    name: "Cualitativa Online",
                    y: 17.6,
                    
                    
                }, {
                    name: "Entrevista en profundidad",
                    y: 11.8
                }, {
                    name: "Otros cualitativos",
                    y: 5.8
                }, ]
            }],
         credits: {
      enabled: false
  },
        });
   });

