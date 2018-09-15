import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import URL from '../URLHelperFunctions';

class ClassSearch extends Component {

	constructor() {
		super();
		this.state = {
			"classes" : [
				{
					"name":"Principles of OS",
					"Professor": "Alison Norman",
					"course_num": "CS439",
					"Unique": "1, 2, 3, 4",
					"key": 1
				},
				{
					"name":"Principles of Comp Arch",
					"Professor": "Bill Young",
					"course_num": "CS429",
					"Unique": "1, 2, 3, 4",
					"key": 2
				},
				{
					"name":"Modern Web Apps",
					"Professor": "Devdatta Kulkarni",
					"course_num": "CS373",
					"Unique": "1, 2, 3, 4",
					"key": 3
				},
				{
					"name":"Data Structures",
					"Professor": "Mike Scott",
					"course_num": "CS314",
					"Unique": "1, 2, 3, 4",
					"key": 4
				},
			]
		}
	}

	render() {
		var queryString = URL.queryString();
		var schoolName = URL.getSchoolName();
		var searchMode = queryString;
		if (searchMode.includes("=")) {
			searchMode = queryString.substring(0, queryString.indexOf("="));
		}
		var searchTerms = URL.toUrl(URL.plusToSpace(queryString));
		let allClasses = this.state.classes.map(course => {
			return (
				<a href={"/class/" + course.key} className="listBoxLink">
					<div className="wide centered listBox">
						<h3>{course.name.replace("_", " ")}</h3>
						<p>{course.course_num + " - " + course.Professor}<br/>
						{course.Unique}</p>
					</div>
				</a>
			);
		});

		return(
			<div className="pageContent">
				<Header />
				<h1 className="narrow centered centerText">{schoolName}</h1>
				<form className="wide searchbar centered" action="" onsubmit="transformUrl();">
					<input id="classSearchField" className="wideSearchField" type="text" placeholder={"Search classes by " + searchMode} defaultValue={URL.plusToSpace(URL.getParamValue(searchMode))} name={searchMode} />
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
