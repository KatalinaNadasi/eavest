$(document).ready(
		function() {

// custom canvas : https://stackoverflow.com/questions/14152409/jqplot-dont-want-to-display-show-the-y-axis

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

      var datagrph = $.parseJSON('{"label":"DAYSTOXX Mai 2027", "testYline": "23.76", "testDate": "2015-06-08", "isin":"FR0013222676","uptoDate":"2018-06-08","fromDate":"2015-06-05", "launchDate":"2016-08-15", "protectionBarrier":1000.0, "protectionDate":"2016-07-01", "todayDate": "2017-06-21", "reimburseRate": "2017-10-21", "couponBarrier":null,"reimbursementBarrier":0.0,"airbagBarrier":null,"dateValues":[["2015-06-05",1723.76], ["2015-06-29",1523.76], ["2015-12-29",1023.76], ["2017-01-29",523.76], ["2017-02-22",1523.76], ["2017-03-29",523.76], ["2017-04-29",1523.76], ["2017-05-29",23.76], ["2017-06-21",523.76] ]}');

			var todayDate = datagrph.todayDate;
			var euroStoxx = datagrph.dateValues.slice([-1]);

			var protectionBarrier = datagrph.protectionBarrier;

			var graphsList =[];
			//We want to draw the graph even in the absence of datagrph
			if(datagrph.dateValues!= null){
				graphsList.push(datagrph.dateValues);
			}

      //Barrière de protection (ligne verte)
			var protec;
			if (datagrph.protectionBarrier != null) {
				protec = [ [ datagrph.protectionDate, datagrph.protectionBarrier ],
						[ datagrph.uptoDate, datagrph.protectionBarrier ] ];
				graphsList.push(protec);
			}

      //Prochaine date d'observation (ligne noire)
			var reimburse;
			if (datagrph.reimbursementBarrier != null) {
				reimburse = [ [ datagrph.todayDate, datagrph.protectionBarrier],
						[ datagrph.reimburseRate, datagrph.protectionBarrier ] ];
				graphsList.push(reimburse);
			}

			// Date de sortie du produit (pblm : n'affiche pas la valeur sur le graph)
			// var launchDate = [datagrph.launchDate];
			// 	graphsList.push(launchDate);

			// date de sortie du produit
			var testd;
			if (datagrph.protectionBarrier != null) {
				testd = [ [ datagrph.testDate, datagrph.testYline ],
						[ datagrph.uptoDate, datagrph.testYline ] ];
				graphsList.push(testd);
			}


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

			var options = {
				// title : datagrph.label + " ( " + datagrph.isin + " )",
				seriesDefaults: {
					 showMarker: false,
					 rendererOptions: {
							smooth: false,
							animation: { show: true  }
					 },
					 pointLabels: {
						 show: false,
					 }
				},
				canvasOverlay: {
                    show: true,
                    objects: [
											{
												verticalLine: {
												name: 'distance',
												// x: new $.jsDate().getTime(todayDate),
												x: new $.jsDate('2017-06-21').getTime(),

												// min : new $.jsDate().getTime(euroStoxx),
												// max : new $.jsDate().getTime(protectionBarrier),
												formatString : '%c %%',
												lineWidth: 1,
												color: 'black',
												shadow: false,
												ymin: 524,
                    		ymax: 1000
												}
									}          ]
                },
				axes : {
					xaxis : {
						renderer : $.jqplot.DateAxisRenderer,
						tickRenderer: $.jqplot.CanvasAxisTickRenderer,
						max : new Date(new Date(datagrph.uptoDate).getTime()
								+ (10 * 24 * 60 * 60 * 1000)), // right side 10
						// day padding

						  min : new Date(new Date(datagrph.fromDate).getTime() -
						  (10 * 24 * 60 * 60 * 1000)), // left side 10

						tickOptions : {
							angle: -40,
							formatString : '%d/%m/%Y',
							fontSize: '7pt',
							showGridline: false
						}
					},
					yaxis : {
						showTicks : true,
						tickOptions : {
							fontSize: '7pt',
							showGridline: true,
						}
					}
				},
				grid: {
	       background: 'transparent',
				 gridLineColor : '#000',
				 shadow: false,
				 drawBorder: false,
      	 drawGridlines: true,
	     },
				highlighter : {
					show : true,
					sizeAdjust : 7.5,
				},
				series : [ { neighborThreshold : -1, lineWidth : 4, color:'#1044FF'},
									{ neighborThreshold : -1, lineWidth : 4, color:'#7FFF00'},
									{ neighborThreshold : -1, lineWidth : 3, color:'black'},
									{ neighborThreshold : -1, lineWidth : 3, showMarker: true, showLine: false, color:'red'}
				 ],
				cursor : {
					show : true,
					zoom : true,
					showTooltip : false,
				},

			};

			var plot1 = $.jqplot('chartdiv', graphsList, options);


			$('.button-reset').click(function() {
				plot1.resetZoom()
			});
		});
