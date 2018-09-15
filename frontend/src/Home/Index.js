import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'

class Index extends Component {

	render() {
		return(
			<div className="pageContent">
				<Header activeTab={"index"} />
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
			</div>
		);
	}
}
export default Index;
