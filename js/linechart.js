var linechartdata = {
               // Y axes
               labels:["2010","2011","2012","2013","2014"],

               //X axes
               datasets: [
                {
                label : "Green",
                strokeColor : "#fff",
                pointColor : "Green",
        data:[150,200,250,250,200,150]
                },
                {
                label : "Red",
                strokeColor : "#fff",
                pointColor : "Red",
        data:[170,220,270,270,220,170]
                },
                {
                label : "Yellow",
                strokeColor : "#fff",
                pointColor : "Yellow",
        data:[130,180,230,230,180,130]
        }
               ]
           };



        var linechart = document.getElementById('linechart').getContext('2d');
        new Chart(linechart).Line(linechartdata);
