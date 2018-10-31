import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import URL from '../URLHelperFunctions';
import $ from 'jquery';

class ClassSearchSelect extends Component {

	constructor() {
		super();
		let queryString = URL.lastUrlItem(0);
		let schoolId = queryString.substring(0, queryString.indexOf("="));
		this.state = {
			"schoolId": schoolId, 
			"schoolName": ""
		}
	}

	componentWillMount() {
		$.ajax({
			url: 'http://35.238.46.22:5000/getschoolname?key=' + this.state.schoolId, dataType: 'json', cache: false, 
			success: function(data) {
				var state = this.state;
				state.schoolName = data.school[0].name;
				this.setState(state);
			}.bind(this), error: function(xhr, status, error) {
			}
		});
	}

	render() {
		var buttonLinkDestination = "" + URL.lastUrlItem(0) + "/By?";

		return(
			<div className="pageContent">
				<Header />
				<h1 className="narrow centered centerText">{this.state.schoolName}</h1>

				<a className="buttonLink" href={buttonLinkDestination + "Name"}>
					<div className="narrow centered searchByButton"><h3>
						By Course Name
					</h3></div>
				</a>

				<a className="buttonLink" href={buttonLinkDestination + "Professor"}>
					<div className="narrow centered searchByButton"><h3>
						By Professor
					</h3></div>
				</a>
				
				<a className="buttonLink" href={buttonLinkDestination + "CourseNum"}>
					<div className="narrow centered searchByButton"><h3>
						By Course Number
					</h3></div>
				</a>

				<a className="buttonLink" href={buttonLinkDestination + "CourseId"}>
					<div className="narrow centered searchByButton"><h3>
						By Course ID
					</h3></div>
				</a>

				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
			</div>
		);
	}
}
export default ClassSearchSelect;
