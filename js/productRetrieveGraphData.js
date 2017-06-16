$(document).ready(
		function() {


			/*
			 * { horizontalLine : { name : 'line3', y : 1255, lineWidth : 3,
			 * color : 'green', shadow : false, } }, { verticalLine : { name :
			 * 'line4', x : new $.jsDate('2016-12-31 16:10:00.000') .getTime(),
			 * lineWidth : 3, color : 'pink', shadow : false, } } ];
			 */


			//BASE_URL must be initialized from the calling HTML page
      //A decommenter KNA
			// var req = $.ajax({
			// 	url : BASE_URL +"/products/"+ productId + '.json',
			// 	datagrphType : "json",
			// 	async : false
			// }).responseText;
			// var datagrph = $.parseJSON(req);
      //fin à decommenter KNA
      // var datagrph = JSON.parse('{"label":"DAYSTOXX Mai 2027","isin":"FR0013222676","uptoDate":"2018-06-08","fromDate":"2017-06-15","protectionBarrier":0.0,"couponBarrier":null,"reimbursementBarrier":0.0,"airbagBarrier":null,"dateValues":[["2000-12-29",1523.76],["2001-01-02",1505.75],["2001-01-03",1502.37]}');

      var datagrph = $.parseJSON('{"label":"DAYSTOXX Mai 2027","isin":"FR0013222676","uptoDate":"2018-06-08","fromDate":"2015-06-05","protectionBarrier":1000.0, "protectionDate":"2016-07-01", "protectionEnd": "2018-01-02", "couponBarrier":null,"reimbursementBarrier":0.0,"airbagBarrier":null,"dateValues":[["2015-06-05",1723.76], ["2015-12-29",1523.76], ["2016-12-29",523.76], ["2017-12-29",1523.76],["2018-01-02",1505.75]]}');




			var graphsList =[];
			//We want to draw the graph even in the absence of datagrph
			if(datagrph.dateValues!= null){
				graphsList.push(datagrph.dateValues);
			}

      //Barrière de protection
			var protec;
			if (datagrph.protectionBarrier != null) {
				protec = [ [ datagrph.protectionDate, datagrph.protectionBarrier ],
						[ datagrph.protectionEnd, datagrph.protectionBarrier ] ];
				graphsList.push(protec);
			}

      //Prochaine date d'observation
			var reimburse;
			if (datagrph.reimbursementBarrier != null) {
				reimburse = [ [ datagrph.protectionEnd, datagrph.protectionBarrier],
						[ datagrph.uptoDate, datagrph.protectionBarrier ] ];
				graphsList.push(reimburse);
			}

      // var protectInfinite;
      // if (datagrph.protectionInfinite != null) {
      //   protectInfinite = [ [ datagrph.uptoDate, datagrph.protectionBarrier ],
      //       [ datagrph.protectionEnd, datagrph.protectionBarrier ] ];
      //   graphsList.push(protec);
      // }

			var coupon;
			if (datagrph.couponBarrier != null) {
				coupon = [ [ datagrph.fromDate, datagrph.couponBarrier],
						[ datagrph.uptoDate, datagrph.couponBarrier ] ];
				graphsList.push(coupon);
			}
			var airbag;
			if (datagrph.airbagBarrier != null) {
				airbag = [ [ datagrph.fromDate, datagrph.airbagBarrier],
						[ datagrph.uptoDate, datagrph.airbagBarrier ] ];
				graphsList.push(airbag);
			}

			var dummy;
			if(graphsList.length == 0){
				dummy = [ [ datagrph.fromDate, 0],
					[ datagrph.uptoDate, 0 ] ];
				graphsList.push(dummy);
			}




			var plot1 = $.jqplot('chartdiv', graphsList, {
				title : datagrph.label + " ( " + datagrph.isin + " )",
				axes : {
					xaxis : {
						renderer : $.jqplot.DateAxisRenderer,
						max : new Date(new Date(datagrph.uptoDate).getTime()
								+ (10 * 24 * 60 * 60 * 1000)), // right side 10
						// day padding

						  min : new Date(new Date(datagrph.fromDate).getTime() -
						  (10 * 24 * 60 * 60 * 1000)), // left side 10

						tickOptions : {
							formatString : '%d/%m/%Y',
						}
					},
				},
				highlighter : {
					show : true,
					sizeAdjust : 7.5,
				},
				series : [ {
					neighborThreshold : -1,
					lineWidth : 4,
				} ],
				seriesDefaults : {
					showMarker : false,
          shadow : false,
					pointLabels: {
						show : false,
					}
				},
				seriesColors: ["#1044FF", "#7FFF00", "black", "#027997", "#CF3501", "#027997"],
				cursor : {
					show : true,
					zoom : true,
					showTooltip : false,
				},


			});

			$('.button-reset').click(function() {
				plot1.resetZoom()
			});

		});
