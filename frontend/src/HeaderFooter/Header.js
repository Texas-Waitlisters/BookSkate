import React, { Component } from 'react';
import Banner from '../assets/images/logo_banner.png'

class Header extends Component {

	render() {
		return(
			<div>
				<div className="headerContainer">
					<a href="/"><div className="logo centered"><img src={Banner} className="logo" /></div></a>
				</div>
				<div className="navbar"></div>
			</div>
		);
	}
}
export default Header;
