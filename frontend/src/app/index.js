import React from "react";
import { render } from "react-dom";

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Section } from './components/Section';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { Ticket } from './components/Ticket';




class App extends React.Component{
		
	render(){
		var user = {
			age:20
		};
		return(
				<div>
					<div className="container-fluid">
						<Header/>
					</div>

					<div className="container-fluid">	
					<Login user={user}/>
					<Ticket/>
					</div>
					
					<div className="container-fluid">	
					<Footer/>
					</div>
				</div>
			);
	}
}

render(<App/>, window.document.getElementById("app"));