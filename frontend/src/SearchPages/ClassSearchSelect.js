import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import URL from '../URLHelperFunctions';

class ClassSearchSelect extends Component {

	constructor() {
		super();
		this.state = {
			"schools" : []
		}
	}

	render() {
		var schoolName = URL.toString(URL.lastUrlItem(0));
		var buttonLinkDestination = "" + URL.lastUrlItem(0) + "/By?";

		return(
			<div className="pageContent">
				<Header />
				<h1 className="narrow centered centerText">{schoolName}</h1>

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
