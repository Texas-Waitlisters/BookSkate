import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import URL from '../URLHelperFunctions';
import $ from 'jquery';

class SchoolSearch extends Component {

	constructor() {
		super();
		var queryString = URL.queryString();
		var schoolName = URL.plusToSpace(queryString.substring(queryString.indexOf("=")+1));
		this.state = {
			"schoolName": schoolName,
			"schools" : []
		}
	}

	componentWillMount() {
		console.log(URL.toUrl(this.state.schoolName));
		$.ajax({
			url: 'http://35.238.46.22:5000/schoolsearch?school=' + URL.toUrl(this.state.schoolName), dataType: 'json', cache: false, 
			success: function(data) {
				console.log(data);
				var state = this.state;
				state.schools = data.schools;
				this.setState(state);
			}.bind(this), error: function(xhr, status, error) {
			}
		});
	}

	noSchools() {
		return (
			<div className="wide centered centerText">No schools found.</div>
		);
	}

	render() {
		var queryString = URL.queryString();
		var schoolName = URL.plusToSpace(queryString.substring(queryString.indexOf("=")+1));
		let allSchools = this.state.schools.map(school => {
			return (
				<a href={"classSearch/" + school["id"]+"="+URL.toUrl(school["name"])} className="listBoxLink">
					<div className="wide listBox centered">
						<h3>{URL.convert(school["name"], "_", " ")}</h3>
					</div>
				</a>
			);
		});

		if (allSchools === "") {
			allSchools = this.noSchools();
		}

		return(
			<div className="pageContent">
				<Header />
				<div className="wide centered">
					<div className="search-field">
						<form className="wide searchbar centered" action="school.html">
							<input id="schoolSearchField" className="centered wide SearchField" type="text" placeholder="Search for your school" defaultValue={schoolName} name="school" />
							<button className="search"><i className="fa fa-search"></i></button>
						</form>
					</div>
					{allSchools}
				</div>
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
			</div>
		);
	}
}
export default SchoolSearch;
