
    
$(function () {
      Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Montserrat'
        }
    }
});
    
$('#TIC').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Número de empresas en el sector TIC por ramas de actividad del sector TIC y periodo'
        },
        subtitle: {
            text: 'Fuente: <a href="http://www.ine.es/jaxi/Datos.htm?path=/t14/p197/e01/evoluc/a2014/l0/&file=01001.px" target="_blank">Elaboración propia con Datos INE</a>'
        },
        xAxis: {
            categories: ['2008', '2009', '2010', '2011', '2012', '2013amb_2012', '2013_ambampliado', '2014',],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Nº de Empresas',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' '
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
           layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Industrias Manufactureras',
            data: [980,892, 927, 824, 765, 781, 1415, 1440]
        }, {
            name: 'Servicios',
            data: [42728, 41186, 42524, 43474, 47453, 48448, 48448, 50764]
        }],
    });
    
 $('#CIFRA').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Cifra de negocios en el sector TIC por ramas de actividad del sector TIC y periodo'
        },
        subtitle: {
            text: 'Fuente: <a href="http://www.ine.es/jaxi/Datos.htm?path=/t14/p197/e01/evoluc/a2014/l0/&file=01001.px" target="_blank">Elaboración propia con Datos INE</a>'
        },
        xAxis: {
            categories: ['2008', '2009', '2010', '2011', '2012', '2013amb_2012', '2013_ambampliado', '2014',],
            title: {text: null}},
        yAxis: {
            min: 0,
            title: {
                text: 'Nº de Empresas',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }},
        tooltip: {
            valueSuffix: ' '  },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true            }
            }
        },
        legend: {
           layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
          series: [{
            name: 'Industrias Manufactureras',
            data: [6388002,3941724, 4170006, 2467683, 1832123, 1748705, 1780656, 1920356]
        }, {
            name: 'Servicios',
            data: [93757608, 88115434, 87256971, 85927515, 81339828, 78448313, 78448313, 79668548]
        },],
    });    

   
   })

