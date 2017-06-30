$(document).ready(
		function() {

			//BASE_URL must be initialized from the calling HTML page
      //A decommenter KNA
			var req = $.ajax({
				url : BASE_URL +"/products/"+ productId + '.json',
				datagrphType : "json",
				async : false
			}).responseText;
			var datagrph = $.parseJSON(req);
      //fin à decommenter KNA

      // var datagrph = $.parseJSON('{"label":"DAYSTOXX Mai 2027", "testYline": "23.76", "testYlineMin": "524", "testYlineMax": "1000", "isin":"FR0013222676","uptoDate":"2018-06-08","fromDate":"2015-06-05", "launchDate":"2016-08-15", "protectionBarrier":1000.0, "nextObsDate": 1000.0, "protectionDate":"2016-07-01", "todayDate": "2017-06-21", "reimburseRate": "2017-10-21", "couponBarrier":null,"reimbursementBarrier":0.0,"airbagBarrier":null,"dateValues":[["2014-06-05",1723.76], ["2015-06-29",1523.76], ["2015-12-29",1023.76], ["2017-01-29",523.76], ["2017-02-22",1523.76], ["2017-03-29",523.76], ["2017-04-29",1523.76], ["2017-05-29",23.76], ["2017-06-21",523.76] ]}');

			var todayDate = datagrph.todayDate;
			var euroStoxx = datagrph.dateValues.slice([-1]);
			var productCour = datagrph.dateValues;
			var launchDate = datagrph.launchDate;
			var protectionBarrier = datagrph.protectionBarrier;


// ESSAI CALCUL XAXIS FOR LAUNCHDATE
// réponse plus proche en max = 2017-06-21 (pair[0])
// launchdate = 2016-08-15
// valeur la plus proche en min : 2015-12-29
// valeur la plus proche en max : 2017-01-29

// var datagrph = $.parseJSON('{"label":"Yo", "fromDate":"2015-06-05", "launchDate":"2016-08-15", "dateValues":[["2014-06-05",1723.76], ["2015-06-29",1523.76], ["2015-12-29",1023.76], ["2017-01-29",523.76], ["2017-02-22",1523.76], ["2017-03-29",523.76], ["2017-04-29",1523.76], ["2017-05-29",23.76], ["2017-06-21",523.76] ]}');
// var productCour = datagrph.dateValues;

// var launchDate = +new Date(datagrph.launchDate+" T00:00");
//
// var before,after,diffmin,diffmax;
//
// productCour.forEach(function(pair){
//
//  var current=+(new Date(pair[0]+"T00:00"));
//  var difference=launchDate-current;
//
//  if(difference>0){
//     //launchDate not reached
//     if(!diffmin || diffmin>difference){
//        //weve got a new before
//        before=pair[0];
//        diffmin=difference;
//     }
//   }else{
//     //launchDate already reached
//     if(!diffmax || diffmax<difference){
//        //weve got a new after
//        after=pair[0];
//        diffmax=difference;
//     }
//   }
// });


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

			//distance (verticalLine)
			var distance;
			if (datagrph.protectionBarrier != null) {
				distance = [ [ datagrph.todayDate, datagrph.testYlineMin ],
						[ datagrph.todayDate, datagrph.protectionBarrier ] ];
				graphsList.push(distance);
			}

			// date de conservation initiale
			var launch;
			if (datagrph.protectionBarrier != null) {
				launch = [ [ datagrph.launchDate, datagrph.testYline ],
						[ datagrph.launchDate, datagrph.testYline ] ];
				graphsList.push(launch);
			}

			// prochaine date d'observation
			var obsdate;
				obsdate = [ [ datagrph.reimburseRate, datagrph.nextObsDate ],
						[ datagrph.reimburseRate, datagrph.nextObsDate ] ];
				graphsList.push(obsdate);

// code de Guru
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
					 },
				},
				canvasOverlay: {
                    show: true,
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
				series : [
					{ neighborThreshold : -1,
					lineWidth : 4,
					color:'#1044FF',
					rendererOptions: {
						 smooth: false,
						 animation: { show: true  },
						 showDataLabels: true,
						 dataLabels: 'value',
						 fill: false
					},
					highlighter: {
						show: true,
						sizeAdjust: 7.5,
						showMarker: false,
						tooltipAxes: 'xy',
						yvalues: 4,
						formatString:'<table class="jqplot-highlighter"> \
													<tr><td>date:</td><td>%s&nbsp;&nbsp;&nbsp;&nbsp;</td></tr> \
													<tr><td>&nbsp;&nbsp;&nbsp;&nbsp;valeur:</td><td>%s</td></tr></table>'
													},},
									{ neighborThreshold : -1,
										lineWidth : 4,
										color:'#7FFF00',
										highlighter: {
											show: true,
											sizeAdjust: 7.5,
											showMarker: false,
											tooltipAxes: 'xy',
											yvalues: 4,
											formatString:'<table class="jqplot-highlighter"> \
																		<tr><td>date:</td><td>%s&nbsp;&nbsp;&nbsp;&nbsp;</td></tr> \
																		<tr><td>   &nbsp;&nbsp;&nbsp;&nbsp;valeur:</td><td>%s</td></tr></table>'
																		},},
									{ neighborThreshold : -1,
										lineWidth : 3,
										color:'black',
										highlighter: {
											show: true,
											sizeAdjust: 7.5,
											showMarker: false,
											tooltipAxes: 'xy',
											yvalues: 4,
											formatString:'<table class="jqplot-highlighter"> \
																		<tr><td>date:</td><td>%s&nbsp;&nbsp;&nbsp;&nbsp;</td></tr> \
																		<tr><td> &nbsp;&nbsp;&nbsp;&nbsp;valeur:</td><td>%s</td></tr></table>'
																		},},
									{ neighborThreshold : -1,
										lineWidth : 1,
										color:'black',
										showMarker: true,
										markerOptions: { style: 'diamond' },
										highlighter: {
											show: true,
											sizeAdjust: 7.5,
											showMarker: false,
											tooltipAxes: 'xy',
											yvalues: 4,
											formatString:'<table class="jqplot-highlighter"> \
																		<tr><td>date:</td><td>%s&nbsp;&nbsp;&nbsp;&nbsp;</td></tr> \
																		<tr><td> &nbsp;&nbsp;&nbsp;&nbsp;valeur:</td><td>%s</td></tr></table>'
																		},},
									{ neighborThreshold : -1,
										lineWidth : 3,
										showMarker: true,
										showLine: false,
										color:'black',
										// legend: {
										// 	show: true,
      							// 	placement: 'inside'
    								// },
										highlighter: {
									    show: true,
									    sizeAdjust: 7.5,
									    showMarker: false,
									    tooltipAxes: 'xy',
									    yvalues: 4,
									    formatString:'<table class="jqplot-highlighter"> \
									                  <tr><td>date:</td><td>%s&nbsp;&nbsp;&nbsp;&nbsp;</td></tr> \
									                  <tr><td> &nbsp;&nbsp;&nbsp;&nbsp;valeur:</td><td>%s</td></tr></table>'
																		},
									},
									{ name: 'Prochaine date d\'observation',
										neighborThreshold : -1,
										lineWidth : 3,
										showMarker: true,
										showLine: false,
										color:'black',
										highlighter: {
											show: true,
											sizeAdjust: 7.5,
											showMarker: false,
											tooltipAxes: 'xy',
											yvalues: 4,
											formatString:'<table class="jqplot-highlighter"> \
																		<tr><td>Prochaine date d\'observation: &nbsp;&nbsp;<td><td>%s</td></tr> \
																		</table>'
																		},},
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
