import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'

class Index extends Component {

	render() {
		return(
			<div className="pageContent">
				<Header />
				<div className="splash">
					<img src="http://publish.uwo.ca/~flagzian/images/banner.png"/>
					<div className="splash-text centered">
						<h2>WELCOME TO TOP OF THE CLASS</h2>
						<h3>Top of the Class is the best way to see how much your classes will <em>really</em> cost this semester.</h3>
						<h3>We gather data from current and previous students in the same classes to see what extra supplies they had to buy for class.</h3>
					</div>
				</div>
				<div className="splash-search">
					<h2>SEARCH FOR YOUR SCHOOL</h2>
					<form action="school.html">
						<input id="schoolSearchField" className="wide splash-searchbar" type="text" placeholder="Search for your school" name="school" />
						<button className="search"><i className="fa fa-search"></i></button>
					</form>
					</div>
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
			</div>
		);
	}
}
export default Index;
