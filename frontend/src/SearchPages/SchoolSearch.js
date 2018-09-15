import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import URL from '../URLHelperFunctions';

class SchoolSearch extends Component {

	constructor() {
		super();
		this.state = {
			"schools" : [
				"UT_Austin",
				"Rice"
			]
		}
	}

	render() {
		var queryString = URL.queryString();
		var schoolName = URL.plusToSpace(queryString.substring(queryString.indexOf("=")+1));
		let allSchools = this.state.schools.map(school => {
			return (
				<a href={"classSearch/" + school} className="listBoxLink">
					<div className="wide centered listBox">
						<h3>{school.replace("_", " ")}</h3>
					</div>
				</a>
			);
		});

		return(
			<div className="pageContent">
				<Header />
				<form className="wide searchbar centered" action="school.html">
					<input id="schoolSearchField" className="wideSearchField" type="text" placeholder="Search for your school" defaultValue={schoolName} name="school" />
					<button type="submit"><i className="fa fa-search"></i></button>
				</form>
				{allSchools}
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
			</div>
		);
	}
}
export default SchoolSearch;
