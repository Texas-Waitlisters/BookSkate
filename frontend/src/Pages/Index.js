import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'

class Index extends Component {

	render() {
		return(
			<div className="pageContent">
				<Header />
				<div className="search-field">
					<form className="wide searchbar centered" action="school.html">
						<input id="schoolSearchField" className="wide SearchField" type="text" placeholder="Search for your school" name="school" />
						<button className="search"><i className="fa fa-search"></i></button>
					</form>
					</div>
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
			</div>
		);
	}
}
export default Index;
