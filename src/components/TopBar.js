import { render } from '@testing-library/react';
import React, { Component } from 'react';
import foto from '../assets/images/jordan-walke.png';
import Cookies from 'js-cookie';

class TopBar extends Component {
    constructor() {
        super()
        this.state = {
			isUser: false,
            usuario: []

        }
    }

	componentDidMount(){
	if(Cookies.get('User')){
		fetch('http://localhost:3030/api/users/'+Cookies.get('User'))
	.then((res) => res.json())
	.then((user) => this.setState({
		usuario: user,
		isUser:true
	}))
	.catch(error => console.log(error))
	}
}
 render(){   
	
	
	return(
        <React.Fragment>

				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">
						
						{/*<!-- Nav Item - Alerts -->
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>
								
								<span className="badge badge-danger badge-counter">3+</span>
							</a>
						</li>
						*/}	

						{/*<!-- Nav Item - Messages -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/logout" id="logout">
														
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">{this.state.isUser ? 'Logout' : ''}</span>
							</a>
						</li>
					
						<div className="topbar-divider d-none d-sm-block"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">{this.state.isUser ? this.state.usuario.firstName+' '+this.state.usuario.lastName : 'No User'}</span>
								<img className="img-profile rounded-circle" src={this.state.isUser ? 'http://localhost:3030/img/users/'+this.state.usuario.imgUser : 'http://localhost:3030/img/users/default.svg'} alt="Jordan Walke - Creador de React" width="60"/>
							</a>
						</li>

					</ul>

				</nav>
	
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
}
export default TopBar;