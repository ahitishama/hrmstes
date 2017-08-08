import React from "react";
import axios from 'axios';

export class Ticket extends React.Component{
	constructor(props) {
		super(props);
		this.state = {episodes:[]};
			
	};
	
	fetchFromServer(){

		//axios.get(`https://gist.githubusercontent.com/ahitishama/ac11a34f7f44b82f848a3eb308fb4806/raw/62b2abc17c0c529a9b92945f635426f6501bb43a/a.json`)
		axios.get(`http://localhost:1337/search/employee/`)

    .then(res => {
        
        this.setState({episodes:res.data});
    })

	}

	render(){
				
		return(
			<div>
					<ul> Employee Detail
					 {this.state.episodes.map(episode =>
					 <li key={episode.Emp_Id}>{episode.Emp_Name}</li>
					 )}
					</ul>

				<p>data={this.state.name}</p>
				<p><a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.fetchFromServer.bind(this)}>Fetch Data From Server</a></p>

			</div>
			);
	}
} 	
