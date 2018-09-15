import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import URL from '../URLHelperFunctions';
import $ from 'jquery';

class ClassSearch extends Component {

	constructor() {
		super();
		var queryString = URL.queryString();
		this.state = {
			"schoolName": URL.getSchoolName(),
			"queryString" : queryString,
			"classes" : []
		};
	}

	componentWillMount() {
		$.ajax({
			url: 'http://35.202.103.55/getclasses?school=' + URL.toUrl(this.state.schoolName) + "&" + URL.convert(this.state.queryString, "+", "_"), dataType: 'json', cache: false, 
			success: function(data) {
				var state = this.state;
				state.classes = data.classes;
				console.log(state.schools);
				this.setState(state);
			}.bind(this), error: function(xhr, status, error) {
			}.bind(this)
		});
	}

	noClasses() {
		return (
			<div className="wide centered centerText">No classes found.</div>
		);
	}

	noSearchTerms() {
		return (
			<div className="wide centered centerText">Please type in search terms.</div>
		);
	}

	render() {
		var queryString = URL.queryString();
		var schoolName = this.state.schoolName;
		var searchMode = this.state.queryString;
		if (searchMode.includes("=")) {
			searchMode = queryString.substring(0, queryString.indexOf("="));
		}
		var searchTerms = URL.toUrl(URL.plusToSpace(queryString));
		let allClasses = this.state.classes.map(course => {
			return (
				<a href={"/class/" + course.key} className="listBoxLink" key={course.key}>
					<div className="wide centered listBox">
						<h3>{URL.toString(course.name)}</h3>
						<p>{course.course_num + " - " + course.prof}<br/>
						{course.unique_id}</p>
					</div>
				</a>
			);
		});
		if (allClasses == "") {
			allClasses = this.noClasses();
		}

		let searchModeDisplay = {
			"Name": "Class Name",
			"Professor": "Professor",
			"ClassNum": "Course Number",
			"CourseId": "Unique Id"
		}

		if (URL.getParamValue(searchMode) === "") {
			allClasses = this.noSearchTerms();
		}

		return(
			<div className="pageContent">
				<Header />
				<h1 className="narrow centered centerText">{schoolName}</h1>
				<form className="wide searchbar centered" action="">
					<input id="classSearchField" className="wideSearchField" type="text" placeholder={"Search Class by " + searchModeDisplay[searchMode]} defaultValue={URL.plusToSpace(URL.getParamValue(searchMode))} name={searchMode} />
					<button type="submit"><i className="fa fa-search"></i></button>
				</form>
				<br />
				{allClasses}
				<br/><br/>
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
			</div>
		);
	}
}
export default ClassSearch;
