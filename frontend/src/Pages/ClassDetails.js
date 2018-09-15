import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import URL from '../URLHelperFunctions';
import $ from 'jquery';

class ClassDetails extends Component {

	constructor() {
		super();
		this.state = {
			"key":URL.lastUrlItem(0),
			"class" : {},
			"items": [],
			"checked": []
		}
		for (var index = 0; index < this.state.items.length; index++) {
			this.state.checked=true;
		}
	}

	componentWillMount() {
		$.ajax({
			url: 'http://35.202.103.55/getclass?key=' + this.state.key, dataType: 'json', cache: false, 
			success: function(data) {
				var state = this.state;
				state.class = data.class;
				state.items = data.items
				this.setState(state);
			}.bind(this), error: function(xhr, status, error) {
			}
		});
	}

	toggleCheckbox(index) {
		// var state = this.state;
		// state.checked[index] = !state.checked[index];
		// this.setState = state;
	}

	render() {
		var totalCost = 0;
		var index = 0;
		let allItems = this.state.items.map(item => {
			totalCost += item.price;
			if (item.isbn !== undefined) {
				return (
					<div className="wide centered itemRow">
						<input className="checkbox" onClick={() => this.toggleCheckbox(index)} type="checkbox" checked={this.state.checked[index]}/>
						<div className="itemBox">
							<img className="centerText" src={item.image_url} alt={"Image of " + item.name}/>
							<p>
								<strong>{item.name}</strong><br/>
								ISBN: {item.isbn}<br/>
								${item.price}
							</p>
						</div>
					</div>
				);
			} else {
				return (
					<div className="wide centered itemRow">
						<input className="checkbox" onClick={() => this.toggleCheckbox(index)} type="checkbox" checked={this.state.checked[index]}/>
						<div className="itemBox">
							<img className="centerText" src={item.image_url}  alt={"Image of " + item.name}/>
							<p>
								<strong>{item.name}</strong><br/>
								${item.price}
							</p>
						</div>
					</div>
				);
			}
		});

		return(
			<div className="pageContent">
				<Header />
				<h1 className="wide centered centerText">{this.state.class.name}</h1>
				<h3 className="narrow centered centerText">{this.state.class.prof}<br/>
				{this.state.class.course_num}</h3>
				{allItems}
				<h3 className="wide centered">TOTAL: ${totalCost}</h3>
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
			</div>
		);
	}
}
export default ClassDetails;
