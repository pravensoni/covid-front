import React, { Component } from 'react';
import { getToken } from '../utils/Common';
import CanvasJSReact from '../lib/canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints =[];

class DataChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {type:props.type};
    dataPoints =[];
  }

  componentWillReceiveProps(nextProps) {
  this.setState({ type:nextProps.type });
  }

  render() {
  		const options = {
  			theme: "light2",
  			title: {
  				text: ""
  			},
  			axisY: {
  				title: "Number of Cases",
  			},
  			data: [{
  				type: "line",
  				xValueFormatString: "MMM YYYY",
  				yValueFormatString: "#,##0.00",
  				dataPoints: dataPoints
  			}]
  		}
  		return (
  		<div>
  			<CanvasJSChart options = {options}
  				 onRef={ref => this.chart = ref}
  			/>
  			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
  		</div>
  		);
  	}

  	componentDidMount(){

      const options = {
        method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': getToken(),
            }
        }

  		var chart = this.chart;
      const api_url = process.env.REACT_APP_API;

  		fetch(api_url+'/monthwisedata/'+this.state.type,options)
  		.then(function(response) {
  			return response.json();
  		})
  		.then(function(data) {
  			for (var i = 0; i < data.length; i++) {
  				dataPoints.push({
  					x: new Date(data[i].x),
  					y: data[i].y
  				});
  			}

  			chart.render();
  		});
  	}

}

export default DataChart;
