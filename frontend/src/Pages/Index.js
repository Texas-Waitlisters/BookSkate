import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'

class Index extends Component {

	render() {
		return(
			<div className="pageContent">
				<Header />
				<form className="narrow searchbar centered" action="school.html">
					<input className="narrowSearchField" type="text" placeholder="Search for your school" name="school" />
					<button type="submit"><i className="fa fa-search"></i></button>
				</form>
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
			</div>
		);
	}
}
export default Index;
