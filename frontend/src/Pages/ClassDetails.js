import React, { Component } from 'react';
import Header from '../HeaderFooter/Header'
import URL from '../URLHelperFunctions';

class ClassDetails extends Component {

	constructor() {
		super();
		this.state = {
			"class" : {
				"name":"Data Structures",
				"Professor": "Mike Scott",
				"course_num": "CS314",
				"Unique": "1, 2, 3, 4",
				"key": 4
			},
			"items": [
				{
					"name": "iClicker",
					"image_url": "https://www.iclicker.com/media/1140/ic-student-remotes-detail.jpg",
					"price": 30
				},
				{
					"name": "Comp Systems Textbook",
					"image_url": "https://images-na.ssl-images-amazon.com/images/I/41AoUQujOCL._SX387_BO1,204,203,200_.jpg",
					"price": 50,
					"isbn": "978-0134092669"
				}
			],
			"checked": []
		}
		for (var index = 0; index < this.state.items.length; index++) {
			this.state.checked=true;
		}
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
			var isbn = "";
			totalCost += item.price;
			if (item.isbn != undefined) {
				return (
					<div className="wide centered itemRow">
						<input className="checkbox" onClick={() => this.toggleCheckbox(index)} type="checkbox" checked={this.state.checked[index]}/>
						<div className="itemBox">
							<img className="centerText" src={item.image_url}/>
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
							<img src={item.image_url}/>
							<p>
								<strong>{item.name}</strong><br/>
								${item.price}
							</p>
						</div>
					</div>
				);
			}
			index++;
		});

		return(
			<div className="pageContent">
				<Header />
				<h1 className="wide centered centerText">{this.state.class.name}</h1>
				<h3 className="narrow centered centerText">{this.state.class.Professor}<br/>
				{this.state.class.Unique}</h3>
				{allItems}
				<h3 className="wide centered">TOTAL: ${totalCost}</h3>
				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
			</div>
		);
	}
}
export default ClassDetails;
